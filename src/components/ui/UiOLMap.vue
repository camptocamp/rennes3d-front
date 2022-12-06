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

<style scoped>
:deep(.ol-zoom) {
  top: auto;
  bottom: 10px;
  left: auto;
  right: 10px;
  font-size: 24px;
  line-height: 32px;
  background-color: transparent;
}

:deep(.ol-zoom-in) {
  width: 48px;
  height: 48px;
}

:deep(.ol-zoom-out) {
  width: 48px;
  height: 48px;
}
</style>
