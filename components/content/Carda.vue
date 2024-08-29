<template>
  <UiCard class="relative h-full duration-300 hover:bg-primary/10 duration-300 group">
    <UiCardHeader v-if="icon || title || $slots.title || description || $slots.description">
      <div class="flex flex-row gap-2 justify-center">
        <Icon v-if="icon" :name="icon" size="24" class="mb-2 duration-300 group-hover:scale-110" />
        <UiCardTitle v-if="title || $slots.title" class="duration-300 group-hover:text-primary">
          <ContentSlot :use="$slots.title" unwrap="p" />
          {{ title }}
        </UiCardTitle>
      </div>
      <UiCardDescription v-if="description || $slots.description" class="duration-300 group-hover:text-muted-foreground">
        <ContentSlot :use="$slots.description" unwrap="p" />
        {{ description }}
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent class="duration-300 text-muted-foreground group-hover:text-foreground">
      <slot />
    </UiCardContent>
    <UiCardFooter v-if="footer || $slots.footer">
      <ContentSlot :use="$slots.footer" unwrap="p" />
      {{ footer }}
    </UiCardFooter>
  </UiCard>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
  footer?: string;
  content?: string;
  icon?: string;
}>();
</script>
