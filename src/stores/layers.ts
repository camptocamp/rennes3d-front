import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export type TransportLayers = 'metro' | 'bus' | 'tram'
export type TransportLayersVisibility = Record<TransportLayers, boolean>

export const useLayersVisibilityStore = defineStore('layers', () => {
  const layerVisibility: Ref<TransportLayersVisibility> = ref({
    metro: false,
    bus: false,
    tram: false,
  })

  function toggleLayer(name: TransportLayers) {
    layerVisibility.value = {
      ...layerVisibility.value,
      [name]: !layerVisibility.value[name],
    }
  }
  return { layerVisibility, toggleLayer }
})
