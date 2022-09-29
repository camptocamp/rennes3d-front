<script setup lang="ts">
import NetworkFigures from '../components/home/NetworkFigures.vue'
import PhotoGallery from '../components/home/PhotoGallery.vue'
import MapComponent from '../components/map/MapComponent.vue'
import LineDescriptions from '../components/home/LineDescriptions.vue'
import TravelTimes from '../components/home/TravelTimes.vue'
</script>

<template>
  <main class="h-screen flex">
    <div class="w-72 p-4 bg-blue-300">
      <div class="">
        <NetworkFigures></NetworkFigures>
        <div><TravelTimes></TravelTimes></div>
        <div><LineDescriptions></LineDescriptions></div>
      </div>
    </div>
    <div class="flex grow relative">
      <MapComponent></MapComponent>
    </div>
    <div class="z-10 absolute inset-x-0 bottom-0">
      <PhotoGallery></PhotoGallery>
    </div>
  </main>
</template>
