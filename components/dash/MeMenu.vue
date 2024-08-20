<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="secondary" size="icon" class="rounded-full">
        <Icon name="lucide:circle-user" class="size-5" />
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent>
      <UiDropdownMenuLabel class="flex gap-2 group">
        <Icon name="lucide:user" class="group-hover:scale-110" />
        <p class="text-muted-foreground group-hover:text-foreground">
          My Account
        </p>
      </UiDropdownMenuLabel>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuItem class="flex gap-2 group">
        <Icon name="lucide:settings" class="group-hover:scale-110" />
        <p class="text-muted-foreground group-hover:text-foreground">
          Settings
        </p>
      </UiDropdownMenuItem>
      <UiDropdownMenuItem class="flex gap-2 group">
        <Icon name="lucide:info" class="group-hover:scale-110" />
        <p class="text-muted-foreground group-hover:text-foreground">
          Support
        </p>
      </UiDropdownMenuItem>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuItem class="flex gap-2 group">
        <Icon name="lucide:log-out" class="group-hover:scale-110" />
        <p class="text-muted-foreground group-hover:text-foreground">
          Logout
        </p>
      </UiDropdownMenuItem>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>