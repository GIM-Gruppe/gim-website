<script setup lang="ts">

const props = withDefaults(defineProps<{
  imgPos?: 'left' | 'right'
  imgsrc: string
  imgalt: string
  title: string
  description: string
}>(),{
  imgPos: 'right',
})
</script>

<template>
  <LayoutContainer>
    <div class="flex gap-16">
      <div class="shrink-0" :class="{'order-last':imgPos=='right'}">
        <img :src="imgsrc" :alt="imgalt" class="w-70 h-80 rounded-full object-cover" />
      </div>

      <div class="flex items-center flex-wrap items-center">
        <div class="grow-0">
          <h1 class=" font-semibold">{{props.title}}</h1>
          <p class=" mt-4">
            {{props.description}}
          </p>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>