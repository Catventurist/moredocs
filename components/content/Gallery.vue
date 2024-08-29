<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  images: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})
</script>

<template>
  <div class="grid grid-cols-1 gap-8 my-16 md:grid-cols-2 items-stretch">
    <img v-for="(image, index) in images" :key="index" :src="image"
      class="object-cover w-100 aspect-video rounded-md transition ease-in-out delay-50 shadow-md hover:scale-110 dark:hover:shadow-primary" />
  </div>
</template>
