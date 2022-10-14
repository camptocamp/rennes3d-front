import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const usePanelsStore = defineStore('panels', () => {
  const isGalleryShown: Ref<boolean> = ref(false)
  const isInformationPanelShown: Ref<boolean> = ref(true)

  function toggleGallery() {
    isGalleryShown.value = !isGalleryShown.value
  }
  function toggleInformationPanel() {
    isInformationPanelShown.value = !isInformationPanelShown.value
  }

  return {
    isGalleryShown,
    toggleGallery,
    isInformationPanelShown,
    toggleInformationPanel,
  }
})
