<script setup lang="ts">
const props = defineProps<{ copy: { eyebrow: string; title: string; allLabel: string; readLabel: string } }>()
const { data: posts } = await useAsyncData('home-blog-preview', () => getPublishedBlogPosts(3))
</script>

<template>
  <section v-if="posts?.length" class="pb-20" aria-labelledby="blog-preview-title">
    <div class="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
          {{ props.copy.eyebrow }}
        </p>
        <h2 id="blog-preview-title" class="mb-0">{{ props.copy.title }}</h2>
      </div>

      <NuxtLink
        to="/blog"
        class="inline-flex w-fit items-center gap-2 text-sm font-semibold text-secondary transition hover:text-primary"
      >
        {{ props.copy.allLabel }}
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
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

          <div class="flex h-full flex-col p-6">
            <div class="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-secondary">
              <span class="font-semibold uppercase tracking-wide text-primary">{{ post.category }}</span>
              <span aria-hidden="true">•</span>
              <time :datetime="post.date">{{ formatBlogDate(post.date) }}</time>
            </div>

            <h3 class="mb-3 text-xl text-secondary transition group-hover:text-primary">
              {{ post.title }}
            </h3>
            <p class="mb-5 text-left text-sm leading-6 text-secondary">
              {{ post.description }}
            </p>
            <span class="mt-auto text-sm font-semibold text-secondary">
              {{ props.copy.readLabel }} <span aria-hidden="true">→</span>
            </span>
          </div>
        </NuxtLink>
      </article>
    </div>
  </section>
</template>
