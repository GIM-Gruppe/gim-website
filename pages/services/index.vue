<script setup lang="ts">
//TODO: CLEAN UP -> new components

// const props = defineProps<{
//   title: string
//   subtitle: string
//   services: any
// }>()
import { useSeoMeta } from '~/composables/seo'
definePageMeta({ documentDriven: { page: false, surround: false, }, });


useSeoMeta(
  'GIM Website - Leistungsübersicht', // Title: Reflects that the page is about services
  'Entdecken Sie die umfangreichen Dienstleistungen der GIM Gesellschaft für integratives Management mbH. Erfahren Sie mehr über unsere Beratungsleistungen und maßgeschneiderte Lösungen.' // Description: Relevant and concise description for the service overview page
)


const { data, pending, error } = await useAsyncData("services", async () => {
  try {
    const response = await queryContent('/services/content').findOne();
    // console.log(response); // Log response for debugging
    return response;
  } catch (err) {
    console.error(err); // Log any errors
    return null;
  }
});
// console.log(data);
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Failed to load content</div>
  <div v-else>
    <div class="bg-white py-8 sm:py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <p class="font-semibold leading-7 text-secondary">
            {{ data?.subtitle }}
          </p>
          <h2
            class="mt-2 font-bold tracking-tight text-primary sm:text-4xl"
          >
            {{ data?.title }}
          </h2>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
      <NuxtLink
        v-for="service in data?.services"
        :key="service.name"
        :to="`/services/${service.name}`"
        class="block transition transform hover:scale-105"
      >
        <article class="relative aspect-[4/3] rounded-2xl overflow-hidden flex items-end">
          <img
            :src="service.image"
            :alt="service.imagealt"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <h3 class="relative z-10 text-white text-lg font-bold p-4">
            {{ service.title }}
          </h3>
        </article>
      </NuxtLink>
    </div>

  </div>
</template>
