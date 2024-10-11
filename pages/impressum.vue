<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

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
        Südportal 7<br />
        22848 Norderstedt
      </p>
    </div>

    <div class="mb-4">
      <h2 class="text-xl font-semibold">
        Vertreten durch die Geschäftsführer:
      </h2>
      <p class="mt-2">Lutz Thiele</p>
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

    <div>
      <h2 class="text-xl font-semibold">EU-Streitschlichtung:</h2>
      <p class="mt-2">
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:
        <NuxtLink
          to="https://ec.europa.eu/consumers/odr/"
          class="text-blue-600 hover:underline"
          >https://ec.europa.eu/consumers/odr/</NuxtLink
        >.<br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  </div>
</template>
