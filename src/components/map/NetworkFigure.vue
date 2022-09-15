<script setup lang="ts">
import { networkFiguresFixtures } from '@/model/network-figures.fixtures'
import UiNetworkFigure from '../ui/UiNetworkFigure.vue'

const networkFigures = networkFiguresFixtures()
</script>

<template>
  <div class="flex flex-row">
    <UiNetworkFigure
      v-for="networkFigure in networkFigures"
      :key="networkFigure.id"
      :figure="networkFigure.figure"
      :description="networkFigure.description"
      :unit="networkFigure.unit"
    >
    </UiNetworkFigure>
  </div>
</template>
