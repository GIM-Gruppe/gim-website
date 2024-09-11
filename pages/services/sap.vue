<script setup lang="ts">

const { data } = await useAsyncData('sap', () => queryContent('/services/content').findOne())
console.log(data)
</script>

<template>
  <LayoutContainer>
    <!-- <ServiceCard></ServiceCard> -->
    <WithProductScreenshotPanel :title="data?.services[2].title" :subtitle="data?.services[2].subtitle" :description="data?.services[2].description" :image="data?.services[2].image" :imagealt="data?.services[2].imagealt" :features="data?.services[2].subservice"></WithProductScreenshotPanel>
  </LayoutContainer>
</template>