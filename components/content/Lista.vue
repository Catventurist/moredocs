<script setup lang="ts">
import { type PropType } from 'vue';

const props = defineProps({
  content: {
    type: [Array, String] as PropType<string[] | string>,
    required: true
  }
})

const lines = computed(() => {
  if (typeof props.content === 'string') { return [props.content] }
  return props.content
})
</script>

<template>
  <div class="flex flex-col p-4">
    <span v-for="line in lines" :key="line" class="flex mb-1">
      <span class="me-2 inline-block font-bold">$</span>
      <span class="inline-block">{{ line }}</span>
    </span>
  </div>
</template>