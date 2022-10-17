<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import Map from 'ol/Map'
import UiOLMap from '../ui/UiOLMap.vue'
import View from 'ol/View'
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile'

let map: Ref<Map | undefined> = ref(undefined)

onMounted(async () => {
  // Setup map here
  map.value = new Map({
    layers: [new TileLayer({ source: new OSM() })],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
    target: 'mapContainer',
  })
})
</script>
<template>
  <UiOLMap :map="map"></UiOLMap>
</template>
