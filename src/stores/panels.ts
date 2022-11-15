import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const usePanelsStore = defineStore('panels', () => {
  const isGalleryShown: Ref<boolean> = ref(false)
  const isInformationPanelShown: Ref<boolean> = ref(true)
  const isPlanningViewShown: Ref<boolean> = ref(false)
  // This is used to do lazy loading on the planning view
  const isPlanningViewAlreadyShown: Ref<boolean> = ref(false)

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
    isPlanningViewShown,
    hasPlanningViewRendered: isPlanningViewAlreadyShown,
  }
})
