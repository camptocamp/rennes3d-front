<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import Map from 'ol/Map'
import UiOLMap from '../ui/UiOLMap.vue'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import WMTS from 'ol/source/WMTS'
import WMTSTileGrid from 'ol/tilegrid/WMTS'
import { fromLonLat, get as getProjection } from 'ol/proj'
import { getWidth } from 'ol/extent'
import GeoJSON from 'ol/format/GeoJSON'
import { Vector as VectorSource } from 'ol/source'
import { Vector as VectorLayer } from 'ol/layer'
import { Style, Stroke } from 'ol/style'
import type { StyleFunction } from 'ol/style/Style'
import type { FeatureLike } from 'ol/Feature'
import { usePlanningStore } from '@/stores/planning'
import UiPlanningLegend from '@/components/ui/UiPlanningLegend.vue'
import { Overlay } from 'ol'
import UiLineButton from './buttons/UiLineButton.vue'
import OlNavigationButtons from './buttons/OlNavigationButtons.vue'
import type { LineNumber } from '@/model/lines.model'
import * as ol_color from 'ol/color'
import { LinePlanningStateTypes } from '@/model/line-planning-state.model'

const planningStore = usePlanningStore()

// Create map and provide it to the descendant to avoid reactivity on map object
let map = new Map({ controls: [] })
provide('map', map)

const mapLoaded = ref(false)
const line1 = ref(null)
const line2 = ref(null)
const line3 = ref(null)
const line4 = ref(null)

const resolutions = []
const matrixIds = []
const proj3857 = getProjection('EPSG:3857')
const maxResolution = getWidth(proj3857!.getExtent()) / 256

for (let i = 0; i < 20; i++) {
  matrixIds[i] = 'EPSG:3857:' + i.toString()
  resolutions[i] = maxResolution / Math.pow(2, i)
}

const tileGrid = new WMTSTileGrid({
  origin: [-20037508, 20037508],
  resolutions: resolutions,
  matrixIds: matrixIds,
})

const rennesBaseMap = new TileLayer({
  source: new WMTS({
    url: 'https://public.sig.rennesmetropole.fr/geowebcache/service/wmts',
    layer: 'ref_fonds:pvci_simple_gris',
    matrixSet: 'EPSG:3857',
    format: 'image/png',
    projection: 'EPSG:3857',
    tileGrid: tileGrid,
    style: 'normal',
  }),
})

const innerWhiteStyle = new Style({
  stroke: new Stroke({
    color: '#FFFFFF',
    width: 7,
  }),
  zIndex: 1,
})

const blackBorderStyle = new Style({
  stroke: new Stroke({
    color: '#0F172A', // slate-800
    width: 9,
  }),
  zIndex: 0,
})

const lineColors: Record<LineNumber, ol_color.Color> = {
  1: ol_color.fromString('#4338CA'), // indigo-600
  2: ol_color.fromString('#DB2777'), // pink-600
  3: ol_color.fromString('#057857'), // emerald-600
  4: ol_color.fromString('#9333EA'), // purple-600
}

function activeLineBorderStyle(line: LineNumber): Style {
  return new Style({
    stroke: new Stroke({
      color: lineColors[line],
      width: 9,
    }),
    zIndex: 0,
  })
}

function lineStatusStyle(lineState: LinePlanningStateTypes): Style {
  return new Style({
    stroke: new Stroke({
      color: lineState.color,
      width: 4,
    }),
    zIndex: 2,
  })
}

const inactiveLineStyle: Style[] = [
  // Border
  new Style({
    stroke: new Stroke({
      color: '#FFFFFF',
      width: 2,
    }),
    zIndex: 1,
  }),
  new Style({
    stroke: new Stroke({
      color: '#525252', // neutral-600
      width: 4,
    }),
    zIndex: 0,
  }),
]

function convertAttributeToDate(attribute: string): Date {
  // The string format is "YYYY S1" or "YYYY S2"
  const year = parseInt(attribute.split(' ')[0])
  const month = attribute.split(' ')[1] == 'S1' ? 1 : 7
  return new Date(year, month)
}

function getState(feature: FeatureLike): LinePlanningStateTypes {
  const inProgressDate = convertAttributeToDate(
    String(feature.get('phase_travaux'))
  )
  const finishedDate = convertAttributeToDate(
    String(feature.get('phase_amenage'))
  )
  const commisionedDate = convertAttributeToDate(
    String(feature.get('phase_livre'))
  )
  const selectedDate = planningStore.getSelectedDate()

  if (selectedDate >= commisionedDate) {
    return LinePlanningStateTypes.COMMISIONING
  } else if (selectedDate >= finishedDate && selectedDate < commisionedDate) {
    return LinePlanningStateTypes.CONSTRUCTION_FINISHED
  } else if (selectedDate >= inProgressDate && selectedDate < finishedDate) {
    return LinePlanningStateTypes.UNDER_CONSTRUCTION
  } else {
    return LinePlanningStateTypes.UNSTARTED
  }
}

