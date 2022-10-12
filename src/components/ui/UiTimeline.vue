<script lang="ts" setup>
import { ref, Ref } from '@vue/reactivity'

type KeyDateType = {
  name: string
  year: number
}

const props = defineProps({
  keydates: {
    default: [],
  },
})

let circle: Ref<HTMLDivElement | undefined> = ref(undefined)
let currentActive: Ref<number | undefined> = ref(2)

const translateCircle = (index: number) => {
  currentActive.value = index
  const ballSize = 30
  const parentSize = 1250
  const numberOfSections = props.keydates.length
  const sectionWidth = parentSize / numberOfSections

  const distance = sectionWidth * (index + 0.5) - ballSize / 2
  circle.value.style.left = `${distance}px`
}

const setCurrentActive = (index: number) => {
  currentActive.value = index
  translateCircle(index)
}
</script>

<template>
  <div class="container" @click="test">
    <div v-bind:key="index" v-for="(keydate, index) of keydates">
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
        class="line"
        v-bind:class="[
          0 === index ? 'first' : ' ',
          keydates.length - 1 === index ? 'last' : '',
        ]"
      >
        <div class="step"></div>
      </div>
    </div>
    <div class="circle" ref="circle"></div>
  </div>
</template>
<style scoped>
.container {
  height: 8rem;
  width: 1250px;
  background-color: white;
  color: black;
  display: flex;
  position: relative;
}

.container > * {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-bottom: 1rem;
}

.test > *:hover {
  font-weight: 500;
}

.line {
  height: 0.05rem;
  width: 100%;
  margin-top: 1rem;
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2rem;
}

.step {
  height: 8px;
  width: 8px;
  background: #adadad;
  border-radius: 100%;
}

.first {
  width: 50%;
  margin-left: 50%;
  justify-content: start;
}

.last {
  width: 50%;
  margin-right: 50%;
  justify-content: end;
}

.circle {
  height: 30px;
  width: 30px;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 0.2px solid #adadad;
  background: white;
  border-radius: 100%;
  position: absolute;
  bottom: calc(2rem - 13px);
  transition: 400ms;
}
</style>
