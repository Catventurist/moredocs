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
    top: 'Quotes',
    mid: 'Thoughts',
    bot: 'Philosophy'
  }
]
const reviewList: ReviewProps[] = [
  {
    image: "/Cateouti.png",
    name: "George Orwell",
    userName: "Author",
    comment:
      "In a time of deceit telling the truth is a revolutionary act.",
    rating: 5.0,
  },
  {
    image: "/Cateouti.png",
    name: "Buckminister Fuller",
    userName: "Engineer",
    comment:
      "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.",
    rating: 4.8,
  }, {
    image: "/Cateouti.png",
    name: "Robert Anton Wilson",
    userName: "Discordian",
    comment:
      "The fear of death is the beginning of slavery.",
    rating: 4.9,
  },
  {
    image: "/Cateouti.png",
    name: "Terence McKenna",
    userName: "Botanist",
    comment:
      "The syntactical nature of reality, the real secret of magic, is that the world is made of words. And if you know the words that the world is made of, you can make of it whatever you wish.",
    rating: 5.0,
  },
  {
    image: "/Cateouti.png",
    name: "Aldous Huxley",
    userName: "Author",
    comment:
      "The more powerful and original a mind, the more it will incline towards the religion of solitude.",
    rating: 5.0,
  },
  {
    image: "/Cateouti.png",
    name: "Jiddu Krishnamurti",
    userName: "Thinker",
    comment:
      "It is no measure of health to be well adjusted to a profoundly sick society.",
    rating: 4.9,
  },
];
</script>

<template>
  <UiCard class="grid grid-col justify-items-center group/head border-0 lg:my-14">
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