<template>
  <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6"
    :class="{ 'border-b lg:border-none': config.header.border, 'container max-w-screen-2xl': config.main.padded }">
    <LayoutHeaderLogo class="hidden flex-1 md:flex" />
    <LayoutMobileNav />
    <LayoutHeaderLogo v-if="config.header.showTitleInMobile" class="flex md:hidden" />
    <UiButton variant="outline" to="/" size="icon" class="ml-auto size-8">
      <Icon name="lucide:bell" class="size-4" />
    </UiButton>
  </div>
</template>

<script setup lang="ts">
const config = useConfig();
</script>