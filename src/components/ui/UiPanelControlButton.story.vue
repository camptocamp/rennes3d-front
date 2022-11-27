<script lang="ts" setup>
import UiPanelControlButton from './UiPanelControlButton.vue'
</script>

<template>
  <Story
    title="Panel Control Button"
    :layout="{
      type: 'grid',
      width: 500,
    }"
    group="ui-base"
  >
    <Variant title="Attached to Left - Open">
      <template #default>
        <UiPanelControlButton
          :isOpen="true"
          :anchor-position="'left'"
        ></UiPanelControlButton>
      </template>
    </Variant>
    <Variant title="Attached to Left - Closed">
      <template #default>
        <UiPanelControlButton
          :isOpen="false"
          :anchor-position="'left'"
        ></UiPanelControlButton>
      </template>
    </Variant>
    <Variant title="Attached to Bottom - Open">
      <template #default>
        <UiPanelControlButton
          :isOpen="true"
          :anchor-position="'bottom'"
        ></UiPanelControlButton>
      </template>
    </Variant>
    <Variant title="Attached to Bottom - Closed">
      <template #default>
        <UiPanelControlButton
          :isOpen="false"
          :anchor-position="'bottom'"
        ></UiPanelControlButton>
      </template>
    </Variant>
  </Story>
</template>
