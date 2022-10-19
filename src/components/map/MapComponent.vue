<script setup lang="ts">
import { useLayersStore } from '@/stores/layers'
import { usePanelsStore } from '@/stores/panels'
import { CesiumMap, Context, VcsApp } from '@vcmap/core'
import { onMounted, provide, ref } from 'vue'
import mapConfig from '../../map.config.json'
import IconPlanning from '../ui/icons/IconPlanning.vue'
import UiButton from '../ui/UiButton.vue'
import UiMap from '../ui/UiMap.vue'
import NavigationButtons from './NavigationButtons.vue'
import TransportButtons from './TransportButtons.vue'

const app = new VcsApp()
provide('vcsApp', app)

const appLoaded = ref(false)
const layerStore = useLayersStore()
const panelStore = usePanelsStore()

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

function onPlanningButtonClicked() {
  panelStore.isPlanningViewShown = true
  panelStore.hasPlanningViewRendered = true
}
</script>

<template>
  <UiMap v-if="appLoaded"> </UiMap>
  <div class="absolute right-2 top-2 z-10 flex [&>*]:m-1">
    <TransportButtons></TransportButtons>
    <UiButton @click="onPlanningButtonClicked">
      <IconPlanning />
      <span class="pl-2 font-semibold"> Planning du projet </span>
    </UiButton>
  </div>
  <NavigationButtons />
</template>
