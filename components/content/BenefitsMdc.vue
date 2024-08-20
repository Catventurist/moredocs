<script setup lang="ts">
interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}
interface HeaderProps {
  top: string;
  mid: string;
  bot: string;
}

const HeaderList: HeaderProps[] = [
  {
    top: 'Benefits',
    mid: 'Some neat features',
    bot: 'Try it out!',
  }
]

const benefitList: BenefitsProps[] = [
  {
    icon: "lucide:blocks",
    title: "Build Trust",
    description:
      "Or use tools, which require none",
  },
  {
    icon: "lucide:line-chart",
    title: "More Charts",
    description:
      "Visualizing numbers",
  },
  {
    icon: "lucide:wallet",
    title: "Own your money",
    description:
      "If someone else has access, it is not yours.",
  },
  {
    icon: "lucide:sparkle",
    title: "Test Ideas",
    description:
      "And see if they work",
  },
];
</script>

<template>
  <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
    <UiCard v-for="({ top, mid, bot }, index) in HeaderList" :key="top" class="group/head border-0">
      <UiCardHeader>
        <UiCardTitle v-if="top" class="text-lg text-primary mb-2 duration-300 delay-75 group-hover/head:text-foreground">
          <ContentSlot :use="$slots.top" unwrap="p" />
          {{ top }}
        </UiCardTitle>
        <UiCardDescription v-if="mid"
          class="text-3xl md:text-4xl font-bold mb-4 duration-300 delay-75 group-hover/head:text-primary">
          <ContentSlot :use="$slots.mid" unwrap="p" />
          {{ mid }}
        </UiCardDescription>
      </UiCardHeader>
      <UiCardContent v-if="bot" class="text-xl text-muted-foreground mb-8">
        <ContentSlot :use="$slots.bot" unwrap="p" />
        {{ bot }}
      </UiCardContent>
    </UiCard>
    <div class="grid lg:grid-cols-2 gap-4 w-full">
      <UiCard v-for="({ icon, title, description }, index) in benefitList" :key="title"
        class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number">
        <UiCardHeader class="flex justify-between">
          <UiCardTitle v-if="icon" class="flex flex-row justify-between">
            <Icon :name="icon"
              class="size-8 mb-6 text-primary duration-300 delay-75 group-hover/number:text-foreground" />
            <h2
              class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-foreground/30">
              0{{ index + 1 }}
            </h2>
          </UiCardTitle>
          <UiCardDescription v-if="title"
            class="text-xl text-foreground/80 duration-300 delay-75 group-hover/number:text-primary">
            <ContentSlot :use="$slots.title" unwrap="p" />
            {{ title }}
          </UiCardDescription>
        </UiCardHeader>
        <UiCardContent v-if="description" class="text-sm text-muted-foreground">
          <ContentSlot :use="$slots.description" unwrap="p" />
          {{ description }}
        </UiCardContent>
      </UiCard>
    </div>
  </div>
</template>