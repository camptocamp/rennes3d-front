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

const planningLayer = new VectorLayer({
  source: new VectorSource({
    url: 'https://gist.githubusercontent.com/ismailsunni/561f39f97f8e1a36491207a61224270c/raw/b477374024d797785eea7e9cc23d01766e3812f5/planning_rm.geojson',
    format: new GeoJSON(),
  }),
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
