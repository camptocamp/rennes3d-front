<script lang="ts" setup>
import UiParkingInformation from './UiParkingInformation.vue'
function initState() {
  return {
    name: 'Parking Lorem',
    station: 'Station Champs-Daguet',
    address: '3 avenue Hambourg - 35000 Rennes',
    place: 300,
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
    <template #default="{ state }">
      <UiParkingInformation
        :name="state.name"
        :station="state.station"
        :address="state.address"
        :place="state.place"
      >
      </UiParkingInformation>
    </template>
  </Story>
</template>
