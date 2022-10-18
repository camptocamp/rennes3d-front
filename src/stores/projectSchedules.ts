import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useProjectSchedulesStore = defineStore('projectSchedules', () => {
  const selectedDate: Ref<Date> = ref(new Date(2022, 1, 1))

  return {
    selectedDate,
  }
})
