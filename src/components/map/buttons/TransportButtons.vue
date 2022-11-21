<script setup lang="ts">
import { useLayersStore } from '../../../stores/layers'
import type { TransportLayers } from '../../../stores/layers'
import UiIconButton from '@/components/ui/UiIconButton.vue'

const layerStore = useLayersStore()

function toggleLayer(name: TransportLayers) {
  layerStore.toggleLayer(name)
}
</script>

<template>
  <UiIconButton
    @click="() => toggleLayer('metro')"
    :active="layerStore.visibilities.metro"
  >
    metro
  </UiIconButton>
  <UiIconButton
    @click="() => toggleLayer('bus')"
    :active="layerStore.visibilities.bus"
  >
    bus
  </UiIconButton>
  <UiIconButton
    @click="() => toggleLayer('bike')"
    :active="layerStore.visibilities.bike"
  >
    bike
  </UiIconButton>
</template>
