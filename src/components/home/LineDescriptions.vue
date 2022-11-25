<script setup lang="ts">
import { reactive, onMounted } from 'vue'

import { apiClientService } from '@/services/api.client'
import type { LineModel } from '@/model/lines.model'
import UiLineDescription from '../ui/UiLineDescription.vue'
import { useLinesStore } from '@/stores/lines'

const state = reactive({
  lineDescription: null as null | LineModel[],
})

onMounted(async () => {
  state.lineDescription = await apiClientService.fetchLineDescription()
})

const lineStore = useLinesStore()

function selectLine(line: String) {
  lineStore.selectLine(line)
}
</script>

<template>
  <div class="flex flex-col p-0 gap-2">
    <div class="font-dm-sans font-bold text-lg leading-6">
      Les nouvelles lignes
    </div>
    <div class="flex flex-col p-0 gap-2 grow">
      <UiLineDescription
        v-for="lineDescription in state.lineDescription"
        :key="lineDescription.id"
        :line="lineDescription.id"
        :name="lineDescription.name"
        :start="lineDescription.start"
        :end="lineDescription.end"
        :frequency="lineDescription.frequency"
        v-on:click="selectLine(lineDescription.name)"
      >
      </UiLineDescription>
    </div>
  </div>
</template>
