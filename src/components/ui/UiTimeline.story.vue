<script lang="ts" setup>
import UiTimeline from './UiTimeline.vue'
import { timeLineFixtures } from '../../model/timeLineItems.fixtures'

function initState() {
  return {
    items: timeLineFixtures(),
    itemsPrototype: [
      {
        semester: 1,
        year: 2025,
      },
      {
        semester: 2,
        year: 2025,
      },
      {
        semester: 1,
        year: 2026,
      },
      {
        semester: 2,
        year: 2026,
      },
      {
        semester: 1,
        year: 2027,
      },
    ],
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
  >
    <Variant title="Current" :init-state="initState">
      <template #default="{ state }">
        <UiTimeline :items="state.items"></UiTimeline>
      </template>
    </Variant>
    <Variant title="With diffrent items" :init-state="initState">
      <template #default="{ state }">
        <UiTimeline :items="state.itemsPrototype"></UiTimeline>
      </template>
    </Variant>
  </Story>
</template>