function getLineNumber(feature: FeatureLike): number {
  let lineNumberString = feature.get('li_code') // e.g. T1
  return Number(lineNumberString.substr(lineNumberString.length - 1))
}

function isLineSelected(feature: FeatureLike): boolean {
  return planningStore.selectedLine == getLineNumber(feature)
}

function isLinePlanningStateActivated(): boolean {
  return planningStore.selectedLineState !== null
}

function isLinePlanningStateSelected(feature: FeatureLike): boolean {
  return planningStore.isLinePlanningStateHighlighted(getState(feature))
}

const styleFunction: StyleFunction = function (feature: FeatureLike): Style[] {
  // Not on active state
  if (isLinePlanningStateActivated() && !isLinePlanningStateSelected(feature)) {
    return inactiveLineStyle
  }

  // No active/selected line
  if ([1, 2, 3, 4].indexOf(planningStore.selectedLine) == -1)
    return [
      lineStatusStyle(getState(feature)),
      // Border
      innerWhiteStyle,
      blackBorderStyle,
    ]

  // Active line style
  if (isLineSelected(feature)) {
    return [
      lineStatusStyle(getState(feature)),
      // Border
      activeLineBorderStyle(getLineNumber(feature) as LineNumber),
      innerWhiteStyle,
    ]
  }
  // Inactive line style
  else {
    return inactiveLineStyle
  }
}

const planningLayer = new VectorLayer({
  source: new VectorSource({
    url: 'https://public.sig.rennesmetropole.fr/geoserver/ows?service=WFS&request=getFeature&typename=trp_coll:trambus_lignes_planification&outputFormat=application/json&srsName=EPSG:4326',
    format: new GeoJSON(),
  }),
  style: styleFunction,
})

function addOverlay(olMap: Map, lng: number, lat: number, content: string) {
  const element = document.createElement('div')
  element.innerHTML = content
  const overlay = new Overlay({
    // TODO: Need to set the element from UiLineButton component using ref
    element: element,
    position: fromLonLat([lng, lat]),
  })
  olMap.addOverlay(overlay)
}

function setupMap() {
  map.setTarget('mapContainer')
  map.setView(
    new View({
      center: fromLonLat([-1.67, 48.101]),
      zoom: 12,
      maxZoom: 15,
      minZoom: 12,
    })
  )
  map.setLayers([rennesBaseMap, planningLayer])
  addOverlay(map, -1.67, 48.101, '<div>Overlay</div>')
  mapLoaded.value = true
}

onMounted(async () => {
  setupMap()
  console.log(`line1 ${line1.value}`)
})

planningStore.$subscribe(() => {
  console.log(planningStore.selectedLineState)
  planningLayer.setStyle(styleFunction)
})

function setSelectedLine(line: number) {
  // If the line is currently active, set the selected line to 0  to make
  // neutral state
  if (planningStore.selectedLine == line) {
    planningStore.selectedLine = 0
  } else {
    planningStore.selectedLine = line
  }
}
</script>
<template>
  <UiOLMap v-if="mapLoaded"></UiOLMap>
  <OlNavigationButtons></OlNavigationButtons>
  <div class="absolute left-10 top-10 flex flex-row gap-1">
    <UiLineButton
      ref="line1"
      :line="1"
      :chevron="false"
      :active="[2, 3, 4].indexOf(planningStore.selectedLine) == -1"
      :corner="'bl'"
      @click="setSelectedLine(1)"
    >
    </UiLineButton>
    <UiLineButton
      ref="line2"
      :line="2"
      :chevron="false"
      :active="[1, 3, 4].indexOf(planningStore.selectedLine) == -1"
      :corner="'bl'"
      @click="setSelectedLine(2)"
    >
    </UiLineButton>
    <UiLineButton
      ref="line3"
      :line="3"
      :chevron="false"
      :active="[1, 2, 4].indexOf(planningStore.selectedLine) == -1"
      :corner="'bl'"
      @click="setSelectedLine(3)"
    >
    </UiLineButton>
    <UiLineButton
      ref="line4"
      :line="4"
      :chevron="false"
      :active="[1, 2, 3].indexOf(planningStore.selectedLine) == -1"
      :corner="'bl'"
      @click="setSelectedLine(4)"
    >
    </UiLineButton>
  </div>
  <UiPlanningLegend></UiPlanningLegend>
</template>
