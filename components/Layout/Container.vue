<script setup lang="ts">

const props = withDefaults(defineProps<{
  topMargin?: boolean
}>(),{
  topMargin: false
})
</script>
<template>
  <div class="max-w-screen-xl mx-auto px-5" :class="{'mt-5': topMargin}">
    <slot />
  </div>
</template>
