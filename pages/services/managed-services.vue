<script setup lang="ts">
const { data, pending, error } = await useAsyncData("managedservices", async () => {
  try {
    const response = await queryContent('/services/content').findOne();
    // console.log(response); // Log response for debugging
    return response;
  } catch (err) {
    console.error(err); // Log any errors
    return null;
  }
});
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
        :image="$sanitizeImagePath(data?.services[1].image)"
        :imagealt="data?.services[1].imagealt"
        :features="data?.services[1].subservice"
      ></WithProductScreenshotPanel>
    </LayoutContainer>
  </div>
</template>
