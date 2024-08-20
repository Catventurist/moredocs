<template>
  <div class="items-center justify-between gap-2 md:flex-row">
    <div class="flex gap-2 justify-evenly rounded-xl hover:bg-primary/20">
      <div class="mt-2">
        <UiAvatar>
          <UiAvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" alt="cat" />
          <UiAvatarFallback>Cat</UiAvatarFallback>
        </UiAvatar>
      </div>
      <div class="flex flex-col text-center">
        <h2 class="cursor-pointer">Cat</h2>
        <p class="text-primary">Kitty</p>
      </div>
      <UiButton variant="outline" class="mt-2">
        Change
      </UiButton>
    </div>
    <div>
      <div class="py-3">
        <div class="flex flex-row justify-between">
          <p class="text-muted-foreground">Suggestions</p>
          <p class="right-2 text-primary cursor-pointer">All</p>
        </div>
      </div>
    </div>
    <div class="space-y-2 gap-2">
      <div class="flex flex-row justify-between rounded-xl hover:bg-primary/20">
        <UiAvatar>
          <UiAvatarImage src="https://randomuser.me/api/portraits/men/2.jpg" alt="cat" />
          <UiAvatarFallback>Cat</UiAvatarFallback>
        </UiAvatar>
        <div class="col-2">
          <p class="text-primary cursor-pointer">
            cat
          </p>
        </div>
        <div>
          <p class="col-3 text-sm cursor-pointer">
            Follow
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-between rounded-xl hover:bg-primary/20">
        <UiAvatar>
          <UiAvatarImage src="https://randomuser.me/api/portraits/men/3.jpg" alt="cat" />
          <UiAvatarFallback>Cat</UiAvatarFallback>
        </UiAvatar>
        <div class="col-2">
          <p class="text-primary cursor-pointer">
            cat
          </p>
        </div>
        <div>
          <p class="col-3 text-sm cursor-pointer">
            Follow
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-between rounded-xl hover:bg-primary/20">
        <UiAvatar>
          <UiAvatarImage src="https://randomuser.me/api/portraits/men/4.jpg" alt="cat" />
          <UiAvatarFallback>Cat</UiAvatarFallback>
        </UiAvatar>
        <div class="col-2">
          <p class="text-primary cursor-pointer">
            cat
          </p>
        </div>
        <div>
          <p class="col-3 text-sm cursor-pointer">
            Follow
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-between rounded-xl hover:bg-primary/20">
        <UiAvatar>
          <UiAvatarImage src="https://randomuser.me/api/portraits/men/5.jpg" alt="cat" />
          <UiAvatarFallback>Cat</UiAvatarFallback>
        </UiAvatar>
        <div class="col-2">
          <p class="text-primary cursor-pointer">
            cat
          </p>
        </div>
        <div>
          <p class="col-3 text-sm cursor-pointer">
            Follow
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-between rounded-xl hover:bg-primary/20">
        <UiAvatar>
          <UiAvatarImage src="https://randomuser.me/api/portraits/women/8.jpg" alt="cat" />
          <UiAvatarFallback>Cat</UiAvatarFallback>
        </UiAvatar>
        <div class="col-2">
          <p class="text-primary cursor-pointer">
            Suggested
          </p>
        </div>
        <div>
          <p class="col-3 text-sm cursor-pointer">
            Follow
          </p>
        </div>
      </div>

    </div>
    <div class="py-4 space-y-2 text-muted-foreground rounded-xl hover:bg-primary/20">
      <div>
        <ul class="flex space-x-2 text-sm pt-3 justify-between">
          <li class="hover:underline hover:underline-offset-4">About</li>
          <li class="hover:underline hover:underline-offset-4">Help</li>
          <li class="hover:underline hover:underline-offset-4">Press</li>
          <li class="hover:underline hover:underline-offset-4">API</li>
          <li class="hover:underline hover:underline-offset-4">Jobs</li>
        </ul>
        <ul class="flex space-x-2 text-sm pt-3 justify-between">
          <li class="hover:underline hover:underline-offset-4">Privacy</li>
          <li class="hover:underline hover:underline-offset-4">Terms</li>
          <li class="hover:underline hover:underline-offset-4">Locations</li>
          <li class="hover:underline hover:underline-offset-4">Intl</li>
        </ul>

      </div>
      <div>
        <p class="text-sm pt-1 text-center">2024 Cat</p>
      </div>
    </div>
  </div>
</template>