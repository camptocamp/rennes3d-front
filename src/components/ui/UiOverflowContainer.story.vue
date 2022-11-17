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
            <div
              class="h-16 w-72 border-2 flex-none bg-green-400 flex justify-center items-center"
              v-for="index in 5"
              :key="index"
            >
              <div class="">{{ index }}</div>
            </div>
          </div>
        </UiOverflowContainer>
      </template>
    </Variant>
  </Story>
</template>
