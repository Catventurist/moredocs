<template>
  <div class="flex p-4 justify-around">
    <NuxtLink v-for="(item, i) in people" :id="i" :key="item.id" :to="item.href" class="items-center">
      <div v-if="item.avatar">
        <div class="flex flex-row text-center group">
          <NuxtImg :src="item.avatar" :modifiers="{ tint: item.tint }"
            class="overflow-hidden rounded-full border-2 size-14 duration-300 group-hover:scale-110" />
          <h2
            class="absolute text-muted-foreground top-2 text-md duration-300 group-hover:translate-x-2 group-hover:text-foreground">
            {{ item.label }}
          </h2>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>


<script setup lang="ts">
const tint = ref()
const people = [{
  id: 'benjamincanac',
  label: 'a',
  href: 'https://github.com/benjamincanac',
  target: '_blank',
  avatar: '/Cateouti.png',
  tint: 'red'
}, {
  id: 'Atinux',
  label: 'friend',
  href: 'https://github.com/Atinux',
  target: '_blank',
  avatar: '/Cateouti.png',
  tint: 'blue'
}, {
  id: 'smarroufin',
  label: 'can',
  href: 'https://github.com/smarroufin',
  target: '_blank',
  avatar: '/Cateouti.png',
  tint: 'green'
}, {
  id: 'Atinux',
  label: 'be',
  href: 'https://github.com/Atinux',
  target: '_blank',
  avatar: '/Cateouti.png',
  tint: 'yellow'
}, {
  id: 'benjamincanac',
  label: 'a',
  href: 'https://github.com/benjamincanac',
  target: '_blank',
  avatar: '/Cateouti.png',
  tint: 'orange'
}, {
  id: 'Atinux',
  label: 'Cat',
  href: 'https://github.com/Atinux',
  target: '_blank',
  avatar: '/Cateouti.png',
  tint: 'violet'
}]

</script>
