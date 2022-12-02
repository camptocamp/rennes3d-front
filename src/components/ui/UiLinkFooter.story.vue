<script lang="ts" setup>
import UiLinkFooter from './UiLinkFooter.vue'
</script>

<template>
  <Story
    title="Link Footer"
    :layout="{
      type: 'grid',
      width: 500,
    }"
    group="ui-base"
  >
    <template #default>
      <UiLinkFooter :url="'https://camptocamp.com'"
        >Camptocamp.com</UiLinkFooter
      >
    </template>
  </Story>
</template>
