<script setup lang="ts">
import { MapCollection } from '@vcmap/core'
import { ref, watch } from 'vue'

const props = defineProps({
  map: {
    type: MapCollection,
  },
})
const mapContainer = ref(null)

watch(
  () => props.map,
  () => {
    if (mapContainer.value) {
      props.map?.setTarget(mapContainer.value)
    }
  }
)
</script>

<template>
  <div ref="mapContainer" class="h-full w-full"></div>
</template>
<style scoped>
:deep(.mapElement) {
  height: 100%;
}
:deep(.cesium-widget canvas) {
  overflow: hidden;
  height: 100%;
  width: 100%;
  touch-action: none;
}
:deep(.cesium-widget) {
  height: 100%;
}
</style>
