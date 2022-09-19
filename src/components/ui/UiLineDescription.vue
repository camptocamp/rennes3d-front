<script setup lang="ts">
import arrowForward from './../../assets/icons/arrow-forward.svg'
const props = defineProps({
  id: Number,
  name: String,
  start: String,
  end: String,
  frequency: Number,
})
</script>
<template>
  <div
    class="box-border flex flex-row items-center px-3 py-0 gap-4 w-96 h-20 border-b border-solid border-b-neutral-300"
  >
    <div
      class="flex flex-row items-center px-4 py-4 w-14 h-14 bg-neutral-300 rounded-2xl text-4xl"
    >
      {{ props.id }}
    </div>
    <div>
      <div
        class="w-20 h-6 font-dm-sans not-italic font-medium text-xl text-black"
      >
        {{ props.name }}
      </div>
      <div class="flex flex-row items-center p-0 gap-3 w-44 h-4">
        <div
          class="w-24 h-4 font-dm-sans font-medium text-sm leading-4 text-black"
        >
          {{ props.start }}
        </div>
        <div class="w-4 h-4">
          <img :src="arrowForward" />
        </div>
        <div
          class="w-9 h-4 font-dm-sans font-medium text-sm leading-4 text-black"
        >
          {{ props.end }}
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start p-0 w-14 h-10">
      <div class="font-dm-sans font-medium text-xs leading-4 text-black">
        Toutes les
      </div>
      <div class="font-dm-sans font-bold text-xl leading-7 text-black">
        {{ props.frequency }} min
      </div>
    </div>
  </div>
</template>
