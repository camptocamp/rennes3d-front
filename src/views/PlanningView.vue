<script setup lang="ts">
import PlanningMapComponent from '../components/map/PlanningMapComponent.vue'
import UiButton from '../components/ui/UiButton.vue'
import Timeline from '../components/ui/UiTimeline.vue'
import { ArrowLeftIcon } from '@heroicons/vue/20/solid'
import { usePanelsStore } from '@/stores/panels'
import { timeLineFixtures } from '../model/timeLineItems.fixtures'
import { usePlanningStore } from '@/stores/planning'

const panelStore = usePanelsStore()

const planningStore = usePlanningStore()

const timeLineItems = timeLineFixtures()
const updateDate = (date: Date) => {
  planningStore.setDate(date)
}
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
        Planning d’aménagement du réseau trambus
      </div>
      <div><Timeline :items="timeLineItems" @current-date="updateDate" /></div>
    </div>
    <div class="flex grow relative">
      <PlanningMapComponent></PlanningMapComponent>
    </div>
  </main>
</template>
