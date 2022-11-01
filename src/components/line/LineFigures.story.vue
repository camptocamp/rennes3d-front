<script lang="ts" setup>
import LineFigures from './LineFigures.vue'
</script>

<template>
  <Story
    title="LineFigure"
    :layout="{
      type: 'grid',
      width: 400,
    }"
    group="homepage"
  >
    <Variant title="Default">
      <template #default>
        <LineFigures></LineFigures>
      </template>
    </Variant>
  </Story>
</template>
