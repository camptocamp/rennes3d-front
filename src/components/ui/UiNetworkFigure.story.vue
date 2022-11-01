<script lang="ts" setup>
import UiNetworkFigure from '../ui/UiNetworkFigure.vue'
import linesIcon from '../../assets/icons/lines.svg'

function initState() {
  return {
    figure: 128,
    description: 'Nouvelles lignes',
    unit: 'km',
    icon: linesIcon,
    moreInformation: 'something more',
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
    <Variant title="Network Figure (no info)" :init-state="initState">
      <template #default="{ state }">
        <UiNetworkFigure
          :figure="state.figure"
          :description="state.description"
          :unit="state.unit"
          :icon="state.icon"
        ></UiNetworkFigure>
      </template>
    </Variant>
    <Variant title="No Unit" :init-state="initState">
      <template #default="{ state }">
        <UiNetworkFigure
          :figure="state.figure"
          :description="state.description"
          :icon="state.icon"
        ></UiNetworkFigure>
      </template>
    </Variant>
    <Variant title="Line figure (no icon)" :init-state="initState">
      <template #default="{ state }">
        <UiNetworkFigure
          :figure="state.figure"
          :description="state.description"
          :unit="state.unit"
          :moreInformation="state.moreInformation"
        ></UiNetworkFigure>
      </template>
    </Variant>
    <Variant title="Line Figure (plain)" :init-state="initState">
      <template #default="{ state }">
        <UiNetworkFigure
          :figure="state.figure"
          :description="state.description"
        ></UiNetworkFigure>
      </template>
    </Variant>
  </Story>
</template>
