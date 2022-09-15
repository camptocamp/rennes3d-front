<script lang="ts" setup>
import UiNetworkFigure from '../ui/UiNetworkFigure.vue'

function initState() {
  return {
    figure: 128,
    description: 'New lines',
    unit: 'km',
  }
}
</script>

<template>
  <Story
    title="UiNetworkFigure"
    :layout="{
      type: 'grid',
      width: 200,
    }"
    group="homepage"
    :init-state="initState"
  >
    <template #default="{ state }">
      <UiNetworkFigure
        :figure="state.figure"
        :description="state.description"
        :unit="state.unit"
      ></UiNetworkFigure>
    </template>
  </Story>
</template>
