<script setup lang="ts">
interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

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
  <div class="py-24 sm:py-32">
    <div class="text-center mb-8 group/head">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider duration-300 group-hover/head:text-foreground">
        Testimonials
      </h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4 duration-300 group-hover/head:text-primary">
        Thoughts and feedback
      </h2>
    </div>
    <UiCarousel :opts="{
      align: 'start',
    }" class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto">
      <UiCarouselContent>
        <UiCarouselItem v-for="review in reviewList" :key="review.name" class="md:basis-1/2 lg:basis-1/3">
          <UiCard class="bg-muted/50 dark:bg-card group/card">
            <UiCardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6 duration-300 group-hover/card:translate-x-2">
                <Icon name="lucide:star" class="size-4 fill-primary text-primary" />
                <Icon name="lucide:star" class="size-4 fill-primary text-primary" />
                <Icon name="lucide:star" class="size-4 fill-primary text-primary" />
                <Icon name="lucide:star" class="size-4 fill-primary text-primary" />
                <Icon name="lucide:star" class="size-4 fill-primary text-primary" />
              </div>
              <span class="text-muted-foreground duration-300 group-hover/card:text-foreground">
                "{{ review.comment }}"
              </span>
            </UiCardContent>

            <UiCardHeader>
              <div class="flex flex-row items-center gap-4">
                <UiAvatar>
                  <UiAvatarImage src="/Cateouti.png" alt="cat" class="duration-300 group-hover/card:scale-110" />
                  <UiAvatarFallback>Cat</UiAvatarFallback>
                </UiAvatar>

                <div class="flex flex-col">
                  <UiCardTitle>
                    <span class="text-lg text-foreground-muted duration-300 group-hover/card:text-primary">
                      {{ review.name }}
                    </span>
                  </UiCardTitle>
                  <UiCardDescription>
                    <span class="text-foreground/40 duration-300 group-hover/card:text-foreground">
                      {{ review.userName }}
                    </span>
                  </UiCardDescription>
                </div>
              </div>
            </UiCardHeader>
          </UiCard>
        </UiCarouselItem>
      </UiCarouselContent>
      <UiCarouselPrevious />
      <UiCarouselNext />
    </UiCarousel>
  </div>
</template>