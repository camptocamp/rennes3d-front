<script lang="ts" setup>
import UIPlanningLegend from './UiPlanningLegend.vue'
import { LinePlanningStateTypes } from '@/model/line-planning-state.model'

function initState() {
  return {
    items: [
      LinePlanningStateTypes.UNSTARTED,
      LinePlanningStateTypes.UNDER_CONSTRUCTION,
      LinePlanningStateTypes.CONSTRUCTION_FINISHED,
      LinePlanningStateTypes.COMMISIONING,
    ],
  }
}
</script>

<template>
  <Story
    title="UIPlanningLegend"
    :layout="{
      type: 'grid',
      width: 500,
    }"
    group="homepage"
    :init-state="initState"
  >
    <Variant title="All selected" :init-state="initState">
      <template #default="{ state }">
        <UIPlanningLegend
          :items="state.items"
          :highlighted-item-id="undefined"
        ></UIPlanningLegend>
      </template>
    </Variant>
    <Variant title="One selected" :init-state="initState">
      <template #default="{ state }">
        <UIPlanningLegend
          :items="state.items"
          :highlighted-item-id="LinePlanningStateTypes.UNSTARTED.id"
        ></UIPlanningLegend>
      </template>
    </Variant>
  </Story>
</template>
