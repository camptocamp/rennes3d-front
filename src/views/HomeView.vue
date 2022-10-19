<script setup lang="ts">
import PhotoGallery from '../components/home/PhotoGallery.vue'
import MapComponent from '../components/map/MapComponent.vue'
import InformationPanel from '../components/home/InformationPanel.vue'
import PlanningView from './PlanningView.vue'
</script>

<template>
  <main class="h-screen flex">
    <div class="w-1/4 z-10 absolute">
      <InformationPanel></InformationPanel>
    </div>
    <div class="flex grow relative">
      <MapComponent></MapComponent>
    </div>
    <div class="z-10 absolute inset-x-0 bottom-0 max-w-max m-auto">
      <PhotoGallery></PhotoGallery>
    </div>
    <div class="z-20 h-screen w-screen">
      <PlanningView></PlanningView>
    </div>
  </main>
</template>
