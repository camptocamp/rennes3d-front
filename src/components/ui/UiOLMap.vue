<script setup lang="ts">
import { ref, watch } from 'vue'
import Map from 'ol/Map'
import 'ol/ol.css'

const props = defineProps({
  map: {
    type: Map,
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
  border-top-left-radius: 1.5rem /* 24px */;
  border-top-right-radius: 1.5rem /* 24px */;
}

:deep(.ol-zoom-out) {
  border-bottom-right-radius: 1.5rem /* 24px */;
  border-bottom-left-radius: 1.5rem /* 24px */;
}
</style>
