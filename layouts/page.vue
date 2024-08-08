<template>
  <div class="px-4 md:px-8 py-6" :class="[config.main.padded && 'container']">
    <LayoutHeader />
    <slot />
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
const config = useConfig();
</script>