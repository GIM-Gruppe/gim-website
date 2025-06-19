<script setup lang="ts">
defineProps<{
  name: string
  role: string
  intro: string
  image: string
  imageAlt?: string
}>()
</script>

<template>
  <section class="py-6 px-6 bg-white">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <!-- Portrait -->
      <img
        :src="image"
        :alt="imageAlt || `Portrait von ${name}`"
        class="w-40 h-40 rounded-full object-cover shadow-md"
      />

      <!-- Text -->
      <div class="text-center md:text-left">
        <h2 class="text-2xl font-semibold text-primary mb-1">{{ name }}</h2>
        <p class="text-secondary text-sm mb-4 italic">{{ role }}</p>
        <p class="text-gray-700 leading-relaxed">{{ intro }}</p>
      </div>
    </div>
  </section>
</template>
