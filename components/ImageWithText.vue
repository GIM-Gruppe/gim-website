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
    <div class="flex flex-col md:flex-row gap-16">
      <!-- Image block -->
      <div class="shrink-0" :class="{'md:order-last':imgPos=='right'}">
        <img :src="imgsrc" :alt="imgalt" class="w-70 h-80 rounded-full object-cover" />
      </div>

      <!-- Text block -->
      <div class="flex items-center flex-wrap">
        <div class="grow-0">
          <h1 class="font-semibold">{{props.title}}</h1>
          <p class="mt-4">
            {{props.description}}
          </p>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>
