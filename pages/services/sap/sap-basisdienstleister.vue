<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
import { cmsInline } from '~/utils/cms-html'
import page from '~/data/pages/services/sap/sap-basisdienstleister.json'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(page.seo.title, page.seo.description)
</script>

<template>
  <div>
    <Breadcrumbs :items="[
      { label: 'Leistungen', to: '/services' },
      { label: 'SAP Basis', to: '/services/sap' },
      { label: 'SAP-Basisdienstleister' }
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

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-center">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.relevance.eyebrow }}</p>
            <h2 class="mt-3 font-semibold">{{ page.relevance.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.relevance.paragraph)"></p>
              <p v-html="cmsInline(page.relevance.paragraph2)"></p>
            </div>

            <div class="mt-8 space-y-4">
              <div
                v-for="benefit in page.relevance.benefits"
                :key="benefit"
                class="flex gap-4 border-l-2 border-primary/50 pl-5"
              >
                <p class="text-secondary leading-relaxed">{{ benefit }}</p>
              </div>
            </div>

            <div class="mt-8 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.relevance.paragraph3)"></p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" :label="page.relevance.ctaLabel" />
            </div>
          </div>

          <LightboxImage :src="page.relevance.image" :alt="page.relevance.imageAlt" img-class="h-[300px] w-full rounded-[1.75rem] object-cover md:h-[420px]" button-class="w-full rounded-[1.75rem]" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.services.eyebrow }}</p>
          <h2 class="mt-3 font-semibold">{{ page.services.title }}</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p v-html="cmsInline(page.services.paragraph)"></p>
          </div>
        </div>

        <div class="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
          <div
            v-for="service in page.services.serviceItems"
            :key="service"
            class="flex gap-4 border-t border-black/10 pt-5"
          >
            <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <p class="text-secondary leading-relaxed">{{ service }}</p>
          </div>
        </div>

        <div class="mt-10 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div class="max-w-3xl space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p v-html="cmsInline(page.services.paragraph2)"></p>
            <p>{{ page.services.paragraph3 }}</p>
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

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div
                v-for="target in page.audience.targetGroups"
                :key="target"
                class="flex gap-3"
              >
                <span class="mt-2 h-px w-7 shrink-0 bg-primary" aria-hidden="true" />
                <p class="text-secondary leading-relaxed">{{ target }}</p>
              </div>
            </div>

            <div class="mt-8 space-y-4 text-secondary leading-relaxed">
              <p v-html="cmsInline(page.audience.paragraph3)"></p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" :label="page.audience.ctaLabel" />
            </div>
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
        <div class="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.75fr)] lg:items-start">
          <div class="max-w-4xl">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.tasks.eyebrow }}</p>
            <h2 class="mt-3 font-semibold">{{ page.tasks.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.tasks.paragraph)"></p>
              <p v-html="cmsInline(page.tasks.paragraph2)"></p>
            </div>
          </div>
          <LightboxImage :src="page.tasks.image" :alt="page.tasks.imageAlt" img-class="h-56 w-full rounded-[1.75rem] object-cover" button-class="hidden w-full rounded-[1.75rem] lg:block" loading="lazy" />
        </div>

        <div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="task in page.tasks.taskItems"
            :key="task"
            class="rounded-xl border border-black/10 px-4 py-3 text-sm font-medium text-secondary"
          >
            {{ task }}
          </div>
        </div>

        <div class="mt-8 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div class="space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p v-html="cmsInline(page.tasks.paragraph3)"></p>
          </div>

          <div class="space-y-5">
            <article
              v-for="item in page.tasks.extendedServices"
              :key="item.title"
              class="border-l-2 border-primary/50 pl-5"
            >
              <h3 class="font-semibold">{{ item.title }}</h3>
              <p class="mt-2 text-secondary leading-relaxed">{{ item.text }}</p>
            </article>
          </div>
        </div>

        <div class="mt-10 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <p class="max-w-3xl text-secondary leading-relaxed [&_strong]:font-semibold" v-html="cmsInline(page.tasks.paragraph4)"></p>
          <UiButton href="/contact" :label="page.tasks.ctaLabel" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.85fr)] lg:items-center">
          <div class="max-w-4xl">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.quality.eyebrow }}</p>
            <h2 class="mt-3 font-semibold">{{ page.quality.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.quality.paragraph)"></p>
              <p v-html="cmsInline(page.quality.paragraph2)"></p>
            </div>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div
                v-for="quality in page.quality.qualityItems"
                :key="quality"
                class="flex gap-3"
              >
                <span class="mt-2 h-px w-7 shrink-0 bg-primary" aria-hidden="true" />
                <p class="text-secondary leading-relaxed">{{ quality }}</p>
              </div>
            </div>

            <div class="mt-8 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-html="cmsInline(page.quality.paragraph3)"></p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" :label="page.quality.ctaLabel" />
            </div>
          </div>

          <LightboxImage :src="page.quality.image" :alt="page.quality.imageAlt" img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[420px]" button-class="w-full rounded-[1.75rem]" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <LayoutContainer as="section" topMargin bottomMargin>
      <div class="overflow-hidden rounded-[2rem] bg-primary px-6 py-8 text-white shadow-lg shadow-primary/10 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center">
          <div class="max-w-4xl">
            <h2 class="font-semibold text-white">{{ page.regional.title }}</h2>
            <div class="mt-6 space-y-4 leading-relaxed text-white/90 [&_strong]:font-semibold [&_strong]:text-white">
              <p v-html="cmsInline(page.regional.paragraph)"></p>
            </div>

            <div class="mt-8 grid gap-3 sm:grid-cols-2">
              <div
                v-for="item in page.regional.regionalItems"
                :key="item"
                class="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white"
              >
                {{ item }}
              </div>
            </div>

            <div class="mt-8 space-y-4 leading-relaxed text-white/90 [&_strong]:font-semibold [&_strong]:text-white">
              <p v-html="cmsInline(page.regional.paragraph2)"></p>
              <p v-html="cmsInline(page.regional.paragraph3)"></p>
            </div>

            <div class="mt-8">
              <UiButton href="/contact" :label="page.regional.ctaLabel" class="!border-white !text-primary hover:!bg-white/90" />
            </div>
          </div>

          <LightboxImage :src="page.regional.image" :alt="page.regional.imageAlt" img-class="h-72 w-full rounded-[1.75rem] object-cover" button-class="w-full rounded-[1.75rem]" loading="lazy" />
        </div>
      </div>
    </LayoutContainer>

    <FaqAccordion
      :title="page.faq.title"
      :items="page.faq.items"
    />

    <LayoutContainer as="section" class="pb-16 md:pb-20 lg:pb-24">
      <div class="border-t border-black/10 pt-8 md:flex md:items-center md:justify-between md:gap-8">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.cta.eyebrow }}</p>
          <p class="mt-3 text-lg font-semibold leading-snug md:text-xl">{{ page.cta.paragraph }}</p>
          <p class="mt-3 text-secondary leading-relaxed" v-html="cmsInline(page.cta.paragraph2)"></p>
        </div>
        <div class="mt-6 shrink-0 md:mt-0">
          <UiButton href="/contact" :label="page.cta.ctaLabel" />
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>
