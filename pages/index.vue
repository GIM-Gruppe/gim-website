<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
// ggf. vorhanden in deinem Projekt:
// import { useAsyncData } from '#app'
// import { queryContent } from '#content'

definePageMeta({
  documentDriven: { page: false, surround: false }
})

const repeat = 4

const { data, pending, error } = await useAsyncData('home', async () => {
  try {
    const response = await queryContent('/home/content').findOne()
    return response
  } catch (err) {
    console.error(err)
    return null
  }
})

useSeoMeta(
  'GIM-Website - Startseite',
  'Willkommen auf der GIM-Website – Ihr vertrauenswürdiger Partner für IT-Lösungen'
)
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
    <Carousel :slides="data?.carousel" />

    <LayoutContainer>
      <TextWithCta
        class="py-20"
        :title="data?.textwithcta.title"
        :description="data?.textwithcta.text"
      />

      <Features
        class="pb-20"
        :title="data?.serviceoverview.title"
        :services="data?.serviceoverview.services"
      />

      <ImageWithText
        class="pb-20"
        :imgsrc="data?.textimageleft.image"
        :imgalt="data?.textimageleft.imagealt"
        :title="data?.textimageleft.title"
        :description="data?.textimageleft.text"
        :imgPos="'left'"
      />
      <!-- weitere CTAs ggf. später -->
    </LayoutContainer>
  </div>
</template>
