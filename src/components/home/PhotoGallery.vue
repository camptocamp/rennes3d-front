<script setup lang="ts">
import { reactive, onMounted } from 'vue'

import { apiClientService } from '@/services/api.client'
import type { PhotoModel } from '@/model/photos.model'
import UiPhotoGalery from '../ui/UiPhotoGalery.vue'

const state = reactive({
  photos: null as null | PhotoModel[],
})

onMounted(async () => {
  state.photos = await apiClientService.fetchPhotos()
})
</script>

<template>
  <div>
    <UiPhotoGalery> </UiPhotoGalery>
  </div>
</template>
