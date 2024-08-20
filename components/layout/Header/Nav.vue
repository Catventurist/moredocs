<template>
  <UiNavigationMenu>
    <UiNavigationMenuList>
      <UiNavigationMenuItem v-for="(item, i) in nav" :key="i" class="relative">
        <template v-if="item?.links">
          <UiNavigationMenuTrigger v-if="item?.title" class="bg-transparent gap-2 font-semibold">
            <Icon v-if="item?.icon" :name="item.icon" />
            {{ item.title }}
          </UiNavigationMenuTrigger>
          <UiNavigationMenuContent>
            <ul class="w-[250px] p-2">
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
          </UiNavigationMenuContent>
        </template>
        <NuxtLink v-else :to="item.to" :target="item.target">
          <div v-if="item?.title" class="bg-transparent pr-6 font-semibold gap-2" :class="navigationMenuTriggerStyle()">
            <Icon v-if="item?.icon" :name="item.icon" />
            {{ item.title }}
          </div>
        </NuxtLink>
      </UiNavigationMenuItem>
    </UiNavigationMenuList>
  </UiNavigationMenu>
</template>

<script setup lang="ts">
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const { nav } = useConfig().value.header;
</script>
