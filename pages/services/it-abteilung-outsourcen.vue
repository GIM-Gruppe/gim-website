<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
import { cmsInline } from '~/utils/cms-html'
import page from '~/data/pages/services/it-abteilung-outsourcen.json'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(page.seo.title, page.seo.description)
</script>

<template>
  <div>
    <Breadcrumbs :items="[{ label: 'Leistungen', to: '/services' }, { label: 'Managed Services' }]" />

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
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.challenges.eyebrow }}</p>
            <h2 class="mt-3 font-semibold">{{ page.challenges.title }}</h2>
            <p class="mt-6 text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(page.challenges.paragraph)"></p>
            <div class="mt-8 space-y-5">
              <article v-for="item in page.challenges.challenges" :key="item" class="rounded-2xl bg-white p-5 shadow-sm">
                <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(item)" />
              </article>
            </div>
            <div class="mt-8 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.challenges.paragraph2)"></p>
              <UiButton href="/contact" :label="page.challenges.ctaLabel" />
            </div>
          </div>
          <LightboxImage :src="page.challenges.image" :alt="page.challenges.imageAlt" img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[460px]" button-class="w-full rounded-[1.75rem] lg:sticky lg:top-24" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.services.eyebrow }}</p>
          <h2 class="mt-3 font-semibold">{{ page.services.title }}</h2>
          <p class="mt-6 text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(page.services.paragraph)"></p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2">
          <article v-for="item in page.services.services" :key="item" class="rounded-3xl border border-black/10 p-6">
            <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(item)" />
          </article>
        </div>
        <div class="mt-10 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(page.services.paragraph2)"></p>
          <UiButton href="/contact" :label="page.services.ctaLabel" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-primary text-white">
      <LayoutContainer class="py-12 md:py-16">
        <div class="max-w-5xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">{{ page.models.eyebrow }}</p>
          <h2 class="mt-3 font-semibold text-white">{{ page.models.title }}</h2>
          <p class="mt-6 max-w-4xl leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(page.models.paragraph)"></p>
          <ul class="mt-8 grid gap-4 sm:grid-cols-2">
            <li v-for="item in page.models.managedModels" :key="item" class="rounded-2xl border border-white/20 bg-white/10 px-5 py-4">{{ item }}</li>
          </ul>
          <p class="mt-8 font-semibold" v-html="cmsInline(page.models.paragraph2)"></p>
          <div class="mt-8"><UiButton href="/contact" :label="page.models.ctaLabel" style="outline" class="bg-white text-primary" /></div>
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
            <p class="mt-6 text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(page.audience.paragraph)"></p>
            <div class="mt-8 space-y-4">
              <article v-for="item in page.audience.targetGroups" :key="item" class="rounded-2xl bg-white p-5">
                <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(item)" />
              </article>
            </div>
            <p class="mt-8 text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(page.audience.paragraph2)"></p>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl rounded-3xl border border-black/10 p-7 md:p-10">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.limitations.eyebrow }}</p>
          <h2 class="mt-3 font-semibold">{{ page.limitations.title }}</h2>
          <p class="mt-6 text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(page.limitations.paragraph)"></p>
          <div class="mt-8"><UiButton href="/contact" :label="page.limitations.ctaLabel" /></div>
        </div>
      </LayoutContainer>
    </section>

    <ProcessSteps :title="page.process.title" :steps="page.process.steps" :cta-label="page.process.ctaLabel" cta-href="/contact" />

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.benefits.eyebrow }}</p>
          <h2 class="mt-3 font-semibold">{{ page.benefits.title }}</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p v-html="cmsInline(page.benefits.paragraph)"></p>
            <p v-html="cmsInline(page.benefits.paragraph2)"></p>
          </div>
        </div>
        <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="item in page.benefits.benefits" :key="item" class="rounded-2xl border border-black/10 p-5 text-secondary">{{ item }}</li>
        </ul>
        <div class="mt-8 space-y-5 text-secondary leading-relaxed [&_strong]:font-semibold">
          <p v-html="cmsInline(page.benefits.paragraph3)"></p>
          <UiButton href="/contact" :label="page.benefits.ctaLabel" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.criteria.eyebrow }}</p>
            <h2 class="mt-3 font-semibold">{{ page.criteria.title }}</h2>
            <p class="mt-6 text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(page.criteria.paragraph)"></p>
            <div class="mt-8 grid gap-5 md:grid-cols-2">
              <article v-for="item in page.criteria.criteria" :key="item" class="rounded-3xl bg-white p-6 shadow-sm">
                <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(item)" />
              </article>
            </div>
            <div class="mt-8 space-y-5 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.criteria.paragraph2)"></p>
              <UiButton href="/contact" :label="page.criteria.ctaLabel" />
            </div>
          </div>
          <LightboxImage :src="page.criteria.image" :alt="page.criteria.imageAlt" img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[460px]" button-class="w-full rounded-[1.75rem] lg:sticky lg:top-24" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-primary text-white">
      <LayoutContainer class="py-12 md:py-16">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div class="max-w-4xl">
            <h2 class="font-semibold text-white">{{ page.cta.title }}</h2>
            <p class="mt-5 leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(page.cta.paragraph)"></p>
            <ul class="mt-6 list-disc space-y-2 pl-5">
              <li v-for="item in page.cta.finalOptions" :key="item">{{ item }}</li>
            </ul>
            <div class="mt-6 space-y-4 leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.cta.paragraph2)"></p>
              <p v-html="cmsInline(page.cta.paragraph3)"></p>
            </div>
          </div>
          <UiButton href="/contact" :label="page.cta.ctaLabel" style="outline" class="bg-white text-primary" />
        </div>
      </LayoutContainer>
    </section>

    <FaqAccordion :title="page.faq.title" :items="page.faq.items" />

    <section class="bg-white">
      <LayoutContainer class="py-8 md:py-10">
        <div class="flex flex-wrap justify-center gap-4">
          <UiButton href="/contact" :label="page.finalCta.ctaLabel" />
        </div>
      </LayoutContainer>
    </section>
  </div>
</template>
