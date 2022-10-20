<script lang="ts" setup>
import { ref, Ref } from 'vue'

const props = defineProps({
  keydates: {
    default: [],
  },
})

const emit = defineEmits(['current-date'])

let circle: Ref<HTMLDivElement | undefined> = ref(undefined)
let container: Ref<HTMLDivElement | undefined> = ref(undefined)
let currentActive: Ref<number | undefined> = ref(2)

const translateCircle = (index: number) => {
  currentActive.value = index
  const circleSize = circle.value.getBoundingClientRect().width
  const parentSize = container.value.getBoundingClientRect().width
  const numberOfSections = props.keydates.length
  const sectionWidth = parentSize / numberOfSections

  const distance = Math.round(sectionWidth * (index + 0.5) - circleSize / 2)
  circle.value.style.left = `${distance}px`
}

const getDate = (index: number): Date | undefined => {
  const { year, month } = props.keydates[index]

  if (year && month) {
    return new Date(year, month, 1)
  }
  return undefined
}

const setCurrentActive = (index: number) => {
  currentActive.value = index
  translateCircle(index)
  emit('current-date', getDate(index))
}
</script>

<template>
  <div
    class="w-[78rem] h-32 bg-white relative flex text-black"
    ref="container"
  >
    <div
      v-bind:key="index"
      v-for="(keydate, index) of keydates"
      class="flex-1 flex justify-center items-center relative pb-4 hover:font-medium"
    >
      <div>
        <div
          class="text-center cursor-pointer"
          v-bind:class="[currentActive === index ? 'font-bold' : ' ']"
          @click="() => setCurrentActive(index)"
        >
          <p>{{ keydate.name }}</p>
          <p>{{ keydate.year }}</p>
        </div>
      </div>
      <div
        class="h-[0.05rem] w-full mt-4 bg-gray-400 flex items-center absolute bottom-8"
        v-bind:class="[
          0 === index
            ? 'first-step w-1/2 ml-[50%] !justify-start'
            : 'justify-center',
          keydates.length - 1 === index
            ? 'last-step w-1/2 mr-[50%] !justify-end'
            : 'justify-center',
        ]"
      >
        <div class="h-[8px] w-[8px] bg-gray-400 rounded-full"></div>
      </div>
    </div>
    <div
      class="circle h-[30px] w-[30px] z-10 shadow border-gray-400 border-[0.2px] bg-white rounded-full absolute"
      ref="circle"
    ></div>
  </div>
</template>
<style scoped>
.circle {
  bottom: calc(2rem - 13px);
  transition: 400ms;
}
</style>
