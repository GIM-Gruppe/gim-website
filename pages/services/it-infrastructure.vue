<script setup lang="ts">

const { data } = await useAsyncData('infra', () => queryContent('/services/content').findOne())
console.log(data)

</script>

<template>
  <LayoutContainer>
    <!-- <ServiceCard></ServiceCard> -->
    <WithProductScreenshotPanel :title="data?.services[0].title" :subtitle="data?.services[0].subtitle" :description="data?.services[0].description" :image="data?.services[0].image" :imagealt="data?.services[0].imagealt" :features="data?.services[0].subservice"></WithProductScreenshotPanel>
  </LayoutContainer>
</template>