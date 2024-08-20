<template>
  <UiCard class="group mb-4 hover:bg-primary/10">
    <UiCardHeader class="flex flex-col sm:flex-row justify-around items-center h-20 p-4 gap-2 mt-12">
      <UiCardTitle>
        <time v-if="page?.publishedAt" class="duration-300 text-muted-foreground group-hover:text-foreground">
          {{ page.publishedAt }}
        </time>
        <h2 v-if="page?.title" class="text-4xl mb-4 px-4 duration-300 group-hover:text-primary">
          {{ page.title }}
        </h2>
        <NuxtLink v-if="page?.author.link && page?.author.name" :to="page.author.link">
          <UiButton variant="ghost" class="gap-2">
            <Icon name="lucide:user" class="size-4" />
            {{ page.author.name }}
          </UiButton>
        </NuxtLink>
      </UiCardTitle>
    </UiCardHeader>
    <UiCardContent class="flex flex-col sm:flex-row justify-around items-center h-20 p-4 gap-2 mb-12">
      <NuxtImg v-if="page?.cover" :src="page.cover"
        class="size-24 object-contain overflow-hidden opacity-30 rounded-md -z-10 duration-300 group-hover:opacity-70" />
      <p v-if="page?.description" class="duration-300 text-muted-foreground group-hover:text-foreground">
        {{ page.description }}
      </p>
      <UiAvatar class="opacity-60 duration-300 group-hover:opacity-90 group-hover:translate-y-2">
        <UiAvatarImage v-if="page?.image.src" :src="page.image.src" alt="2" />
        <UiAvatarFallback>Cat</UiAvatarFallback>
      </UiAvatar>
    </UiCardContent>
  </UiCard>
</template>

<script setup lang="ts">
const { page } = useContent()
</script>