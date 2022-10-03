<script setup lang="ts">
import { useLayersStore } from '@/stores/layers'
import type { VcsApp } from '@vcmap/core'
import { Viewpoint } from '@vcmap/core'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import UiButton from '../ui/UiButton.vue'
import UiMap from '../ui/UiMap.vue'
import TransportButtons from './TransportButtons.vue'
import mapConfig from '../../map.config.json'
import initMap from '../../services/vcmap/initMap'
import IconHome from '../ui/icons/IconHome.vue'

let vcsApp: Ref<VcsApp | undefined> = ref(undefined)
const layerStore = useLayersStore()

onMounted(async () => {
  vcsApp.value = await initMap(mapConfig)
})

async function zoom(out = false, zoomFactor = 2): Promise<void> {
  const activeMap = vcsApp.value?.maps?.activeMap
  const viewpoint = await activeMap.getViewpoint()

  if (out) {
    viewpoint.distance *= zoomFactor
  } else {
    viewpoint.distance /= zoomFactor
  }

  viewpoint.animate = true
  viewpoint.duration = 0.5
  viewpoint.cameraPosition = null

  await activeMap.gotoViewpoint(viewpoint)
}

async function returnToHome() {
  const activeMap = vcsApp.value?.maps?.activeMap
  const homeViewPoint = new Viewpoint({
    cameraPosition: [-1.67, 48.1147, 10000],
    groundPosition: [-1.67, 48.1147, 10000],
    pitch: -10,
  })

  await activeMap.gotoViewpoint(homeViewPoint)
}

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
  <div class="absolute right-4 bottom-2 flex flex-col [&>*]:m-2 text-gray-dark">
    <UiButton @click="returnToHome"><IconHome /></UiButton>
    <div
      class="flex flex-col zoom-buttons text-2xl [&>*]:p-2 first:[&>*]:rounded-b-3xl last:[&>*]:rounded-t-3xl"
    >
      <UiButton @click="() => zoom(false)">{{ '+' }}</UiButton>
      <UiButton @click="() => zoom(true)">{{ '-' }}</UiButton>
    </div>
    <UiButton class="font-semibold" @click="toggleMap">{{
      is3D() ? '2D' : '3D'
    }}</UiButton>
  </div>
</template>
