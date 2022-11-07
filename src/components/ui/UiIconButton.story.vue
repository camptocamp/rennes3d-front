<script lang="ts" setup>
import UiIconButton from './UiIconButton.vue'

function initState() {
  return {
    disabled: false,
    active: false,
  }
}
</script>

<template>
  <Story
    title="UiIconButton"
    :layout="{
      type: 'grid',
      width: 200,
    }"
    group="map"
  >
    <Variant title="Text Button" :init-state="initState">
      <template #default="{ state }">
        <UiIconButton :disabled="state.disabled" :active="state.active"
          >Click
        </UiIconButton>
      </template>
    </Variant>

    <Variant title="Icon Button" :init-state="initState" icon="lucide:camera">
      <template #default="{ state }">
        <UiIconButton :disabled="state.disabled" :active="state.active">
          <svg width="32" height="32" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
              />
              <circle cx="12" cy="13" r="3" />
            </g>
          </svg>
        </UiIconButton>
      </template>
    </Variant>

    <Variant
      title="Icon and text Button"
      :init-state="initState"
      icon="lucide:camera"
    >
      <template #default="{ state }">
        <UiIconButton :disabled="state.disabled" :active="state.active">
          <svg width="32" height="32" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
              />
              <circle cx="12" cy="13" r="3" />
            </g>
          </svg>

          <span class="pl-2">Text</span>
        </UiIconButton>
      </template>
    </Variant>
  </Story>
</template>
