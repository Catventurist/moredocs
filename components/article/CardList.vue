<template>
  <UiCard class="relative pt-2 lg:pt-2 min-h-screen">
    <UiCardContent class="bg-cover w-full flex justify-center items-center">
      <div class="w-full p-5 bg-background/40 backdrop-filter backdrop-blur-lg">
        <div class="mx-auto rounded-2xl p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
            <div
              class="p-6 mb-6 shadow dark:shadow-primary/40 duration-300 group hover:shadow-inner rounded-2xl cursor-pointer">
              <div class="relative mb-4 rounded-2xl">
                <img class="max-h-80 rounded-2xl w-full object-cover duration-300 group-hover:scale-95"
                  src="/Cateouti.png" alt="cat">
                <div class="absolute gap-1 backdrop-blur-sm text-red bottom-3 left-3 inline-flex items-center rounded-lg">
                  <Icon name="lucide:heart" class="size-4 text-red-400" />
                  <p class="text-sm text-red-400">
                    2
                  </p>
                </div>
                <NuxtLink to="/" target="_self"
                  class="flex justify-center items-center text-xl gap-2 bg-background/80 z-10 absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 group-hover:opacity-80"
                  rel="noopener noreferrer">
                  <p>
                    Read more
                  </p>
                  <Icon name="lucide:arrow-right" class="size-6" />
                </NuxtLink>
              </div>
              <div class="flex justify-around items-center w-full pb-4 mb-auto">
                <div class="flex items-center">
                  <div class="pr-3">

                    <img class="h-12 w-12 rounded-full object-cover duration-300 group-hover:scale-95" src="/Cateouti.png"
                      alt="cat">
                  </div>
                  <div class="flex flex-row justify-center">
                    <p class="text-sm font-semibold ">Cat</p>
                    <div class="text-sm text-muted-foreground gap-2">
                      <Icon name="lucide:calendar-days" class="text-primary" />
                      <p>
                        09/08/2024
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex justify-end">
                  <div class="text-sm flex items-center gap-1 text-muted-foreground">
                    2 Days
                    <Icon name="lucide:clock" class="text-primary mt-1" />
                  </div>
                </div>
              </div>
              <NuxtLink to="/"
                class="block relative font-medium text-xl leading-8 group-hover:text-primary transition-colors duration-200 ">
                Instant Help at Your Fingertips
              </NuxtLink>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UiCardContent>
  </UiCard>
</template>

<script setup lang="ts">
const { page } = useContent()
</script>