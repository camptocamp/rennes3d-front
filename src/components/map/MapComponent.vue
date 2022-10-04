<script setup lang="ts">
import { useLayersStore } from '@/stores/layers'
import type { VcsApp } from '@vcmap/core'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import UiButton from '../ui/UiButton.vue'
import UiMap from '../ui/UiMap.vue'
import TransportButtons from './TransportButtons.vue'
import mapConfig from '../../map.config.json'
import initMap from '../../services/vcmap/initMap'

let vcsApp: Ref<VcsApp | undefined> = ref(undefined)
const layerStore = useLayersStore()

onMounted(async () => {
  vcsApp.value = await initMap(mapConfig)
})

function setLayerVisible(layerName: string, visible: boolean) {
  const layer = vcsApp.value?.maps.layerCollection.getByKey(layerName)
  if (visible) {
    layer?.activate()
  } else if (layer?.active) {
    layer.deactivate()
  }
}

function is3D(): boolean {
  return vcsApp.value?.maps.activeMap.name === 'cesium'
}

function toggleMap() {
  vcsApp.value?.maps.setActiveMap(is3D() ? 'ol' : 'cesium')
}

layerStore.$subscribe(() => {
  setLayerVisible('metro', layerStore.visibilities.metro)
  setLayerVisible('bus', layerStore.visibilities.bus)
  setLayerVisible('bike', layerStore.visibilities.bike)
})
</script>
<template>
  <UiMap :vcsApp="vcsApp"> </UiMap>
  <div class="absolute right-2 top-2 z-10">
    <TransportButtons></TransportButtons>
  </div>
  <div class="absolute right-2 bottom-2">
    <UiButton @click="toggleMap">{{ is3D() ? '2D' : '3D' }}</UiButton>
  </div>
</template>
