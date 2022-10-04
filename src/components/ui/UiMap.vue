<script setup lang="ts">
import { VcsApp } from '@vcmap/core'
import { ref, watch } from 'vue'

const props = defineProps({
  vcsApp: {
    type: VcsApp,
  },
})
const mapContainer = ref(null)

watch(
  () => props.vcsApp,
  () => {
    if (mapContainer.value) {
      props.vcsApp?.maps.setTarget(mapContainer.value)
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
