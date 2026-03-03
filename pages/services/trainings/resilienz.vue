<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

definePageMeta({
  documentDriven: {
    page: false,
    surround: false,
  },
})

useSeoMeta(
  'GIM Website - Resilienztraining',
  'Erfahren Sie mehr über unser Resilienztraining bei der GIM Gesellschaft für integratives Management mbH. Stärken Sie Ihre mentale Widerstandskraft und fördern Sie nachhaltige Gesundheit im Arbeitsalltag.'
)

const { data, pending, error } = await useAsyncData('resilienz', async () => {
  const doc = await queryCollection('content')
    .path('/services/content')
    .first()

  // Bei dir steckt es (wie beim Home) unter meta.*
  const services = doc?.meta?.services ?? []

  const item = services.find((s: any) => s.name === 'resilienz') ?? null

  // in das Shape bringen, das dein Panel erwartet:
  return item
    ? {
        title: item.title ?? '',
        subtitle: item.subtitle ?? '',
        description: item.description ?? '',
        image: item.image ?? '',
        imagealt: item.imagealt ?? '',
        features: item.subservice ?? [] // <- dein JSON heißt subservice
      }
    : null
})

const serviceoverview = {
  title: "Unsere Trainingsbausteine",
  services: [
    {
      title: "Einzelcoachings",
      description: "Individuelle Begleitung zur persönlichen Resilienzförderung.",
      icon: 'ph:user',
    },
    {
      title: "Workshops & Seminare",
      description: "Gruppenformate für praxisnahe Übungen und Austausch.",
      icon: 'heroicons:users',
    },
    {
      title: "Online-Trainings",
      description: "Flexibles Lernen mit digitalen Inhalten und Live-Sessions.",
      icon: 'heroicons:computer-desktop',
    },
    {
      title: "",
      description: "",
    },
    {
      title: "Follow-Up Programme",
      description: "Langfristige Begleitung zur Stärkung der Resilienz im Alltag.",
      icon: 'heroicons:arrow-path',
    },
  ]
}
</script>

<template>
  <div v-if="pending">Lade Inhalte...</div>
  <div v-else-if="error">Fehler beim Laden der Inhalte</div>
  <div v-else>
    <LayoutContainer>
      <WithProductScreenshotPanel
        :title="data?.title"
        :subtitle="data?.subtitle"
        :description="data?.description"
        :image="data?.image"
        :imagealt="data?.imagealt"
        :features="data?.subservice"
        bookings="resilienz"
      />

      <Features
        class="pb-8"
        :title="serviceoverview.title ?? ''"
        :services="serviceoverview.services"
      />
      <Intro
      name="Herlinda Martinez Ortega"
      role="Expertin für Resilienztraining, ausgebildete CORESZON Trainerin, systemische Beratung für Organisationen und erfahrene IT-Projektmanagerin"
      image="/assets/img/Linda-21.07.2025.jpg"
      intro="Mit über 12 Jahren Erfahrung begleite ich Teams und Einzelpersonen dabei, berufliche Herausforderungen mit mehr Resilienz zu meistern und ihre Stärken gezielt weiterzuentwickeln. Durch praxisorientierte Methoden und empathische Begleitung finden wir gemeinsam sowohl sofort umsetzbare Lösungen als auch Wege für nachhaltige Veränderungen, die langfristig wirken."
    />
    </LayoutContainer>
  </div>
</template>
