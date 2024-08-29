<script setup lang="ts">
const { page } = useContent();
type Article = {
  _path: string
  title: string
  date: string
  description: string
  cover: string
  publishedAt: string
  author: {
    name: string
  }
}

defineProps({
  article: {
    type: Object,
    required: true,
    validator: (value: Article) => {
      if (value?._path && value.title) { return true }
      return false
    }
  },
  featured: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="flex flex-col rounded-md gap-4 p-2 items-center group hover:bg-primary/10"
    v-if="article?._path && article?.title" :class="{ 'md:flex-row gap-6': featured }">
    <NuxtLink v-if="article?._path" :to="article._path" class="">
      <img
        class="h-44 aspect-video object-cover rounded-md opacity-60 duration-300 group-hover:scale-95 group-hover:opacity-90"
        v-if="article?.cover" :src="article.cover" alt="Cat" />
    </NuxtLink>
    <UiCard class="flex flex-col flex-1 gap-2 items-center">
      <UiCardHeader v-if="article?.title" class="text-4xl line-clamp-2 duration-300 group-hover:text-primary">
        {{ article.title }}
      </UiCardHeader>
      <UiCardDescription v-if="article?.description"
        class="line-clamp-2 text-muted-foreground duration-300 group-hover:text-foreground">
        {{ article.description }}
      </UiCardDescription>
      <UiCardContent class="flex flex-row gap-2 justify-center text-sm duration-300 group-hover:text-primary">
        <time v-if="article?.publishedAt">
          {{ (article.publishedAt) }}
        </time>
        <p v-if="page.author?.name">
          {{ article.author.name }}
        </p>
      </UiCardContent>
    </UiCard>
  </div>
</template>