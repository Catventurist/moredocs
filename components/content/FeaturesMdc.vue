<script setup lang="ts">
interface FeaturesProps {
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
    top: 'New',
    mid: 'Advanced Features',
    bot: 'and options'
  }
]
const featureList: FeaturesProps[] = [
  {
    icon: "lucide:tablet-smartphone",
    title: "Mobile Friendly",
    description:
      "Should work in most resolutions.",
  },
  {
    icon: "lucide:badge-check",
    title: "MDC Elements",
    description:
      "Markdown Components enhanced further",
  },
  {
    icon: "lucide:goal",
    title: "Pretty Content",
    description:
      "Many ways to use Typography",
  },
  {
    icon: "lucide:picture-in-picture",
    title: "Variable Visuals",
    description:
      "Tailwind makes UI look good",
  },
  {
    icon: "lucide:mouse-pointer-click",
    title: "Clear UI",
    description:
      "Moderate animations and shadows",
  },
  {
    icon: "lucide:newspaper",
    title: "Humorous Headline",
    description:
      "Might see something fun by digging deeper",
  },
];
</script>

<template>
  <div class="grid lg:grid-cols-3 place-items-center lg:my-14">
    <UiCard v-for="({ top, mid, bot }) in HeaderList" :key="top" class=" text-end group/head border-0">
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
    <div class="col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <div v-for="{ icon, title, description } in featureList" :key="title">
        <UiCard class="h-full bg-background border-0 shadow-none group/card">
          <UiCardHeader class="flex justify-center items-center">
            <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
              <Icon v-if="icon" :name="icon" class="size-6 text-primary duration-300 group-hover/card:text-foreground" />
            </div>
            <h2 v-if="title" class="duration-300 group-hover/card:text-primary">
              <ContentSlot :use="$slots.title" unwrap="p" />
              {{ title }}
            </h2>
          </UiCardHeader>
          <UiCardContent v-if="description" class="text-muted-foreground text-center">
            <ContentSlot :use="$slots.description" unwrap="p" />
            {{ description }}
          </UiCardContent>
        </UiCard>
      </div>
    </div>
  </div>
</template>

