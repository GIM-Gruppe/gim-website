<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
import { cmsInline } from '~/utils/cms-html'
import page from '~/data/pages/services/datenschutzberatung.json'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(page.seo.title, page.seo.description)

const personalCardClass = (index: number) => {
  if (index < 3) return 'lg:col-span-2'
  if (index === 3) return 'lg:col-span-3'
  return 'md:col-span-2 lg:col-span-3'
}
</script>

<template>
  <div>
    <Breadcrumbs :items="[{ label: 'Leistungen', to: '/services' }, { label: 'Datenschutzberatung' }]" />

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

    <section class="bg-gray-50" aria-labelledby="datenschutz-praxis">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.practice.eyebrow }}</p>
            <h2 id="datenschutz-praxis" class="mt-3 font-semibold">{{ page.practice.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed">
              <p v-html="cmsInline(page.practice.paragraph)"></p>
              <p v-html="cmsInline(page.practice.paragraph2)"></p>
            </div>
            <p class="mb-0 mt-8 rounded-2xl border-l-4 border-primary bg-white p-5 text-left text-lg font-semibold text-secondary">{{ page.practice.paragraph3 }}</p>
            <div class="mt-8 space-y-5 text-secondary leading-relaxed">
              <p v-html="cmsInline(page.practice.paragraph4)"></p>
              <UiButton href="/contact" :label="page.practice.ctaLabel" />
            </div>
          </div>
          <LightboxImage
            :src="page.practice.image"
            :alt="page.practice.imageAlt"
            img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[460px]"
            button-class="w-full rounded-[1.75rem] lg:sticky lg:top-24"
            loading="lazy"
          />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white" aria-labelledby="datenschutz-leistungen">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.services.eyebrow }}</p>
          <h2 id="datenschutz-leistungen" class="mt-3 font-semibold">{{ page.services.title }}</h2>
          <p class="mt-6 text-secondary leading-relaxed" v-html="cmsInline(page.services.paragraph)"></p>
        </div>
        <CheckList class="mt-10" variant="cards" :items="page.services.services" />
        <div class="mt-10 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <p class="mb-0 text-secondary leading-relaxed" v-html="cmsInline(page.services.paragraph2)"></p>
          <UiButton href="/contact" :label="page.services.ctaLabel" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50" aria-labelledby="datenschutz-pakete">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.packages.eyebrow }}</p>
          <h2 id="datenschutz-pakete" class="mt-3 font-semibold">{{ page.packages.title }}</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed">
            <p v-html="cmsInline(page.packages.paragraph)"></p>
            <p v-html="cmsInline(page.packages.paragraph2)"></p>
          </div>
        </div>
        <PackageCards class="mt-10" :packages="page.packages.packages" :features-title="page.packages.featuresTitle" />
      </LayoutContainer>
    </section>

    <section class="bg-primary text-white" aria-labelledby="datenschutz-kosten">
      <LayoutContainer class="py-12 md:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-center">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">{{ page.costs.eyebrow }}</p>
            <h2 id="datenschutz-kosten" class="mt-3 font-semibold text-white">{{ page.costs.title }}</h2>
            <div class="mt-6 space-y-4 leading-relaxed">
              <p>{{ page.costs.paragraph }}</p>
              <p v-html="cmsInline(page.costs.paragraph2)"></p>
              <p class="mb-0" v-html="cmsInline(page.costs.paragraph3)"></p>
            </div>
          </div>
          <div class="rounded-3xl border border-white/20 bg-white/10 p-7 md:p-8">
            <p class="mb-0 text-left font-heading text-3xl font-bold md:text-4xl">{{ page.costs.paragraph4 }}</p>
            <p class="mb-0 mt-3 text-left text-lg font-semibold">{{ page.costs.paragraph5 }}</p>
          </div>
        </div>
        <ul class="mt-10 grid gap-4 sm:grid-cols-2">
          <li class="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 leading-relaxed">{{ page.costs.bullet }}</li>
          <li class="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 leading-relaxed">{{ page.costs.bullet2 }}</li>
        </ul>
      </LayoutContainer>
    </section>

    <section class="bg-white" aria-labelledby="datenschutz-onboarding">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <LightboxImage
            :src="page.onboarding.image"
            :alt="page.onboarding.imageAlt"
            img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[460px]"
            button-class="w-full rounded-[1.75rem] lg:sticky lg:top-24"
            loading="lazy"
          />
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.onboarding.eyebrow }}</p>
            <h2 id="datenschutz-onboarding" class="mt-3 font-semibold">{{ page.onboarding.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed">
              <p v-html="cmsInline(page.onboarding.paragraph)"></p>
              <p v-html="cmsInline(page.onboarding.paragraph2)"></p>
              <p class="mb-0">{{ page.onboarding.paragraph3 }}</p>
            </div>
            <CheckList class="mt-6" :items="page.onboarding.onboardingItems" />
            <div class="mt-8 space-y-4 text-secondary leading-relaxed">
              <p v-html="cmsInline(page.onboarding.paragraph4)"></p>
              <p class="mb-0 rounded-2xl border-l-4 border-primary bg-gray-50 p-5 text-left" v-html="cmsInline(page.onboarding.paragraph5)"></p>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <ProcessSteps
      :title="page.process.title"
      :steps="page.process.steps"
      :cta-label="page.process.ctaLabel"
      cta-href="/contact"
    />

    <section class="bg-white" aria-labelledby="datenschutz-persoenlich">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-center">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.personal.eyebrow }}</p>
            <h2 id="datenschutz-persoenlich" class="mt-3 font-semibold">{{ page.personal.title }}</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed">
              <p class="font-semibold">{{ page.personal.paragraph }}</p>
              <p v-html="cmsInline(page.personal.paragraph2)"></p>
            </div>
          </div>
          <LightboxImage
            :src="page.personal.image"
            :alt="page.personal.imageAlt"
            img-class="h-[280px] w-full rounded-[1.75rem] object-cover md:h-[360px]"
            button-class="w-full rounded-[1.75rem]"
            loading="lazy"
          />
        </div>

        <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          <article
            v-for="(item, index) in page.personal.personalPoints"
            :key="item.title"
            class="rounded-3xl bg-gray-50 p-6"
            :class="personalCardClass(index)"
          >
            <h3 class="font-semibold">{{ item.title }}</h3>
            <div class="mt-3 space-y-3 text-secondary leading-relaxed">
              <p v-for="paragraph in item.paragraphs" :key="paragraph" class="mb-0 text-left">{{ paragraph }}</p>
            </div>
          </article>
        </div>

        <div class="mt-10">
          <UiButton href="/contact" :label="page.personal.ctaLabel" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50" aria-labelledby="datenschutz-laufzeiten">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ page.terms.eyebrow }}</p>
          <h2 id="datenschutz-laufzeiten" class="mt-3 font-semibold">{{ page.terms.title }}</h2>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article
            v-for="term in page.terms.contractTerms"
            :key="term.packages"
            class="rounded-3xl border border-black/10 bg-white p-6 md:p-8"
          >
            <h3 class="font-semibold">{{ term.packages }}</h3>
            <p class="mb-0 mt-4 text-left font-heading text-4xl font-bold text-primary">{{ term.duration }}</p>
            <p class="mb-0 mt-1 text-left text-sm font-semibold uppercase tracking-[0.12em] text-secondary">{{ page.terms.eyebrow2 }}</p>
            <div class="mt-5 space-y-3 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-for="paragraph in term.paragraphs" :key="paragraph" class="mb-0 text-left" v-html="cmsInline(paragraph)" />
            </div>
          </article>
        </div>

        <div class="mt-8 space-y-2 text-secondary leading-relaxed">
          <p class="mb-0">{{ page.terms.paragraph }}</p>
          <p class="mb-0" v-html="cmsInline(page.terms.paragraph2)"></p>
        </div>
      </LayoutContainer>
    </section>

    <FaqAccordion :title="page.faq.title" :items="page.faq.items" />

    <section class="bg-white" aria-labelledby="datenschutz-cta">
      <LayoutContainer class="pb-6 md:pb-10">
        <div class="grid gap-8 rounded-3xl bg-primary p-7 text-white md:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div class="max-w-3xl">
            <h2 id="datenschutz-cta" class="font-semibold text-white">{{ page.cta.title }}</h2>
            <div class="mt-5 space-y-4 leading-relaxed">
              <p v-html="cmsInline(page.cta.paragraph)"></p>
              <p v-html="cmsInline(page.cta.paragraph2)"></p>
              <p class="mb-0 font-semibold" v-html="cmsInline(page.cta.paragraph3)"></p>
            </div>
          </div>
          <UiButton
            href="/contact"
            :label="page.cta.ctaLabel"
            style="outline"
            class="bg-white text-primary"
          />
        </div>
      </LayoutContainer>
    </section>
  </div>
</template>
