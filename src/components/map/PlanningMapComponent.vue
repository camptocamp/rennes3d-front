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
import { Overlay } from 'ol'
import UiLineButton from './buttons/UiLineButton.vue'
import OlNavigationButtons from './buttons/OlNavigationButtons.vue'

const planningStore = usePlanningStore()

// Create map and provide it to the descendant to avoid reactivity on map object
let map = new Map({ controls: [] })
provide('map', map)

const mapLoaded = ref(false)
const line1 = ref(null)

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

// Styles
type LineStatus =
  | 'unStarted'
  | 'underConstruction'
  | 'constructionFinished'
  | 'commisioning'

const lineStyles: Record<LineStatus, Style> = {
  unStarted: new Style({
    stroke: new Stroke({
      color: '#94A3B8', // gray-300
      width: 4,
    }),
    zIndex: 2,
  }),
  underConstruction: new Style({
    stroke: new Stroke({
      color: '#F43F5E', // rose-500
      width: 4,
    }),
    zIndex: 2,
  }),

  constructionFinished: new Style({
    stroke: new Stroke({
      color: '#FACC15', // amber-400
      width: 4,
    }),
    zIndex: 2,
  }),
  commisioning: new Style({
    stroke: new Stroke({
      color: '#65A30D', // lime-600
      width: 4,
    }),
    zIndex: 2,
  }),
}

function convertAttributeToDate(attribute: string): Date {
  // The string format is "YYYY S1" or "YYYY S2"
  const year = parseInt(attribute.split(' ')[0])
  const month = attribute.split(' ')[1] == 'S1' ? 1 : 7
  return new Date(year, month)
}

function getStyleName(feature: FeatureLike): LineStatus {
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
    return 'commisioning'
  } else if (selectedDate >= finishedDate && selectedDate < commisionedDate) {
    return 'constructionFinished'
  } else if (selectedDate >= inProgressDate && selectedDate < finishedDate) {
    return 'underConstruction'
  } else if (selectedDate < inProgressDate) {
    return 'unStarted'
  } else {
    return 'unStarted'
  }
}

function getLineNumber(feature: FeatureLike): number {
  let lineNumberString = feature.get('li_code') // e.g. T1
  return Number(lineNumberString.substr(lineNumberString.length - 1))
}

function isLineSelected(feature: FeatureLike): boolean {
  return planningStore.selectedLine == getLineNumber(feature)
}

const styleFunction: StyleFunction = function (feature: FeatureLike): Style[] {
  // No active/selected line
  if ([1, 2, 3, 4].indexOf(planningStore.selectedLine) == -1)
    return [
      lineStyles[getStyleName(feature)],
      // Border
      new Style({
        stroke: new Stroke({
          color: '#FFFFFF',
          width: 7,
        }),
        zIndex: 1,
      }),
      new Style({
        stroke: new Stroke({
          color: '#0F172A', // slate-800
          width: 9,
        }),
        zIndex: 0,
      }),
    ]

  // Neutral line style
  if (isLineSelected(feature)) {
    // Active line style
    return [
      lineStyles[getStyleName(feature)],
      // Border
      new Style({
        stroke: new Stroke({
          color: '#FFFFFF',
          width: 7,
        }),
        zIndex: 1,
      }),
      new Style({
        stroke: new Stroke({
          color: '#1E293B',
          width: 9,
        }),
        zIndex: 0,
      }),
    ]
  } else {
    // Inactive line style
    return [
      // lineStyles[getStyleName(feature)],
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
  }
}

const planningLayer = new VectorLayer({
  source: new VectorSource({
    url: 'https://public.sig.rennesmetropole.fr/geoserver/ows?service=WFS&request=getFeature&typename=trp_coll:trambus_lignes_planification&outputFormat=application/json&srsName=EPSG:4326',
    format: new GeoJSON(),
  }),
  style: styleFunction,
})

// var ComponentApp = createApp(UiLineButton)
// const wrapper = document.createElement('div')
// ComponentApp.mount(wrapper)

function addOverlay(olMap: Map, lng: number, lat: number, content: string) {
  const element = document.createElement('div')
  element.innerHTML = content // line1.value?.innerHTML
  const overlay = new Overlay({
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
  planningLayer.setStyle(styleFunction)
})

function setSelectedLine(line: number) {
  planningStore.selectedLine = line
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
</template>
