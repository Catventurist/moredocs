<template>
  <NuxtLoadingIndicator :color="false" class="z-100 bg-primary/80" />
  <ConfigProvider :use-id="useIdFunction">

    <NuxtPage />
    <CommsLayButton />
    <Toaster />
  </ConfigProvider>
</template>

<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue';
import { ConfigProvider } from 'radix-vue';

const config = useConfig();
const { themeClass, radius } = useThemes();

const useIdFunction = () => useId();

useSeoMeta({
  description: config.value.site.description,
  ogDescription: config.value.site.description,
  ogImage: config.value.site.ogImage,
  twitterCard: 'summary_large_image',
});

useServerHead({
  htmlAttrs: {
    class: themeClass.value,
    style: `--radius: ${radius.value}rem;`,
  },
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>