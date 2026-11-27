<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
import { cmsInline } from '~/utils/cms-html'
import page from '~/data/pages/services/sap/s4hana-migration.json'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(page.seo.title, page.seo.description)
</script>

<template>
  <div>
    <Breadcrumbs :items="[
      { label: 'Leistungen', to: '/services' },
      { label: 'SAP Basis', to: '/services/sap' },
      { label: 'S/4HANA Migration' }
    ]" />
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

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-center">
          <div class="max-w-3xl">
            <h2 class="font-semibold">{{ page.risks.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.risks.paragraph)"></p>
              <ul class="list-disc space-y-2 pl-5">
                <li>{{ page.risks.bullet }}</li>
                <li>{{ page.risks.bullet2 }}</li>
                <li>{{ page.risks.bullet3 }}</li>
              </ul>
              <p v-html="cmsInline(page.risks.paragraph2)"></p>
            </div>
          </div>
          <LightboxImage :src="page.risks.image" :alt="page.risks.imageAlt" img-class="h-[300px] w-full rounded-[1.75rem] object-cover md:h-[420px]" button-class="w-full rounded-[1.75rem]" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <h2 class="font-semibold">{{ page.resources.title }}</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p v-html="cmsInline(page.resources.paragraph)"></p>
            <p v-html="cmsInline(page.resources.paragraph2)"></p>
          </div>
          <div class="mt-8">
            <UiButton href="/contact" :label="page.resources.ctaLabel" />
          </div>
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <LightboxImage :src="page.consulting.image" :alt="page.consulting.imageAlt" img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[440px]" button-class="w-full rounded-[1.75rem]" loading="lazy" />
          <div class="max-w-3xl">
            <h2 class="font-semibold">{{ page.consulting.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.consulting.paragraph)"></p>
              <p v-html="cmsInline(page.consulting.paragraph2)"></p>
              <p v-html="cmsInline(page.consulting.paragraph3)"></p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" :label="page.consulting.ctaLabel" />
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <h2 class="font-semibold">{{ page.audience.title }}</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p v-html="cmsInline(page.audience.paragraph)"></p>
            <ul class="list-disc space-y-2 pl-5">
              <li>{{ page.audience.bullet }}</li>
              <li>{{ page.audience.bullet2 }}</li>
              <li>{{ page.audience.bullet3 }}</li>
              <li>{{ page.audience.bullet4 }}</li>
            </ul>
            <p v-html="cmsInline(page.audience.paragraph2)"></p>
          </div>
          <div class="mt-8">
            <UiButton href="/contact" :label="page.audience.ctaLabel" />
          </div>
        </div>
      </LayoutContainer>
    </section>

    <ProcessSteps
      :title="page.process.title"
      :intro="page.process.intro"
      :steps="page.process.steps"
      :cta-label="page.process.ctaLabel"
      cta-href="/contact"
    />

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <h2 class="font-semibold">{{ page.challenges.title }}</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p v-html="cmsInline(page.challenges.paragraph)"></p>
            <p v-html="cmsInline(page.challenges.paragraph2)"></p>
            <ul class="list-disc space-y-2 pl-5">
              <li v-html="cmsInline(page.challenges.bullet)"></li>
              <li v-html="cmsInline(page.challenges.bullet2)"></li>
              <li v-html="cmsInline(page.challenges.bullet3)"></li>
              <li v-html="cmsInline(page.challenges.bullet4)"></li>
              <li v-html="cmsInline(page.challenges.bullet5)"></li>
              <li v-html="cmsInline(page.challenges.bullet6)"></li>
            </ul>
            <p v-html="cmsInline(page.challenges.paragraph3)"></p>
          </div>
          <div class="mt-8">
            <UiButton href="/contact" :label="page.challenges.ctaLabel" />
          </div>
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.85fr)] lg:items-center">
          <div class="max-w-4xl">
            <h2 class="font-semibold">{{ page.quality.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.quality.paragraph)"></p>
              <ul class="list-disc space-y-2 pl-5">
                <li>{{ page.quality.bullet }}</li>
                <li>{{ page.quality.bullet2 }}</li>
                <li>{{ page.quality.bullet3 }}</li>
                <li>{{ page.quality.bullet4 }}</li>
                <li>{{ page.quality.bullet5 }}</li>
              </ul>
              <p v-html="cmsInline(page.quality.paragraph2)"></p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" :label="page.quality.ctaLabel" />
            </div>
          </div>
          <LightboxImage :src="page.quality.image" :alt="page.quality.imageAlt" img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[420px]" button-class="w-full rounded-[1.75rem]" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <LightboxImage :src="page.regional.image" :alt="page.regional.imageAlt" img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[420px]" button-class="w-full rounded-[1.75rem]" loading="lazy" />
          <div class="max-w-3xl">
            <h2 class="font-semibold">{{ page.regional.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.regional.paragraph)"></p>
              <p v-html="cmsInline(page.regional.paragraph2)"></p>
              <ul class="list-disc space-y-2 pl-5">
                <li>{{ page.regional.bullet }}</li>
                <li>{{ page.regional.bullet2 }}</li>
                <li>{{ page.regional.bullet3 }}</li>
              </ul>
              <p v-html="cmsInline(page.regional.paragraph3)"></p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" :label="page.regional.ctaLabel" />
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <LayoutContainer as="section" topMargin bottomMargin>
      <div class="overflow-hidden rounded-[2rem] bg-primary px-6 py-8 text-white shadow-lg shadow-primary/10 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center">
          <div class="max-w-4xl">
            <h2 class="font-semibold text-white">{{ page.cta.title }}</h2>
            <div class="mt-6 space-y-4 leading-relaxed text-white/90 [&_strong]:font-semibold [&_strong]:text-white">
              <p v-html="cmsInline(page.cta.paragraph)"></p>
              <p v-html="cmsInline(page.cta.paragraph2)"></p>
              <h3 class="pt-2 font-semibold text-white">{{ page.cta.subheading }}</h3>
              <p v-html="cmsInline(page.cta.paragraph3)"></p>
              <ul class="list-disc space-y-2 pl-5">
                <li>{{ page.cta.bullet }}</li>
                <li>{{ page.cta.bullet2 }}</li>
                <li>{{ page.cta.bullet3 }}</li>
              </ul>
              <p v-html="cmsInline(page.cta.paragraph4)"></p>
              <p v-html="cmsInline(page.cta.paragraph5)"></p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" :label="page.cta.ctaLabel" class="!border-white !text-primary hover:!bg-white/90" />
            </div>
          </div>
          <LightboxImage :src="page.cta.image" :alt="page.cta.imageAlt" img-class="h-72 w-full rounded-[1.75rem] object-cover" button-class="w-full rounded-[1.75rem]" loading="lazy" />
        </div>
      </div>
    </LayoutContainer>

    <FaqAccordion
      :title="page.faq.title"
      :items="page.faq.items"
    />
  </div>
</template>
