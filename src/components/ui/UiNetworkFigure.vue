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
  <div class="flex flex-col p-0 font-dm-sans">
    <div class="flex items-center p-0 gap-2">
      <div class="leading-8 font-bold grow text-2xl">
        {{ props.figure }}
        <span class="text-base">{{ props.unit }}</span>
      </div>
      <div v-if="props.icon">
        <img class="w-9 h-9" :src="props.icon" />
      </div>
    </div>
    <div class="flex items-center p-0">
      <div class="font-normal text-sm grow">
        {{ props.description }}
      </div>
      <div v-if="props.moreInformation">
        <img :src="informationIcon" />
      </div>
    </div>
  </div>
</template>
