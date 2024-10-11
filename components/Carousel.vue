<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  slides: { 
    title1: string, 
    title2: string, 
    text: string, 
    background_image: string 
  }[]
}>()

// State to manage the active slide
const activeIndex = ref(0);
const intervalDuration = 6000; // 6 seconds interval

// Function to go to the next slide
const goToNextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % props.slides.length;
};

// Function to go to the previous slide
const goToPreviousSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + props.slides.length) % props.slides.length;
};

// Automatically change slides every few seconds
let interval: NodeJS.Timeout | null = null;

onMounted(() => {
  interval = setInterval(goToNextSlide, intervalDuration);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});

</script>
  <template>
    <LayoutContainer class="relative h-[500px] flex items-center !max-w-full">
      <!-- Previous slide button -->
      <button 
        @click="goToPreviousSlide" 
        class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Slides -->
      <div 
        v-for="(slide, index) in props.slides" 
        :key="index"
        :style="{ backgroundImage: `url(${slide.background_image})` }"
        class="absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center transition-opacity duration-1000 ease-in-out"
        :class="index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <!-- Background Image dim -->
        <div class="absolute inset-0 bg-black/50 "></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8">
          <div class="max-w-xl text-left text-shadow ">
            <h1 class="font-extrabold">
              {{ slide.title1 }}
              <strong class="block font-extrabold text-primary">{{ slide.title2 }}</strong>
            </h1>
            <p class="mt-4 max-w-lg text-white ">
              {{ slide.text }}
            </p>
          </div>
        </div>
      </div>

      <!-- Next slide button -->
      <button 
        @click="goToNextSlide" 
        class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </LayoutContainer>
  </template>

