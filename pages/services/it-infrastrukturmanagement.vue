<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
import { cmsInline } from '~/utils/cms-html'
import page from '~/data/pages/services/it-infrastrukturmanagement.json'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(page.seo.title, page.seo.description)
</script>

<template>
  <div>
    <Breadcrumbs :items="[{ label: 'Leistungen', to: '/services' }, { label: 'IT-Infrastruktur' }]" />

    <ServiceLead
      :eyebrow="page.hero.eyebrow"
      :title="page.hero.title"
      :paragraphs="page.hero.paragraphs"
      :cta-label="page.hero.ctaLabel"
      cta-href="/contact"
      :image-src="page.hero.image"
      :image-alt="page.hero.imageAlt"
      :description="page.hero.description"
    />

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-center">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.relevance.eyebrow }}</p>
            <h2 class="mt-3 font-semibold">{{ page.relevance.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.relevance.paragraph)"></p>
              <p v-html="cmsInline(page.relevance.paragraph2)"></p>
              <p v-html="cmsInline(page.relevance.paragraph3)"></p>
            </div>
            <div class="mt-8"><UiButton href="/contact" :label="page.relevance.ctaLabel" /></div>
          </div>
          <LightboxImage :src="page.relevance.image" :alt="page.relevance.imageAlt" img-class="h-[300px] w-full rounded-[1.75rem] object-cover md:h-[420px]" button-class="w-full rounded-[1.75rem]" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.services.eyebrow }}</p>
          <h2 class="mt-3 font-semibold">{{ page.services.title }}</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p v-html="cmsInline(page.services.paragraph)"></p>
            <p v-html="cmsInline(page.services.paragraph2)"></p>
          </div>
        </div>
        <div class="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
          <div v-for="service in page.services.infrastructureServices" :key="service" class="flex gap-4 border-t border-black/10 pt-5">
            <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(service)" />
          </div>
        </div>
        <div class="mt-10 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div class="space-y-3 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p v-html="cmsInline(page.services.paragraph3)"></p>
            <p v-html="cmsInline(page.services.paragraph4)"></p>
          </div>
          <UiButton href="/contact" :label="page.services.ctaLabel" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <LightboxImage :src="page.audience.image" :alt="page.audience.imageAlt" img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[460px]" button-class="w-full rounded-[1.75rem] lg:sticky lg:top-24" loading="lazy" />
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.audience.eyebrow }}</p>
            <h2 class="mt-3 font-semibold">{{ page.audience.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.audience.paragraph)"></p>
              <p v-html="cmsInline(page.audience.paragraph2)"></p>
            </div>
            <ul class="mt-8 grid gap-3 sm:grid-cols-2">
              <li v-for="item in page.audience.targetGroups" :key="item" class="rounded-2xl border border-black/10 bg-white px-5 py-4 text-secondary">{{ item }}</li>
            </ul>
            <div class="mt-8 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.audience.paragraph3)"></p>
            </div>
            <div class="mt-8"><UiButton href="/contact" :label="page.audience.ctaLabel" /></div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <ProcessSteps :title="page.process.title" :steps="page.process.steps" :cta-label="page.process.ctaLabel" cta-href="/contact" />

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.areas.eyebrow }}</p>
          <h2 class="mt-3 font-semibold">{{ page.areas.title }}</h2>
          <p class="mt-6 text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(page.areas.paragraph)"></p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2">
          <article v-for="item in page.areas.managedAreas" :key="item" class="rounded-3xl border border-black/10 p-6">
            <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(item)" />
          </article>
        </div>
        <div class="mt-8 space-y-5 text-secondary leading-relaxed">
          <p>{{ page.areas.paragraph2 }}</p>
          <UiButton href="/contact" :label="page.areas.ctaLabel" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.quality.eyebrow }}</p>
          <h2 class="mt-3 font-semibold">{{ page.quality.title }}</h2>
          <p class="mt-6 text-secondary leading-relaxed" v-html="cmsInline(page.quality.paragraph)"></p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="item in page.quality.qualityItems" :key="item" class="rounded-3xl bg-white p-6 shadow-sm">
            <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(item)" />
          </article>
        </div>
        <div class="mt-10 max-w-4xl space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
          <p v-html="cmsInline(page.quality.paragraph2)"></p>
          <p>{{ page.quality.paragraph3 }}</p>
          <UiButton href="/contact" :label="page.quality.ctaLabel" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.personal.eyebrow }}</p>
            <h2 class="mt-3 font-semibold">{{ page.personal.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.personal.paragraph)"></p>
              <p v-html="cmsInline(page.personal.paragraph2)"></p>
              <p v-html="cmsInline(page.personal.paragraph3)"></p>
            </div>
            <div class="mt-8"><UiButton href="/contact" :label="page.personal.ctaLabel" /></div>
          </div>
          <LightboxImage :src="page.personal.image" :alt="page.personal.imageAlt" img-class="h-[300px] w-full rounded-[1.75rem] object-cover md:h-[420px]" button-class="w-full rounded-[1.75rem]" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-primary text-white">
      <LayoutContainer class="py-12 md:py-16">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div class="max-w-4xl">
            <h2 class="font-semibold text-white">{{ page.cta.title }}</h2>
            <div class="mt-5 space-y-4 leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.cta.paragraph)"></p>
              <p v-html="cmsInline(page.cta.paragraph2)"></p>
            </div>
          </div>
          <UiButton href="/contact" :label="page.cta.ctaLabel" style="outline" class="bg-white text-primary" />
        </div>
      </LayoutContainer>
    </section>

    <FaqAccordion :title="page.faq.title" :items="page.faq.items" />

    <section class="bg-white">
      <LayoutContainer class="py-8 md:py-10">
        <div class="flex justify-center">
          <UiButton href="/contact" :label="page.finalCta.ctaLabel" />
        </div>
      </LayoutContainer>
    </section>

  </div>
</template>
