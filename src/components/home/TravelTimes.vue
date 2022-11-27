<script setup lang="ts">
import { reactive, onMounted } from 'vue'

import { apiClientService } from '@/services/api.client'
import UiTravelTime from '../ui/UiTravelTime.vue'
import type { TravelTimeModel } from '@/model/travel-time.model'
import UiOverflowContainer from '../ui/UiOverflowContainer.vue'
import UiLinkPrimary from '../ui/UiLinkPrimary.vue'

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
      <UiOverflowContainer class="w-[402px]">
        <div class="flex flex-row items-start gap-2">
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
        </div>
      </UiOverflowContainer>
      <UiLinkPrimary
        :url="'https://www.camptocamp.com/en'"
        :arrowStrokeColor="'stroke-red-600'"
        :underlineColor="'bg-red-600'"
        >Voir plus</UiLinkPrimary
      >
    </div>
  </div>
</template>
