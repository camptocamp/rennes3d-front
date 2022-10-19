<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
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
import { useProjectSchedulesStore } from '@/stores/projectSchedules'

const projectSchedulesStore = useProjectSchedulesStore()

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
const styles: Record<string, Style> = {
  unStarted: new Style({
    stroke: new Stroke({
      color: '#000000',
      width: 3,
      lineDash: [5],
    }),
  }),
  underConstruction: new Style({
    stroke: new Stroke({
      color: '#D7191C',
      width: 3,
    }),
  }),
  constructionFinished: new Style({
    stroke: new Stroke({
      color: '#FDBF6F',
      width: 3,
    }),
  }),
  commisioning: new Style({
    stroke: new Stroke({
      color: '#04B200',
      width: 3,
    }),
  }),
}

function convertAttributeToDate(attribute: string): Date {
  // The string format is "YYYY S1" or "YYYY S2"
  const year = parseInt(attribute.split(' ')[0])
  const month = attribute.split(' ')[1] == 'S1' ? 1 : 7
  return new Date(year, month)
}

function getStyleName(feature: FeatureLike): string {
  const inProgressDate = convertAttributeToDate(
    String(feature.get('en_cours_t'))
  )
  const finishedDate = convertAttributeToDate(
    String(feature.getProperties()['amenage_t'])
  )
  const commisionedDate = convertAttributeToDate(
    String(feature.getProperties()['livre_t'])
  )

  if (projectSchedulesStore.getSelectedDate() >= commisionedDate) {
    return 'commisioning'
  } else if (
    projectSchedulesStore.getSelectedDate() >= finishedDate &&
    projectSchedulesStore.getSelectedDate() < commisionedDate
  ) {
    return 'constructionFinished'
  } else if (
    projectSchedulesStore.getSelectedDate() >= inProgressDate &&
    projectSchedulesStore.getSelectedDate() < finishedDate
  ) {
    return 'underConstruction'
  } else if (projectSchedulesStore.getSelectedDate() < inProgressDate) {
    return 'unStarted'
  } else {
    return 'unStarted'
  }
}

const styleFunction: StyleFunction = function (feature: FeatureLike): Style {
  return styles[getStyleName(feature)]
}

const planningLayer = new VectorLayer({
  source: new VectorSource({
    url: 'https://gist.githubusercontent.com/ismailsunni/561f39f97f8e1a36491207a61224270c/raw/b477374024d797785eea7e9cc23d01766e3812f5/planning_rm.geojson',
    format: new GeoJSON(),
  }),
  style: styleFunction,
})

let map: Ref<Map | undefined> = ref(undefined)

onMounted(async () => {
  // Setup map here
  map.value = new Map({
    layers: [rennesBaseMap, planningLayer],
    view: new View({
      center: fromLonLat([-1.67, 48.101]),
      zoom: 12.5,
    }),
    target: 'mapContainer',
  })
})
projectSchedulesStore.$subscribe(() => {
  planningLayer.setStyle(styleFunction)
})
</script>
<template>
  <UiOLMap :map="map"></UiOLMap>
</template>