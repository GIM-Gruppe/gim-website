<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

definePageMeta({
  documentDriven: {
    page: false,
    surround: false,
  },
})

useSeoMeta(
  'GIM Website - Coreszon Training',
  'Erfahren Sie mehr über unser Coreszon Training bei der GIM Gesellschaft für integratives Management mbH. Stärken Sie Ihre mentale Widerstandskraft und fördern Sie nachhaltige Gesundheit im Arbeitsalltag.'
)


const { data, pending, error } = await useAsyncData('coreszon', async () => {
  const doc = await queryCollection('content')
    .path('/services/content')
    .first()

  // Bei dir steckt es (wie beim Home) unter meta.*
  const services = doc?.meta?.services ?? []

  const item = services.find((s: any) => s.name === 'coreszon') ?? null

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
  title: '<a href="https://coreszon.com/de/uber-uns/die-garten-methode/">Die Garten-Methode</a>',
  services: [
    {
      title: "Aufmerksamkeit zu fokussieren",
      description: "",
      icon: 'heroicons-outline:user',
    },
    {
      title: "Sicherheit im Körper zu aktivieren",
      description: "",
      icon: 'heroicons-outline:users',
    },
    {
      title: "Mit starken Emotionen umzugehen",
      description: "",
      icon: 'heroicons-outline:computer-desktop',
    },
    {
      title: "Herausforderungen zu analysieren",
      description: "",
      icon: 'heroicons-outline:arrow-path',

    },
    {
      title: "Lösungswege gemeinsam zu entwickeln",
      description: "",
      icon: 'heroicons-outline:arrow-path',
    },
  ]
}
</script>

<template>
  <div v-if="pending">Lade Inhalte...</div>
  <div v-else-if="error">Fehler beim Laden der Inhalte</div>
  <div v-else>
    <Breadcrumbs :items="[
      { label: 'Leistungen', to: '/services' },
      { label: 'CORESZON® Training' }
    ]" />
    <LayoutContainer>
      <WithProductScreenshotPanel
        :title="data?.title"
        :subtitle="data?.subtitle"
        :description="data?.description"
        :image="data?.image"
        :imagealt="data?.imagealt"
        :features="data?.subservice"
        bookings="coreszon"
      />
      <CoreszoneInfo />
      <Intro
      name="Herlinda Martinez Ortega"
      role="Expertin für Resilienztraining, ausgebildete CORESZON Trainerin, systemische Beratung für Organisationen und erfahrene IT-Projektmanagerin"
      image="/assets/img/Linda-21.07.2025.jpg"
      intro="Mit über 12 Jahren Erfahrung begleite ich Teams und Einzelpersonen dabei, berufliche Herausforderungen mit mehr Resilienz zu meistern und ihre Stärken gezielt weiterzuentwickeln. Durch praxisorientierte Methoden und empathische Begleitung finden wir gemeinsam sowohl sofort umsetzbare Lösungen als auch Wege für nachhaltige Veränderungen, die langfristig wirken."
    />
    </LayoutContainer>
  </div>
</template>
