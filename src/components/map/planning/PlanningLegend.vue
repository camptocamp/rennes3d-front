<script lang="ts" setup>
import { LinePlanningStateTypes } from '@/model/line-planning-state.model'
import { usePlanningStore } from '@/stores/planning'
import UiPlanningLegend from '@/components/ui/UiPlanningLegend.vue'
const planningStore = usePlanningStore()

let items = [
  LinePlanningStateTypes.UNSTARTED,
  LinePlanningStateTypes.UNDER_CONSTRUCTION,
  LinePlanningStateTypes.CONSTRUCTION_FINISHED,
  LinePlanningStateTypes.COMMISIONING,
]

const updateLineState = (lineState: LinePlanningStateTypes) => {
  planningStore.setLinePlanningState(lineState)
}

function getHighlightedItemId() {
  return planningStore.getHighlightedId()
}
</script>

<template>
  <UiPlanningLegend
    :items="items"
    :highlighted-item-id="getHighlightedItemId()"
    @update-line-planning-state="updateLineState"
    class="absolute right-8 top-8"
  ></UiPlanningLegend>
</template>
