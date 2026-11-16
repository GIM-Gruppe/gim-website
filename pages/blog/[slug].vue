<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

const route = useRoute()
const path = `/blog/${String(route.params.slug)}`

const { data: post } = await useAsyncData(`blog-${String(route.params.slug)}`, () => getPublishedBlogPost(path))

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Blogartikel nicht gefunden' })
}

const meta = computed(() => (post.value?.meta && typeof post.value.meta === 'object' ? post.value.meta : {}) as Record<string, unknown>)
const date = computed(() => String(meta.value.date || ''))
const category = computed(() => String(meta.value.category || 'Aktuelles'))
const image = computed(() => String(meta.value.image || ''))
const imageAlt = computed(() => String(meta.value.imageAlt || post.value?.title || ''))

useSeoMeta(
  post.value.title || 'Blog | GIM GmbH',
  post.value.description || 'Blogartikel der GIM GmbH.'
)
</script>

<template>
  <LayoutContainer>
    <article v-if="post" class="mx-auto max-w-4xl py-12 sm:py-16">
      <NuxtLink
        to="/blog"
        class="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-primary"
      >
        <span aria-hidden="true">←</span>
        Zurück zum Blog
      </NuxtLink>

      <header class="mb-10 border-b border-gray-200 pb-10">
        <div class="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-secondary">
          <span class="font-semibold uppercase tracking-wide text-primary">{{ category }}</span>
          <span aria-hidden="true">•</span>
          <time :datetime="date">{{ formatBlogDate(date) }}</time>
        </div>

        <h1 class="mb-5 max-w-3xl">{{ post.title }}</h1>
        <p v-if="post.description" class="mb-0 max-w-3xl text-left text-lg leading-8 text-secondary">
          {{ post.description }}
        </p>
      </header>

      <figure v-if="image" class="mb-12 overflow-hidden rounded-2xl bg-gray-100">
        <img
          :src="image"
          :alt="imageAlt"
          class="h-auto w-full object-cover"
          decoding="async"
        />
      </figure>

      <ContentRenderer
        :value="post"
        class="blog-prose prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-secondary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
      />
    </article>
  </LayoutContainer>
</template>

<style scoped>
.blog-prose :deep(p) {
  text-align: left;
}
</style>
