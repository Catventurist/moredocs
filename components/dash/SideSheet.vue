<template>
  <UiSheet>
    <UiSheetTrigger as-child>
      <UiButton variant="outline" class="shrink-0 md:hidden">
        <Icon name="lucide:menu" class="size-5" />
      </UiButton>
    </UiSheetTrigger>
    <UiSheetContent side="left" class="flex flex-col">
      <UiScrollArea>
        <DashSideMenu />
      </UiScrollArea>
    </UiSheetContent>
  </UiSheet>
</template>