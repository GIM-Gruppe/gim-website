<script setup lang="ts">
const { data, pending, error } = await useAsyncData("managedservices", () =>
  queryContent("/services/content").findOne()
);
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Failed to load content</div>
  <div v-else>
    <LayoutContainer>
      <!-- <ServiceCard></ServiceCard> -->
      <WithProductScreenshotPanel
        :title="data?.services[1].title"
        :subtitle="data?.services[1].subtitle"
        :description="data?.services[1].description"
        :image="data?.services[1].image"
        :imagealt="data?.services[1].imagealt"
        :features="data?.services[1].subservice"
      ></WithProductScreenshotPanel>
    </LayoutContainer>
  </div>
</template>
