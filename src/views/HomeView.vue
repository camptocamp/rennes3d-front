<script setup lang="ts">
import NetworkFigures from '../components/home/NetworkFigures.vue'
import PhotoGallery from '../components/home/PhotoGallery.vue'
import MapComponent from '../components/map/MapComponent.vue'
import LineDescriptions from '../components/home/LineDescriptions.vue'
import TravelTimes from '../components/home/TravelTimes.vue'
import UiTrambusTitle from '../components/ui/UiTrambusTitle.vue'
</script>

<template>
  <main class="h-screen flex">
    <div class="w-96 p-4 bg-blue-300 flex flex-col">
      <UiTrambusTitle></UiTrambusTitle>
      <NetworkFigures></NetworkFigures>
      <TravelTimes></TravelTimes>
      <LineDescriptions></LineDescriptions>
    </div>
    <div class="flex grow relative">
      <MapComponent></MapComponent>
    </div>
    <div class="z-10 absolute inset-x-0 bottom-0 max-w-max m-auto">
      <PhotoGallery></PhotoGallery>
    </div>
  </main>
</template>
