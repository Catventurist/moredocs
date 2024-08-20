<script setup lang="ts">
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
  icon?: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/Cateouti.png",
    firstName: "Leo",
    lastName: "Miranda",
    positions: ["Vue Fronted developer", "Creator of this website"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
        icon: "lucide:linkedin"
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
        icon: "lucide:github"
      },
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
        icon: "lucide:x"
      },
    ],
  },
  {
    imageUrl:
      "/Cateouti.png",
    firstName: "Elizabeth",
    lastName: "Moore",
    positions: ["UI/UX Designer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
  {
    imageUrl:
      "/Cateouti.png",
    firstName: "David",
    lastName: "Diaz",
    positions: ["Machine Learning Engineer", "TensorFlow Tinkerer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
    ],
  },
  {
    imageUrl:
      "/Cateouti.png",
    firstName: "Sarah",
    lastName: "Robinson",
    positions: ["Cloud Native Developer", " Kubernetes Orchestrator"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
  {
    imageUrl:
      "/Cateouti.png",
    firstName: "Michael",
    lastName: "Holland",
    positions: ["DevOps Engineer", "CI/CD Pipeline Mastermind"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  {
    imageUrl:
      "/Cateouti.png",
    firstName: "Zoe",
    lastName: "Garcia",
    positions: ["JavaScript Evangelist", "Deno Champion"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
    ],
  },
  {
    imageUrl:
      "/Cateouti.png",
    firstName: "Evan",
    lastName: "James",
    positions: ["Backend developer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
  {
    imageUrl:
      "/Cateouti.png",
    firstName: "Pam",
    lastName: "Taylor",
    positions: ["Fullstack developer", "UX researcher"],
    socialNetworks: [
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
  {
    imageUrl:
      "/Cateouti.png",
    firstName: "John",
    lastName: "Wayne",
    positions: ["Cloud Native Developer", " Kubernetes Orchestrator"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
];

</script>

<template>
  <div class="container lg:w-[75%] py-24 sm:py-32">
    <div class="text-center mb-8 group/head">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider duration-300 group-hover/head:text-foreground">
        Interesting
      </h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold duration-300 group-hover/head:text-primary">
        People
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <UiCard v-for="{
        imageUrl,
        firstName,
        lastName,
        positions
      } in teamList" :key="imageUrl"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg group/card">
        <UiCardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img :src="imageUrl" alt="cat"
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]" />
          </div>
          <UiCardTitle class="py-6 pb-4 px-6 duration-300 group-hover/card:text-primary">
            {{ firstName }}
            <p class="text-primary duration-300 group-hover/card:text-foreground">{{ lastName }}</p>
          </UiCardTitle>
        </UiCardHeader>

        <UiCardContent v-for="(position, index) in positions" :key="index" :class="{
          'pb-0 text-muted-foreground ': true,
          'pb-4': index === positions.length - 1,
        }">
          {{ position }}
          <p v-if="index < positions.length - 1">,</p>
        </UiCardContent>
        <UiCardFooter class="space-x-4 mt-auto">
        </UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>