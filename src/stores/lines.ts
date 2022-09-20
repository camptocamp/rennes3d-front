import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useLinesStore = defineStore('lines', () => {
  const selectedLine: Ref<String> = ref('')

  function selectLine(line: String) {
    selectedLine.value = line
  }

  return { selectLine, selectedLine }
})
