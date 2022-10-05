<script setup lang="ts">
import { useLayersStore } from '@/stores/layers'
import { VcsApp, Context, Viewpoint } from '@vcmap/core'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import UiButton from '../ui/UiButton.vue'
import UiMap from '../ui/UiMap.vue'
import TransportButtons from './TransportButtons.vue'
import mapConfig from '../../map.config.json'

let vcsApp: Ref<VcsApp | undefined> = ref(undefined)
const context = new Context(mapConfig)

const layerStore = useLayersStore()

onMounted(async () => {
  vcsApp.value = new VcsApp()
  await vcsApp.value.addContext(context)

  // Temporary fix until we fix it from the map.config.json
  const startingViewPoint = new Viewpoint({
    cameraPosition: [-1.67, 48.1147, 20],
    groundPosition: [-1.67, 48.1147, 20],
    pitch: -10,
    distance: 10000,
  })
  await vcsApp?.value?.maps.activeMap.gotoViewpoint(startingViewPoint)
})

function setLayerVisible(layerName: string, visible: boolean) {
  const layer = vcsApp?.value?.maps.layerCollection.getByKey(layerName)
  if (visible) {
    layer?.activate()
  } else if (layer?.active) {
    layer.deactivate()
  }
}

function is3D(): boolean {
  return vcsApp?.value?.maps.activeMap.name === 'cesium'
}

function toggleMap() {
  vcsApp?.value?.maps.setActiveMap(is3D() ? 'ol3' : 'cesium')
}

layerStore.$subscribe(() => {
  setLayerVisible('metro', layerStore.visibilities.metro)
  setLayerVisible('bus', layerStore.visibilities.bus)
  setLayerVisible('bike', layerStore.visibilities.bike)
})
</script>
<template>
  <UiMap :map="vcsApp?.maps"> </UiMap>
  <div class="absolute right-2 top-2 z-10">
    <TransportButtons></TransportButtons>
  </div>
  <div class="absolute right-2 bottom-2">
    <UiButton @click="toggleMap">{{ is3D() ? '2D' : '3D' }}</UiButton>
  </div>
</template>
