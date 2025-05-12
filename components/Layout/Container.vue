<script setup lang="ts">
const props = withDefaults(defineProps<{
  topMargin?: boolean
  bottomMargin?: boolean
}>(), {
  topMargin: false,
  bottomMargin: false,
})
</script>

<template>
  <div
    class="container mx-auto"
    :class="{
      'mt-16 sm:mt-20': props.topMargin,
      'mb-16 sm:mb-20': props.bottomMargin
    }"
  >
    <slot />
  </div>
</template>
