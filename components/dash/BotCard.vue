<template>
  <div class="mt-10 pt-8 lg:flex lg:flex-row">
    <LayoutPrevNextButton :prev-next="prev" side="left" />
    <UiCard>
      <UiCardHeader class="p-2 md:p-4 items-center group">
        <UiCardTitle class="flex flex-row gap-2 items-center">
          <Icon v-if="page?.icon" :name="page.icon" class="duration-300 group-hover:text-primary" />
          <h2 v-if="page?.title" class="duration-300 text-muted-foreground group-hover:text-foreground">
            {{ page.title }}
          </h2>
        </UiCardTitle>
        <UiCardDescription v-if="page?.description">
          {{ page.description }}
        </UiCardDescription>
      </UiCardHeader>
      <UiCardContent class="p-2 pt-0 md:p-4 md:pt-0">
        <NuxtLink v-if="page?.to" :to="page.to" :target="page.target">
          <UiButton v-if="page?.content" size="sm" variant="outline" class="w-full">
            {{ page.content }}
          </UiButton>
        </NuxtLink>
      </UiCardContent>
    </UiCard>
    <LayoutPrevNextButton :prev-next="next" side="right" />
  </div>
</template>

<script setup lang="ts">
const { page, prev, next } = useContent();
</script>
