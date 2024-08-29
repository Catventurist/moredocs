<script setup lang="ts">
enum PopularPlan {
  NO = 0,
  YES = 1,
}
interface HeaderProps {
  top: string;
  mid: string;
  bot: string;
}

const HeaderList: HeaderProps[] = [
  {
    top: 'Pricing',
    mid: 'Actually',
    bot: 'Free',
  }
]
interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "No need for monetary exchange.",
    buttonText: "Install",
    benefitList: [
      "1 team member",
      "0 GB storage",
      "Upto 2 pages",
      "Self-support",
      "No AI",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 0,
    description:
      "Copy, modify, enjoy",
    buttonText: "Get started",
    benefitList: [
      "4 team members",
      "8 GB storage",
      "Upto 6 pages",
      "Priority",
      "No AI",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 0,
    description:
      "The biggest plan",
    buttonText: "Contact",
    benefitList: [
      "Many team members",
      "20 GB storage",
      "Upto 100 pages",
      "DIY support",
      "Still no AI",
    ],
  },
];
</script>

<template>
  <div class="grid grid-col justify-items-center lg:my-14">
    <UiCard v-for="({ top, mid, bot }) in HeaderList" :key="top" class="text-center group/head border-0">
      <UiCardHeader>
        <UiCardTitle v-if="top" class="text-lg text-primary mb-2 duration-300 group-hover/head:text-foreground">
          <ContentSlot :use="$slots.top" unwrap="p" />
          {{ top }}
        </UiCardTitle>
        <UiCardDescription v-if="mid"
          class="text-3xl md:text-4xl font-bold mb-4 duration-300 group-hover/head:text-primary">
          <ContentSlot :use="$slots.mid" unwrap="p" />
          {{ mid }}
        </UiCardDescription>
      </UiCardHeader>
      <UiCardContent v-if="bot" class="text-xl text-muted-foreground mb-8">
        <ContentSlot :use="$slots.bot" unwrap="p" />
        {{ bot }}
      </UiCardContent>
    </UiCard>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <UiCard v-for="{
        title,
        popular,
        price,
        description,
        buttonText,
        benefitList,
      } in plans" :key="title" :class="{
  'drop-shadow-xl shadow-black/10 dark:shadow-primary/10 border-[1.5px] border-primary lg:scale-[1.1]': popular === PopularPlan?.YES,
}" class="group/card hover:bg-primary/10">
        <UiCardHeader>
          <UiCardTitle class="pb-2 duration-300 group-hover/card:text-primary">
            {{ title }}
          </UiCardTitle>
          <UiCardDescription class="pb-4">
            {{ description }}
          </UiCardDescription>
          <div class="flex items-center">
            <h2 class="text-3xl text-muted-foreground font-semibold duration-300 group-hover/card:text-foreground">
              € {{ price }}
            </h2>
            <p class="mt-3 text-muted-foreground"> /month</p>
          </div>
        </UiCardHeader>
        <UiCardContent>
          <div v-for="benefit in benefitList" :key="benefit" class="flex justify-items-center gap-4">
            <Icon name="lucide:check" class="text-foreground mr-2 duration-300 group-hover/card:text-primary" />
            <h2 class="text-muted-foreground duration-300 group-hover/card:text-foreground">
              {{ benefit }}
            </h2>
          </div>
        </UiCardContent>
        <UiCardFooter>
          <UiButton :variant="popular === PopularPlan?.NO ? 'secondary' : 'default'" class="w-full">
            {{ buttonText }}
          </UiButton>
        </UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>