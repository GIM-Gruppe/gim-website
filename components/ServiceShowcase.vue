<script setup lang='ts'>

const props = defineProps<{
  imgsrc?: string
  imgalt?: string
  title?: string
  description?: string
}>();
</script>

<template>
  <LayoutContainer topMargin bottomMargin>
    <div class="flex flex-wrap gap-6 justify-center">
        <div class="h-full relative overflow-hidden group">
          <!-- Text Background -->
          <div
            class="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/40 transition-all ease-in-out duration-500">
            <div class="w-full h-full p-5 relative">
              <!-- Text  -->
              <div
                class="relative group-hover:top-0 text-left transition-all ease-in-out duration-500">
                <h2 class="text-2xl font-bold">Lorem ipsum dolor</h2>
                <p class="text-lg text-white font-light">Exercitation commodo eaExercitation commodo eaExercitation commodo eaExercitation commodo eaExercitation commodo eaExercitation commodo eaExercitation commodo ea</p>
              </div>
            </div>
          </div>
          <!-- Background Image -->
          <img src="https://loremflickr.com/400/400" class="w-full h-full object-fill">
        </div>
    </div>
  </LayoutContainer>
</template>