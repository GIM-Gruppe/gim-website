<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

definePageMeta({ documentDriven: { page: false, surround: false, }, });


const repeat = 4;


const { data, pending, error } = await useAsyncData('home', async () => {
  try {
    const response = await queryContent('/home/content').findOne();
    // console.log(response); // Log response for debugging
    return response;
  } catch (err) {
    console.error(err); // Log any errors
    return null;
  }
});

useSeoMeta(
  'GIM-Website - Startseite',
  'Willkommen auf der GIM-Website – Ihr vertrauenswürdiger Partner für IT-Lösungen'
);



</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Failed to load content</div>
  <div v-else>
    <Carousel :slides="data?.carousel"></Carousel>
    <LayoutContainer>
      <!-- <Logos></Logos> -->
      <TextWithCta
        class="py-20"
        :title="data?.textwithcta.title"
        :description="data?.textwithcta.text"
      ></TextWithCta>
      <Features class="pb-20" :title="data?.serviceoverview.title" :services="data?.serviceoverview.services"></Features>
      <!-- <ServiceShowcase></ServiceShowcase> -->
      <ImageWithText
        class="pb-20"
        :imgsrc=" data?.textimageleft.image"
        :imgalt="data?.textimageleft.imagealt"
        :title="data?.textimageleft.title"
        :description="data?.textimageleft.text"
        :imgPos="'left'"
      ></ImageWithText>
      <!-- <LandingCta></LandingCta> -->
      <!-- <Hero class="pb-20" :title="data?.cta.title" :subtitle="data?.cta.subtitle" :img=" data?.cta.image" :imgalt="``" :buttonleft="data?.cta.cta_button_left" :buttonright="data?.cta.cta_button_right" ></Hero> -->
    </LayoutContainer>
  </div>
</template>
