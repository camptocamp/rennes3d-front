<script setup lang="ts">
import { useLayersStore } from '@/stores/layers'
import type { MapCollection } from '@vcmap/core'
import { onMounted, Ref, ref } from 'vue'
import { prepareContext } from '../../services/vcmap/context'
import UiMap from '../ui/UiMap.vue'
import TransportButtons from './TransportButtons.vue'

let mapCollection: Ref<MapCollection | null> = ref(null)
const layerStore = useLayersStore()

onMounted(async () => {
  mapCollection.value = await prepareContext()
})

function setLayerVisible(layerName: string, visible: boolean) {
  if (visible) {
    mapCollection.value?.layerCollection.getByKey(layerName).activate()
  } else {
    mapCollection.value?.layerCollection.getByKey(layerName).deactivate()
  }
}
layerStore.$subscribe(() => {
  setLayerVisible('metro', layerStore.visibilities.metro)
  setLayerVisible('bus', layerStore.visibilities.bus)
  setLayerVisible('bike', layerStore.visibilities.bike)
})
</script>
<template>
  <UiMap :map="mapCollection"> </UiMap>
  <div class="absolute right-2 top-2 z-10">
    <TransportButtons></TransportButtons>
  </div>
</template>
