<template>
  <span :class="cn('text-2xl font-semibold leading-none tracking-tight', props.class)
    ">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>
