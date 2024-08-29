<template>
  <UiAlert class="flex flex-row items-center gap-4 duration-300 group/ale"
    :class="[typeTwClass[type] && 'cursor-pointer hover:bg-muted/50']">
    <Icon v-if="icon && title" :name="icon" size="20"
      class="duration-300 group-hover/ale:scale-110 group-hover/ale:text-primary" />
    <UiAlertTitle v-if="title" class="text-muted-foreground font-semibold duration-300 group-hover/ale:text-foreground">
      {{ title }}
    </UiAlertTitle>
    <UiAlertDescription>

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
  info: 'border-sky-600 text-sky-600 [&>svg]:text-sky-600 hover:bg-text-sky-600/20',
  warning: 'border-amber-600 text-amber-600 [&>svg]:text-amber-600 hover:bg-text-amber-600/20',
  success: 'border-green-600 text-green-600 [&>svg]:text-green-600 hover:bg-text-green-600/20',
  danger: 'border-red-600 text-red-600 [&>svg]:text-red-600 hover:bg-text-red-600/20',
};
</script>
