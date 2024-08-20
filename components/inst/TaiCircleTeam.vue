<template>
    <div class="container size-48 grid place-content-center">
        <div style="--total: 12;" class="relative rounded-full grid size-64 [grid-template-areas:'stack'] place-content-center
        [&>label]:[grid-area:stack]
        [&>label]:size-20
        [&>label]:rounded-full
        [&>label]:grid
        [&>label]:place-content-center 

        [&>label]:relative
    
        [&>label]:text-xl
        [&>label]:transition-all 
        [&>label]:duration-500
        [&>label]:cursor-pointer
        [&>label]:ring-4
     [&>label]:ring-white/5
        [&_img]:rounded-full
        [&_img]:s-full
        [&_img]:object-cover
        [&_img]:transition-all
        [&_img]:duration-1000
        [&_img]:ease-in-out
        [&_svg]:transition-all
        [&_svg]:duration-500
        [&_svg]:ease-in-out
        [&_svg]:absolute
        [&_svg]:top-2/4
        [&_svg]:left-2/4
        [&_svg]:-translate-x-2/4
        [&_svg]:-translate-y-2/4
        [&_svg]:w-[100px]
        [&_svg]:opacity-0 
        [&_svg]:-z-10

        [&_input:checked+label]:transform-none
        [&_input:checked+label]:duration-1000
        [&_input:checked+label>img]:scale-[200%]
        [&_input:checked+label>svg]:opacity-100
        [&_input:checked+label>svg]:scale-[225%]
        [&_input:checked+label>svg]:rotate-45
        [&_input:checked+label>svg]:[transition-delay:700ms,500ms,2000ms]
        
        peer-checked/theme:before:[&_#center]:-inset-[3000%]
        peer-checked/theme:[&>label]:text-white
        ">
            <div id="center" class="absolute inset-0 m-auto text-foreground size-32 bg-primary/15 rounded-full grid place-content-center uppercase font-thin tracking-wider text-lg  
            before:absolute 
            before:-inset-0
            before:bg-muted 
            before:rounded-full
            before:-z-10
            before:transition-all
            before:duration-1000
            peer-checked/theme:before:-inset-[3000%]        
            ">
                The Team
            </div>

            <input type="radio" name="radio-avatar" class="sr-only">
            <label for="radio-avatar-1" class="avatar" style="--i:1">
                <img v-for="({ imageUrl }) in teamList" :src="imageUrl" alt="cat" />
                <svg v-for="({ firstName, lastName }) in teamList" viewBox="0 0 300 300">
                    <text fill="purple">
                        <textPath xlink:href="#circlePath">
                            {{ firstName }} {{ lastName }}
                        </textPath>
                    </text>
                </svg>
            </label>
        </div>

        <!-- SVG template with dynamic text -->
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 300" width="0" height="0">
            <defs>
                <!-- Increase the diameter of the circle by adjusting the radius values -->
                <path id="circlePath" d="M 150, 150 m -100, 0 a 100,100 0 0,1 200,0 a 100,100 0 0,1 -200,0" />
            </defs>
        </svg>

    </div>
</template>

<script setup lang="ts">
interface TeamProps {
    imageUrl?: string;
    firstName?: string;
    lastName: string;
    positions: string[];
    socialNetworks?: SocialNetworkProps[];
}

interface SocialNetworkProps {
    name?: string;
    url: string;
    icon?: string;
}

const teamList: TeamProps[] = [
    {
        imageUrl: "https://i.pravatar.cc/100?img=1",
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
            "https://i.pravatar.cc/100?img=2",
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
            "https://i.pravatar.cc/100?img=3",
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
            "https://i.pravatar.cc/100?img=3",
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
            "https://i.pravatar.cc/100?img=4",
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
            "https://i.pravatar.cc/100?img=5",
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
            "https://i.pravatar.cc/100?img=6",
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
            "https://i.pravatar.cc/100?img=7",
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
            "https://i.pravatar.cc/100?img=8",
        firstName: "Zooe",
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
            "https://i.pravatar.cc/100?img=9",
        firstName: "Zoee",
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
            "https://i.pravatar.cc/100?img=10",
        firstName: "Zoe",
        lastName: "Gaarcia",
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
            "https://i.pravatar.cc/100?img=11",
        firstName: "Zoe",
        lastName: "Garrcia",
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
];

</script>


<style>
.avatar {
    --radius: 14rem;
    --d: calc(var(--i) / var(--total));
    --r-offset: -0.15turn;
    --r-amount: 1turn;
    --r: calc((var(--r-amount) * var(--d)) + var(--r-offset));
    transform: rotate(var(--r)) translate(var(--radius)) rotate(calc(-1 * var(--r)));
}
</style>