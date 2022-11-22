<script lang="ts" setup>
import UiLineDescriptionVue from './UiLineDescription.vue'

function initState() {
  return {
    id: 1,
    name: 'Ligne T1',
    start: 'Stade Rennais',
    end: 'Brécé',
    frequency: 7,
  }
}
</script>

<template>
  <Story
    title="UiLineDescription"
    :layout="{
      type: 'grid',
      width: 500,
    }"
    group="homepage"
    :init-state="initState"
  >
    <template #default="{ state }">
      <UiLineDescriptionVue
        :line="state.id"
        :name="state.name"
        :start="state.start"
        :end="state.end"
        :frequency="state.frequency"
      >
      </UiLineDescriptionVue>
    </template>
  </Story>
</template>
