<script setup lang="ts">
import { useLayersStore } from '../../stores/layers'
import type { TransportLayers } from '../../stores/layers'
import MapButton from '../ui/UiButton.vue'

const layerStore = useLayersStore()

function toggleLayer(name: TransportLayers) {
  layerStore.toggleLayer(name)
}
</script>

<template>
  <MapButton
    @click="toggleLayer('metro')"
    class=""
    :active="layerStore.visibilities.metro"
  >
    metro
  </MapButton>
  <MapButton
    @click="toggleLayer('bus')"
    class=""
    :active="layerStore.visibilities.bus"
  >
    bus
  </MapButton>
  <MapButton
    @click="toggleLayer('tram')"
    class=""
    :active="layerStore.visibilities.tram"
  >
    tram
  </MapButton>
</template>
