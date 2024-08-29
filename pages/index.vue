<template>
  <div lang="en">
    <NuxtLayout>
      <ContentRenderer :key="page._id" :value="page" class="docs-content prose" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
const config = useConfig();

useSeoMeta({
  title: `${page.value?.title ?? '404'} - ${config.value.site.name}`,
  ogTitle: page.value?.title,
  description: page.value?.description,
});

useHead({
  htmlAttrs: {
    lang: 'en',
  }
});
</script>
