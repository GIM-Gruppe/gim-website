<script setup lang="ts">
interface PackageItem {
  /** Kurzbezeichnung, z. B. "XS" */
  id: string;
  /** Paketname ohne Kürzel, z. B. "Datenschutz Basis" */
  name: string;
  /** Zielgruppe, z. B. "Für Unternehmen mit 1–5 Mitarbeitenden" */
  audience: string;
  /** Hauptpreis, z. B. "89,00 €" oder "ab 799,00 €" */
  price: string;
  /** Zusatz zum Preis, z. B. "netto / Monat" */
  priceNote?: string;
  /** Weitere Eckdaten unter dem Preis (Beratungszeit, Onboarding …) */
  facts: string[];
  /** Beschreibungsabsätze */
  paragraphs: string[];
  /** Enthaltene Leistungen */
  features: string[];
  /** Mindestvertragslaufzeit als ausformulierter Satz */
  term: string;
  /** Optionales Label oben rechts */
  badge?: string;
  ctaLabel: string;
  ctaHref?: string;
}

const props = withDefaults(
  defineProps<{
    packages: PackageItem[];
    featuresTitle?: string;
  }>(),
  {
    featuresTitle: 'Enthaltene Leistungen'
  }
);
</script>

<template>
  <div class="grid gap-6 lg:grid-cols-2">
    <article
      v-for="pkg in props.packages"
      :key="pkg.id"
      class="flex flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-8"
      :aria-labelledby="`package-${pkg.id}`"
    >
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div
          class="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white"
          aria-hidden="true"
        >
          {{ pkg.id }}
        </div>
        <p
          v-if="pkg.badge"
          class="mb-0 rounded-full border border-primary px-3 py-1 text-left text-xs font-semibold text-primary"
        >
          {{ pkg.badge }}
        </p>
      </div>

      <h3 :id="`package-${pkg.id}`" class="mt-5 font-semibold">
        <span class="sr-only">Paket {{ pkg.id }}: </span>{{ pkg.name }}
      </h3>
      <p class="mb-0 mt-2 text-left font-semibold">
        {{ pkg.audience }}
      </p>

      <div class="mt-6 rounded-2xl border border-primary/40 p-5">
        <p class="mb-0 text-left font-heading text-3xl font-bold text-primary">
          {{ pkg.price }}
          <span v-if="pkg.priceNote" class="text-base font-semibold text-secondary">{{ pkg.priceNote }}</span>
        </p>
        <ul class="mt-3 space-y-1 leading-relaxed text-secondary">
          <li v-for="fact in pkg.facts" :key="fact">{{ fact }}</li>
        </ul>
      </div>

      <div class="mt-6 space-y-3 leading-relaxed text-secondary">
        <p v-for="paragraph in pkg.paragraphs" :key="paragraph" class="mb-0 text-left">
          {{ paragraph }}
        </p>
      </div>

      <h4 class="mt-6 font-semibold">
        {{ props.featuresTitle }}
      </h4>
      <CheckList class="mt-4" :items="pkg.features" />

      <div class="mt-auto pt-8">
        <p class="mb-4 border-t border-black/10 pt-5 text-left font-semibold text-secondary">
          {{ pkg.term }}
        </p>
        <UiButton :href="pkg.ctaHref || '/contact'" :label="pkg.ctaLabel" block />
      </div>
    </article>
  </div>
</template>
