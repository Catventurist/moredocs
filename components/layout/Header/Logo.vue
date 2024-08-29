<template>
  <div>
    <NuxtLink v-if="logo.light && logo.dark" to="/" class="px-2 flex gap-2 items-center group">
      <img :src="logo.light" class="h-7 dark:hidden duration-300 group-hover:scale-110" alt="light" />
      <img :src="logo.dark" class="hidden h-7 dark:block duration-300 group-hover:scale-110" alt="dark" />
      <p v-if="showTitle && title" class="duration-200 group-hover:font-bold">
        {{ title }}
      </p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { logo, title, showTitle } = useConfig().value.header;
</script>
