<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const props = defineProps<{
  title: string;
  description: string;
}>();

const isMobile = ref(false);
let mq: MediaQueryList | null = null;

// Handler separat definieren, damit removeEventListener funktioniert
const handleMqChange = (e: MediaQueryListEvent) => {
  isMobile.value = e.matches;
};

onMounted(() => {
  if (typeof window === "undefined") return;

  mq = window.matchMedia("(max-width: 639px)");
  isMobile.value = mq.matches;
  mq.addEventListener("change", handleMqChange);
});

onUnmounted(() => {
  if (mq) {
    mq.removeEventListener("change", handleMqChange);
  }
});

const btnSize = computed<"lg" | "xl">(() =>
  isMobile.value ? "lg" : "xl"
);
</script>

<template>
  <LayoutContainer as="section">
    <!-- Text block -->
    <div class="flex items-center flex-wrap">
      <div class="grow-0 max-w-3xl">
        <h2 class="font-semibold">
          {{ props.title }}
        </h2>
        <p class="mt-4 text-secondary">
          {{ props.description }}
        </p>
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
