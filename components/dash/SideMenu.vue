<template>
  <div class="flex flex-col px-2 sm:py-5">
    <ul>
      <li v-for="link in links" :key="link.title">
        <NuxtLink v-if="link?.to" :to="link.to" :target="link.target"
          class="px-8 py-2 mb-1 hover:bg-muted rounded-md w-full block transition-all group">
          <div class="font-semibold gap-4 flex flex-row">
            <Icon v-if="link?.icon" :name="link.icon"
              class="mt-1 duration-300 group-hover:scale-110 group-hover:text-primary" />
            <h2 v-if="link?.title" class="text-muted-foreground duration-300 group-hover:text-foreground">
              {{ link.title }}
            </h2>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <div class="mt-auto p-4">
      <DashPromoBot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { links } = useConfig().value.dash;
</script>