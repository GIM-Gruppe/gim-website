<script setup lang="ts">

const props = withDefaults(defineProps<{
  size?: "sm" | "md" | "lg",
  block?: boolean;
  style?: "outline" | "primary"
  label?: string,
  href?: string,
  //TODO: optional Icon if needed
}>(), {
  size: "lg",
  style: "primary",
});


</script>

<template>
  <a
    :href="props.href"
    class="rounded  border-2 text-center text-sm font-bold transition focus:ring-1 ring-offset-2 ring-primary transform hover:scale-110 sm:w-auto  "
    :class="{
      'px-4 py-2': size == 'md',
      'px-7 py-3': size == 'lg',
      'bg-primary text-white active:bg-primary/70 border-transparent': style=='primary',
      'bg-white text-black border-primary active:bg-primary': style == 'outline'
    }"
    target="_blank"
  >
  {{ props.label }}
  </a>
</template>
