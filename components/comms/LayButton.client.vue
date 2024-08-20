<template>
  <div class="flex flex-row items-center gap-2 mt-2">
    <UiButton @click="setPageLayout('default')">
      <Icon name="lucide:circle-dashed" />
    </UiButton>
    <UiButton variant="ghost" @click="setPageLayout('doc')">
      <Icon name="lucide:file-code" />
    </UiButton>
    <UiButton variant="outline" @click="setPageLayout('dash')">
      <Icon name="lucide:layout-dashboard" />
    </UiButton>
    <UiButton variant="secondary" @click="setPageLayout('ig')">
      <Icon name="lucide:users-round" />
    </UiButton>
    <UiButton variant="ghost" @click="setPageLayout('article')">
      <Icon name="lucide:file-heart" />
    </UiButton>
    <UiButton variant="default" @click="setPageLayout(false)">
      <Icon name="lucide:delete" />
    </UiButton>
  </div>
</template>