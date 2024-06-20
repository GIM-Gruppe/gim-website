<script setup>

const bannerContent = {
  title: "Wir GIM",
  subtitle: "uns Mühe.",
  description: "Lorem Ad aliquip veniam ipsum quis nulla aliquip eiusmod ullamco et magna.",
  bgImg: "~/assets/img/tech.jpg",
}
</script>

<template>
   <HighlightBanner :title="bannerContent.title" :subtitle="bannerContent.subtitle" :description="bannerContent.description" :bgImg="bannerContent.bgImg"></HighlightBanner>
   <LayoutContainer>
    <Hero></Hero>s
    <Features></Features>
    <!-- <LandingLogos></LandingLogos> -->
    <!-- <LandingCta></LandingCta> -->
  </LayoutContainer>
</template>
