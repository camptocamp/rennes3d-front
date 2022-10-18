<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue'

import { apiClientService } from '@/services/api.client'
import type { PhotoModel } from '@/model/photos.model'
import UiPhotoGalery from '../ui/UiPhotoGalery.vue'
import { usePanelsStore } from '@/stores/panels'

const state = reactive({
  photos: null as null | PhotoModel[],
  galleryShown: Boolean,
})

const photoUrls = computed(() => {
  return state.photos?.map((p) => p.url)
})

onMounted(async () => {
  state.photos = await apiClientService.fetchPhotos()
})

const panelsStore = usePanelsStore()

function toggleGallery() {
  panelsStore.toggleGallery()
}
</script>

<template>
  <UiPhotoGalery
    :photos="photoUrls"
    :galleryShown="panelsStore.isGalleryShown"
    @toggleEvent="toggleGallery"
  >
  </UiPhotoGalery>
</template>
