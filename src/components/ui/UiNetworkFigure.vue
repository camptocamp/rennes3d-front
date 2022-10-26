<script setup lang="ts">
import informationIcon from '../../assets/icons/informationIcon.svg'
const props = defineProps({
  figure: Number,
  description: String,
  unit: String,
  icon: String,
  moreInformation: String,
})
</script>
<template>
  <div class="w-32 h-24 font-dm-sans">
    <div class="flex flex-row items-center p-0 gap-2 w-32 h-9">
      <div class="flex flex-row leading-8 font-bold gap-1 items-end flex-grow">
        <span class="text-2xl">{{ props.figure }}</span>
        <span class="text-base">{{ props.unit }}</span>
      </div>
      <div v-if="props.icon"><img class="w-9 h-9" :src="props.icon" /></div>
    </div>
    <div class="flex flex-row items-center p-0 gap-2 w-28 h-10">
      <div class="font-normal text-sm leading-5 text-black flex-grow">
        {{ props.description }}
      </div>
      <div v-if="props.moreInformation">
        <img class="w-4 h-4" :src="informationIcon" />
      </div>
    </div>
  </div>
</template>
