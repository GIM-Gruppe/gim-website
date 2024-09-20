<script setup lang="ts">
const { data, pending, error } = await useAsyncData("infra", () =>
  queryContent("/services/content").findOne()
);
console.log(data);
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Failed to load content</div>
  <div v-else>
    <LayoutContainer>
      <!-- <ServiceCard></ServiceCard> -->
      <WithProductScreenshotPanel
        :title="data?.services[0].title"
        :subtitle="data?.services[0].subtitle"
        :description="data?.services[0].description"
        :image="data?.services[0].image"
        :imagealt="data?.services[0].imagealt"
        :features="data?.services[0].subservice"
      ></WithProductScreenshotPanel>
    </LayoutContainer>
  </div>
</template>
