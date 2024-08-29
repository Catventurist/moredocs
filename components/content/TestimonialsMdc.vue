<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay';
interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}
interface HeaderProps {
  top: string;
  mid: string;
  bot: string;
}

const HeaderList: HeaderProps[] = [
  {
    top: 'Testimonials',
    mid: 'Thoughts',
    bot: 'Feedback'
  }
]
const reviewList: ReviewProps[] = [
  {
    image: "/Cateouti.png",
    name: "John Doe",
    userName: "Product Manager",
    comment:
      "Wow Vue + Shadcn-Vue is awesome!. This template lets me change colors, fonts and images to match my brand identity. ",
    rating: 5.0,
  },
  {
    image: "/Cateouti.png",
    name: "Sophia Collins",
    userName: "Cybersecurity Analyst",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ",
    rating: 4.8,
  },

  {
    image: "/Cateouti.png",
    name: "Adam Johnson",
    userName: "Chief Technology Officer",
    comment:
      "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 4.9,
  },
  {
    image: "/Cateouti.png",
    name: "Ethan Parker",
    userName: "Data Scientist",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5.0,
  },
  {
    image: "/Cateouti.png",
    name: "Ava Mitchell",
    userName: "IT Project Manager",
    comment:
      "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud incididunt consectetur adipiscing elit.",
    rating: 5.0,
  },
  {
    image: "/Cateouti.png",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4.9,
  },
];
</script>

<template>
  <UiCard class="grid grid-col justify-items-center group/head border-0">
    <UiCardHeader v-for="({ top, mid }) in HeaderList" :key="top" class="text-center">
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
    <UiCardContent class="items-center">
      <UiCarousel :opts="{ align: 'start' }" :plugins="[Autoplay({ delay: 3000, })]" class="md:w-[600px] lg:w-[900px]">
        <UiCarouselContent>
          <UiCarouselItem v-for="review in reviewList" :key="review.name" class="md:basis-1/2 lg:basis-1/3">
            <UiCard class="bg-muted/50 dark:bg-card group/card">
              <UiCardContent class="pt-6 pb-0">
                <div class="flex gap-1 pb-6 opacity-70 duration-300 group-hover/card:opacity-100 text-yellow-400">
                  <Icon name="lucide:star" class="size-4" />
                  <Icon name="lucide:star" class="size-4" />
                  <Icon name="lucide:star" class="size-4" />
                  <Icon name="lucide:star" class="size-4" />
                  <Icon name="lucide:star" class="size-4" />
                </div>
                <p v-if="review?.comment" class="text-muted-foreground duration-300 group-hover/card:text-foreground">
                  "{{ review.comment }}"
                </p>
              </UiCardContent>
              <UiCardHeader class="grid md:grid-cols-3 place-items-center gap-2">
                <UiAvatar>
                  <UiAvatarImage src="/Cateouti.png" alt="cat" class="size-6 duration-300 group-hover/card:scale-110" />
                  <UiAvatarFallback>Cat</UiAvatarFallback>
                </UiAvatar>
                <UiCardTitle v-if="review?.name"
                  class="text-lg text-foreground-muted duration-300 group-hover/card:text-primary">
                  {{ review.name }}
                </UiCardTitle>
                <UiCardDescription v-if="review?.userName"
                  class="text-foreground/40 duration-300 group-hover/card:text-foreground">
                  {{ review.userName }}
                </UiCardDescription>
              </UiCardHeader>
            </UiCard>
          </UiCarouselItem>
        </UiCarouselContent>
        <UiCarouselPrevious />
        <UiCarouselNext />
      </UiCarousel>
    </UiCardContent>
  </UiCard>
</template>