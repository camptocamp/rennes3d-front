<script setup lang="ts">
import UiTimeline from '@/components/ui/UiTimeline.vue'
import { timeLineFixtures } from '@/model/timeLineItems.fixtures'
import { usePlanningStore } from '@/stores/planning'
import { computed } from 'vue'

const planningStore = usePlanningStore()

const timeLineItems = timeLineFixtures()
const updateDate = (date: Date) => {
  planningStore.setDate(date)
}

const selectedIndex = computed(() => {
  const selectedDate = planningStore.getSelectedDate()
  const year = selectedDate.getUTCFullYear()
  // + 1 here because getUTCMonth is 0-based index (0 = January)
  const semester = selectedDate.getUTCMonth() + 1 < 7 ? 1 : 2
  for (let index = 0; index < timeLineItems.length; index++) {
    if (
      timeLineItems.at(index)?.semester == semester &&
      timeLineItems.at(index)?.year == year
    )
      return index
  }
  return 0
})
</script>
<template>
  <UiTimeline
    :items="timeLineItems"
    @selected-date="updateDate"
    :selected-index="selectedIndex"
  ></UiTimeline>
</template>
