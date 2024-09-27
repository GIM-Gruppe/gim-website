<script setup lang="ts">

const repeat = 4;

const { data, pending, error } = await useAsyncData('home', () => queryContent('/home/content').findOne());

console.log(data?.banner.background_image); // Check if this path is correct

</script> 

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Failed to load content</div>
  <div v-else>
    <HighlightBanner
      :title="data?.banner.title1"
      :subtitle="data?.banner.title2"
      :description="data?.banner.text"
      :bgImg="data?.banner.background_image"
    ></HighlightBanner>
    <LayoutContainer>
      <Logos></Logos>
      <ImageWithText
        class="pb-20"
        :imgsrc="data?.textimageright.image"
        :imgalt="data?.textimageright.imagealt"
        :title="data?.textimageright.title"
        :description="data?.textimageright.text"
      ></ImageWithText>
      <Features class="pb-20" :title="data?.serviceoverview.title" :services="data?.serviceoverview.services"></Features>
      <!-- <ServiceShowcase></ServiceShowcase> -->
      <ImageWithText
        class="pb-20"
        :imgsrc="data?.textimageleft.image"
        :imgalt="data?.textimageleft.imagealt"
        :title="data?.textimageleft.title"
        :description="data?.textimageleft.text"
        :imgPos="'left'"
      ></ImageWithText>
      <!-- <LandingCta></LandingCta> -->
      <Hero class="pb-20" :title="data?.cta.title" :subtitle="data?.cta.subtitle" :img="data?.cta.image" :imgalt="``" :buttonleft="data?.cta.cta_button_left" :buttonright="data?.cta.cta_button_right" ></Hero>
    </LayoutContainer>
  </div>
</template>
