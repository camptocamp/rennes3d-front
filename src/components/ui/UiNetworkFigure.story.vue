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
  >
    <Variant title="Full Information" :init-state="initState">
      <template #default="{ state }">
        <UiNetworkFigure
          :figure="state.figure"
          :description="state.description"
          :unit="state.unit"
        ></UiNetworkFigure>
      </template>
    </Variant>
    <Variant title="No Unit" :init-state="initState">
      <template #default="{ state }">
        <UiNetworkFigure
          :figure="state.figure"
          :description="state.description"
        ></UiNetworkFigure>
      </template>
    </Variant>
  </Story>
</template>
