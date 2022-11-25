<script setup lang="ts">
import UiRennesLogo from '@/components/ui/UiRennesLogo.vue'
import UiDivider from '../ui/UiDivider.vue'
// import UiLinkMetis from '../ui/UiLinkMetis.vue'
</script>
<template>
  <div class="flex flex-col p-0 gap-4 font-dm-sans">
    <div class="flex p-0 gap-6">
      <UiRennesLogo class="w-36 h-7"></UiRennesLogo>
      <div class="font-normal text-xs">
        Visualisez les données thématiques de notre territoire sur sa maquette
        3D.
      </div>
    </div>
    <UiDivider></UiDivider>
    <div>
      <!-- <div
        class="font-normal text-xs text-neutral-500 before:w-0 before:h-px before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-300 before:bg-neutral-500 hover:before:w-full hover:before:left-0 underline hover:no-underline"
      >
        Mentions légales
      </div> -->
      <!-- <div>Politique de protection des données personnelles</div> -->
      <!-- <UiLinkMetis
        :hasArrow="false"
        class="grow-0 text-neutral-500 font-normal text-xs"
        :underlineColor="'bg-neutral-500'"
        >Mentions légales</UiLinkMetis
      > -->
    </div>
  </div>
</template>
