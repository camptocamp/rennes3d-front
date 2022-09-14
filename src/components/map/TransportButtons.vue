<script setup lang="ts">
import { useLayersVisibilityStore } from '../../stores/layers'
import type { TransportLayers } from '../../stores/layers'
import MapButton from '../ui/MapButton.vue'

const store = useLayersVisibilityStore()

function toggleLayer(name: TransportLayers) {
  store.toggleLayer(name)
}
</script>

<template>
  <MapButton
    @click="toggleLayer('metro')"
    class=""
    :active="store.layerVisibility.metro"
  >
    metro
  </MapButton>
  <MapButton
    @click="toggleLayer('bus')"
    class=""
    :active="store.layerVisibility.bus"
  >
    bus
  </MapButton>
  <MapButton
    @click="toggleLayer('tram')"
    class=""
    :active="store.layerVisibility.tram"
  >
    tram
  </MapButton>
</template>
