<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
import { cmsInline } from '~/utils/cms-html'
import page from '~/data/pages/services/kis-guard.json'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(page.seo.title, page.seo.description)
</script>

<template>
  <div>
    <Breadcrumbs :items="[
      { label: 'Leistungen', to: '/services' },
      { label: 'KIS GUARD' }
    ]" />

    <ServiceLead
      :eyebrow="page.hero.eyebrow"
      :title="page.hero.title"
      :description="page.hero.description"
      :paragraphs="page.hero.paragraphs"
      :cta-label="page.hero.ctaLabel"
      cta-href="/contact"
      :image-src="page.hero.image"
      :image-alt="page.hero.imageAlt"
    />

    <LayoutContainer as="section" bottomMargin>
      <div class="rounded-[2rem] bg-gray-50 px-6 py-10 md:px-10">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{{ page.resilience.eyebrow }}</p>
            <h2 class="mt-3 font-semibold">{{ page.resilience.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed">
              <p v-html="cmsInline(page.resilience.paragraph)"></p>
              <p v-html="cmsInline(page.resilience.paragraph2)"></p>
            </div>

            <div class="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.resilience.eyebrow2 }}</p>
              <h3 class="mt-2 font-semibold text-xl">{{ page.resilience.subheading }}</h3>
              <div class="mt-4 space-y-4 text-secondary leading-relaxed">
                <p>{{ page.resilience.paragraph3 }}</p>
                <p v-html="cmsInline(page.resilience.paragraph4)"></p>
              </div>
            </div>
          </div>
          <LightboxImage
            :src="page.resilience.image"
            :alt="page.resilience.imageAlt"
            img-class="w-full rounded-[1.75rem] bg-white object-cover shadow-sm"
            button-class="w-full rounded-[1.75rem]"
          />
        </div>

        <div class="mt-10">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">{{ page.resilience.eyebrow3 }}</p>
          <div class="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <article
              v-for="feature in page.resilience.solutionFeatures"
              :key="feature.title"
              class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <h3 class="font-semibold leading-snug text-xl hyphens-auto break-words">{{ feature.title }}</h3>
              <ul class="mt-4 space-y-3 text-sm text-secondary leading-relaxed">
                <li v-for="point in feature.points" :key="point" class="flex gap-2">
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{{ point }}</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </LayoutContainer>

    <LayoutContainer as="section" bottomMargin>
      <div class="max-w-4xl">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{{ page.capabilities.eyebrow }}</p>
        <h2 class="mt-3 font-semibold">{{ page.capabilities.title }}</h2>
        <p class="mt-5 text-secondary leading-relaxed" v-html="cmsInline(page.capabilities.paragraph)"></p>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <article
          v-for="capability in page.capabilities.capabilities"
          :key="capability.title"
          class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <h3 class="font-semibold">{{ capability.title }}</h3>
          <p class="mt-3 text-secondary leading-relaxed">{{ capability.text }}</p>
        </article>
      </div>
    </LayoutContainer>

    <section class="bg-gray-50 py-12 md:py-16 lg:py-20">
      <LayoutContainer>
        <div class="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <LightboxImage
            :src="page.audience.image"
            :alt="page.audience.imageAlt"
            img-class="w-full rounded-[1.75rem] bg-white object-cover shadow-sm"
            button-class="w-full rounded-[1.75rem]"
          />
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{{ page.audience.eyebrow }}</p>
            <h2 class="mt-3 font-semibold">{{ page.audience.title }}</h2>
            <p class="mt-5 text-secondary leading-relaxed" v-html="cmsInline(page.audience.paragraph)"></p>
            <ul class="mt-6 space-y-3 text-secondary leading-relaxed">
              <li v-for="targetGroup in page.audience.targetGroups" :key="targetGroup" class="flex gap-3">
                <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{{ targetGroup }}</span>
              </li>
            </ul>
            <div class="mt-8">
              <UiButton href="/contact" :label="page.audience.ctaLabel" />
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <LayoutContainer as="section" topMargin bottomMargin>
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.85fr)] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{{ page.security.eyebrow }}</p>
          <h2 class="mt-3 font-semibold">{{ page.security.title }}</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed">
            <p v-html="cmsInline(page.security.paragraph)"></p>
            <p v-html="cmsInline(page.security.paragraph2)"></p>
          </div>
        </div>
        <LightboxImage
          :src="page.security.image"
          :alt="page.security.imageAlt"
          img-class="w-full rounded-[1.75rem] bg-white object-cover shadow-sm"
          button-class="w-full rounded-[1.75rem]"
        />
      </div>
    </LayoutContainer>

    <ProcessSteps
      :title="page.process.title"
      :steps="page.process.steps"
      :cta-label="page.process.ctaLabel"
      cta-href="/contact"
    />

    <FaqAccordion :title="page.faq.title" :items="page.faq.items" />

    <LayoutContainer as="section" class="pb-16 md:pb-20 lg:pb-24">
      <div class="border-t border-black/10 pt-8 md:flex md:items-center md:justify-between md:gap-8">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.cta.eyebrow }}</p>
          <p class="mt-3 text-lg font-semibold leading-snug md:text-xl" v-html="cmsInline(page.cta.paragraph)"></p>
          <p class="mt-3 text-secondary leading-relaxed" v-html="cmsInline(page.cta.paragraph2)"></p>
        </div>
        <div class="mt-6 shrink-0 md:mt-0">
          <UiButton href="/contact" :label="page.cta.ctaLabel" />
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>
