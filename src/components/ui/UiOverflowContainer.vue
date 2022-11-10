<script setup lang="ts">
import { ref } from 'vue'

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
  console.log(currentScrollPosition.value)
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
      class="absolute inset-y-0 right-0 bg-blue-600 w-6 h-6"
      @click="scroll(200)"
    >
      R
    </button>
    <button
      class="absolute inset-y-0 left-0 bg-blue-600 w-6 h-6"
      @click="scroll(-200)"
    >
      L
    </button>
  </div>
</template>
