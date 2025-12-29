<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg" | "xl";
    block?: boolean;
    style?: "outline" | "primary" | "secondary";
    label?: string;
    href?: string;
    icon?: string;
    disabled?: boolean;
  }>(),
  {
    size: "lg",
    style: "primary",
    block: false,
    disabled: false,
  }
);

const isLink = computed(() => !!props.href && !props.disabled);
</script>

<template>
  <!-- Wenn href vorhanden und nicht disabled: Link -->
  <NuxtLink
    v-if="isLink"
    :to="props.href"
    class="inline-flex items-center justify-center rounded border-2 text-center font-bold transition focus:ring-2 ring-offset-2 ring-primary"
    :class="{
      // Size Classes
      'px-2 py-1 text-xs': props.size === 'sm',
      'px-4 py-2 text-sm': props.size === 'md',
      'px-7 py-3 text-base': props.size === 'lg',
      'px-9 py-4 text-lg': props.size === 'xl',

      // Width Control
      'w-full': props.block,
      'sm:w-fit': !props.block,

      // Style Classes (barriereärmere Varianten)
      'bg-white text-primary border-primary hover:bg-primary/10':
        props.style === 'primary',
      'bg-white text-secondary border-secondary hover:bg-secondary/10':
        props.style === 'secondary',
      'bg-white text-secondary border-primary hover:bg-primary/10':
        props.style === 'outline',
    }"
  >
    <span v-if="props.icon" class="mr-2" aria-hidden="true">
      <img :src="props.icon" alt="" class="w-5 h-5" />
    </span>
    {{ props.label }}
  </NuxtLink>

  <!-- Wenn kein href oder disabled: echtes Button-Element -->
  <button
    v-else
    type="button"
    class="inline-flex items-center justify-center rounded border-2 text-center font-bold transition focus:ring-2 ring-offset-2 ring-primary"
    :class="{
      // Size Classes
      'px-2 py-1 text-xs': props.size === 'sm',
      'px-4 py-2 text-sm': props.size === 'md',
      'px-7 py-3 text-base': props.size === 'lg',
      'px-9 py-4 text-lg': props.size === 'xl',

      // Width Control
      'w-full': props.block,
      'sm:w-fit': !props.block,

      // Disabled State
      'opacity-50 cursor-not-allowed': props.disabled,

      // Style Classes
      'bg-white text-primary border-primary hover:bg-primary/10':
        props.style === 'primary',
      'bg-white text-secondary border-secondary hover:bg-secondary/10':
        props.style === 'secondary',
      'bg-white text-secondary border-primary hover:bg-primary/10':
        props.style === 'outline',
    }"
    :disabled="props.disabled"
  >
    <span v-if="props.icon" class="mr-2" aria-hidden="true">
      <img :src="props.icon" alt="" class="w-5 h-5" />
    </span>
    {{ props.label }}
  </button>
</template>
