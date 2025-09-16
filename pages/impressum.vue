<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
definePageMeta({ documentDriven: { page: false, surround: false, }, });


useSeoMeta(
  'GIM Website - Impressum',
  'Rechtliche Informationen und Kontaktdaten der GIM Gesellschaft für integratives Management mbH'
)
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto bg-white">
    <h1 class="text-2xl font-bold mb-4">Impressum</h1>

    <div class="mb-4">
      <h2 class="text-xl font-semibold">Angaben gemäß § 5 TMG:</h2>
      <p class="mt-2">
        <strong>GIM Gesellschaft für integratives Management mbH</strong><br />
        Gutenbergring 69A<br />
        22848 Norderstedt
      </p>
    </div>

    <div class="mb-4">
      <h2 class="text-xl font-semibold">
        Vertreten durch die Geschäftsführer:
      </h2>
      <p class="mt-2">Lutz Thiele</p>
      <p class="mt-2">Jonas Grossen</p>

    </div>

    <div class="mb-4">
      <h2 class="text-xl font-semibold">Kontakt:</h2>
      <p class="mt-2">
        Telefon: +49 40 22898595<br />
        E-Mail:
        <NuxtLink
          :to="`mailto:info@gim-gruppe.com`"
          class="text-blue-600 hover:underline"
          >info@gim-gruppe.com</NuxtLink
        >
      </p>
    </div>

    <div class="mb-4">
      <h2 class="text-xl font-semibold">Registereintrag:</h2>
      <p class="mt-2">
        Eintragung im Handelsregister.<br />
        Registergericht: Amtsgericht Hamburg<br />
        Registernummer: HRB 56282
      </p>
    </div>

    <div class="mb-4">
      <h2 class="text-xl font-semibold">
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
      </h2>
      <p class="mt-2">DE165 916 544</p>
    </div>
  </div>
</template>
