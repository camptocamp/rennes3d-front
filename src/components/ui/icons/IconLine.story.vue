<script lang="ts" setup>
import IconLine from './IconLine.vue'
</script>

<template>
  <Story
    title="LineIcon"
    :layout="{
      type: 'grid',
      width: 200,
    }"
    group="ui-base"
  >
    <Variant title="Small">
      <template #default>
        <IconLine :line="1" :size="'s'"> </IconLine>
      </template>
    </Variant>
    <Variant title="Medium">
      <template #default>
        <IconLine :line="2" :size="'m'"> </IconLine>
      </template>
    </Variant>
    <Variant title="Large">
      <template #default>
        <IconLine :line="3" :size="'l'"> </IconLine>
      </template>
    </Variant>
    <Variant title="Extra Large">
      <template #default>
        <IconLine :line="4" :size="'xl'"> </IconLine>
      </template>
    </Variant>
  </Story>
</template>
