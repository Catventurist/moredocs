<template>
  <div class="flex p-4 justify-around">
    <NuxtLink v-for="(item, i) in people" :id="i" :key="item.id" :to="item.to"
      class="flex flex-row gap-2 text-center group items-center">
      <NuxtImg v-if="item?.avatar" :src="item.avatar"
        class="overflow-hidden rounded-full border-2 size-14 duration-300 group-hover:scale-110" />
      <h2 v-if="item?.label"
        class="absolute text-muted-foreground top-2 text-md duration-300 group-hover:translate-x-2 group-hover:text-foreground">
        {{ item.label }}
      </h2>
    </NuxtLink>
  </div>
</template>


<script setup lang="ts">
const people = [{
  id: 'a',
  label: 'a',
  to: '/',
  target: '_self',
  avatar: '/Cateouti.png',
  tint: 'red'
}, {
  id: 'b',
  label: 'friend',
  to: '/',
  target: '_self',
  avatar: '/Cateouti.png',
  tint: 'blue'
}, {
  id: 'c',
  label: 'can',
  to: '/',
  target: '_self',
  avatar: '/Cateouti.png',
  tint: 'green'
}, {
  id: 'd',
  label: 'be',
  to: '/',
  target: '_self',
  avatar: '/Cateouti.png',
  tint: 'yellow'
}, {
  id: 'e',
  label: 'a',
  to: '/',
  target: '_self',
  avatar: '/Cateouti.png',
  tint: 'orange'
}, {
  id: 'f',
  label: 'Cat',
  to: '/',
  target: '_self',
  avatar: '/Cateouti.png',
  tint: 'violet'
}]
</script>
