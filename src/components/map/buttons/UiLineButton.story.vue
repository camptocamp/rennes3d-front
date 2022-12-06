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
        <UiLineButton :line="1" :chevron="false"></UiLineButton>
      </template>
    </Variant>
    <Variant title="T2 - Active - chevron">
      <template #default>
        <UiLineButton :line="2" :chevron="true"></UiLineButton>
      </template>
    </Variant>
    <Variant title="T3 - inactive - no chevron">
      <template #default>
        <UiLineButton :line="3" :chevron="false"></UiLineButton>
      </template>
    </Variant>
    <Variant title="T4 - inactive - chevron">
      <template #default>
        <UiLineButton :line="4" :chevron="true"></UiLineButton>
      </template>
    </Variant>
  </Story>
</template>
