<script lang="ts" setup>
import UiLinkPrimary from './UiLinkPrimary.vue'
</script>

<template>
  <Story
    title="Link Primary"
    :layout="{
      type: 'grid',
      width: 500,
    }"
    group="ui-base"
  >
    <Variant title="Default color">
      <template #default>
        <UiLinkPrimary :url="'https://www.camptocamp.com/en'" class="w-fit"
          >Voir plus</UiLinkPrimary
        >
      </template>
    </Variant>
    <Variant title="Red 600">
      <template #default>
        <UiLinkPrimary
          :url="'https://www.camptocamp.com/en'"
          class="w-fit"
          :arrowStrokeColor="'stroke-red-600'"
          :underlineColor="'bg-red-600'"
          >Voir plus</UiLinkPrimary
        >
      </template>
    </Variant>
  </Story>
</template>
