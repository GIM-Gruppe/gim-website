<script setup lang="ts">
const props = defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
  paragraphs?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}>();
</script>

<template>
  <section class="bg-white">
    <LayoutContainer class="py-8 md:py-12 lg:py-16">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-center">
        <div class="max-w-3xl">
          <p v-if="props.eyebrow" class="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            {{ props.eyebrow }}
          </p>
          <h1 class="mt-3 max-w-3xl font-semibold">
            {{ props.title }}
          </h1>
          <div class="mt-6 max-w-3xl space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p v-if="props.description" v-html="props.description" />
            <p v-for="paragraph in props.paragraphs" :key="paragraph" v-html="paragraph" />
          </div>
          <div v-if="props.ctaLabel && props.ctaHref" class="mt-8 flex flex-wrap gap-4">
            <UiButton :href="props.ctaHref" :label="props.ctaLabel" />
          </div>
        </div>

        <div v-if="props.imageSrc" class="flex items-center justify-center lg:justify-end">
          <img
            :src="props.imageSrc"
            :alt="props.imageAlt || props.title"
            class="h-[320px] w-full max-w-xl rounded-[1.75rem] object-cover md:h-[420px]"
            loading="lazy"
          />
        </div>
      </div>
    </LayoutContainer>
  </section>
</template>
