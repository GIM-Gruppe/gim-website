<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  slides: {
    title1: string;
    title2: string;
    text: string;
    background_image: string;
  }[];
}>();

const activeIndex = ref(0);
const intervalDuration = 6000; // 6 Sekunden

let interval: ReturnType<typeof setInterval> | null = null;
const isPaused = ref(false);

const goToNextSlide = () => {
  if (!props.slides.length) return;
  activeIndex.value = (activeIndex.value + 1) % props.slides.length;
};

const goToPreviousSlide = () => {
  if (!props.slides.length) return;
  activeIndex.value =
    (activeIndex.value - 1 + props.slides.length) % props.slides.length;
};

const goToSlide = (index: number) => {
  if (!props.slides.length) return;
  activeIndex.value = index;
};

const startAutoSlide = () => {
  if (interval || props.slides.length <= 1) return;
  interval = setInterval(() => {
    if (!isPaused.value) {
      goToNextSlide();
    }
  }, intervalDuration);
};

const stopAutoSlide = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

const handleMouseEnter = () => {
  isPaused.value = true;
};

const handleMouseLeave = () => {
  isPaused.value = false;
};

onMounted(() => {
  if (typeof window !== "undefined") {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (!prefersReducedMotion.matches) {
      startAutoSlide();
    }
  }
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<template>
  <LayoutContainer
    class="relative h-[300px] lg:h-[500px] flex items-center !max-w-full"
    role="region"
    aria-roledescription="Karussell"
    aria-label="Highlight-Bereich"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focusin="handleMouseEnter"
    @focusout="handleMouseLeave"
  >
    <!-- Previous slide button -->
    <button
      type="button"
      @click="goToPreviousSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2 focus:outline-none"
      aria-label="Vorherige Folie"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 text-white"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <!-- Slides -->
    <div
      v-for="(slide, index) in props.slides"
      :key="index"
      :style="{ backgroundImage: `url(${slide.background_image})` }"
      class="absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center transition-opacity duration-1000 ease-in-out"
      :class="index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      :aria-hidden="index !== activeIndex"
    >
      <!-- Background Image dim -->
      <div class="absolute inset-0 bg-black/50"></div>

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8"
      >
        <div class="max-w-xl text-left text-shadow">
          <h1 class="font-extrabold text-primary">
            {{ slide.title1 }}
            <strong class="block font-extrabold text-priomary">
              {{ slide.title2 }}
            </strong>
          </h1>
          <p class="mt-4 max-w-lg text-white">
            {{ slide.text }}
          </p>
        </div>
      </div>
    </div>

    <!-- Next slide button -->
    <button
      type="button"
      @click="goToNextSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2 focus:outline-none"
      aria-label="Nächste Folie"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 text-white"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>

    <!-- Pager Dots -->
    <div
      v-if="props.slides.length > 1"
      class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20"
      role="group"
      aria-label="Folie auswählen"
    >
      <button
        v-for="(slide, index) in props.slides"
        :key="'dot-' + index"
        type="button"
        class="h-3 w-3 rounded-full border border-white focus:outline-none"
        :class="index === activeIndex ? 'bg-white' : 'bg-white/30'"
        @click="goToSlide(index)"
        :aria-label="`Folie ${index + 1} von ${props.slides.length}`"
        :aria-current="index === activeIndex ? 'true' : undefined"
      />
    </div>
  </LayoutContainer>
</template>
