<template>
  <!-- Semantischer Trenner statt generischem div -->
  <hr class="border-t border-primary" />

  <footer class="bg-secondary/25">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-15 lg:px-8">
      <nav
        class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        aria-label="Fußzeilennavigation"
      >
        <div
          v-for="item in navigation.main"
          :key="item.name"
          class="pb-6"
        >
          <NuxtLink
            :to="item.href"
            class="leading-6 text-secondary hover:text-gray-900"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </nav>

      <div class="mt-10 flex justify-center space-x-10">
        <a
          v-for="item in navigation.social"
          :key="item.name"
          :href="item.href"
          class="text-accent hover:text-gray-900 focus:outline-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>

      <p class="mt-10 text-center text-sm leading-5 text-secondary">
        &copy; GIM GmbH. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const navigation = {
  main: [
    { name: 'Über Uns', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/GIMmbH/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/gim-gruppe-gmbh',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/gimgruppe/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 0 1 3.95 3.95v8.5a3.95 3.95 0 0 1-3.95 3.95h-8.5a3.95 3.95 0 0 1-3.95-3.95v-8.5A3.95 3.95 0 0 1 7.75 3.8zm9.1 1.35a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.8A3.2 3.2 0 1 1 8.8 12 3.2 3.2 0 0 1 12 8.8z',
            }),
          ]),
      }),
    },
  ],
}
</script>
