<script setup lang="ts">
const props = defineProps<{
  name: string;
  role: string;
  intro: string;
  image: string;
  imageAlt?: string;
}>();
</script>

<template>
  <section
    class="py-6 px-6 bg-white"
    :aria-labelledby="`person-${props.name}-heading`"
  >
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <!-- Portrait -->
      <div class="relative w-60 h-60 min-w-[15rem] min-h-[15rem]">
        <img
          :src="props.image"
          :alt="props.imageAlt || `Portrait von ${props.name}`"
          class="absolute top-0 left-0 w-full h-full rounded-full object-cover shadow-md transform translate-x-2 -translate-y-1"
          loading="lazy"
        />
      </div>

      <!-- Text -->
      <div class="text-center md:text-left max-w-xl">
        <h2
          class="text-2xl font-semibold text-primary mb-1"
          :id="`person-${props.name}-heading`"
        >
          {{ props.name }}
        </h2>
        <p class="text-secondary text-sm mb-4 italic">
          {{ props.role }}
        </p>
        <p class="text-gray-700 leading-relaxed">
          {{ props.intro }}
        </p>
      </div>
    </div>
  </section>
</template>
