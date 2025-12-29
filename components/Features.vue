<script setup lang="ts">
const props = defineProps<{
  title: string;
  services: {
    title: string;
    description: string;
    icon?: string;
    id?: string | number;
  }[];
}>();
</script>

<template>
  <!-- Section-Wrapper für bessere Struktur -->
  <LayoutContainer as="section" topMargin bottomMargin>
    <div class="mt-16 md:mt-0">
      <!-- h2 statt h1, um Seitenhierarchie nicht zu sprengen -->
      <h2 class="lg:tracking-tight font-semibold" v-html="props.title"></h2>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
      <div
        v-for="item in props.services"
        :key="item.id || item.title"
        class="flex gap-4 items-start"
      >
        <div
          class="flex justify-center items-center mt-1 rounded-full w-8 h-8 shrink-0"
          :class="{ 'bg-gray-100': item.icon }"
        >
          <Icon
            v-if="item.icon"
            class="text-primary w-4 h-4"
            :name="item.icon"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 class="font-semibold">
            {{ item.title }}
          </h3>
          <p class="text-secondary mt-2 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>
