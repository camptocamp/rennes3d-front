<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { Ref, PropType } from 'vue'
import type { TimeLineItem } from '../../model/timeLineItems.model'

const props = defineProps({
  items: {
    type: Array as PropType<TimeLineItem[]>,
    default: () => [],
  },
  selectedIndex: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['selected-date'])

let circle: Ref<HTMLDivElement | null> = ref(null)
let container: Ref<HTMLDivElement | null> = ref(null)
let selectedIndexRef: Ref<number> = ref(0)

onMounted(() => {
  selectedIndexRef.value = props.selectedIndex
  translateCircle(selectedIndexRef.value)
})

const translateCircle = (index: number) => {
  selectedIndexRef.value = index
  const circleSize = circle.value?.getBoundingClientRect().width
  const parentSize = container.value?.getBoundingClientRect().width

  if (!circleSize || !parentSize) return

  const numberOfSections = props.items.length
  const sectionWidth = parentSize / numberOfSections

  const distance = Math.round(sectionWidth * (index + 0.5) - circleSize / 2)
  if (circle.value) {
    circle.value.style.left = `${distance}px`
  }
}

const getDate = (index: number): Date | undefined => {
  const { year, semester } = props.items[index]

  if (year && semester) {
    return new Date(year, semester * 6, 1)
  }
  return undefined
}

const toString = (timelineItem: TimeLineItem) => {
  return `Semestre ${timelineItem.semester} ${timelineItem.year}`
}

const setselectedIndex = (index: number) => {
  selectedIndexRef.value = index
  translateCircle(index)
  emit('selected-date', getDate(index))
}
</script>

<template>
  <div class="w-[78rem] h-32 bg-white relative flex text-black" ref="container">
    <div
      v-bind:key="index"
      v-for="(item, index) of items"
      class="flex-1 flex justify-center items-center relative pb-4 hover:font-medium"
    >
      <div>
        <div
          class="text-center cursor-pointer"
          v-bind:class="[selectedIndex === index ? 'font-bold' : ' ']"
          @click="() => setselectedIndex(index)"
        >
          <p>{{ toString(item) }}</p>
        </div>
      </div>
      <div
        class="h-[0.05rem] w-full mt-4 bg-gray-400 flex items-center absolute bottom-8"
        v-bind:class="[
          0 === index
            ? 'first-step w-1/2 ml-[50%] !justify-start'
            : 'justify-center',
          items.length - 1 === index
            ? 'last-step w-1/2 mr-[50%] !justify-end'
            : 'justify-center',
        ]"
      >
        <div class="h-2 w-2 bg-gray-400 rounded-full"></div>
      </div>
    </div>
    <div
      class="bottom-[calc(2rem-13px)] circle h-[30px] w-[30px] z-10 shadow border-gray-400 border-[0.2px] bg-white rounded-full absolute"
      ref="circle"
    ></div>
  </div>
</template>
<style scoped>
.circle {
  transition: 400ms;
}
</style>
