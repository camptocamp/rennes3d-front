<script lang="ts" setup>
import { hstEvent } from 'histoire/client'
import UiPhotoGalery from './UiPhotoGalery.vue'
import photo1 from '@/assets/photos/samples/photo1.png'
import photo2 from '@/assets/photos/samples/photo2.png'
import photo3 from '@/assets/photos/samples/photo3.png'

function initState() {
  return {
    galleryShown: true,
    photos: [photo1, photo2, photo3],
  }
}
</script>

<template>
  <Story
    title="UiPhotoGalery"
    :layout="{
      type: 'grid',
      width: 900,
    }"
    group="homepage"
    :init-state="initState"
  >
    <template #default="{ state }">
      <div class="bg-gray-100">
        <UiPhotoGalery
          :galleryShown="state.galleryShown"
          :photos="state.photos"
          @toggleEvent="hstEvent('Toggle event fired', $event)"
        ></UiPhotoGalery>
      </div>
    </template>
  </Story>
</template>
