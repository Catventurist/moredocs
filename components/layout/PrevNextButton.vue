<template>
  <div>
    <NuxtLink v-if="prevNext && prevNext._path" :to="prevNext._path" class="basis-1/3 mx-2">
      <div class="mb-4 space-y-2 rounded-lg border p-4 transition-all duration-300 hover:bg-primary/10 group">
        <div class="flex flex-row gap-2">
          <Icon v-if="prevNext?.icon && side === 'left'" :name="prevNext.icon"
            class="size-6 m-auto flex self-center duration-300 group-hover:-translate-y-2" />
          <div class="space-y-2 self-center">
            <h2 v-if="prevNext?.title"
              class="text-lg font-semibold text-muted-foreground duration-300 group-hover:text-foreground">
              {{ prevNext.title }}
            </h2>
            <p v-if="prevNext?.description" class="text-sm text-muted-foreground">
              {{ prevNext.description }}
            </p>
          </div>
          <Icon v-if="side === 'right'" :name="prevNext.icon"
            class="size-6 flex mx-auto self-center duration-300 group-hover:-translate-y-2" />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  prevNext: any;
  side: 'left' | 'right';
}>();
</script>
