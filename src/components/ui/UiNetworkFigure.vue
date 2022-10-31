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
  <div class="flex flex-col items-start p-0 font-dm-sans">
    <div class="flex items-center p-0 gap-2">
      <div class="leading-8 font-bold">
        <span class="text-2xl">{{ props.figure }}</span>
        <span class="text-base leading-8">{{ props.unit }}</span>
      </div>
      <div v-if="props.icon">
        <img class="w-9 h-9" :src="props.icon" />
      </div>
    </div>
    <div class="flex items-center p-0 gap-2">
      <div class="font-normal text-sm">
        {{ props.description }}
      </div>
      <div v-if="props.moreInformation">
        <img class="w-4 h-4" :src="informationIcon" />
      </div>
    </div>
  </div>
</template>
