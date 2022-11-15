<script setup lang="ts">
import PlanningMapComponent from '../components/map/PlanningMapComponent.vue'
import UiButton from '../components/ui/UiButton.vue'
import { ArrowLeftIcon } from '@heroicons/vue/20/solid'
import { usePanelsStore } from '@/stores/panels'
import TimelineController from '@/components/home/TimelineController.vue'

const panelStore = usePanelsStore()
</script>

<template>
  <main class="h-screen flex flex-col">
    <div class="h-1/6 p-4 bg-white flex flex-row gap-2 items-center">
      <div>
        <UiButton
          class="shadow-sm"
          @click="panelStore.isPlanningViewShown = false"
        >
          <ArrowLeftIcon class="w-6 h-6"></ArrowLeftIcon>
        </UiButton>
      </div>
      <div class="font-poppins font-semibold text-xl w-72">
        Planning d'aménagement du réseau trambus
      </div>
      <TimelineController> </TimelineController>
    </div>
    <div class="flex grow relative">
      <PlanningMapComponent></PlanningMapComponent>
    </div>
  </main>
</template>
