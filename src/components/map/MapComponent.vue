<script setup lang="ts">
import { useLayersStore } from '@/stores/layers'
import type { VcsApp } from '@vcmap/core'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import UiMap from '../ui/UiMap.vue'
import TransportButtons from './TransportButtons.vue'
import NavigationButtons from './NavigationButtons.vue'
import mapConfig from '../../map.config.json'
import initMap from '../../services/vcmap/initMap'
import IconPlanning from '../ui/icons/IconPlanning.vue'
import UiButton from '../ui/UiButton.vue'
import { usePanelsStore } from '@/stores/panels'

let vcsApp: Ref<VcsApp | undefined> = ref(undefined)
const layerStore = useLayersStore()
const panelStore = usePanelsStore()

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

layerStore.$subscribe(() => {
  setLayerVisible('metro', layerStore.visibilities.metro)
  setLayerVisible('bus', layerStore.visibilities.bus)
  setLayerVisible('bike', layerStore.visibilities.bike)
})
</script>
<template>
  <UiMap :vcsApp="vcsApp"> </UiMap>
  <div class="absolute right-2 top-2 z-10 flex [&>*]:m-1">
    <TransportButtons></TransportButtons>
    <UiButton @click="panelStore.isPlanningViewShown = true">
      <IconPlanning />
      <span class="pl-2 font-semibold"> Planning du projet </span>
    </UiButton>
  </div>
  <NavigationButtons :vcsApp="vcsApp" />
</template>
