<script setup lang="ts">
import { ref } from 'vue'
import leftArrow from '@/assets/icons/arrows-left.svg'
import rightArrow from '@/assets/icons/arrows-right.svg'

const scrollBar = ref<HTMLDivElement | null>(null)
const currentScrollPosition = ref<Number>(0)

function scroll(amount: number) {
  const currentScroll = scrollBar.value?.scrollLeft || 0
  scrollBar.value?.scrollTo({
    left: currentScroll + amount,
    behavior: 'smooth',
  })

  // Getting the maximum scroll value of the scrollBar
  const maxScroll =
    (scrollBar.value?.scrollWidth || 0) - (scrollBar.value?.clientWidth || 0)

  currentScrollPosition.value = currentScrollPosition.value.valueOf() + amount
  if (currentScrollPosition.value < 0) {
    currentScrollPosition.value = 0
  } else if (currentScrollPosition.value > maxScroll) {
    currentScrollPosition.value = maxScroll
  }
}
</script>

<template>
  <div class="relative">
    <div
      ref="scrollBar"
      class="flex p-0 gap-3 items-start overflow-x-auto scrollbar-hide"
    >
      <slot></slot>
    </div>
    <button
      class="absolute z-10 bg-white w-9 h-9 shadow-lg top-1/2 left-2 transform -translate-y-1/2 rounded-lg flex items-start p-2.5"
      @click="scroll(-250)"
    >
      <img :src="leftArrow" />
    </button>
    <button
      class="absolute z-10 bg-white w-9 h-9 shadow-lg top-1/2 right-2 transform -translate-y-1/2 rounded-lg flex items-start p-2.5"
      @click="scroll(250)"
    >
      <img :src="rightArrow" />
    </button>
  </div>
</template>
