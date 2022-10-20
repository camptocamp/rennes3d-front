<script lang="ts" setup>
import UiTimeline from './UiTimeline.vue'
import { timeLineFixtures } from '../../model/timeLineItems.fixtures'

function initState() {
  return {
    items: timeLineFixtures(),
  }
}
</script>

<template>
  <Story
    title="UiTimeline"
    :layout="{
      type: 'grid',
      width: 1350,
    }"
    group="homepage"
    :init-state="initState"
  >
    <template #default="{ state }">
      <UiTimeline :items="state.items"></UiTimeline>
    </template>
  </Story>
</template>
