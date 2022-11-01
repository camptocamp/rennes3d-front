<script setup lang="ts">
import { reactive, onMounted } from 'vue'

import { apiClientService } from '@/services/api.client'
import UiNetworkFigure from '../ui/UiNetworkFigure.vue'
import UiVerticalSeparator from '../ui/UiVerticalSeparator.vue'
import type { NetworkFigureModel } from '../../model/network-figures.model'

const state = reactive({
  networkFigures: null as null | NetworkFigureModel[],
})

onMounted(async () => {
  state.networkFigures = await apiClientService.fetchNetworkFigure()
})

function getLength(networkFigures: null | NetworkFigureModel[]): Number {
  if (networkFigures == null) {
    return 0
  } else {
    return networkFigures.length
  }
}
</script>

<template>
  <div
    class="flex flex-row px-4 py-3 gap-3 bg-slate-50 border rounded-lg border-slate-100"
  >
    <template
      v-for="(networkFigure, index) in state.networkFigures"
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
        v-if="index + 1 < getLength(state.networkFigures)"
      ></UiVerticalSeparator>
    </template>
  </div>
</template>
