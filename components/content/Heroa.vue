<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: null
  },
  imageAlt: {
    type: String,
    default: 'Hero Image'
  },
  imagePosition: {
    type: String,
    default: 'right'
  }
})
</script>

<template>
  <section>
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 group">
      <UiCard>
        <UiCardHeader class="text-4xl duration-300 group-hover:text-primary">
          <ContentSlot :use="$slots.title" unwrap="p">
          </ContentSlot>
        </UiCardHeader>
        <UiCardContent class="mt-3 text-xl text-muted-foregound duration-300 group-hover:text-foreground">
          <ContentSlot :use="$slots.description" unwrap="p">
          </ContentSlot>
        </UiCardContent>
      </UiCard>
      <img v-if="image" :class="imagePosition"
        class="h-[400px] object-cover mt-2 rounded-xl -left:order-1 opacity-60 duration-300 delay-50 hover:scale-105 group-hover:opacity-100"
        :src="image" :alt="imageAlt" />
    </div>
  </section>
</template>
