<script setup lang="ts">
import { CheckBadgeIcon } from "@heroicons/vue/20/solid";

const props = defineProps<{
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagealt: string;
  features: { title: string }[];
  bookings?: string;
}>();
</script>

<template>
  <section
    class="overflow-hidden bg-white py-8 sm:py-16"
    aria-labelledby="feature-section-title"
  >
    <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-10 lg:grid-cols-2 lg:items-start"
      >
        <!-- Textblock -->
        <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-secondary">
              {{ props.subtitle }}
            </p>

            <h2
              id="feature-section-title"
              class="mt-2 font-bold tracking-tight text-primary text-2xl sm:text-3xl"
            >
              {{ props.title }}
            </h2>

            <p class="mt-6 leading-8 text-secondary">
              {{ props.description }}
            </p>

            <!-- Feature-Liste -->
            <ul
              class="mt-10 max-w-xl leading-7 text-gray-800 lg:max-w-none"
              role="list"
              :class="
                props.features.length > 4
                  ? 'grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4'
                  : 'space-y-4'
              "
            >
              <li
                v-for="feature in props.features"
                :key="feature.title"
                class="relative pl-9 flex items-start"
              >
                <CheckBadgeIcon
                  class="absolute left-1 top-1 h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                <span class="font-semibold text-gray-900">
                  {{ feature.title }}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bildblock -->
        <div class="sm:px-6 lg:px-0">
          <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
            <img
              :src="props.image"
              :alt="props.imagealt"
              class="-mb-12 w-[30rem] max-w-full rounded-xl bg-white"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Buchungs-CTA -->
        <Bookings :bookings="props.bookings" />
      </div>
    </div>
  </section>
</template>
