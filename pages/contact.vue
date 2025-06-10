<script setup lang="ts">

import { useSeoMeta } from '~/composables/seo'
definePageMeta({ documentDriven: { page: false, surround: false, }, });


useSeoMeta(
  'GIM Website - Kontakt', // Title: Reflects that the page is about contact
  'Kontaktieren Sie die GIM Gesellschaft für integratives Management mbH. Finden Sie hier unsere Kontaktdaten und erreichen Sie uns per Telefon, E-Mail oder über unser Kontaktformular.' // Description: Relevant and concise description for the contact page
)

</script>


<template>
  <LayoutContainer>
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-20">
      <div class="mb-4">
        <div
          class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12"
        >
          <p
            class="text-base font-semibold uppercase tracking-wide text-secondary"
          >
            Kontakt
          </p>
          <h1 class="font-heading font-bold tracking-tight text-primary">
            Wir sind für Sie da!
          </h1>
          <div class="mx-auto mt-4 max-w-3xl text-secondary/80">
            Termin vereinbaren
          </div>
        </div>
      </div>
      <div class="flex items-stretch justify-center">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="md:col-span-2 pr-6">
            <div class="mt-3 mb-12 text-secondary">
              Wir freuen uns, dass Sie mit uns in Verbindung treten möchten.
              Unser engagiertes Team steht Ihnen gerne zur Verfügung und bemüht
              sich, Ihnen so schnell wie möglich zu antworten.
            </div>
            <ul class="mb-6 md:mb-0">
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
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path
                      d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                    ></path>
                  </svg>
                </div>
                <div class="ml-4 mb-4">
                  <h2 class="mb-2 text-lg font-medium leading-6 text-secondary">
                    Anschrift
                  </h2>
                  <p class="text-secondary text-base">Südportal 7</p>
                  <p class="text-secondary text-base">22848 Norderstedt</p>
                </div>
              </li>
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
                  >
                    <path
                      d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                    ></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div class="ml-4 mb-4">
                  <h3 class="mb-2 text-lg font-medium leading-6 text-secondary">
                    Kontakt
                  </h3>
                  <p class="text-secondary text-base">
                    Telefonnummer: +49 40 22898595
                  </p>
                </div>
              </li>
              <li class="flex">
                <div class="mt-5">
                  <Bookings />
                </div>
              </li>
            </ul>
          </div>
          <div class="h-full flex items-center justify-center">
            <img
              src="/assets/img/hands.jpg"
              alt="Contact Image"
              class="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </LayoutContainer>
</template>
