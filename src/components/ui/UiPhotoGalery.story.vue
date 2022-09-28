<script lang="ts" setup>
import UiPhotoGalery from './UiPhotoGalery.vue'

function initState() {
  return {
    galleryShown: true,
    photo1_url: String,
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
        <UiPhotoGalery :galleryShown="state.galleryShown"></UiPhotoGalery>
      </div>
    </template>
  </Story>
</template>
