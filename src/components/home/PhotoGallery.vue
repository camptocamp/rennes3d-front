<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue'

import { apiClientService } from '@/services/api.client'
import type { PhotoModel } from '@/model/photos.model'
import UiPhotoGalery from '../ui/UiPhotoGalery.vue'
import { usePhotosStore } from '@/stores/photos'

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

const photosStore = usePhotosStore()

function toggleGallery() {
  photosStore.toggleGallery()
}
</script>

<template>
  <div class="bg-transparent">
    <UiPhotoGalery
      :photos="photoUrls"
      :galleryShown="photosStore.isGalleryShown"
      @toggleEvent="toggleGallery"
    >
    </UiPhotoGalery>
  </div>
</template>
