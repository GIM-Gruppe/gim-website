<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

definePageMeta({
  documentDriven: { page: false, surround: false }
})

useSeoMeta(
  'GIM Website - Datenschutz',
  'Erfahren Sie mehr über den Datenschutz der GIM Gesellschaft für integratives Management mbH, einschließlich Informationen zur Datenverarbeitung und Ihren Rechten gemäß DSGVO.'
)
</script>

<template>
  <LayoutContainer as="section" aria-labelledby="privacy-policy-title">
    <div class="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">

      <!-- Haupttitel -->
      <h1
        id="privacy-policy-title"
        class="font-bold text-primary mb-6 break-words text-3xl lg:text-5xl"
      >
        Datenschutzerklärung
      </h1>

      <!-- Abschnitt 1 -->
      <section class="mb-10" aria-labelledby="pp-intro">
        <h2 id="pp-intro" class="font-semibold text-accent text-2xl">
          1. Einleitung
        </h2>
        <p class="mt-4 text-secondary">
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
          Diese Website dient rein informativen Zwecken. Wir verarbeiten
          keinerlei personenbezogene Daten und verwenden keine Cookies oder Tracking-Tools.
        </p>
      </section>

      <!-- Abschnitt 2 -->
      <section class="mb-10" aria-labelledby="pp-controller">
        <h2 id="pp-controller" class="font-semibold text-accent text-2xl">
          2. Verantwortlicher
        </h2>
        <p class="mt-4 text-secondary">
          Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
        </p>

        <address class="mt-2 not-italic text-secondary leading-relaxed">
          <strong>GIM Gesellschaft für integratives Management mbH</strong><br />
          Gutenbergring 69A<br />
          22848 Norderstedt<br />
          Deutschland<br />
          Telefon:
          <a href="tel:+494022898595" class="underline hover:no-underline">
            +49 40 22898595
          </a><br />
          E-Mail:
          <a href="mailto:info@gim-gruppe.com" class="underline hover:no-underline">
            info@gim-gruppe.com
          </a>
        </address>
      </section>

      <!-- Abschnitt 3 -->
      <section class="mb-10" aria-labelledby="pp-none">
        <h2 id="pp-none" class="font-semibold text-accent text-2xl">
          3. Keine Erhebung personenbezogener Daten
        </h2>
        <p class="mt-4 text-secondary">
          Wir erheben, speichern oder verarbeiten keinerlei personenbezogene Daten,
          wenn Sie diese Website besuchen. Es werden keine Informationen automatisch erfasst,
          keine IP-Adressen gespeichert und keine Nutzungsdaten gesammelt.
        </p>
      </section>

      <!-- Abschnitt 4 -->
      <section class="mb-10" aria-labelledby="pp-cookies">
        <h2 id="pp-cookies" class="font-semibold text-accent text-2xl">
          4. Keine Cookies oder Tracking-Tools
        </h2>
        <p class="mt-4 text-secondary">
          Auf unserer Website werden keine Cookies verwendet. Es kommen auch keine Analysetools
          wie Google Analytics oder andere Tracking-Tools zum Einsatz.
        </p>
      </section>

      <!-- Abschnitt 5 -->
      <section class="mb-10" aria-labelledby="pp-rights">
        <h2 id="pp-rights" class="font-semibold text-accent text-2xl">
          5. Ihre Rechte
        </h2>
        <p class="mt-4 text-secondary">
          Auch wenn auf dieser Website keine Daten verarbeitet werden, stehen Ihnen grundsätzlich
          die Rechte gemäß DSGVO zu: Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch.
        </p>
        <p class="mt-4 text-secondary">
          Sollten Sie Fragen oder Anliegen haben, können Sie uns jederzeit unter den oben angegebenen
          Kontaktdaten erreichen.
        </p>
      </section>

      <!-- Abschnitt 6 -->
      <section class="mb-10" aria-labelledby="pp-updates">
        <h2 id="pp-updates" class="font-semibold text-accent text-2xl">
          6. Änderungen dieser Datenschutzerklärung
        </h2>
        <p class="mt-4 text-secondary">
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand 11.10.2024.
          Durch Änderungen unserer Website oder rechtliche Vorgaben kann eine Anpassung
          dieser Erklärung erforderlich werden.
        </p>
      </section>

    </div>
  </LayoutContainer>
</template>

<style scoped>
.privacy-policy-container {
  background-color: #f9f9f9;
}
</style>
