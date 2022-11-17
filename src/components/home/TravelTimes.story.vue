<script lang="ts" setup>
import TravelTimes from './TravelTimes.vue'
</script>

<template>
  <Story
    title="TravelTime"
    :layout="{
      type: 'grid',
      width: 500,
    }"
    group="sidepanel"
  >
    <template #default>
      <TravelTimes></TravelTimes>
    </template>
  </Story>
</template>
