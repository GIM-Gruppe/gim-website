<script setup lang="ts">


</script>

<template>
  <LayoutContainer>
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="mb-4">
        <div
          class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12"
        >
          <p
            class="text-base font-semibold uppercase tracking-wide text-primary"
          >
            Kontakt
          </p>
          <h1
            class="font-heading font-bold tracking-tight text-secondary"
          >
            Kontaktiere uns!
          </h1>
          <div class="mx-auto mt-4 max-w-3xl text-secondary/80">
            Termin vereinbaren
          </div>
        </div>
      </div>
      <div class="flex items-stretch justify-center">
        <div class="grid md:grid-cols-2">
          <div class="h-full pr-6">
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
                  <p class="text-secondary text-base">Telefonnummer: +49 4321 5638719</p>
                </div>
              </li>
              <li class="flex">
                <div class="mt-5">
                  <Bookings />
                </div>
              </li>
            </ul>
          </div>

          <form id="contactForm">
            <div class="mb-6 mt-5">
              <div class="mx-0 mb-1 sm:mb-4">
                <div class="mx-0 mb-1 sm:mb-4">
                  <label
                    for="name"
                    class="pb-1 text-xs uppercase tracking-wider"
                  ></label
                  ><input
                    type="text"
                    id="name"
                    autocomplete="given-name"
                    placeholder="Your name"
                    class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    name="name"
                  />
                </div>
                <div class="mx-0 mb-1 sm:mb-4">
                  <label
                    for="email"
                    class="pb-1 text-xs uppercase tracking-wider"
                  ></label
                  ><input
                    type="email"
                    id="email"
                    autocomplete="email"
                    placeholder="Your email address"
                    class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    name="email"
                  />
                </div>
              </div>
              <div class="mx-0 mb-1 sm:mb-4">
                <label
                  for="textarea"
                  class="pb-1 text-xs uppercase tracking-wider"
                ></label
                ><textarea
                  id="textarea"
                  name="textarea"
                  cols="30"
                  rows="5"
                  placeholder="Write your message..."
                  class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                ></textarea>
              </div>
            </div>
            <div class="text-center">
              <UiButton  type="submit" :label="'Absenden'" :style="'outline'">
              </UiButton>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </LayoutContainer>
</template>
