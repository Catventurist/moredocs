<template>
  <UiNavigationMenu>
    <UiNavigationMenuList>
      <UiNavigationMenuItem v-for="(item, i) in nav" :key="i">
        <template v-if="item.links">
          <UiNavigationMenuTrigger class="font-semibold bg-transparent gap-2">
            <Icon v-if="item.icon" :name="item.icon" />
            {{ item.title }}
          </UiNavigationMenuTrigger>
          <UiNavigationMenuContent>
            <ul class="w-[250px] p-2">
              <li v-for="link in item.links" :key="link.title">
                <NuxtLink :to="link.to" :target="link.target"
                  class="px-3 py-2 mb-1 hover:bg-muted rounded-md w-full block transition-all">
                  <div class="font-semibold gap-2 flex justify-between">
                    {{ link.title }}
                    <Icon v-if="link.target === '_blank'" name="lucide:external-link" class="text-muted-foreground "
                      size="13" />
                    <Icon v-if="link.icon" :name="link.icon" />


                  </div>
                  <div class="text-muted-foreground text-sm">
                    {{ link.description }}
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </UiNavigationMenuContent>
        </template>
        <NuxtLink v-else :to="item.to" :target="item.target">
          <div class="pr-6 font-semibold bg-transparent gap-2" :class="navigationMenuTriggerStyle()">
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
