<script>
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/vue/20/solid";

import previewhover from '@/components/Client/Shelter/shelter_HoverName.vue'

export default {
    components: {
        ChevronLeftIcon, ChevronRightIcon, previewhover
    },
    data() {
        return {
            currentIndex: 0,
            hoveredIndex: null, // Track the hovered item index
            viewreportpost: {
                id: 1,
                username: "Eric Jr.",
                name: "Eric",
                lastname: "Ramones",
                badge: "rescuer",
                type: "Missing Dog",
                caption: "Found this dog at abandoned lot near STI College Davao",
                location:
                    "#506 Lim Building J.P. Laurel Avenue, Corner Acacia, Davao City, Philippines",
                animalstatus: "Severe",
                imageUrls: [
                    require("@/assets/images/homepage.png"),
                    require("@/assets/images/eric.png"),
                    require("@/assets/images/bals.png"),
                ],
            },
        };
    },
    computed: {
        currentImageUrl() {
            return this.viewreportpost.imageUrls[this.currentIndex];
        },
        hasPrev() {
            return this.currentIndex > 0;
        },
        hasNext() {
            return this.currentIndex < this.viewreportpost.imageUrls.length - 1;
        },
    },
    methods: {
        nextImage() {
            if (this.hasNext) {
                this.currentIndex++;
            }
        },
        prevImage() {
            if (this.hasPrev) {
                this.currentIndex--;
            }
        },
    },
};
</script>
<template>
    <div class="flex justify-start mb-8">
        <RouterLink to="/rescueoperation" class="flex items-center">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span class="text-[14px] hover:font-medium">Return</span>
        </RouterLink>
    </div>
    <div class="flex flex-col justify-center items-center sm:w-fit xl:w-[80vw] mx-auto">
        <div class="border rounded-lg bg-white sm:w-full xl:w-[80%] h-fit mb-4">
            <div class="px-[2rem] py-[10px] border-b-2 flex items-center gap-x-2 text-gray-600">
                <div @mouseenter="hoveredIndex = index" @mouseleave="hoveredIndex = null" class="relative inline-block">
                    <RouterLink class="hover:text-gray-900 hover:underline">
                        <h1 class="text-sm font-semibold">
                            {{ viewreportpost.username }}
                        </h1>
                    </RouterLink>
                    <previewhover v-if="hoveredIndex === index" class="absolute z-10" />
                </div>
                <span class="text-[12px] border rounded-xl px-2 text-gray-500">
                    {{ viewreportpost.badge }}</span>
            </div>
            <div class="bg-slate-50 h-fit">
                <div class="relative flex justify-center items-center">
                    <div
                        class="absolute left-6 z-10 bg-white bg-opacity-40 rounded-full flex items-center hover:bg-gray-100 hover:bg-opacity-50">
                        <button v-if="hasPrev" @click="prevImage">
                            <ChevronLeftIcon class="h-8 w-8 text-gray-500" />
                        </button>
                    </div>

                    <div class="mx-2">
                        <img :src="currentImageUrl" alt="Image post"
                            class="flex-shrink-0 sm:h-fit xl:h-[40rem] object-contain" />
                    </div>

                    <div
                        class="absolute right-6 z-10 bg-white bg-opacity-40 rounded-full flex items-center hover:bg-gray-100 hover:bg-opacity-50">
                        <button v-if="hasNext" @click="nextImage">
                            <ChevronRightIcon class="h-8 w-8 text-gray-500" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="px-[2rem] py-[2rem] flex flex-col text-sm border-t">
                <span class="font-medium"> {{ viewreportpost.type }}</span>
                <span> {{ viewreportpost.animalstatus }}</span>
                <span> {{ viewreportpost.location }}</span>
                <p class="text-sm font-medium text-gray-900 pt-[1rem]">
                    {{ viewreportpost.caption }}
                </p>
            </div>
        </div>
    </div>
</template>
