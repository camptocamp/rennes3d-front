import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useProjectSchedulesStore = defineStore('projectSchedules', () => {
  const selectedYear: Ref<number> = ref(2029)
  const selectedSemester: Ref<number> = ref(1)

  function getSelectedDate() {
    const selectedMonth = selectedSemester.value % 2 == 1 ? 1 : 7
    return new Date(selectedYear.value, selectedMonth)
  }

  return {
    getSelectedDate,
    selectedSemester,
    selectedYear,
  }
})
