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
        <!-- WICHTIG: kein weiteres <main> hier, das gibt es schon im Layout -->
        <div class="isolate">
          <!-- Hero section -->
          <section
            class="relative isolate -z-10"
            aria-labelledby="about-hero-title"
          >
            <div class="overflow-hidden">
              <div
                class="mx-auto max-w-7xl pb-32 pt-8 sm:pt-16 lg:pt-24"
              >
                <div
                  class="mx-auto max-w-2xl gap-x-6 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
                >
                  <div class="w-full max-w-xl lg:shrink-1 xl:max-w-2xl">
                    <!-- Das zentrale h1 der Seite -->
                    <h1
                      id="about-hero-title"
                      class="font-semibold tracking-tight text-primary"
                    >
                      {{ data?.intro.title }}
                    </h1>
                    <p
                      class="relative mt-6 leading-8 text-secondary sm:max-w-md lg:max-w-none"
                    >
                      {{ data?.intro.subtitle }}
                    </p>
                  </div>

                  <!-- Bildgruppe -->
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
                          loading="lazy"
                        />
                        <div
                          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                          aria-hidden="true"
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
                          loading="lazy"
                        />
                        <div
                          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                          aria-hidden="true"
                        />
                      </div>
                      <div class="relative">
                        <img
                          :src="data?.intro.images[2].image"
                          :alt="data?.intro.images[2].imagealt"
                          class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          loading="lazy"
                        />
                        <div
                          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Mission / Textblöcke -->
          <section
            class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8"
            aria-labelledby="mission-title"
          >
            <div class="mx-auto max-w-4xl lg:mx-0 lg:max-w-full">
              <!-- h2 statt h1, da wir oben schon ein Seitentitel-h1 haben -->
              <h2
                id="mission-title"
                class="font-bold tracking-tight text-primary"
              >
                {{ data?.mission.title }}
              </h2>
              <div
                class="mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8"
              >
                <!-- Left blocks -->
                <div class="leading-8 text-secondary">
                  <div
                    v-for="block in leftBlocks"
                    :key="block.title"
                    class="mb-6"
                  >
                    <h3 class="font-semibold mb-2">
                      {{ block.title }}
                    </h3>
                    <p>{{ block.text }}</p>
                  </div>
                </div>
                <!-- Right blocks -->
                <div class="leading-8 text-secondary lg:mt-[50%]">
                  <div
                    v-for="block in rightBlocks"
                    :key="block.title"
                    class="mb-6"
                  >
                    <h3 class="font-semibold mb-2">
                      {{ block.title }}
                    </h3>
                    <p>{{ block.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Image section -->
          <section
            class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8"
            aria-label="Team und Arbeitsumgebung"
          >
            <img
              :src="data?.breakImage"
              alt=""
              class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
              loading="lazy"
            />
          </section>

          <!-- Values section -->
          <section
            class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"
            aria-labelledby="values-title"
          >
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h2
                id="values-title"
                class="font-semibold tracking-tight text-primary"
              >
                {{ data?.gruende.title }}
              </h2>
              <p class="mt-6 leading-8 text-secondary">
                {{ data?.gruende.subtitle }}
              </p>
            </div>
            <dl
              class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              <div
                v-for="value in data?.gruende.gruende"
                :key="value.title"
              >
                <dt class="font-semibold text-primary">
                  {{ value.title }}
                </dt>
                <dd class="mt-1 text-secondary">
                  {{ value.description }}
                </dd>
              </div>
            </dl>
          </section>

          <!-- Team section -->
          <section
            class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"
            aria-labelledby="team-title"
          >
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h2
                id="team-title"
                class="font-bold tracking-tight text-primary"
              >
                {{ data?.team.title }}
              </h2>
              <p class="mt-6 leading-8 text-secondary">
                {{ data?.team.subtitle }}
              </p>
            </div>
            <ul
              role="list"
              class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
            >
              <li
                v-for="person in data?.team.persons"
                :key="person.name"
              >
                <img
                  class="mx-auto h-24 w-24 rounded-full"
                  :src="person.image"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
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
          </section>
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>
