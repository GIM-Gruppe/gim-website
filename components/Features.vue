<script setup lang="ts">

const props = defineProps<{
  title: string
  services: any
}>()

</script>

<template>
  <LayoutContainer topMargin bottomMargin>
    <div class="mt-16 md:mt-0">
      <h1 class="lg:tracking-tight font-semibold">
        {{props.title}}
      </h1>
      <p class="mt-4 text-slate-600">
       
      </p>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
      <div v-for="item of props.services" class="flex gap-4 items-start">
        <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
          <Icon class="text-white" :name="item.icon" />
        </div>
        <div>
          <h2 class="font-semibold">{{ item.title }}</h2>
          <text class="text-secondary mt-2 leading-relaxed">
            {{ item.description }}
          </text>
        </div>
      </div>
    </div>
  </LayoutContainer>
  
</template>
