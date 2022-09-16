<script setup lang="ts">
import { reactive, onMounted } from 'vue'

import { apiClientService } from '@/services/api.client'
import UiTravelTime from '../ui/UiTravelTime.vue'
import type { TravelTimeModel } from '@/model/travel-time.model'

const state = reactive({
  travelTimes: null as null | TravelTimeModel[],
})

onMounted(async () => {
  state.travelTimes = await apiClientService.fetchTravelTime()
})
</script>

<template>
  <div class="flex flex-row">
    <UiTravelTime
      v-for="travelTime in state.travelTimes"
      :key="travelTime.line"
      :newDuration="travelTime.new"
      :oldDuration="travelTime.old"
      :line="travelTime.line"
      :startStation="travelTime.start"
      :endStation="travelTime.end"
    >
    </UiTravelTime>
  </div>
</template>
