<template>
  <template v-if="item?.links">
    <UiCollapsible v-model:open="isOpen">
      <UiCollapsibleTrigger class="flex w-full gap-2 p-2 text-left">
        <Icon v-if="item?.icon" :name="item.icon" class="mt-1" />
        {{ item.title }}
        <Icon :name="isOpen ? 'lucide:chevrons-down-up' : 'lucide:chevrons-up-down'" size="12"
          class="ml-auto self-center" />
      </UiCollapsibleTrigger>
      <UiCollapsibleContent>
        <ul class="pl-2">
          <li v-for="link in item.links" :key="link.title">
            <NuxtLink v-if="link?.to" :to="link.to" :target="link.target"
              class="mb-1 block w-full gap-2 rounded-md px-3 py-2 transition-all hover:bg-muted">
              <div v-if="link?.title" class="font-semibold gap-2 flex justify-between">
                {{ link.title }}
                <Icon v-if="link?.target === '_blank'" name="lucide:external-link" class="text-muted-foreground "
                  size="13" />
                <Icon v-if="link?.icon" :name="link.icon" />
              </div>
              <div v-if="link?.description" class="text-sm text-muted-foreground">
                {{ link.description }}
              </div>
            </NuxtLink>
          </li>
        </ul>
      </UiCollapsibleContent>
    </UiCollapsible>
  </template>
  <NuxtLink v-else :to="item.to" :target="item.target" class="flex w-full p-2">
    <div v-if="item?.title" class="font-semibold gap-2">
      <Icon v-if="item?.icon" :name="item.icon" />
      {{ item.title }}
    </div>
    <Icon name="lucide:arrow-up-right" class="ml-1 text-muted-foreground" size="12" />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: any;
  index: number;
}>();

const collapsed = useCollapsedMap();
const isOpen = ref(collapsed.value.get(`mobile-header-nav${props.index}`) || false);
watch(isOpen, (v) => {
  collapsed.value.set(`mobile-header-nav${props.index}`, v);
});
</script>
