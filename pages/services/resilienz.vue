<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

// ✅ Import the personal intro component
import PersonalIntro from '~/components/PersonalIntro.vue'

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

const { data, pending, error } = await useAsyncData("resilienztraining", async () => {
  try {
    return {
      services: [
        {}, {},
        {
          title: "Resilienztraining für Unternehmen",
          subtitle: "Mentale Stärke gezielt fördern",
          description: "Unser Resilienztraining unterstützt Mitarbeitende dabei, Belastungen besser zu bewältigen und ihre psychische Gesundheit nachhaltig zu stärken.",
          image: "/assets/img/resilienz.jpg",
          imagealt: "Team in Resilienztraining",
          subservice: [
            { title: "Stressbewältigung im Berufsalltag" },
            { title: "Achtsamkeits- und Entspannungstechniken" },
            { title: "Stärkung der emotionalen Intelligenz" },
            { title: "Umgang mit Veränderungen und Krisen" },
          ],
        }
      ],
      serviceoverview: {
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
            title: "Follow-Up Programme",
            description: "Langfristige Begleitung zur Stärkung der Resilienz im Alltag.",
            icon: 'heroicons-outline:arrow-path',
          },
        ]
      }
    }
  } catch (err) {
    console.error(err)
    return null
  }
})
</script>

<template>
  <div v-if="pending">Lade Inhalte...</div>
  <div v-else-if="error">Fehler beim Laden der Inhalte</div>
  <div v-else>
    <LayoutContainer>
      <WithProductScreenshotPanel
        :title="data?.services[2].title ?? ''"
        :subtitle="data?.services[2].subtitle ?? ''"
        :description="data?.services[2].description ?? ''"
        :image="data?.services[2].image ?? ''"
        :imagealt="data?.services[2].imagealt ?? ''"
        :features="data?.services[2].subservice ?? []"
      />
      <Features
        class="pb-8"
        :title="data?.serviceoverview.title ?? ''"
        :services="data?.serviceoverview.services"
      />
      <Intro
      name="Dr. Laura Schneider"
      role="Expertin für Resilienztraining & psychologische Gesundheit"
      image="/assets/img/Placeholder Images/29d49274-903e-4e78-a168-6a7cf68629f5adb.png"
      intro="Ich unterstütze Teams und Einzelpersonen seit über 12 Jahren dabei, Herausforderungen im Berufsleben mit innerer Stärke zu begegnen. Mein Ziel ist es, durch praktische Methoden und empathische Begleitung nachhaltige Veränderung zu bewirken."
    />
    </LayoutContainer>

  </div>
</template>
