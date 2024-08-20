<template>
  <div class="items-center grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div class="h-full left-1 top-1 gap-2 py-2">
      <DashHeaderFirst />
      <DashSideMenu />
      <DashSideSheet />
    </div>
    <div class="absolute items-center top-1 right-6 mx-4 gap-2">
      <LayoutSearchButton />
      <DashMeMenu />
    </div>
    <div class="pt-6">
      <slot />
      <DashBotCard />
    </div>
  </div>
</template>