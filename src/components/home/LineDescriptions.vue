<script setup lang="ts">
import { reactive, onMounted } from 'vue'

import { apiClientService } from '@/services/api.client'
import type { LineModel } from '@/model/lines.model'
import UiLineDescription from '../ui/UiLineDescription.vue'

const state = reactive({
  lineDescription: null as null | LineModel[],
})

onMounted(async () => {
  state.lineDescription = await apiClientService.fetchLineDescription()
})
</script>

<template>
  <div class="flex flex-col items-start p-0 gap-3">
    <UiLineDescription
      v-for="lineDescription in state.lineDescription"
      :key="lineDescription.id"
      :id="lineDescription.id"
      :name="lineDescription.name"
      :start="lineDescription.start"
      :end="lineDescription.end"
      :frequency="lineDescription.frequency"
    >
    </UiLineDescription>
  </div>
</template>
