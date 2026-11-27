<script setup lang="ts">
defineProps<{
  image: string
  imageAlt: string
  title: string
  description: string
}>()
</script>

<template>
  <div
    class="mt-6 flex flex-col items-start gap-5 border-t border-gray-200 pt-6 sm:flex-row sm:items-center"
  >
    <img
      :src="image"
      :alt="imageAlt"
      width="3508"
      height="5079"
      loading="lazy"
      decoding="async"
      class="h-auto w-[160px] shrink-0 self-center sm:w-[150px] lg:w-[180px]"
    />
    <div class="min-w-0">
      <h3 class="text-lg font-semibold text-secondary">
        {{ title }}
      </h3>
      <p class="mb-0 mt-2 text-left leading-relaxed text-secondary">
        {{ description }}
      </p>
    </div>
  </div>
</template>
