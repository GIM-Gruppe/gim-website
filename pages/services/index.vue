<script setup lang="ts">
//TODO: CLEAN UP -> new components

// const props = defineProps<{
//   title: string
//   subtitle: string
//   services: any
// }>()
import { useSeoMeta } from '~/composables/seo'

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
    <div class="bg-white py-14 sm:py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <p class="text-base font-semibold leading-7 text-secondary">
            {{ data?.subtitle }}
          </p>
          <h2
            class="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-6xl"
          >
            {{ data?.title }}
          </h2>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-20">
      <div
        v-for="service in data?.services"
        :key="service.name"
        class="flex-none"
      >
        <NuxtLink
          :to="`/services/${service.name}`"
          class="flex transition transform hover:scale-110 sm:w-auto"
        >
          <article
            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-80"
          >
            <img
              :src="service.image"
              :alt="service.imagealt"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"
            ></div>
            <h3 class="z-10 mt-3 text-2xl font-bold text-white">
              {{ service.title }}
            </h3>
          </article>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
