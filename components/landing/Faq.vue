<script setup lang="ts">
interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is this template free?",
    answer: "Yes. It is a free Shadcn/Vue template.",
    value: "item-1",
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate velit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam consectetur sapiente, iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-2",
  },
  {
    question:
      "Lorem ipsum dolor sit amet Consectetur natus dolor minus quibusdam?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis.",
    value: "item-3",
  },
  {
    question: "Excepteur sint occaecat cupidata non proident sunt?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    value: "item-4",
  },
  {
    question:
      "Enim ad minim veniam, quis nostrud exercitation ullamco laboris?",
    answer: "consectetur adipisicing elit. Sint labore.",
    value: "item-5",
  },
];
</script>

<template>
  <div class="container lg:w-[75%] py-24 sm:py-32">
    <div class="text-center mb-8 group/head">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider duration-300 group-hover/head:text-foreground">
        FAQS
      </h2>
      <h2
        class="text-3xl md:text-4xl text-center text-muted-foreground font-bold duration-300 group-hover/head:text-primary">
        Common Questions
      </h2>
    </div>
    <UiAccordion type="single" collapsible class="UiAccordionRoot group/acc">
      <UiAccordionItem v-for="{ question, answer, value } in FAQList" :key="value" :value="value">
        <UiAccordionTrigger>
          <h2 class="text-left">
            {{ question }}
          </h2>
        </UiAccordionTrigger>
        <UiAccordionContent>
          <p class="text-left text-primary duration-300 hover:text-foreground">
            {{ answer }}
          </p>
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>

    <div class="font-medium mt-8 gap-4 text-center">
      Still have questions?
      <NuxtLink to="/">
        <UiButton>
          Contact us
        </UiButton>
      </NuxtLink>
    </div>
  </div>
</template>