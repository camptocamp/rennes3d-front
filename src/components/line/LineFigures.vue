<script setup lang="ts">
import { reactive, onMounted } from 'vue'

import { apiClientService } from '@/services/api.client'
import UiNetworkFigure from '../ui/UiNetworkFigure.vue'
import UiVerticalSeparator from '../ui/UiVerticalSeparator.vue'
import type { LineFigureModel } from '../../model/line-figures.model'

const state = reactive({
  lineFigures: null as null | LineFigureModel[],
})

onMounted(async () => {
  state.lineFigures = await apiClientService.fetchLineFigure()
})

function getLength(networkFigures: null | LineFigureModel[]): Number {
  if (networkFigures == null) {
    return 0
  } else {
    return networkFigures.length
  }
}
</script>

<template>
  <div class="flex flex-row px-4 py-3 gap-3">
    <template
      v-for="(networkFigure, index) in state.lineFigures"
      :key="networkFigure.id"
    >
      <UiNetworkFigure
        :figure="networkFigure.figure"
        :description="networkFigure.description"
        :unit="networkFigure.unit"
        :icon="networkFigure.icon"
        :moreInformation="networkFigure.moreInformation"
        class="w-28 h-20"
      >
      </UiNetworkFigure>
      <UiVerticalSeparator
        v-if="index + 1 < getLength(state.lineFigures)"
      ></UiVerticalSeparator>
    </template>
  </div>
</template>
