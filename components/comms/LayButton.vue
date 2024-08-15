<template>
  <div class="flex flex-row items-center gap-2 mt-2">
    <UiButton @click="setPageLayout('default')">
      Default
    </UiButton>
    <UiButton variant="ghost" @click="setPageLayout('doc')">
      Documents
    </UiButton>
    <UiButton variant="outline" @click="setPageLayout('dash')">
      Dash
    </UiButton>
    <UiButton variant="secondary" @click="setPageLayout('ig')">
      Some
    </UiButton>
    <UiButton variant="default" @click="setPageLayout(false)">
      Remove layout
    </UiButton>
  </div>
</template>