<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    imgPos?: "left" | "right";
    imgsrc: string;
    imgalt: string;
    title: string;
    description: string;
  }>(),
  {
    imgPos: "right",
  }
);
</script>

<template>
  <LayoutContainer as="section" class="mt-8">
    <div class="flex flex-col md:flex-row gap-10 items-center">
      <!-- Image block -->
      <div
        class="basis-1/3"
        :class="{ 'md:order-last': props.imgPos === 'right' }"
      >
        <img
          :src="props.imgsrc"
          :alt="props.imgalt"
          class="w-auto h-80 rounded-full object-cover"
          loading="lazy"
        />
      </div>

      <!-- Text block -->
      <div class="flex items-center flex-wrap flex-1">
        <div class="grow-0 max-w-xl">
          <h2 class="font-semibold">
            {{ props.title }}
          </h2>
          <p class="mt-4 text-secondary leading-relaxed">
            {{ props.description }}
          </p>
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>
