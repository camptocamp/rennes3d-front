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
    <Variant title="Default color">
      <template #default>
        <UiLinkMetis class="w-fit">Voir plus</UiLinkMetis>
      </template>
    </Variant>
    <Variant title="Red 600">
      <template #default>
        <UiLinkMetis
          class="w-fit"
          :arrowStrokeColor="'stroke-red-600'"
          :underlineColor="'bg-red-600'"
          >Voir plus</UiLinkMetis
        >
      </template>
    </Variant>
  </Story>
</template>
