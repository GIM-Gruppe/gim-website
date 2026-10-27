<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    items: string[];
    variant?: 'plain' | 'cards';
  }>(),
  {
    variant: 'plain'
  }
);
</script>

<template>
  <ul :class="props.variant === 'cards' ? 'grid gap-4 md:grid-cols-2' : 'space-y-3'">
    <li
      v-for="item in props.items"
      :key="item"
      class="flex items-start gap-3 leading-relaxed text-secondary"
      :class="props.variant === 'cards' ? 'rounded-2xl border border-black/10 bg-white p-5' : ''"
    >
      <svg
        class="mt-1 h-5 w-5 shrink-0 text-primary"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        />
      </svg>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
