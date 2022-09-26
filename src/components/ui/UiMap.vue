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
  <div ref="mapContainer" class="h-full w-full" id="myapp"></div>
</template>
<style scoped>
:deep(.mapElement) {
  height: 100%;
}
</style>
