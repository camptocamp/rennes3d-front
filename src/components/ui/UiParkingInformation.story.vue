<script lang="ts" setup>
function initState() {
  return {
    check: true,
  }
}
</script>

<template>
  <Story
    title="UiParkingInformation"
    :layout="{
      type: 'grid',
      width: 450,
    }"
    group="homepage"
    :init-state="initState"
  >
    <template #default>
      <UiParkingInformation> </UiParkingInformation>
    </template>
  </Story>
</template>
