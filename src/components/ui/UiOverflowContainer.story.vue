<script lang="ts" setup>
import UiOverflowContainer from './UiOverflowContainer.vue'
</script>

<template>
  <Story
    title="Overflow Container"
    :layout="{
      type: 'grid',
      width: 500,
    }"
    group="ui-base"
  >
    <Variant title="Test">
      <template #default>
        <UiOverflowContainer>
          <div class="flex flex-row items-start w-96 gap-2">
            <div class="h-10 w-80 border-2 flex-none">1</div>
            <div class="h-10 w-80 border-2 flex-none">2</div>
            <div class="h-10 w-80 border-2 flex-none">3</div>
            <div class="h-10 w-80 border-2 flex-none">4</div>
          </div>
        </UiOverflowContainer>
      </template>
    </Variant>
  </Story>
</template>
