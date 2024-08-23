<script setup lang="ts">
const bannerContent = {
  title: "Wir GIM",
  subtitle: "uns Mühe.",
  description:
    "Lorem Ad aliquip veniam ipsum quis nulla aliquip eiusmod ullamco et magna.",
  bgImg: "./assets/img/tech.jpg",
};

const repeat = 4;
</script>

<template>
  <HighlightBanner
    :title="bannerContent.title"
    :subtitle="bannerContent.subtitle"
    :description="bannerContent.description"
    :bgImg="bannerContent.bgImg"
  ></HighlightBanner>
  <LayoutContainer>
    <Logos></Logos>
    <ImageWithText
      :imgsrc="'https://loremflickr.com/400/300'"
      :imgalt="'katzen'"
      :title="'Lorem ipsum dolor'"
      :description="'Dolor nulla cupidatat anim voluptate cillum et ipsum laborum Lorem consectetur est fugiat. Culpa nostrud consectetur consequat consequat exercitation amet occaecat consequat incididunt amet irure. Velit amet esse magna non irure dolore tempor aute.Veniam mollit nulla dolore minim irure incididunt elit nostrud commodo qui voluptate.'"
    ></ImageWithText>
    <Features></Features>
    <!-- <ServiceShowcase></ServiceShowcase> -->
    <ImageWithText
      :imgsrc="'https://loremflickr.com/500/400'"
      :imgalt="'katzen'"
      :title="'Lorem ipsum dolor'"
      :description="'Deserunt deserunt ad deserunt elit nisi commodo. Reprehenderit pariatur amet sit occaecat do irure velit dolor magna. Ullamco adipisicing Lorem duis culpa aliquip nostrud veniam proident in minim cillum aliqua magna. Laboris ullamco amet ad in. Ad laborum culpa reprehenderit excepteur. Mollit fugiat irure sit labore ullamco. Sit Lorem reprehenderit velit labore ad aliqua.Veniam mollit nulla dolore minim irure incididunt elit nostrud commodo qui voluptate.'"
      :imgPos="'left'"
    ></ImageWithText>
    <!-- <LandingCta></LandingCta> -->
    <Hero></Hero>
  </LayoutContainer>
</template>
