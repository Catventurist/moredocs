<template>
  <div>
    <LayoutHeader />
    <div
      class="items-start px-2 grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 md:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside
        class="fixed top-[102px] z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:top-[60px] md:block">
        <LayoutAside :is-mobile="false" />
      </aside>
      <div class="relative py-6 max-w-[70evh] group/head"
        :class="[config.toc.enable && 'lg:grid lg:grid-cols-[1fr_200px] lg:gap-10 lg:py-8']">
        <main>
          <UiCard class="left-2 mb-6 space-y-2 duration-300 hover:bg-primary/10 group">
            <UiCardHeader v-if="config?.main.showTitle">
              <UiCardTitle>
                <LayoutBreadcrumb v-if="page?.body && config?.main.breadCrumb" class="mb-4" />
              </UiCardTitle>
              <UiCardDescription v-if="page?.icon && page?.title"
                class="text-3xl text-foreground duration-300 group-hover/head:text-primary flex flex-row gap-2">
                <Icon :name="page.icon" class="size-6 duration-300 group-hover:translate-y-2" />
                {{ page.title }}
              </UiCardDescription>
            </UiCardHeader>
            <UiCardContent v-if="page?.description"
              class="text-muted-foreground duration-300 group-hover/head:text-foreground">
              {{ page.description }}
            </UiCardContent>
          </UiCard>
          <div class="max-w-2xl">
            <slot />
          </div>
          <LayoutPrevNext />
        </main>
        <div v-if="config?.toc.enable" class="hidden text-sm lg:block">
          <div class="sticky top-[90px] h-[calc(100vh-3.5rem)] overflow-hidden">
            <LayoutToc :is-small="false" />
          </div>
        </div>
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
const config = useConfig();
</script>