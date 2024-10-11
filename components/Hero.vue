<script setup lang="ts">
  const props = defineProps<{
    title: string
    subtitle: string
    buttonleft: any
    buttonright: any
    img: string
    imgalt: string
  }>()
</script>

<template>
  <LayoutContainer>
    <main class="grid md:grid-cols-2 place-items-center">
      <!-- Image block -->
      <div class="p-24 md:order-1 hidden md:block">
        <NuxtLink to="/contact">
          <img
            class="rounded-full transition-transform transform hover:scale-125 cursor-pointer"
            :src="props.img"
            :alt="props.imgalt"
            loading="eager"
            format="avif"
            width="500"
            height="500"
          />
        </NuxtLink>
      </div>

      <!-- Text block -->
      <div class="flex flex-col items-center md:items-start">
        <h1 class="lg:tracking-tight font-semibold">
          {{props.title}}
        </h1>
        <p class="mt-4 text-secondary max-w-xl text-center md:text-left">
          {{props.subtitle}}
        </p>
        <div class="mt-6 flex flex-col sm:flex-row gap-3 w-full">
          <UiButton
            :href="props.buttonleft.path"
            target="_blank"
            :label="props.buttonleft.label"
            class="w-full sm:w-auto" 
          ></UiButton>
          <UiButton
            size="lg"
            :style="'outline'"
            :href="props.buttonright.path"
            target="_blank"
            :label="props.buttonright.label"
            class="w-full sm:w-auto" 
          ></UiButton>
        </div>
      </div>
    </main>
  </LayoutContainer>
</template>
