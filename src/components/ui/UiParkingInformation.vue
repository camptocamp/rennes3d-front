<script setup lang="ts">
const props = defineProps({
  name: String,
  station: String,
  address: String,
  place: Number,
})
</script>
<template>
  <div class="flex flex-row items-center px-3 py-0 gap-4 w-[402px] h-20">
    <div>Icon</div>
    <div class="flex flex-col items-start p-0 w-[270px] h-16">
      <div class="font-dm-sans font-bold text-base leading-6">
        {{ props.name }}
      </div>
      <div class="flex flex-row items-center p-0 gap-3 w-[270px] h-5">
        <div class="w-[155px] h-5 font-dm-sans font-normal text-sm leading-5">
          {{ props.station }}
        </div>
      </div>
      <div class="font-dm-sans font-normal text-xs leading-4 text-neutral-400">
        {{ props.address }}
      </div>
    </div>
    <div
      class="box-border h-[52px] flex flex-col items-start px-2 py-3 border-slate-200 rounded border-2 border-solid"
    >
      <div
        class="w-7 h-5 font-dm-sans font-bold text-sm leading-5 text-neutral-800"
      >
        {{ props.place }}
      </div>
      <div
        class="w-9 h-4 font-dm-sans font-normal text-xs leading-4 text-neutral-800"
      >
        places
      </div>
    </div>
  </div>
</template>
