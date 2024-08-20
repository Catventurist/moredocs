<script setup lang="ts">
defineProps({
  cta: {
    type: Array as PropType<string[]>,
    required: false
  },
  secondary: {
    type: Array as PropType<string[]>,
    required: false
  },
  snippet: {
    type: [Array, String] as PropType<string[] | string>,
    required: false
  },
  video: {
    type: Array as PropType<string[]>,
    required: false
  },
  image: {
    type: Array as PropType<string[]>,
    required: false
  }
})
</script>

<template>
  <section class="px-10 sm:px-16 lg:pl-18">
    <div class="grid gap-8 lg:grid-cols-3 items-center group">
      <div class="lg:grid-col-1">
        <h2 v-if="$slots.title"
          class="align-text-center text-4xl sm:text-5xl lg:text-4xl lg:align-text-left duration-300 group-hover:text-primary">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p v-if="$slots.announce" class="mb-2 align-text-center lg:align-text-left">
          <ContentSlot :use="$slots.announce" unwrap="p" />
        </p>
        <p v-if="$slots.description"
          class="mt-4 text-lg text-muted-foreground align-text-center lg:align-text-left duration-300 group-hover:text-foreground">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
        <div v-if="$slots.extra" class="mt-6">
          <ContentSlot :use="$slots.extra" unwrap="p" />
        </div>
        <div class="flex flex-col gap-4 mt-6 sm:mt-10 sm:flex-row sm:gap-6 lg:justify-content-start">
          <template v-if="!$slots.actions">
            <NuxtLink v-if="cta" :to="(cta[1] as any)">
              <UiButton variant="ghost">
                {{ cta[0] }}
              </UiButton>
            </NuxtLink>
            <NuxtLink v-if="secondary" :to="(secondary[1] as any)">
              <UiButton variant="outline">
                {{ secondary[0] }}
              </UiButton>
            </NuxtLink>
          </template>
          <ContentSlot v-else :use="$slots.actions" unwrap="p" />
        </div>
      </div>
      <div class="grid lg:col-span-2 lg:pt-2 justify-center">
        <slot name="support">
        </slot>
      </div>
    </div>
  </section>
</template>
