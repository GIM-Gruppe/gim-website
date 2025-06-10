<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps<{
  title: string;
  description: string;
}>();

// Reactive flag for mobile (<640px)
const isMobile = ref(false);
let mq: MediaQueryList;

onMounted(() => {
  // set up media‐query listener
  mq = window.matchMedia('(max-width: 639px)');
  isMobile.value = mq.matches;
  mq.addEventListener('change', (e) => {
    isMobile.value = e.matches;
  });
});

onUnmounted(() => {
  mq.removeEventListener('change', () => {});
});

// Compute button size based on isMobile
const btnSize = computed<'lg' | 'xl'>(() =>
  isMobile.value ? 'lg' : 'xl'
);
</script>

<template>
  <LayoutContainer>
    <!-- Text block -->
    <div class="flex items-center flex-wrap">
      <div class="grow-0">
        <h1 class="font-semibold">{{ props.title }}</h1>
        <p class="mt-4">{{ props.description }}</p>
      </div>
    </div>

    <div
      class="mt-6 flex flex-col items-center
             sm:flex-row sm:justify-between gap-3
             w-full max-w-3xl mx-auto"
    >
      <UiButton
        :size="btnSize"
        href="/contact"
        label="Termin vereinbaren"
        class="w-3/4 sm:w-1/3"
      />
      <UiButton
        :size="btnSize"
        :style="'outline'"
        href="/services"
        label="Zu den Leistungen"
        class="w-3/4 sm:w-1/3"
      />
    </div>
  </LayoutContainer>
</template>
