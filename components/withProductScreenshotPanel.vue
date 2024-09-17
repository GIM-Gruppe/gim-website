<script setup lang="ts">
import { CheckBadgeIcon } from '@heroicons/vue/20/solid'

const props = defineProps<{
  title: string
  subtitle: string
  description: string
  image: string
  imagealt: string
  features: any
}>()

</script>

<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-primary">{{props.title}}</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ props.subtitle }}</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">{{ props.description }}</p>
            
            <!-- Feature list with dynamic grid columns based on the number of features -->
            <dl :class="props.features.length > 4 ? 'grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4' : 'space-y-6' " class="mt-10 max-w-xl text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in props.features" :key="feature.title" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <component :is="CheckBadgeIcon" class="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                  {{ feature.title }}
                </dt>
                {{ ' ' }}
              </div>
            </dl>
          </div>
        </div>
        <div class="sm:px-6 lg:px-0">
          <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
            <img :src="props.image" :alt="props.imagealt" class="-mb-12 w-[30rem] rounded-xl bg-gray-800" />
          </div>
        </div>
        <Bookings/>
      </div>
    </div>
  </div>
</template>
