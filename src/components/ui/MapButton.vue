<template>
  <button class="shadow-lg px-8 py-4 rounded-full" @click="$emit('click')">
    <slot></slot>
  </button>
</template>
