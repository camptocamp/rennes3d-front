<script lang="ts" setup>
import UiLineButton from './UiLineButton.vue'
</script>

<template>
  <Story
    title="Line Buttons"
    :layout="{
      type: 'grid',
      width: 200,
    }"
    group="ui-base"
  >
    <Variant title="T1 - Active - no chevron">
      <template #default>
        <UiLineButton :line="1" :chevron="false" :active="true"></UiLineButton>
      </template>
    </Variant>
    <Variant title="T2 - Active - chevron">
      <template #default>
        <UiLineButton :line="2" :chevron="true" :active="true"></UiLineButton>
      </template>
    </Variant>
    <Variant title="T3 - Inactive - no chevron">
      <template #default>
        <UiLineButton :line="3" :chevron="false" :active="false"></UiLineButton>
      </template>
    </Variant>
    <Variant title="T4 - Inactive - chevron">
      <template #default>
        <UiLineButton :line="4" :chevron="true" :active="false"></UiLineButton>
      </template>
    </Variant>
  </Story>
</template>
