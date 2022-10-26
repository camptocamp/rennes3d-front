<script setup lang="ts">
import { reactive, onMounted } from 'vue'

import { apiClientService } from '@/services/api.client'
import UiNetworkFigure from '../ui/UiNetworkFigure.vue'
import type { NetworkFigureModel } from '../../model/network-figures.model'

const state = reactive({
  networkFigures: null as null | NetworkFigureModel[],
})

onMounted(async () => {
  state.networkFigures = await apiClientService.fetchNetworkFigure()
})
</script>

<template>
  <div class="flex flex-row">
    <UiNetworkFigure
      v-for="networkFigure in state.networkFigures"
      :key="networkFigure.id"
      :figure="networkFigure.figure"
      :description="networkFigure.description"
      :unit="networkFigure.unit"
      :icon="networkFigure.icon"
      :moreInformation="networkFigure.moreInformation"
    >
    </UiNetworkFigure>
  </div>
</template>
