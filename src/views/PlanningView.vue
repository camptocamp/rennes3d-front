<script setup lang="ts">
import PlanningMapComponent from '../components/map/PlanningMapComponent.vue'
import UiButton from '../components/ui/UiButton.vue'
import { usePanelsStore } from '@/stores/panels'
import TimelineController from '@/components/home/TimelineController.vue'
import ChevronArrowRight from '@/assets/icons/chevron-left.svg'

const panelStore = usePanelsStore()
</script>

<template>
  <main class="h-screen flex flex-col">
    <div class="h-32 p-4 bg-white flex flex-row gap-2 items-center">
      <UiButton
        class="shadow-md rounded-lg p-2 flex gap-2.5"
        @click="panelStore.isPlanningViewShown = false"
      >
        <img :src="ChevronArrowRight" />
      </UiButton>
      <div class="font-poppins font-bold text-2xl w-80">
        Planning d’aménagement du réseau trambus
      </div>
      <TimelineController> </TimelineController>
    </div>
    <div class="flex grow relative">
      <PlanningMapComponent></PlanningMapComponent>
    </div>
  </main>
</template>
