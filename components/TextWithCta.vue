<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const props = defineProps<{
  title: string;
  description: string;
  appointmentLabel?: string;
  servicesLabel?: string;
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
    <div
      class="grid gap-10"
      :class="{ 'lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center lg:gap-12': $slots.aside }"
    >
      <div class="min-w-0" :class="{ 'max-w-3xl': !$slots.aside }">
        <!-- Text block -->
        <div class="flex flex-wrap items-center">
          <div class="w-full">
            <h2 class="font-semibold">
              {{ props.title }}
            </h2>
            <p class="mt-4 text-secondary">
              {{ props.description }}
            </p>
          </div>
        </div>

        <div
          class="mx-auto mt-6 flex w-full max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-between"
        >
          <UiButton
            :size="btnSize"
            href="/contact"
            :label="props.appointmentLabel || 'Termin vereinbaren'"
            class="w-3/4 sm:w-1/3"
          />
          <UiButton
            :size="btnSize"
            :style="'outline'"
            href="/services"
            :label="props.servicesLabel || 'Zu den Leistungen'"
            class="w-3/4 sm:w-1/3"
          />
        </div>
      </div>

      <!-- Optionaler Zusatzinhalt, z. B. ein dezenter Vertrauenshinweis -->
      <div
        v-if="$slots.aside"
        class="flex justify-center lg:border-l lg:border-gray-200 lg:pl-10"
      >
        <slot name="aside" />
      </div>
    </div>
  </LayoutContainer>
</template>
