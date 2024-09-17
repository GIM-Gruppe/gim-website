<script setup lang="ts">

const { data } = await useAsyncData('managedservices', () => queryContent('/services/content').findOne())

</script>

<template>
  <LayoutContainer>
    <!-- <ServiceCard></ServiceCard> -->
    <WithProductScreenshotPanel :title="data?.services[1].title" :subtitle="data?.services[1].subtitle" :description="data?.services[1].description" :image="data?.services[1].image" :imagealt="data?.services[1].imagealt" :features="data?.services[1].subservice"></WithProductScreenshotPanel>
  </LayoutContainer>
</template>