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

const { data, pending, error } = await useAsyncData("coreszon", async () => {
  try {
    const response = await queryContent('/services/content').findOne();
    // console.log(response); // Log response for debugging
    return response;
  } catch (err) {
    console.error(err); // Log any errors
    return null;
  }
});

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
    <LayoutContainer>
      <WithProductScreenshotPanel
        :title="data?.services[4].title"
        :subtitle="data?.services[4].subtitle"
        :description="data?.services[4].description"
        :image="data?.services[4].image"
        :imagealt="data?.services[4].imagealt"
        :features="data?.services[4].subservice"
        bookings="resilienz"
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
