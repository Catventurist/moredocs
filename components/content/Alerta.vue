<template>
  <UiAlert class="group" :class="[typeTwClass[type] && 'cursor-pointer hover:bg-muted/50']">
    <Icon v-if="icon && title" :name="icon" class="size-6 duration-300 group-hover:scale-110" />
    <UiAlertTitle v-if="title" class="font-semibold duration-300 group-hover:text-primary">
      {{ title }}
    </UiAlertTitle>
    <UiAlertDescription class="flex flex-row space-x-2 duration-300 list-disc hover:list-none">
      <Icon v-if="icon && !title" :name="icon" class="me-6 size-8 self-center duration-300 group-hover:scale-110" />
      <slot />
    </UiAlertDescription>
  </UiAlert>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string;
  icon?: string;
  type?: 'default' | 'info' | 'warning' | 'success' | 'danger';
}>(), {
  type: 'default',
});

const typeTwClass = {
  default: '',
  info: 'border-sky-600 text-sky-600 [&>svg]:text-sky-600',
  warning: 'border-amber-600 text-amber-600 [&>svg]:text-amber-600',
  success: 'border-green-600 text-green-600 [&>svg]:text-green-600',
  danger: 'border-red-600 text-red-600 [&>svg]:text-red-600',
};
</script>
