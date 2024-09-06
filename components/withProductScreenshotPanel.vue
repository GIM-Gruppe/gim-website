<script setup lang="ts">
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckBadgeIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'SAP-Basis Betreuung',
    icon: CheckBadgeIcon,
  },
  {
    name: 'SAP-Basis Hosting',
    icon: CheckBadgeIcon,
  },
  {
    name: 'SAP-Sicherheitschecks',
    icon: CheckBadgeIcon,
  },
  {
    name: 'SAP-Router',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Überwachung und Monitoring',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Solution Manager',
    icon: CheckBadgeIcon,
  },
]
</script>

<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-primary">SAP Basis Consulting</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SAP Landschaften jeder Größe</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            <dl class="mt-10 max-w-xl space-y-6 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                {{ console.log(feature.icon) }}
                <dt class="inline font-semibold text-gray-900">
                  <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="sm:px-6 lg:px-0">
            <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <img src="https://loremflickr.com/1200/1000/cat" alt="Product screenshot" class="-mb-12 w-[30rem] rounded-xl bg-gray-800" />
            </div>
        </div>
        <UiButton
            class=""
            href="#"
            target="_blank"
            label="Book appointment"
        ></UiButton>
      </div>
    </div>
  </div>
</template>

