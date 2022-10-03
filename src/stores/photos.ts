import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const usePhotosStore = defineStore('photos', () => {
  const isGalleryShown: Ref<boolean> = ref(false)

  function toggleGallery() {
    isGalleryShown.value = !isGalleryShown.value
  }

  return { isGalleryShown, toggleGallery }
})
