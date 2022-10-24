<script setup lang="ts">
import PhotoGallery from '../components/home/PhotoGallery.vue'
import MapComponent from '../components/map/MapComponent.vue'
import LineDescriptions from '../components/home/LineDescriptions.vue'
import TravelTimes from '../components/home/TravelTimes.vue'
import UiTrambusTitle from '../components/ui/UiTrambusTitle.vue'
import UiRennesLogo from '../components/ui/UiRennesLogo.vue'
import NetworkFigures from '../components/home/NetworkFigures.vue'
import SidePanel from '@/components/home/SidePanel.vue'
import PlanningView from './PlanningView.vue'
import { usePanelsStore } from '@/stores/panels'

const panelStore = usePanelsStore()
</script>

<template>
  <main class="h-screen flex">
    <div class="z-10 absolute">
      <SidePanel>
        <UiTrambusTitle></UiTrambusTitle>
        <NetworkFigures></NetworkFigures>
        <TravelTimes></TravelTimes>
        <LineDescriptions></LineDescriptions>
        <UiRennesLogo></UiRennesLogo>
      </SidePanel>
    </div>
    <div class="grow">
      <MapComponent></MapComponent>
    </div>
    <div class="z-10 absolute inset-x-0 bottom-0 max-w-max m-auto">
      <PhotoGallery></PhotoGallery>
    </div>
    <div
      class="absolute h-screen w-screen"
      :class="panelStore.isPlanningViewShown ? 'z-20' : '-z-10'"
    >
      <PlanningView></PlanningView>
    </div>
  </main>
</template>
