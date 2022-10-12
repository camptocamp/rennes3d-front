<script lang="ts" setup>
import UiTimeline from './UiTimeline.vue'

function initState() {
  return {
    keydates: [
      {
        name: 'Semestre 1',
        year: 2025,
      },
      {
        name: 'Semestre 2',
        year: 2025,
      },
      {
        name: 'Semestre 1',
        year: 2026,
      },
      {
        name: 'Semestre 2',
        year: 2026,
      },
      {
        name: 'Semestre 1',
        year: 2027,
      },
      {
        name: 'Semestre 2',
        year: 2027,
      },
      {
        name: 'Semestre 1',
        year: 2028,
      },
      {
        name: 'Semestre 2',
        year: 2028,
      },
      {
        name: 'Semestre 1',
        year: 2029,
      },
      {
        name: 'Semestre 2',
        year: 2029,
      },
      {
        name: 'Semestre 1',
        year: 2030,
      },
      {
        name: 'Semestre 2',
        year: 2030,
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
    :init-state="initState"
  >
    <template #default="{ state }">
      <UiTimeline :keydates="state.keydates"></UiTimeline>
    </template>
  </Story>
</template>
