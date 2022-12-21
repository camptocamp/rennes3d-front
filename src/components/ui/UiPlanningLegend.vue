<script lang="ts" setup>
import type { PropType } from 'vue'
import type { LinePlanningStateTypes } from '@/model/line-planning-state.model'

const props = defineProps({
  items: {
    type: Array as PropType<LinePlanningStateTypes[]>,
    default: () => [],
  },
  highlightedItemId: String,
})

const emit = defineEmits(['update-line-planning-state'])

const setLinePlanningState = (item: LinePlanningStateTypes) => {
  emit('update-line-planning-state', item)
}

function isHighlighted(item: LinePlanningStateTypes): boolean {
  return props.highlightedItemId == null || props.highlightedItemId == item.id
}
</script>

<template>
  <div class="h-44 w-48 flex flex-col bg-white rounded-lg shadow-lg">
    <div
      v-for="item of items"
      :key="item.id"
      @click="setLinePlanningState(item)"
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
      <div class="ml-3.5">{{ item.printValue }}</div>
    </div>
  </div>
</template>
