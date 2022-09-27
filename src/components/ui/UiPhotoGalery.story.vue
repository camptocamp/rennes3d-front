<script lang="ts" setup>
import UiPhotoGalery from './UiPhotoGalery.vue'
</script>

<template>
  <Story
    title="UiPhotoGalery"
    :layout="{
      type: 'grid',
      width: 900,
    }"
    group="homepage"
  >
    <div class="bg-gray-100">
      <UiPhotoGalery></UiPhotoGalery>
    </div>
  </Story>
</template>
