<script lang="ts" setup>
import UiTravelTime from './UiTravelTime.vue'

function initState() {
  return {
    newDuration: 15,
    oldDuration: 40,
    lineNumber: 1,
    startStation: 'JF Kennedy',
    endStation: 'Brécé',
  }
}
</script>

<template>
  <Story
    title="UiTravelTime"
    :layout="{
      type: 'grid',
      width: 400,
    }"
    group="homepage"
    :init-state="initState"
  >
    <template #default="{ state }">
      <UiTravelTime
        :newDuration="state.newDuration"
        :oldDuration="state.oldDuration"
        :lineNumber="state.lineNumber"
        :startStation="state.startStation"
        :endStation="state.endStation"
        class="w-72 h-16"
      >
      </UiTravelTime>
    </template>
  </Story>
</template>
