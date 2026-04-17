<script setup lang="ts">
const props = defineProps<{
  title: string;
  intro?: string;
  paragraphs?: string[];
  steps: {
    title: string;
    paragraphs: string[];
  }[];
  ctaLabel?: string;
  ctaHref?: string;
}>();
</script>

<template>
  <section class="bg-gray-50">
    <LayoutContainer class="py-12 md:py-16 lg:py-20">
      <div class="max-w-4xl">
        <h2 class="font-semibold">
          {{ props.title }}
        </h2>
        <div class="mt-4 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
          <p v-if="props.intro" v-html="props.intro" />
          <p v-for="paragraph in props.paragraphs" :key="paragraph" v-html="paragraph" />
        </div>
      </div>

      <div class="mt-10 border-t border-black/10">
        <div
          v-for="(step, index) in props.steps"
          :key="step.title"
          class="grid gap-5 border-b border-black/10 py-7 md:grid-cols-[72px_minmax(0,1fr)] md:gap-8 md:py-9"
        >
          <div class="flex items-start">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-base font-semibold text-white">
              {{ index + 1 }}
            </div>
          </div>
          <div class="max-w-4xl">
            <h3 class="font-semibold">
              {{ step.title }}
            </h3>
            <div class="mt-3 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-for="paragraph in step.paragraphs" :key="paragraph" v-html="paragraph" />
            </div>
          </div>
        </div>
      </div>

      <div v-if="props.ctaLabel && props.ctaHref" class="mt-8">
        <UiButton :href="props.ctaHref" :label="props.ctaLabel" />
      </div>
    </LayoutContainer>
  </section>
</template>
