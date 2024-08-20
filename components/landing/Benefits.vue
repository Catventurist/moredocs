<script setup lang="ts">
interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "lucide:blocks",
    title: "Build Brand Trust",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
  {
    icon: "lucide:line-chart",
    title: "More Leads",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.",
  },
  {
    icon: "lucide:wallet",
    title: "Higher Conversions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam",
  },
  {
    icon: "lucide:sparkle",
    title: "Test Marketing Ideas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
];
</script>

<template>
  <div class="container grid lg:grid-cols-2 place-items-center lg:gap-24">
    <div class="group/head">
      <h2 class="text-lg text-primary mb-2 duration-300 delay-75 group-hover/head:text-foreground">
        Benefits
      </h2>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 duration-300 delay-75 group-hover/head:text-primary">
        Your Shortcut to Success
      </h2>
      <p class="text-xl text-muted-foreground mb-8">
        Try it out
      </p>
    </div>
    <div class="grid lg:grid-cols-2 gap-4 w-full">
      <UiCard v-for="({ icon, title, description }, index) in benefitList" :key="title"
        class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number">
        <UiCardHeader>
          <div class="flex justify-between">
            <Icon v-if="icon" :name="icon"
              class="size-8 mb-6 text-primary duration-300 delay-75 group-hover/number:text-foreground" />
            <h2
              class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
              0{{ index + 1 }}
            </h2>
          </div>
          <UiCardTitle v-if="title" class="text-foreground/80 duration-300 delay-75 group-hover/number:text-primary">
            {{ title }}
          </UiCardTitle>
        </UiCardHeader>
        <UiCardContent v-if="description" class="text-muted-foreground">
          {{ description }}
        </UiCardContent>
      </UiCard>
    </div>
  </div>
</template>