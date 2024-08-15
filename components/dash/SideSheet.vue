<template>
  <UiSheet>
    <UiSheetTrigger as-child>
      <UiButton variant="outline" size="icon" class="shrink-0 md:hidden">
        <Icon name="lucide:menu" class="size-5" />
        <span class="sr-only">Toggle navigation menu</span>
      </UiButton>
    </UiSheetTrigger>
    <UiSheetContent side="left" class="flex flex-col">
      <UiScrollArea>
        <DashSideMenu />
      </UiScrollArea>
    </UiSheetContent>
  </UiSheet>
</template>