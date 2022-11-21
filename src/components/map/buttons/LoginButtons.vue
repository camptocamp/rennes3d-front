<script setup lang="ts">
import UiIconButton from '@/components/ui/UiIconButton.vue'
import IconUser from '@/components/ui/icons/IconUser.vue'
function getUserLog() {
  return null
}
</script>
<template>
  <UiIconButton class="rounded-full px-0 py-0">
    <div class="w-3/4 h-3/4 border border-black rounded-full flex mx-auto">
      <div v-if="getUserLog()" class="container my-auto">
        {{ getUserLog() }}
      </div>
      <div v-else>
        <IconUser class="mx-auto"></IconUser>
      </div>
    </div>
  </UiIconButton>
</template>
