<template>
  <UiAlert class="duration-300 hover:bg-primary/10 [&:not(:first-child)]:mt-5 group"
    :class="[typeTwClass[type], to && 'cursor-pointer hover:bg-muted/50']" @click="alertClick">
    <Icon v-if="icon && title" :name="icon" size="16" class="duration-300 group-hover:scale-110" />
    <UiAlertTitle v-if="title" class="font-semibold duration-300 group-hover:text-primary">
      {{ title }}
    </UiAlertTitle>
    <UiAlertDescription class="flex flex-row space-x-2">
      <Icon v-if="icon && !title" :name="icon" size="16"
        class="mb-[2px] min-w-5 self-center duration-300 group-hover:scale-110" />
      <div :class="[to && 'pr-3']">
        <slot />
      </div>
      <Icon v-if="to" name="lucide:arrow-up-right"
        class="absolute right-4 top-4 duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
    </UiAlertDescription>
  </UiAlert>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string;
  icon?: string;
  type?: 'default' | 'info' | 'warning' | 'success' | 'danger';
  to?: string;
  target?: string;
}>(), {
  type: 'default',
});

const typeTwClass = {
  default: '',
  info: 'border-sky-600 text-sky-600 [&>svg]:text-sky-600 bg-sky-600/20',
  warning: 'border-amber-600 text-amber-600 [&>svg]:text-amber-600',
  success: 'border-green-600 text-green-600 [&>svg]:text-green-600',
  danger: 'border-red-600 text-red-600 [&>svg]:text-red-600',
};

function alertClick() {
  if (props.to) {
    if (props.target) {
      navigateTo(props.to, {
        external: true,
        open: { target: props.target },
      });
    } else {
      navigateTo(props.to, { external: true });
    }
  }
}
</script>
