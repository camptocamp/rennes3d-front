<script lang="ts" setup>
import { LinePlanningStateTypes } from '@/model/line-planning-state.model'
import { usePlanningStore } from '@/stores/planning'
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

const isHighlighted = (lineState: LinePlanningStateTypes) => {
  return planningStore.isLinePlanningStateHighlighted(lineState)
}
</script>

<template>
  <div
    class="absolute right-8 top-8 h-44 w-48 flex flex-col bg-white rounded-lg shadow-lg"
  >
    <div
      v-for="item of items"
      :key="item.owsValue"
      @click="updateLineState(item)"
      class="flex-1 flex items-center relative hover:font-medium mx-4 cursor-pointer"
      :class="{ 'text-neutral-500': !isHighlighted(item) }"
    >
      <div
        :style="{
          borderLeft: '5px',
          borderLeftStyle: 'solid',
          borderLeftColor: isHighlighted(item)
            ? item.color
            : item.deemphasizedColor,
        }"
        class="flex shadow-lg"
      >
        &nbsp;
      </div>
      <div class="ml-3.5">{{ item.toString() }}</div>
    </div>
  </div>
</template>
