<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

definePageMeta({
  documentDriven: { page: false, surround: false }
})

const { data, pending, error } = await useAsyncData('home', async () => {
  const doc = await queryCollection('content').path('/home/content').first()
  return doc?.meta ?? null
})

useSeoMeta(
  'GIM-Website - Startseite',
  'Willkommen auf der GIM-Website – Ihr vertrauenswürdiger Partner für IT-Lösungen'
)

// Strukturierte Daten für das DIIND-Siegel – Inhalt unverändert vom Anbieter übernommen.
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GIM GmbH",
  "award": "Business Innovator",
  "hasCertification": {
    "@type": "Certification",
    "name": "Business Innovator",
    "description": "Auszeichnung für visionäre Unternehmen.",
    "dateIssued": "2026-11-12",
    "issuedBy": {
      "@type": "Organization",
      "name": "diind – Deutsches Innovationsinstitut"
    },
    "url": "https://diind.de"
  }
}
      `.trim()
    }
  ]
})
</script>

<template>
  <!-- Loading-Zustand mit ARIA -->
  <div
    v-if="pending"
    class="px-4 py-8 text-secondary"
    role="status"
    aria-live="polite"
  >
    Inhalte werden geladen …
  </div>

  <!-- Fehlerzustand mit klarer Meldung -->
  <div
    v-else-if="error"
    class="px-4 py-8 text-red-700"
    role="status"
    aria-live="assertive"
  >
    Beim Laden der Startseiten-Inhalte ist ein Fehler aufgetreten.
    Bitte versuchen Sie es später erneut.
  </div>

  <!-- Hauptinhalt -->
  <div v-else>
    <Carousel :slides="(data?.carousel ?? [])" />
    <LayoutContainer>
      <TextWithCta
        class="py-20"
        :title="data?.textwithcta?.title"
        :description="data?.textwithcta?.text"
      >
        <template #aside>
          <div class="flex flex-col items-center text-center">
            <img
              src="/assets/img/diind-business-innovator-gim.png"
              alt="Business Innovator Siegel der GIM GmbH, gültig bis 11/2027"
              width="1414"
              height="2048"
              loading="lazy"
              decoding="async"
              class="h-auto w-[135px] sm:w-[150px] lg:w-[200px]"
            />
            <p class="mb-0 mt-3 text-xs text-secondary">
              Business Innovator
            </p>
          </div>
        </template>
      </TextWithCta>

      <Features
        class="pb-20"
        :title="data?.serviceoverview?.title"
        :services="data?.serviceoverview?.services"
      />

      <ImageWithText
        class="pb-20"
        :imgsrc="data?.textimageleft?.image"
        :imgalt="data?.textimageleft?.imagealt"
        :title="data?.textimageleft?.title"
        :description="data?.textimageleft?.text"
        :imgPos="'left'"
      />

      <BlogPreview />

      <!-- weitere CTAs ggf. später -->
    </LayoutContainer>
  </div>
</template>
