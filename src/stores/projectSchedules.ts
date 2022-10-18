import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useProjectSchedulesStore = defineStore('projectSchedules', () => {
  const selectedYear: Ref<number> = ref(2029)
  const selectedMonth: Ref<number> = ref(1)

  function getSelectedDate() {
    return new Date(selectedYear.value, selectedMonth.value)
  }

  return {
    getSelectedDate,
    selectedMonth,
    selectedYear,
  }
})
