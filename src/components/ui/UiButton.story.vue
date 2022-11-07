<script lang="ts" setup>
import UiButton from './UiButton.vue'
import IconCalendar from './icons/IconCalendar.vue'

function initState() {
  return {
    disabled: false,
    active: false,
  }
}
</script>

<template>
  <Story
    title="UiButton"
    :layout="{
      type: 'grid',
      width: 300,
    }"
    group="map"
  >
    <Variant
      title="Floating: Icon, text, notif"
      :init-state="initState"
      icon="lucide:camera"
    >
      <template #default>
        <UiButton
          class="ui-btn-regular-size ui-btn-floating"
          :icon="IconCalendar"
          :notification="3"
          :disabled="false"
        >
          Planning du projet
        </UiButton>
      </template>
    </Variant>
    <Variant
      title="Floating: Icon, text"
      :init-state="initState"
      icon="lucide:camera"
    >
      <template #default>
        <UiButton
          class="ui-btn-regular-size ui-btn-floating"
          :icon="IconCalendar"
          :disabled="false"
        >
          Planning du projet
        </UiButton>
      </template>
    </Variant>
    <Variant
      title="Floating: text"
      :init-state="initState"
      icon="lucide:camera"
    >
      <template #default>
        <UiButton class="ui-btn-regular-size ui-btn-floating" :disabled="false">
          Planning du projet
        </UiButton>
      </template>
    </Variant>
    <Variant
      title="primary: Icon, text, notif"
      :init-state="initState"
      icon="lucide:camera"
    >
      <template #default>
        <UiButton
          class="ui-btn-regular-size ui-btn-primary"
          :icon="IconCalendar"
          :notification="3"
          :disabled="false"
        >
          Planning du projet
        </UiButton>
      </template>
    </Variant>
    <Variant
      title="primary: Icon, text"
      :init-state="initState"
      icon="lucide:camera"
    >
      <template #default>
        <UiButton
          class="ui-btn-regular-size ui-btn-primary"
          :icon="IconCalendar"
          :disabled="false"
        >
          Planning du projet
        </UiButton>
      </template>
    </Variant>
    <Variant title="primary: text" :init-state="initState" icon="lucide:camera">
      <template #default>
        <UiButton class="ui-btn-regular-size ui-btn-primary" :disabled="false">
          Planning du projet
        </UiButton>
      </template>
    </Variant>
    <Variant
      title="secondary: Icon, text, notif"
      :init-state="initState"
      icon="lucide:camera"
    >
      <template #default>
        <UiButton
          class="ui-btn-regular-size ui-btn-secondary"
          :icon="IconCalendar"
          :notification="3"
          :disabled="false"
        >
          Planning du projet
        </UiButton>
      </template>
    </Variant>
    <Variant
      title="secondary: Icon, text"
      :init-state="initState"
      icon="lucide:camera"
    >
      <template #default>
        <UiButton
          class="ui-btn-regular-size ui-btn-secondary"
          :icon="IconCalendar"
          :disabled="false"
        >
          Planning du projet
        </UiButton>
      </template>
    </Variant>
    <Variant
      title="secondary: text"
      :init-state="initState"
      icon="lucide:camera"
    >
      <template #default>
        <UiButton
          class="ui-btn-regular-size ui-btn-secondary"
          :disabled="false"
        >
          Planning du projet
        </UiButton>
      </template>
    </Variant>
    <Variant
      title="Floating: small"
      :init-state="initState"
      icon="lucide:camera"
    >
      <template #default>
        <UiButton class="ui-btn-small-size ui-btn-floating" :disabled="false">
          Bouton
        </UiButton>
      </template>
    </Variant>
    <Variant
      title="Primary: small"
      :init-state="initState"
      icon="lucide:camera"
    >
      <template #default>
        <UiButton class="ui-btn-small-size ui-btn-primary" :disabled="false">
          Bouton
        </UiButton>
      </template>
    </Variant>
    <Variant
      title="Secondary: small"
      :init-state="initState"
      icon="lucide:camera"
    >
      <template #default>
        <UiButton class="ui-btn-small-size ui-btn-secondary" :disabled="false">
          Bouton
        </UiButton>
      </template>
    </Variant>
  </Story>
</template>
