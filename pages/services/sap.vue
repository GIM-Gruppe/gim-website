<script setup lang="ts">
const { data, pending, error } = await useAsyncData("sap", async () => {
  try {
    const response = await queryContent('/services/content').findOne();
    // console.log(response); // Log response for debugging
    return response;
  } catch (err) {
    console.error(err); // Log any errors
    return null;
  }
});
// // console.log(data);
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Failed to load content</div>
  <div v-else>
    <LayoutContainer>
      <!-- <ServiceCard></ServiceCard> -->
      <WithProductScreenshotPanel
        :title="data?.services[2].title"
        :subtitle="data?.services[2].subtitle"
        :description="data?.services[2].description"
        :image=" data?.services[2].image"
        :imagealt="data?.services[2].imagealt"
        :features="data?.services[2].subservice"
      ></WithProductScreenshotPanel>
    </LayoutContainer>
  </div>
</template>
