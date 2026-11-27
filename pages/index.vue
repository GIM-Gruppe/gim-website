<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
import data from '~/content/home/content.json'

definePageMeta({
  documentDriven: { page: false, surround: false }
})

useSeoMeta(data.seo.title, data.seo.description)

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
  <div>
    <Carousel :slides="(data?.carousel ?? [])" />
    <LayoutContainer>
      <TextWithCta
        class="py-20"
        :title="data?.textwithcta?.title"
        :description="data.textwithcta.text"
        :appointment-label="data.textwithcta.appointmentLabel"
        :services-label="data.textwithcta.servicesLabel"
      />

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
      >
        <template #after-text>
          <AwardBadge
            :image="data.award.image"
            :image-alt="data.award.imageAlt"
            :title="data.award.caption"
            :description="data.award.description"
          />
        </template>
      </ImageWithText>

      <BlogPreview :copy="data.blogPreview" />

      <!-- weitere CTAs ggf. später -->
    </LayoutContainer>
  </div>
</template>
