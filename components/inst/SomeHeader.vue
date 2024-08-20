
<script setup lang="ts">
const { links } = useConfig().value.insta;
</script>

<template>
  <div>
    <ul>
      <li v-for="link in links" :key="link.title">
        <NuxtLink v-if="link?.to" :to="link.to" :target="link.target"
          class="px-3 py-2 mb-1 hover:bg-muted rounded-md w-full block transition-all group">
          <div class="font-semibold gap-2 flex flex-row">
            <Icon v-if="link?.icon" :name="link.icon" class="mt-1 duration-300 group-hover:scale-110" />
            <h2 v-if="link?.title" class="duration-300 group-hover:text-primary">
              {{ link.title }}
            </h2>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>