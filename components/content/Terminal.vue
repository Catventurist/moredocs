<script setup lang="ts">
import { useToast } from '@/components/ui/toast/use-toast';
import { useClipboard } from '@vueuse/core';
const { toast } = useToast()
const props = defineProps({
  content: {
    type: [Array, String] as PropType<string[] | string>,
    required: true
  }
})

const { copy: copyToClipboard } = useClipboard()

const state = ref('init')

const lines = computed(() => {
  if (typeof props.content === 'string') { return [props.content] }
  return props.content
})

const copy = (e: MouseEvent) => {
  copyToClipboard(lines.value.join('\n'))
    .then(() => {
      state.value = 'copied'
      toast({ title: 'Copied to clipboard' })
      setTimeout(() => {
        state.value = 'init'
      }, 1000)
    })
    .catch(() => {
      toast({ title: 'Failed to copy' })
    })
}
</script>

<template>
  <div class="bg-transparent lg:w-64 rounded-xl shadow-inner hue-rotate-90 border-primary shadow-primary">
    <div class="relative flex flex-col overflow-hidden w-full rounded-lg">
      <div class="relative m-4 flex justify-end text-muted-foreground backdrop-blur-sm">
        <div class="flex gap-3 justify-end">
          <Icon name="lucide:minus" size="sm" class="bg-blue/40 rounded-full duration-300 hover:translate-y-1" />
          <Icon name="lucide:app-window" class="bg-green/40 rounded-full duration-300 hover:translate-y-1" />
          <Icon name="lucide:x" class="bg-red/40 rounded-full duration-300 hover:translate-y-1" />
        </div>
      </div>
      <div class="flex flex-col m-4 text-sm shadow-inner shadow-primary rounded-md justify-center">
        <li v-for="line in lines" :key="line" class="flex m-1 hover:bg-primary/10">
          <p class="mr-2 inline-block font-bold">$</p>
          <p class="inline-block">{{ line }}</p>
        </li>
      </div>
      <UiButton variant="ghost" class="justify-end gap-2 pe-4" @click="copy">
        <Icon name="lucide-copy" />
        Copy
      </UiButton>
    </div>
  </div>
</template>


