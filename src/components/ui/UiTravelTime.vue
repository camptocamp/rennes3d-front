<script setup lang="ts">
const props = defineProps({
  newDuration: Number,
  oldDuration: Number,
  lineNumber: Number,
  startStation: String,
  endStation: String,
})
</script>
<template>
  <div
    class="flex flex-row items-center px-0 py-12 gap-2.5 w-80 h-20 bg-[#EDEDED] rounded-md"
  >
    <div
      class="box-border flex flex-col justify-center items-start p-0 w-24 h-20 border-r border-[#D0D0D0] border-solid"
    >
      <div class="h-8 w-6 flex gap-1 items-baseline flex-row pl-3">
        <div class="text-sm leading-8 font-bold font-poppins">
          {{ props.newDuration }}
        </div>
        <div class="text-xs leading-4 font-medium font-poppins">min</div>
      </div>
      <div class="flex flex-col items-start h-7 w-16 pl-3">
        <div
          class="w-20 h-4 font-poppins not-italic font-medium text-xs leading-4 text-[#646464]"
        >
          au lie de {{ props.oldDuration }}
        </div>
      </div>
    </div>
    <div
      class="flex flex-row items-center px-2 py-4 w-9 h-7 bg-[#CECECE] rounded-2xl"
    >
      T{{ props.lineNumber }}
    </div>
    <div
      class="flex flex-row items-start p-0 gap-5 w-9 h-2 bg-[#61D03F] rounded origin-center rotate-90"
    >
      <div
        class="box-border w-2 h-2 bg-white border-2 border-solid border-black origin-center rotate-90 rounded-full"
      ></div>
      <div
        class="box-border w-2 h-2 bg-white border-2 border-solid border-black origin-center rotate-90 rounded-full"
      ></div>
    </div>
    <div class="flex flex-col items-start p-0 gap-1 w-28 h-12">
      <div class="flex flex-col justify-center items-start p-0 gap-1 w-28 h-12">
        <div
          class="w-28 h-5 font-poppins not-italic font-medium text-sm leading-5 text-black"
        >
          {{ props.startStation }}
        </div>
        <div
          class="w-28 h-5 font-poppins not-italic font-medium text-sm leading-5 text-black"
        >
          {{ props.endStation }}
        </div>
      </div>
    </div>
  </div>
</template>
