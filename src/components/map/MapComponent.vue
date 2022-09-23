<script setup lang="ts">
import { useLayersStore } from '@/stores/layers'
import type { MapCollection } from '@vcmap/core'
import { onMounted } from 'vue'
import setup from '../../services/map'

defineProps({
  is3D: {
    type: Boolean,
    default: false,
  },
})
let mapCollection2D: MapCollection
// let mapCollection3D: MapCollection

const layerStore = useLayersStore()

onMounted(() => {
  setup().then((r) => {
    mapCollection2D = r.mapCollection2D
    // mapCollection3D = r.mapCollection3D
  })
})

function setLayerVisible(
  mapCollection: MapCollection,
  layerName: string,
  visible: boolean
) {
  if (visible) {
    mapCollection.layerCollection.getByKey(layerName).activate()
  } else {
    mapCollection.layerCollection.getByKey(layerName).deactivate()
  }
}
layerStore.$subscribe(() => {
  setLayerVisible(mapCollection2D, 'metro', layerStore.visibilities.metro)
  setLayerVisible(mapCollection2D, 'bus', layerStore.visibilities.bus)
  setLayerVisible(mapCollection2D, 'bike', layerStore.visibilities.bike)
})
</script>
<template>
  <div
    id="map2D"
    class="overflow-hidden flex-1 bg-black h-full"
    :class="{ hidden: is3D }"
  ></div>
  <div
    id="map3D"
    class="overflow-hidden flex-1 bg-black h-full"
    :class="{ hidden: !is3D }"
  ></div>
</template>

<style scoped>
#map2D :deep(.mapElement) {
  height: 100%;
}
#map3D :deep(.mapElement) {
  height: 100%;
}
</style>
