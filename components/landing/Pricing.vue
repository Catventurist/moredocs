<script setup lang="ts">
enum PopularPlan {
  NO = 0,
  YES = 1,
}

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
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Start Free Trial",
    benefitList: [
      "1 team member",
      "1 GB storage",
      "Upto 2 pages",
      "Community support",
      "AI assistance",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 0,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Get starterd",
    benefitList: [
      "4 team member",
      "8 GB storage",
      "Upto 6 pages",
      "Priority support",
      "AI assistance",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 0,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Contact US",
    benefitList: [
      "10 team member",
      "20 GB storage",
      "Upto 10 pages",
      "Phone & email support",
      "AI assistance",
    ],
  },
];
</script>

<template>
  <div class="container py-24 sm:py-32">
    <div class="group/head">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider duration-300 group-hover/head:text-foreground">
        Pricing
      </h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4 duration-300 group-hover/head:text-primary">
        Actually free
      </h2>
      <p class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        With curiosity and effort
      </p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
      <UiCard v-for="{
        title,
        popular,
        price,
        description,
        buttonText,
        benefitList,
      } in plans" :key="title" :class="{
  'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]': popular === PopularPlan?.YES,
}" class="group/card">
        <UiCardHeader>
          <UiCardTitle class="pb-2 duration-300 group-hover/card:text-primary">
            {{ title }}
          </UiCardTitle>
          <UiCardDescription class="pb-4d">
            {{ description }}
          </UiCardDescription>
          <div>
            <h2 class="text-3xl text-muted-foreground font-semibold duration-300 group-hover/card:text-foreground">
              ${{ price }}
            </h2>
            <p class="text-muted-foreground"> /month</p>
          </div>
        </UiCardHeader>

        <UiCardContent class="flex">
          <div class="space-y-4">
            <div v-for="benefit in benefitList" :key="benefit" class="flex">
              <Icon name="lucide:check" class="text-foreground mr-2 duration-300 group-hover/card:text-primary" />
              <h2 class="text-muted-foreground duration-300 group-hover/card:text-foreground">{{ benefit }}</h2>
            </div>
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