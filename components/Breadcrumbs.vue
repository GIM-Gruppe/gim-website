<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav aria-label="Breadcrumb" class="py-4 md:py-6">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <ol class="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        <li v-for="(item, index) in items" :key="`${item.label}-${index}`" class="flex items-center gap-2">
          <NuxtLink
            v-if="item.to && index !== items.length - 1"
            :to="item.to"
            class="transition-colors hover:text-secondary"
          >
            {{ item.label }}
          </NuxtLink>
          <span v-else class="font-medium text-secondary">
            {{ item.label }}
          </span>
          <span v-if="index !== items.length - 1" aria-hidden="true" class="text-gray-300">/</span>
        </li>
      </ol>
    </div>
  </nav>
</template>
