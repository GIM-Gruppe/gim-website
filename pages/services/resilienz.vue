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

const { data, pending, error } = await useAsyncData("resilienz", async () => {
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
  title: "Unsere Trainingsbausteine",
  services: [
    {
      title: "Einzelcoachings",
      description: "Individuelle Begleitung zur persönlichen Resilienzförderung.",
      icon: 'heroicons-outline:user',
    },
    {
      title: "Workshops & Seminare",
      description: "Gruppenformate für praxisnahe Übungen und Austausch.",
      icon: 'heroicons-outline:users',
    },
    {
      title: "Online-Trainings",
      description: "Flexibles Lernen mit digitalen Inhalten und Live-Sessions.",
      icon: 'heroicons-outline:computer-desktop',
    },
    {
      title: "",
      description: "",
    },
    {
      title: "Follow-Up Programme",
      description: "Langfristige Begleitung zur Stärkung der Resilienz im Alltag.",
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
        :title="data?.services[3].title"
        :subtitle="data?.services[3].subtitle"
        :description="data?.services[3].description"
        :image="data?.services[3].image"
        :imagealt="data?.services[3].imagealt"
        :features="data?.services[3].subservice"
        bookings="resilienz"
      />

      <Features
        class="pb-8"
        :title="serviceoverview.title ?? ''"
        :services="serviceoverview.services"
      />
      <Intro
      name="Herlinda Martinez Ortega"
      role="Expertin für Resilienztraining & systemische Beratung für Organisationen"
      image="/assets/img/Placeholder Images/29d49274-903e-4e78-a168-6a7cf68629f5adb.png"
      intro="Mit über 12 Jahren Erfahrung begleite ich Teams und Einzelpersonen dabei, berufliche Herausforderungen mit mehr Resilienz zu meistern und ihre Stärken gezielt weiterzuentwickeln. Durch praxisorientierte Methoden und empathische Begleitung finden wir gemeinsam sowohl sofort umsetzbare Lösungen als auch Wege für nachhaltige Veränderungen, die langfristig wirken."
    />
    </LayoutContainer>
  </div>
</template>
