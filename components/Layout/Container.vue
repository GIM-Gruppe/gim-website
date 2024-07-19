<script setup lang="ts">

const props = withDefaults(defineProps<{
  topMargin?: boolean
  bottomMargin?: boolean
}>(),{
  topMargin: false,
  bottomMargin: false
})
</script>
<template>
  <div class="max-w-screen-xl mx-auto " :class="{'mt-20': topMargin, 'mb-20': bottomMargin}">
    <slot />
  </div>
</template>
