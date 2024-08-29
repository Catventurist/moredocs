<template>
  <div class="items-center grid  min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div class="h-full left-1 top-1 gap-2 py-2 shadow dark:shadow-primary/40">
      <DashHeaderFirst />
      <DashSideMenu />
      <DashSideSheet />
    </div>
    <div class="absolute justify-items-center flex flex-row top-3 right-6 gap-2">
      <LayoutSearchButton />
      <DashMeMenu />
    </div>
    <div class="pt-6">
      <slot />
      <DashFooter />
    </div>
  </div>
</template>