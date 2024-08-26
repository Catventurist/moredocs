<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
    <div class="col-start-1 p-4">
      <LayoutHeaderLogo />
      <InstSomeHeader class="mt-4" />
    </div>
    <div class="p-4 md:col-span-2">
      <InstPeepHeader />
      <slot />
      <LayoutPrevNext />
    </div>
    <div class="md:col-start-4 p-4">
      <InstBotHeader />
    </div>
  </div>
</template>