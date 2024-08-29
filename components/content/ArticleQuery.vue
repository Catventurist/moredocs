<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content';
const query: QueryBuilderParams = { path: '/articles', where: [{ layout: 'article' }], limit: 4, sort: [{ date: -1 }], }

</script>

<template>
  <div>
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2 v-if="article?.title">{{ article.title }}
          <ContentSlot :use="$slots.default" unwrap="p" />
        </h2>
        <p v-if="article?.description">{{ article.description }}
          <ContentSlot :use="$slots.default" unwrap="p" />
        </p>
      </div>
    </ContentList>
    <slot />
  </div>
</template>
