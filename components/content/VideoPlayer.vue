<script lang="ts" setup>
import type { PropType } from 'vue';

const props = defineProps({
  poster: {
    type: String,
    default: ''
  },
  src: {
    type: String,
    default: ''
  },
  sources: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  autoplay: {
    type: Boolean,
    default: false
  }
})

const provider = computed(() => {
  if (props.src && props.src.includes('youtube.com/watch')) {
    const match = props.src.match(/\?v=([^&]*)/)

    return {
      name: 'youtube',
      src: `https://www.youtube-nocookie.com/embed/${match?.[1] || ''}?autoplay=1`,
      poster: props.poster || `https://i3.ytimg.com/vi/${match?.[1] || ''}/hqdefault.jpg`
    }
  }
})

const loaded = ref(false)

if (!props.src && !props.sources.length) { throw new Error('VideoPlayer: you need to provide either `src` or `sources` props') }

const src = computed(() => props.src || props.sources?.[0]?.src || false)
</script>

<template>
  <div class="relative inline-block my-8 overflow-hidden rounded-lg" :class="{ loaded }">
    <NuxtImg v-if="provider ? provider.poster : poster" :src="(provider ? provider.poster : poster as any)" />

    <div v-if="loaded" class="absolute w-100 h-100">
      <!-- Remote -->
      <video v-if="!provider" class="w-100" :poster="poster" controls autoplay>
        <source v-if="src" :src="src">
        <source v-for="source in sources" :key="source.src || source" :src="source.src || source" :type="source.type">
      </video>

      <!-- YouTube -->
      <iframe v-else-if="provider.name === 'youtube'" class="w-100 h-100"
        allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen="true" :autoplay="autoplay"
        :src="provider.src" />
    </div>

    <div v-if="!loaded" class="play-button" @click="loaded = true">
      <UiButton icon="lucide:play" class="duration-300 hover:scale-110" />
    </div>
  </div>
</template>
