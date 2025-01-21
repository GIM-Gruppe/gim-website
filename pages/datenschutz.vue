<script setup lang="ts">

import { useSeoMeta } from '~/composables/seo'
definePageMeta({ documentDriven: { page: false, surround: false, }, });


useSeoMeta(
  'GIM Website - Datenschutz', // Title: Reflects that the page is about privacy
  'Erfahren Sie mehr über den Datenschutz der GIM Gesellschaft für integratives Management mbH, einschließlich Informationen zur Datenverarbeitung und Ihren Rechten gemäß der DSGVO.' // Description: Relevant and concise description for privacy policy
)

</script>


<template>
  <div class="privacy-policy-container py-14 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
      <h1 class=" font-bold text-primary mb-6 break-words text-wrap text-3xl lg:text-5xl ">
        Datenschutzerklärung
      </h1>

      <section class="mb-10">
        <h2 class=" font-semibold text-accent">1. Einleitung</h2>
        <p class="mt-4 text-secondary">
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese Website dient rein informativen Zwecken. Wir verarbeiten keinerlei personenbezogene Daten und verwenden keine Cookies oder Tracking-Tools.
        </p>
      </section>

      <section class="mb-10">
        <h2 class=" font-semibold text-accent">2. Verantwortlicher</h2>
        <p class="mt-4 text-secondary">
          Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p class="mt-2 text-secondary">
          <strong>GIM Gesellschaft für integratives Management mbH</strong><br />
          Südportal 7, 22848 Norderstedt<br />
          Deutschland<br />
          Telefon: +49 40 22898595<br />
          E-Mail: info@gim-gruppe.com
        </p>
      </section>

      <section class="mb-10">
        <h2 class=" font-semibold text-accent">3. Keine Erhebung personenbezogener Daten</h2>
        <p class="mt-4 text-secondary-700">
          Wir erheben, speichern oder verarbeiten keinerlei personenbezogene Daten von Ihnen, wenn Sie diese Website besuchen. Es werden keine Informationen automatisch erfasst, keine IP-Adressen gespeichert und keine Nutzungsdaten gesammelt.
        </p>
      </section>

      <section class="mb-10">
        <h2 class=" font-semibold text-accent-800">4. Keine Cookies oder Tracking-Tools</h2>
        <p class="mt-4 text-secondary-700">
          Auf unserer Website werden keine Cookies verwendet. Es kommen auch keine Analysetools wie Google Analytics oder andere Tracking-Tools zum Einsatz. 
        </p>
      </section>

      <section class="mb-10">
        <h2 class=" font-semibold text-accent-800">5. Ihre Rechte</h2>
        <p class="mt-4 text-secondary-700">
          Auch wenn auf dieser Website keine Daten verarbeitet werden, stehen Ihnen grundsätzlich die Rechte gemäß DSGVO zu, insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch.
        </p>
        <p class="mt-4 text-secondary-700">
          Sollten Sie Fragen oder Anliegen haben, können Sie uns jederzeit unter den oben angegebenen Kontaktdaten erreichen.
        </p>
      </section>

      <section class="mb-10">
        <h2 class=" font-semibold text-accent-800">6. Änderungen dieser Datenschutzerklärung</h2>
        <p class="mt-4 text-secondary-700">
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand 11.10.2024. Durch Änderungen unserer Website oder rechtliche Vorgaben kann eine Anpassung dieser Erklärung erforderlich werden. 
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.privacy-policy-container {
  background-color: #f9f9f9;
  padding: 2rem;
}
h1, h2 {
  margin-bottom: 1rem;
}
</style>
