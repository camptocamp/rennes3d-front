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
  <div class="flex flex-col font-dm-sans">
    <div class="flex items-center p-0 gap-2">
      <div class="leading-8 grow font-bold">
        <span class="text-2xl">{{ props.figure }}</span>
        <span class="ml-1">{{ props.unit }}</span>
      </div>
      <div v-if="props.icon" class="grow-0">
        <img class="w-9 h-9" :src="props.icon" />
      </div>
    </div>
    <div class="flex items-center p-0">
      <div class="font-normal text-sm grow mr-1">
        {{ props.description }}
      </div>
      <div v-if="props.moreInformation">
        <img :src="informationIcon" />
      </div>
    </div>
  </div>
</template>
