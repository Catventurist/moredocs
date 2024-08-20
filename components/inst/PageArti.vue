<template>
  <div class="container pt-28">
    <div class="mb-4">
      <div class="flex flex-row items-center text-center gap-2">
        <div class="w-11 h-11 rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
          <div class="h-10 w-10 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
            <img class="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
          </div>
        </div>
        <p class="text-white text-sm font-semibold pb-2 pt-1">cat</p>
      </div>
      <div></div>
    </div>
    <div>
      <div>
        <img class="" src="https://picsum.photos/600/400/?random" alt="cat" />
      </div>
    </div>
    <div>
      <div class="pt-3 pb-2">
        <div class="flex space-x-8">
          <Icon name="lucide:heart" />
          <Icon name="lucide:message-circle" />
          <Icon name="lucide:bookmark" />
          <Icon name="lucide:save" />
        </div>
      </div>
      <div class="pt-1 pb-2 space-y-1 gap-2 text-sm">
        <h2 class="font-semibold cursor-pointer">
          26 cats
        </h2>
        <p class="cursor-pointer">Some animals</p>
        <p class="text-muted-foreground cursor-pointer">Playing</p>
      </div>
    </div>
    <div class="flex flex-row justify-between py-3 space-x-3">
      <p class="text-primary text-sm">Comment</p>
      <UiButton variant="ghost">
        More
      </UiButton>
    </div>
  </div>
</template>