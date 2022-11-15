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
    <aside class="z-10 absolute">
      <SidePanel>
        <article>
          <UiTrambusTitle></UiTrambusTitle>
        </article>
        <article>
          <NetworkFigures></NetworkFigures>
        </article>
        <article>
          <TravelTimes></TravelTimes>
        </article>
        <article>
          <LineDescriptions></LineDescriptions>
        </article>
        <article>
          <UiRennesLogo></UiRennesLogo>
        </article>
      </SidePanel>
    </aside>
    <div class="grow">
      <MapComponent></MapComponent>
    </div>
    <div class="z-10 absolute inset-x-0 bottom-0 max-w-max m-auto">
      <PhotoGallery></PhotoGallery>
    </div>
    <!--Do lazy loading for planning view.
      Only render it once, and after that 'hide' the planning view so that we can keep its state and no need to load it again. -->
    <div
      class="absolute h-screen w-screen"
      v-if="panelStore.hasPlanningViewRendered"
      :class="panelStore.isPlanningViewShown ? 'z-20' : '-z-10'"
    >
      <PlanningView></PlanningView>
    </div>
  </main>
</template>
