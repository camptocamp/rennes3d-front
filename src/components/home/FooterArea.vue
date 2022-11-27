<script setup lang="ts">
import UiRennesLogo from '@/components/ui/UiRennesLogo.vue'
import UiDivider from '@/components/ui/UiDivider.vue'
import UiLinkFooter from '@/components/ui/UiLinkFooter.vue'
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
    <div class="flex gap-3 justify-center">
      <UiLinkFooter :url="'https://metropole.rennes.fr/mentions-legales'"
        >Mentions légales</UiLinkFooter
      >
      <UiLinkFooter :url="'https://fabriquecitoyenne.fr/privacy'"
        >Politique de protection des données personnelles</UiLinkFooter
      >
    </div>
  </div>
</template>
