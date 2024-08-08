<template>
  <div>
    <LayoutHeader />
    <div
      class="px-4 md:px-8 min-h-screen flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
      :class="[config.main.padded && 'container']">
      <aside
        class="fixed top-[102px] md:top-[60px] z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto">
        <LayoutAside :is-mobile="false" />
      </aside>
      <main class="relative py-6" :class="[config.toc.enable && 'lg:gap-10 lg:py-8 lg:grid lg:grid-cols-[1fr_200px]']">
        <div class="mx-auto w-full min-w-0 group/head">
          <LayoutBreadcrumb v-if="page?.body && config.main.breadCrumb" class="mb-4" />
          <div v-if="config.main.showTitle" class="space-y-2 mb-6">
            <h2 class="text-3xl text-foreground duration-300 group-hover/head:text-primary">
              {{ page?.title }}
            </h2>
            <h4 class="text-muted-foreground duration-300 group-hover/head:text-foreground">
              {{ page?.description }}
            </h4>
          </div>
          <slot />
          <LayoutPrevNext />
        </div>
        <div v-if="config.toc.enable" class="hidden text-sm lg:block">
          <div class="sticky top-[90px] h-[calc(100vh-3.5rem)] overflow-hidden">
            <LayoutToc :is-small="false" />
          </div>
        </div>
      </main>
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
const config = useConfig();
</script>