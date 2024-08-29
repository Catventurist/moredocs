<script setup lang="ts">
interface FAQProps {
  question: string;
  answer: string;
  value: string;
}
interface HeaderProps {
  top: string;
  mid: string;
  bot: string;
}

const HeaderList: HeaderProps[] = [
  {
    top: 'Frequently Asked Questions',
    mid: 'Some short answers',
    bot: 'Still have questions?'
  }
]
const FAQList: FAQProps[] = [
  {
    question: "Is this template free?",
    answer: "Yes. It is a free Shadcn/Vue template.",
    value: "item-1",
  },
  {
    question: "Who made it?",
    answer:
      "Cat",
    value: "item-2",
  },
  {
    question:
      "Where was it made?",
    answer:
      "In Virtual World",
    value: "item-3",
  },
  {
    question: "What is it?",
    answer: "A versatile website/app",
    value: "item-4",
  },
  {
    question:
      "Where is the Cat?",
    answer: "",
    value: "item-5",
  },
];
</script>

<template>
  <div class="grid lg:grid-cols-3 lg:gap-24 items-center group/head">
    <UiCard v-for="({ top, mid }) in HeaderList" :key="top" class="border-0">
      <UiCardHeader class="text-center">
        <UiCardTitle v-if="top"
          class="self-center text-lg text-primary mb-2 duration-300 group-hover/head:text-foreground">
          <ContentSlot :use="$slots.top" unwrap="p" />
          {{ top }}
        </UiCardTitle>
        <UiCardDescription v-if="mid"
          class="text-3xl md:text-4xl font-bold mb-4 duration-300 group-hover/head:text-primary">
          <ContentSlot :use="$slots.mid" unwrap="p" />
          {{ mid }}
        </UiCardDescription>
      </UiCardHeader>
    </UiCard>
    <UiCard class="lg:col-span-2">
      <UiCardHeader>
        <UiAccordion type="single" collapsible class="UiAccordionRoot">
          <UiAccordionItem v-for="{ question, answer, value } in FAQList" :key="value" :value="value">
            <UiAccordionTrigger v-if="question" class="text-left">
              <ContentSlot :use="$slots.question" unwrap="p" />
              {{ question }}
            </UiAccordionTrigger>
            <UiAccordionContent v-if="answer" class="text-left text-muted-foreground duration-300 hover:text-foreground">
              <ContentSlot :use="$slots.answer" unwrap="p" />
              {{ answer }}
            </UiAccordionContent>
          </UiAccordionItem>
        </UiAccordion>
      </UiCardHeader>
      <UiCardContent v-for="({ bot }) in HeaderList" :key="bot"
        class="flex flex-row justify-center font-medium mt-4 gap-4">
        <h2 v-if="bot" class="mt-1 text-lg text-muted-foreground duration-300 delay-75 group-hover/head:text-foreground">
          <ContentSlot :use="$slots.bot" unwrap="p" />
          {{ bot }}
        </h2>
        <NuxtLink to="/">
          <UiButton variant="outline" class="flex flex-row items-center gap-2">
            <Icon name="lucide:chat-bubble" class="size-4" />
            Contact
          </UiButton>
        </NuxtLink>
      </UiCardContent>
    </UiCard>
  </div>
</template>