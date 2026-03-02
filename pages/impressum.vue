<script setup lang="ts">
import { onMounted } from 'vue'
import { useSeoMeta } from '~/composables/seo'

definePageMeta({
  documentDriven: { page: false, surround: false }
})

useSeoMeta(
  'GIM Website - Impressum',
  'Rechtliche Informationen und Kontaktdaten der GIM Gesellschaft für integratives Management mbH'
)

// Clientseitige E-Mail-Erzeugung mit Base64
onMounted(() => {
  // "info@gim-gruppe.com" in Base64
  const encoded = 'aW5mb0BnaW0tZ3J1cHBlLmNvbQ==' // info@gim-gruppe.com
  const email = atob(encoded)

  const container = document.getElementById('email-container')
  if (container) {
    const link = document.createElement('a')
    link.href = `mailto:${email}`
    link.textContent = email
    link.className = 'text-blue-600 hover:underline'
    container.replaceChildren(link)
  }
})
</script>

<template>
  <LayoutContainer
    as="section"
    aria-labelledby="imprint-title"
    class="py-8"
  >
    <div class="p-6 max-w-4xl mx-auto bg-white rounded-md shadow-sm">
      <h1
        id="imprint-title"
        class="text-2xl font-bold mb-4"
      >
        Impressum
      </h1>

      <!-- Angaben gemäß § 5 TMG -->
      <section class="mb-4" aria-labelledby="imprint-company">
        <h2 id="imprint-company" class="text-xl font-semibold">
          Angaben gemäß § 5 TMG:
        </h2>
        <address class="mt-2 not-italic text-secondary leading-relaxed">
          <strong>GIM Gesellschaft für integratives Management mbH</strong><br />
          Gutenbergring 69A<br />
          22848 Norderstedt<br />
          Deutschland
        </address>
      </section>

      <!-- Vertretung -->
      <section class="mb-4" aria-labelledby="imprint-directors">
        <h2 id="imprint-directors" class="text-xl font-semibold">
          Vertreten durch die Geschäftsführer:
        </h2>
        <ul class="mt-2 text-secondary list-none space-y-1">
          <li>Lutz Thiele</li>
          <li>Jonas Grossen</li>
        </ul>
      </section>

      <!-- Kontakt -->
      <section class="mb-4" aria-labelledby="imprint-contact">
        <h2 id="imprint-contact" class="text-xl font-semibold">
          Kontakt:
        </h2>
        <p class="mt-2 text-secondary">
          Telefon:
          <a
            href="tel:+494022898595"
            class="underline hover:no-underline"
          >
            +49 40 22898595
          </a>
          <br />
          E-Mail:
          <span id="email-container" class="ml-1">
            <!-- Fallback-Text, wird clientseitig ersetzt -->
            <span class="sr-only">E-Mail:</span>
          </span>

          <noscript>
            <span class="ml-1">
              info [at] gim-gruppe [dot] com
            </span>
          </noscript>
        </p>
      </section>

      <!-- Registereintrag -->
      <section class="mb-4" aria-labelledby="imprint-register">
        <h2 id="imprint-register" class="text-xl font-semibold">
          Registereintrag:
        </h2>
        <p class="mt-2 text-secondary">
          Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Kiel<br />
          Registernummer: HRB 28539
        </p>
      </section>

      <!-- USt-ID -->
      <section class="mb-4" aria-labelledby="imprint-vat">
        <h2 id="imprint-vat" class="text-xl font-semibold">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        </h2>
        <p class="mt-2 text-secondary">
          DE165 916 544
        </p>
      </section>
    </div>
  </LayoutContainer>
</template>
