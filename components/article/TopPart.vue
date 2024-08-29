<template>
  <UiCard>
    <UiCardContent class="min-h-44 pt-6 grid md:grid-cols-3 gap-2 justify-items-center hover:bg-primary/10 group">
      <div class="column-1 span-2 py-2 grid grid-row gap-2 justify-items-center">
        <h2 v-if="page?.title" class="text-4xl duration-300 group-hover:text-primary">
          {{ page.title }}
        </h2>
        <p v-if="page?.description" class="duration-300 text-muted-foreground group-hover:text-foreground">
          {{ page.description }}
        </p>
      </div>
      <div class="column-2 span-1 grid grid-row justify-items-center md:justify-items-start">
        <img v-if="page?.cover" :src="page.cover"
          class="size-32 object-contain overflow-hidden rounded-md opacity-60 duration-500 group-hover:opacity-90 group-hover:scale-110" />
      </div>
      <div class="column-3 grid grid-row justify-items-center md:justify-items-end">
        <time v-if="page?.publishedAt" class="duration-300 text-muted-foreground group-hover:text-foreground">
          {{ page.publishedAt }}
        </time>
        <NuxtLink v-if="page.author?.link" :to="page.author.link" class="flex flex-row gap-2 items-center">
          <UiAvatar class="opacity-60 duration-300 group-hover:opacity-90 group-hover:scale-110">
            <UiAvatarImage v-if="page.image?.src && page.image.alt" :src="page.image.src" :alt="page.image.alt"
              class="size-6" />
            <UiAvatarFallback>Cat</UiAvatarFallback>
          </UiAvatar>
          <p v-if="page.author?.name"
            class="text-lg duration-300 text-muted-foreground group-hover:text-foreground group-hover:font-bold">
            {{ page.author.name }}
          </p>
        </NuxtLink>
      </div>
    </UiCardContent>
  </UiCard>
</template>

<script setup lang="ts">
const { page } = useContent()
</script>