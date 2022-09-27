<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import photo1 from '@/assets/photos/samples/photo1.png'
import photo2 from '@/assets/photos/samples/photo2.png'
import photo3 from '@/assets/photos/samples/photo3.png'
</script>
<template>
  <div class="flex flex-col items-center justify-center p-0 h-64">
    <div
      class="flex flex-row justify-center items-center px-2 py-4 gap-4 w-11 h-7 bg-white rounded-t-lg"
    >
      <ChevronDownIcon></ChevronDownIcon>
    </div>
    <div
      class="flex flex-row items-start p-3 gap-3 w-auto h-56 bg-white rounded-l-xl rounded-r-xl rounded-t-none rounded-b-none"
    >
      <img :src="photo1" class="w-64 h-52" />
      <img :src="photo2" class="w-64 h-52" />
      <img :src="photo3" class="w-64 h-52" />
    </div>
  </div>
</template>
