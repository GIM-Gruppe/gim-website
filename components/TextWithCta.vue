<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <LayoutContainer>
    <!-- Text block -->
    <div class="flex items-center flex-wrap">
      <div class="grow-0">
        <h1 class="font-semibold">{{ props.title }}</h1>
        <p class="mt-4">
          {{ props.description }}
        </p>
      </div>
    </div>
    <div
      class="mt-6 flex flex-col items-center sm:flex-row sm:justify-between gap-3 w-full max-w-3xl mx-auto"
    >
      <UiButton
        size="xl"
        href="/contact"
        label="Termin vereinbaren"
        class="w-3/4 sm:w-1/3"
      ></UiButton>
      <UiButton
        size="xl"
        :style="'outline'"
        href="/services"
        label="Zu den Leistungen"
        class="w-3/4 sm:w-1/3"
      ></UiButton>
    </div>
  </LayoutContainer>
</template>
