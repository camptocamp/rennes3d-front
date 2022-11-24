<script setup lang="ts">
import { useLayersStore } from '@/stores/layers'
import { CesiumMap, Context, VcsApp } from '@vcmap/core'
import { onMounted, provide, ref } from 'vue'
import mapConfig from '../../map.config.json'
import UiMap from '../ui/UiMap.vue'
import NavigationButtons from './buttons/NavigationButtons.vue'
import HeadToolbarTrambus from '@/components/map/HeadToolbarTrambus.vue'

const app = new VcsApp()
provide('vcsApp', app)

const appLoaded = ref(false)
const layerStore = useLayersStore()

onMounted(async () => {
  const context = new Context(mapConfig)
  await app.addContext(context)
  const cesiumMap = app.maps.getByKey('cesium')
  await cesiumMap?.initialize()
  if (cesiumMap && cesiumMap instanceof CesiumMap) {
    cesiumMap.getScene().globe.maximumScreenSpaceError = 1
  }
  appLoaded.value = true
})

function setLayerVisible(layerName: string, visible: boolean) {
  const layer = app.maps.layerCollection.getByKey(layerName)
  if (visible) {
    layer?.activate()
  } else if (layer?.active) {
    layer.deactivate()
  }
}

layerStore.$subscribe(() => {
  setLayerVisible('metro', layerStore.visibilities.metro)
  setLayerVisible('bus', layerStore.visibilities.bus)
  setLayerVisible('bike', layerStore.visibilities.bike)
})
</script>

<template>
  <UiMap v-if="appLoaded"></UiMap>
  <HeadToolbarTrambus></HeadToolbarTrambus>
  <NavigationButtons />
</template>
