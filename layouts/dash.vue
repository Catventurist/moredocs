<template>
  <div class="layout-dash items-center grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div class="h-full left-1 top-1 gap-2 py-2">
      <DashHeaderFirst />
      <DashSideMenu />
      <DashSideSheet />
    </div>
    <div class="absolute items-center top-1 right-4 gap-2">
      <LayoutSearchButton />
      <DashMeMenu class="pt-6 mx-2" />
    </div>
    <div class=" mt-6">
      <slot />
      <DashBotCard />
    </div>
  </div>
</template>