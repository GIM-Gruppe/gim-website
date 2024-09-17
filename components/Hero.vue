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
    <main class="grid lg:grid-cols-2 place-items-center">
      <div class="p-24 md:order-1 hidden md:block">
        <img
          class="rounded-full transition-transform transform hover:scale-125"
          :src="props.img"
          :alt="props.imgalt"
          loading="eager"
          format="avif"
          width="500"
          height="500"
        />
      </div>

      <div>
        <h1 class="lg:tracking-tight font-semibold">
          {{props.title}}
        </h1>
        <p class=" mt-4 text-slate-600 max-w-xl ">
          {{props.subtitle}}
        </p>
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <UiButton
            :href="props.buttonleft.path"
            target="_blank"
            :label="props.buttonleft.label"
            ></UiButton
          >
          <UiButton
            size="lg"
            :style="'outline'"
            :href="props.buttonright.path"
            target="_blank"
            :label="props.buttonright.label"
            ></UiButton
          >
        </div>
      </div>
    </main>
  </LayoutContainer>
</template>
