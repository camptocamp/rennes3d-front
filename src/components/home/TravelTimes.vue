<script setup lang="ts">
import { reactive, onMounted } from 'vue'

import { apiClientService } from '@/services/api.client'
import UiTravelTime from '../ui/UiTravelTime.vue'
import type { TravelTimeModel } from '@/model/travel-time.model'
import UiOverflowContainer from '../ui/UiOverflowContainer.vue'

const state = reactive({
  travelTimes: null as null | TravelTimeModel[],
})

onMounted(async () => {
  state.travelTimes = await apiClientService.fetchTravelTime()
})
</script>

<template>
  <div class="flex items-center p-0 gap-2.5">
    <div class="flex flex-col items-start gap-3 pt-0 pr-9 pb-0 pl-0">
      <div class="font-dm-sans font-bold text-lg leading-6">
        Vos futurs temps de parcours
      </div>
      <UiOverflowContainer class="w-[402px] p-0 gap-3 flex items-start">
        <UiTravelTime
          class="w-72 flex-none"
          v-for="travelTime in state.travelTimes"
          :key="travelTime.line"
          :newDuration="travelTime.new"
          :oldDuration="travelTime.old"
          :lineNumber="travelTime.line"
          :startStation="travelTime.start"
          :endStation="travelTime.end"
        >
        </UiTravelTime>
      </UiOverflowContainer>
      <div class="flex items-center gap-1 pt-0 pb-1 pl-0 pr-0">
        <div class="font-dm-sans font-medium text-base">
          <a href="">Voir plus</a>
        </div>
        <!-- TODO: create the link component with the button -->
      </div>
    </div>
    <!-- TODO: Add button to scroll  -->
  </div>
</template>
