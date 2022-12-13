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
        <div class="bg-gray-200 p-2 w-fit">
          <UiLineButton
            :line="1"
            :chevron="false"
            :active="true"
            :corner="'tl'"
          ></UiLineButton>
        </div>
      </template>
    </Variant>

    <Variant title="T2 - Active - chevron">
      <template #default>
        <div class="bg-gray-200 p-2 w-fit">
          <UiLineButton
            :line="2"
            :chevron="true"
            :active="true"
            :corner="'tr'"
          ></UiLineButton>
        </div>
      </template>
    </Variant>

    <Variant title="T3 - Active - chevron">
      <template #default>
        <div class="bg-gray-200 p-2 w-fit">
          <UiLineButton
            :line="3"
            :chevron="true"
            :active="true"
            :corner="'br'"
          ></UiLineButton>
        </div>
      </template>
    </Variant>

    <Variant title="T4 - Active - no chevron">
      <template #default>
        <div class="bg-gray-200 p-2 w-fit">
          <UiLineButton
            :line="4"
            :chevron="false"
            :active="true"
            :corner="'bl'"
          ></UiLineButton>
        </div>
      </template>
    </Variant>

    <Variant title="T1 - Inactive - chevron" class="bg-red-400">
      <template #default>
        <div class="bg-gray-200 p-2 w-fit">
          <UiLineButton
            :line="1"
            :chevron="true"
            :active="false"
            :corner="'tl'"
          ></UiLineButton>
        </div>
      </template>
    </Variant>

    <Variant title="T2 - Inactive - no chevron">
      <template #default>
        <div class="bg-gray-200 p-2 w-fit">
          <UiLineButton
            :line="2"
            :chevron="false"
            :active="false"
            :corner="'tr'"
          ></UiLineButton>
        </div>
      </template>
    </Variant>

    <Variant title="T3 - Inactive - no chevron">
      <template #default>
        <div class="bg-gray-200 p-2 w-fit">
          <UiLineButton
            :line="3"
            :chevron="false"
            :active="false"
            :corner="'br'"
          ></UiLineButton>
        </div>
      </template>
    </Variant>

    <Variant title="T4 - Inactive - chevron" class="bg-red-400">
      <template #default>
        <div class="bg-gray-200 p-2 w-fit">
          <UiLineButton
            :line="4"
            :chevron="true"
            :active="false"
            :corner="'bl'"
          ></UiLineButton>
        </div>
      </template>
    </Variant>
  </Story>
</template>
