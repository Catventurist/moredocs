<script setup lang="ts">
interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "lucide:tablet-smartphone",
    title: "Mobile Friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
  },
  {
    icon: "lucide:badge-check",
    title: "Social Proof",
    description:
      "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
  },
  {
    icon: "lucide:goal",
    title: "Targeted Content",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
  },
  {
    icon: "lucide:picture-in-picture",
    title: "Strong Visuals",
    description:
      "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
  },
  {
    icon: "lucide:mouse-pointer-click",
    title: "Clear CTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
  },
  {
    icon: "lucide:newspaper",
    title: "Clear Headline",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
  },
];
</script>

<template>
  <div class="container py-24 sm:py-32 group/head">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider duration-300 group-hover/head:text-foreground">
      Features
    </h2>
    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4 duration-300 group-hover/head:text-primary">
      Stuff
    </h2>
    <p class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      And things
    </p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <div v-for="{ icon, title, description } in featureList" :key="title">
        <UiCard class="h-full bg-background border-0 shadow-none group/card">
          <UiCardHeader class="flex justify-center items-center">
            <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
              <Icon v-if="icon" :name="icon" class="size-6 text-primary duration-300 group-hover/card:text-foreground" />
            </div>
            <h2 v-if="title" class="duration-300 group-hover/card:text-primary">
              {{ title }}
            </h2>
          </UiCardHeader>
          <UiCardContent v-if="description" class="text-muted-foreground text-center">
            {{ description }}
          </UiCardContent>
        </UiCard>
      </div>
    </div>
  </div>
</template>

