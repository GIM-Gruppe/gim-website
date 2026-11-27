<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
import page from '~/data/pages/contact.json'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(page.seo.title, page.seo.description)
</script>

<template>
  <LayoutContainer as="section" aria-labelledby="contact-heading">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-20">
      <div class="mb-4">
        <div
          class="mb-6 max-w-3xl text-center md:mx-auto md:mb-12"
        >
          <p
            class="text-base font-semibold uppercase tracking-wide text-secondary"
          >{{ page.intro.eyebrow }}</p>
          <h1
            id="contact-heading"
            class="font-heading font-bold tracking-tight text-primary"
          >
            {{ page.intro.title }}
          </h1>
          <div class="mx-auto mt-4 max-w-3xl text-secondary/80">{{ page.intro.subtitle }}</div>
        </div>
      </div>

      <div class="flex items-stretch justify-center">
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Text / Kontaktinfos -->
          <div class="md:col-span-2 pr-6">
            <div class="mt-3 mb-12 text-secondary">
              {{ page.intro.text }}
            </div>

            <ul class="mb-6 md:mb-0 space-y-4">
              <!-- Anschrift -->
              <li class="flex">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded bg-primary text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path
                      d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                    ></path>
                  </svg>
                </div>
                <div class="ml-4 mb-4">
                  <h2 class="mb-2 text-lg font-medium leading-6 text-secondary">
                    {{ page.address.title }}
                  </h2>
                  <p class="text-secondary text-base">{{ page.address.street }}</p>
                  <p class="text-secondary text-base">{{ page.address.city }}</p>
                </div>
              </li>

              <!-- Telefon -->
              <li class="flex">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded bg-primary text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                    ></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div class="ml-4 mb-4">
                  <h2 class="mb-2 text-lg font-medium leading-6 text-secondary">
                    {{ page.phone.title }}
                  </h2>
                  <p class="text-secondary text-base">
                    {{ page.phone.label }}
                    <a
                      :href="`tel:${page.phone.number.replace(/[^+0-9]/g, '')}`"
                      class="underline hover:no-underline"
                      :aria-label="`${page.phone.number} anrufen`"
                    >
                      {{ page.phone.number }}
                    </a>
                  </p>
                </div>
              </li>

              <!-- Buchung -->
              <li class="flex">
                <div class="mt-5">
                  <Bookings :label="page.bookingLabel" />
                </div>
              </li>
            </ul>
          </div>

          <!-- Bild -->
          <div class="h-full flex items-center justify-center">
            <LightboxImage
              :src="page.image"
              :alt="page.imageAlt"
              img-class="w-full h-auto rounded-xl shadow-md object-cover"
              button-class="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>
