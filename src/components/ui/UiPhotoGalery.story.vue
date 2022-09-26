<script lang="ts" setup>
import UiPhotoGalery from './UiPhotoGalery.vue'
</script>

<template>
  <Story
    title="UiPhotoGalery"
    :layout="{
      type: 'grid',
      width: 500,
    }"
    group="homepage"
  >
    <UiPhotoGalery></UiPhotoGalery>
  </Story>
</template>
