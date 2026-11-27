<script setup lang="ts">
import { onMounted } from 'vue'
import { useSeoMeta } from '~/composables/seo'
import page from '~/data/pages/impressum.json'

definePageMeta({
  documentDriven: { page: false, surround: false }
})

useSeoMeta(page.seo.title, page.seo.description)

// E-Mail-Link wird weiterhin clientseitig erzeugt.
onMounted(() => {
  const email = page.contact.email

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
        {{ page.title }}
      </h1>

      <!-- Angaben gemäß § 5 TMG -->
      <section class="mb-4" aria-labelledby="imprint-company">
        <h2 id="imprint-company" class="text-xl font-semibold">
          {{ page.company.title }}
        </h2>
        <address class="mt-2 not-italic text-secondary leading-relaxed">
          <strong>{{ page.company.name }}</strong><br />
          {{ page.company.street }}<br />
          {{ page.company.city }}<br />
          {{ page.company.country }}
        </address>
      </section>

      <!-- Vertretung -->
      <section class="mb-4" aria-labelledby="imprint-directors">
        <h2 id="imprint-directors" class="text-xl font-semibold">
          {{ page.directors.title }}
        </h2>
        <ul class="mt-2 text-secondary list-none space-y-1">
          <li v-for="(name, index) in page.directors.names" :key="index">{{ name }}</li>
        </ul>
      </section>

      <!-- Kontakt -->
      <section class="mb-4" aria-labelledby="imprint-contact">
        <h2 id="imprint-contact" class="text-xl font-semibold">
          {{ page.contact.title }}
        </h2>
        <p class="mt-2 text-secondary">
          {{ page.contact.phoneLabel }}
          <a
            :href="`tel:${page.contact.phone.replace(/[^+0-9]/g, '')}`"
            class="underline hover:no-underline"
          >
            {{ page.contact.phone }}
          </a>
          <br />
          {{ page.contact.emailLabel }}
          <span id="email-container" class="ml-1">
            <!-- Fallback-Text, wird clientseitig ersetzt -->
            <span class="sr-only">{{ page.contact.emailLabel }}</span>
          </span>

          <noscript>
            <span class="ml-1">
              {{ page.contact.email.replace('@', ' [at] ').replace(/\./g, ' [dot] ') }}
            </span>
          </noscript>
        </p>
      </section>

      <!-- Registereintrag -->
      <section class="mb-4" aria-labelledby="imprint-register">
        <h2 id="imprint-register" class="text-xl font-semibold">
          {{ page.register.title }}
        </h2>
        <p class="mt-2 text-secondary">
          {{ page.register.text }}<br />
          {{ page.register.court }}<br />
          {{ page.register.number }}
        </p>
      </section>

      <!-- USt-ID -->
      <section class="mb-4" aria-labelledby="imprint-vat">
        <h2 id="imprint-vat" class="text-xl font-semibold">
          {{ page.vat.title }}
        </h2>
        <p class="mt-2 text-secondary">
          {{ page.vat.number }}
        </p>
      </section>
    </div>
  </LayoutContainer>
</template>
