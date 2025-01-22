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
    <div class="flex flex-col md:flex-row gap-10">
      <!-- Image block -->
      <div :class="{'md:order-last': imgPos=='right'}" class="basis-1/3">
        <img :src="imgsrc" :alt="imgalt" class="w-auto h-80 rounded-full object-cover" />
      </div>

      <!-- Text block -->
      <div class="flex items-center flex-wrap flex-1">
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

