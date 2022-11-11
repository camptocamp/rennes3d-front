<script lang="ts" setup>
import UiLinkMetis from './UiLinkMetis.vue'
</script>

<template>
  <Story
    title="Link Metis"
    :layout="{
      type: 'grid',
      width: 500,
    }"
    group="ui-base"
  >
    <Variant title="Test">
      <template #default>
        <UiLinkMetis>Voir plus</UiLinkMetis>
      </template>
    </Variant>
  </Story>
</template>
