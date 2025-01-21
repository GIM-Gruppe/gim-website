<script setup lang="ts">
import { defineComponent, h, ref, watchEffect } from "vue";
import { useSeoMeta } from "~/composables/seo";
import { marked } from "marked"; // Importing markdown parser
definePageMeta({ documentDriven: { page: false, surround: false, }, });


const { data, pending, error } = await useAsyncData("about", async () => {
  try {
    const response = await queryContent("/aboutus/content").findOne();
    return response;
  } catch (err) {
    console.error(err); // Log any errors
    return null;
  }
});

useSeoMeta(
  "GIM Website - Über uns", // Title
  "Erfahren Sie mehr über die GIM Gesellschaft für integratives Management mbH. Entdecken Sie unsere Unternehmensgeschichte, Vision, Werte und unser Team." // Description
);

const mobileMenuOpen = ref(false);

const missionBlocks = [
  { title: "Mission", text: "Wir sind bestrebt, persönliche und individuelle Beratung zu bieten und Unternehmen dabei zu helfen, ihre IT-Prozesse zu implementieren, ihre Digitalisierung Prozess zu beschleunigen damit Sie das Potenzial ihrer Digitalen Ressourcen voll auszuschöpfen. " },
  { title: "Alleinstellungsmerkmal", text: "Unser Team von Experten besitzt mehrjährige Erfahrung in IT-Infrastruktur, Managed Services und SAP-Basis Diensten. Wir haben von den “Großen” Unternehmen gelernt und möchten den “Kleinen” mit skalierbaren, modernen sowie individuellen Lösungen und Dienstleistungen helfen, ihre Effizienz, Schnelligkeit und Sicherheit zu optimieren und damit den Grundstein für mehr Wachstum zu legen." },
  // Add more blocks as needed
];
const leftBlocks = missionBlocks.slice(0, 1); // First block
const rightBlocks = missionBlocks.slice(1, 2); // Second block

const leftText = ref("");
const rightText = ref("");

watchEffect(async () => {
  if (data.value?.mission?.textLeft) {
    leftText.value = await marked(data.value.mission.textLeft);
  }
  if (data.value?.mission?.textRight) {
    rightText.value = await marked(data.value.mission.textRight);
  }
});


// Reactive reference to the mission text (for ensuring proper updates)
const missionText = ref("");

watchEffect(async () => {
  if (data.value?.mission?.text) {
    // Convert the markdown text to HTML
    missionText.value = await marked(data.value.mission.text);
  }
});
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Failed to load content</div>
  <div v-else>
    <LayoutContainer>
      <div class="bg-white">
        <main class="isolate">
          <!-- Hero section -->
          <div class="relative isolate -z-10">
            <div
              class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
              aria-hidden="true"
            >
              <div
                class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
              />
            </div>
            <div class="overflow-hidden">
              <div
                class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32"
              >
                <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 class="font-semibold tracking-tight text-primary-900">
                      {{ data?.intro.title }}
                    </h1>
                    <p
                      class="relative mt-6 leading-8 text-secondary-600 sm:max-w-md lg:max-w-none"
                    >
                      {{ data?.intro.subtitle }}
                    </p>
                  </div>
                  <div
                    class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
                  >
                    <div
                      class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                    >
                      <div class="relative">
                        <img
                          :src="data?.intro.images[0].image"
                          :alt="data?.intro.images[0].imagealt"
                          class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div
                          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                        />
                      </div>
                    </div>
                    <div
                      class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
                    >
                      <div class="relative">
                        <img
                          :src="data?.intro.images[1].image"
                          :alt="data?.intro.images[1].imagealt"
                          class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div
                          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                        />
                      </div>
                      <div class="relative">
                        <img
                          :src="data?.intro.images[2].image"
                          :alt="data?.intro.images[2].imagealt"
                          class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div
                          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Content section (only renders after missionText is populated) -->
          <!-- <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <div class="mx-auto max-w-4xl lg:mx-0 lg:max-w-full">
              <h1 class="font-bold tracking-tight text-primary-900">
                {{ data?.mission.title }}
              </h1>
              <div class="mt-6 lg:mt-10 leading-8 text-secondary-600"> -->
                <!-- Only render the content after markdown has been parsed -->
                <!-- <div v-if="missionText" v-html="missionText"></div>
              </div>
            </div>
          </div> -->

 <!-- Content section -->
<div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
  <div class="mx-auto max-w-4xl lg:mx-0 lg:max-w-full">
    <h1 class="font-bold tracking-tight text-primary-900">
      {{ data?.mission.title }}
    </h1>
    <div class="mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
      <!-- Left blocks -->
      <div class="leading-8 text-secondary-600">
        <div v-for="block in leftBlocks" :key="block.title">
          <h3 class="font-semibold mb-2">{{ block.title }}</h3>
          <p>{{ block.text }}</p>
        </div>
      </div>
      <!-- Right blocks -->
      <div class="leading-8 text-secondary-600 lg:mt-[50%]">
        <div v-for="block in rightBlocks" :key="block.title">
          <h3 class="font-semibold mb-2">{{ block.title }}</h3>
          <p>{{ block.text }}</p>
        </div>
      </div>
    </div>
  </div>
</div>





          <!-- Image section -->
          <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
              :src="data?.breakImage"
              alt=""
              class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
          </div>

          <!-- Values section -->
          <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h1 class="font-semibold tracking-tight text-primary-900">
                {{ data?.gruende.title }}
              </h1>
              <p class="mt-6 leading-8 text-secondary-600">
                {{ data?.gruende.subtitle }}
              </p>
            </div>
            <dl
              class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              <div v-for="value in data?.gruende.gruende" :key="value.name">
                <dt class="font-semibold text-primary-900">
                  {{ value.title }}
                </dt>
                <dd class="mt-1 text-secondary-600">{{ value.description }}</dd>
              </div>
            </dl>
          </div>

          <!-- Team section -->
          <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h1 class="font-bold tracking-tight text-primary-900">
                {{ data?.team.title }}
              </h1>
              <p class="mt-6 leading-8 text-gray-600">
                {{ data?.team.subtitle }}
              </p>
            </div>
            <ul
              role="list"
              class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
            >
              <li v-for="person in data?.team.persons" :key="person.name">
                <img
                  class="mx-auto h-24 w-24 rounded-full"
                  :src="person.image"
                  alt="Person Image"
                />
                <p
                  class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900"
                >
                  {{ person.name }}
                </p>
                <div class="leading-6 text-gray-600 text-sm">
                  {{ person.position }}
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </LayoutContainer>
  </div>
</template>
