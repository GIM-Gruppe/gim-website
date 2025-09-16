<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg" | "xl";
    block?: boolean; // Controls whether the button should be full-width
    style?: "outline" | "primary" | "secondary";
    label?: string; // The button label
    href?: string; // Target link
    icon?: string; // Optional icon name or path
    disabled?: boolean; // Disabled state for the button
  }>(),
  {
    size: "lg",
    style: "primary",
    block: false,
    disabled: false,
  }
);
</script>

<template>
  <NuxtLink
    :to="props.href"
    :disabled="props.disabled"
    class="cursor-pointer flex items-center justify-center rounded border-2 text-center font-bold transition focus:ring-2 ring-offset-2 ring-primary transform hover:scale-105"
    :class="{
      // Size Classes
      'px-2 py-1 text-xs': size == 'sm',
      'px-4 py-2 text-sm': size == 'md',
      'px-7 py-3 text-base': size == 'lg',
      'px-9 py-4 text-lg': size == 'xl',

      // Width Control
      'w-full': block,
      'sm:w-fit': !block,

      // Disabled State
      'opacity-50 cursor-not-allowed': props.disabled,

      // Style Classes
      'bg-primary text-white active:bg-primary/70 border-transparent':
        style == 'primary',
      'bg-gray-100 text-black border-gray-300 active:bg-gray-200':
        style == 'secondary',
      'bg-white text-black border-primary active:bg-primary':
        style == 'outline',
    }"
    :aria-disabled="props.disabled"
  >
    <!-- Render Icon if Provided -->
    <span v-if="props.icon" class="mr-2">
      <img :src="props.icon" alt="icon" class="w-5 h-5" />
    </span>
    {{ props.label }}
  </NuxtLink>
</template>
