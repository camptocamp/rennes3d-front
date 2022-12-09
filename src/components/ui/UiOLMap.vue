<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import type Map from 'ol/Map'
import 'ol/ol.css'

const mapContainer = ref(null)

onMounted(async () => {
  if (mapContainer.value) {
    const map = inject('map') as Map
    map.setTarget(mapContainer.value)
  }
})
</script>

<template>
  <div ref="mapContainer" class="h-full w-full bg-gray-100"></div>
</template>
