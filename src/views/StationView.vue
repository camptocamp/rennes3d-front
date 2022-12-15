<script setup lang="ts"></script>

<template>
  <header></header>
  <main class="h-screen flex">
    <div class="w-72 p-4 bg-blue-300"></div>
    <div class="p-4">
      <div>
        Id is <span class="font-bold"> {{ $route.params.id }}</span>
      </div>
    </div>
  </main>
</template>
