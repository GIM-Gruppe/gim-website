<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
import page from '~/data/pages/datenschutz.json'
import { cmsBlock } from '~/utils/cms-html'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(page.seo.title, page.seo.description)
</script>

<template>
  <LayoutContainer as="section" aria-labelledby="privacy-policy-title">
    <div class="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8">
      <h1 id="privacy-policy-title" class="font-bold text-primary mb-6 break-words text-3xl lg:text-5xl">
        {{ page.title }}
      </h1>
      <div class="legal-copy" v-html="cmsBlock(page.intro)" />
      <template v-for="(section, index) in page.sections" :key="section.id || index">
        <h2 :id="section.id || `privacy-section-${index + 1}`" class="mt-12 font-semibold text-accent text-2xl lg:text-3xl">{{ section.title }}</h2>
        <div v-if="section.body" class="legal-copy" v-html="cmsBlock(section.body)" />
        <template v-for="(subsection, subIndex) in section.subsections" :key="subsection.id || subIndex">
          <h4 :id="subsection.id || `privacy-section-${index + 1}-${subIndex + 1}`" class="mt-6 font-semibold text-primary text-lg">{{ subsection.title }}</h4>
          <div v-if="subsection.body" class="legal-copy" v-html="cmsBlock(subsection.body)" />
        </template>
      </template>
    </div>
  </LayoutContainer>
</template>

<style scoped>
/* Default styling also applies to new paragraphs/lists created by the CMS. */
.legal-copy :deep(p:not([class])) { @apply mt-4 text-secondary leading-relaxed; }
.legal-copy :deep(ul:not([class])) { @apply mt-4 list-disc space-y-2 pl-6 text-secondary leading-relaxed; }
.legal-copy :deep(ol:not([class])) { @apply mt-4 list-decimal space-y-2 pl-6 text-secondary leading-relaxed; }
.legal-copy :deep(address:not([class])) { @apply mt-3 not-italic text-secondary leading-relaxed; }
.legal-copy :deep(a:not([class])) { @apply underline hover:no-underline; }
.legal-copy :deep(h3), .legal-copy :deep(h4) { @apply mt-6 font-semibold text-primary text-lg; }
</style>
