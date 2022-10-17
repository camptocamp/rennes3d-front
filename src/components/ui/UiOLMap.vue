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
