<script setup lang="ts">
const props = withDefaults(defineProps<{
  topMargin?: boolean
  bottomMargin?: boolean
  as?: string
}>(), {
  topMargin: false,
  bottomMargin: false,
  as: 'div',
})
</script>

<template>
  <component
    :is="props.as"
    class="container mx-auto"
    :class="{
      'mt-10 sm:mt-20': props.topMargin,
      'mb-10 sm:mb-20': props.bottomMargin
    }"
  >
    <slot />
  </component>
</template>
