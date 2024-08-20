<template>
  <footer class="py-6 text-muted-foreground md:px-8 md:py-0">
    <div class="container flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row">
      <p v-if="footer?.credits" class="text-sm">
        {{ footer.credits }}
      </p>
      <span class="flex-1" />
      <NuxtLink v-for="(link, i) in footer.links" :key="i" :to="link?.to" :target="link?.target">
        <UiButton variant="ghost" class="flex gap-2">
          <Icon v-if="link?.icon" :name="link.icon" size="20" />
          <p v-if="link?.title">{{ link.title }}</p>
        </UiButton>
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { footer } = useConfig().value;
</script>
