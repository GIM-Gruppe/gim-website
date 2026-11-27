<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
import page from '~/data/pages/blog.json'

const { data: posts, pending, error } = await useAsyncData('blog-posts', () => getPublishedBlogPosts())

useSeoMeta(page.seo.title, page.seo.description)
</script>

<template>
  <LayoutContainer>
    <section class="py-14 sm:py-20" aria-labelledby="blog-title">
      <div class="max-w-3xl">
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          {{ page.eyebrow }}
        </p>
        <h1 id="blog-title" class="mb-5">{{ page.title }}</h1>
        <p class="max-w-2xl text-left text-lg leading-8 text-secondary">
          {{ page.description }}
        </p>
      </div>
    </section>

    <section class="pb-20" aria-label="Blogartikel">
      <div v-if="pending" role="status" aria-live="polite" class="py-8 text-secondary">
        Blogartikel werden geladen …
      </div>

      <div v-else-if="error" role="status" aria-live="assertive" class="py-8 text-red-700">
        Die Blogartikel konnten nicht geladen werden.
      </div>

      <div
        v-else-if="!posts?.length"
        class="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-12 text-center"
      >
        <h2 class="mb-3 text-2xl text-secondary">{{ page.emptyTitle }}</h2>
        <p class="mb-0 text-center text-secondary">
          {{ page.emptyText }}
        </p>
      </div>

      <div v-else class="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="post in posts"
          :key="post.path"
          class="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <NuxtLink :to="post.path" class="block h-full">
            <div v-if="post.image" class="aspect-[16/9] overflow-hidden bg-gray-100">
              <img
                :src="post.image"
                :alt="post.imageAlt"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="flex h-full flex-col p-6 sm:p-7">
              <div class="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-secondary">
                <span class="font-semibold uppercase tracking-wide text-primary">{{ post.category }}</span>
                <span aria-hidden="true">•</span>
                <time :datetime="post.date">{{ formatBlogDate(post.date) }}</time>
              </div>

              <h2 class="mb-3 text-2xl text-secondary transition group-hover:text-primary">
                {{ post.title }}
              </h2>
              <p class="mb-6 text-left leading-7 text-secondary">
                {{ post.description }}
              </p>
              <span class="mt-auto text-sm font-semibold text-secondary">
                {{ page.readLabel }} <span aria-hidden="true">→</span>
              </span>
            </div>
          </NuxtLink>
        </article>
      </div>
    </section>
  </LayoutContainer>
</template>
