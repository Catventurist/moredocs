<template>
  <UiCard v-for="stuff in promo" :key="stuff.title">
    <UiCardHeader class="p-2 md:p-4 items-center group">
      <UiCardTitle class="flex flex-col gap-2 items-center">
        <Icon v-if="stuff.icon" :name="stuff.icon" class="duration-300 group-hover:text-primary" />
        <h2 v-if="stuff.title" class="duration-300 text-muted-foreground group-hover:text-foreground">
          {{ stuff.title }}
        </h2>
      </UiCardTitle>
      <UiCardDescription>
        <p v-if="stuff.description">
          {{ stuff.description }}
        </p>
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent class="p-2 pt-0 md:p-4 md:pt-0">
      <NuxtLink :to="stuff.to" :target="stuff.target">
        <UiButton v-if="stuff.content" size="sm" variant="outline" class="w-full">
          {{ stuff.content }}
        </UiButton>
      </NuxtLink>
    </UiCardContent>
  </UiCard>
</template>

<script setup lang="ts">
const { promo } = useConfig().value.dash;
</script>