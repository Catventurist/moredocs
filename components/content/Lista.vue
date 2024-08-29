<template>
  <Alerta :icon="icon">
    <slot />
  </Alerta>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string;
  type?: string;
}>();
</script>
