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
import type { Feature } from 'ol'

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
const styles: { [styleName: string]: Style } = {
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

function getStyleName(feature: Feature): string {
  // TODO: Do it better, and compare with the selected time
  const property = String(feature.getProperties()['en_cours_t'])
  if (property.startsWith('2025')) {
    return 'commisioning'
  }
  if (property.startsWith('2026')) {
    return 'constructionFinished'
  }
  if (property.startsWith('2027')) {
    return 'constructionFinished'
  }
  if (property.startsWith('2028')) {
    return 'underConstruction'
  }
  if (property.startsWith('2029')) {
    return 'underConstruction'
  }
  if (property.startsWith('2030')) {
    return 'unStarted'
  }
  return 'unStarted'
}

const styleFunction = function (feature: Feature): Style {
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
      center: fromLonLat([-1.67, 48.1147]),
      zoom: 13,
    }),
    target: 'mapContainer',
  })
})
</script>
<template>
  <UiOLMap :map="map"></UiOLMap>
</template>
