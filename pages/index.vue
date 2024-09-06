<script setup lang="ts">
const bannerContent = {
  title: "Wir GIM",
  subtitle: "uns Mühe.",
  description:
    "Lorem Ad aliquip veniam ipsum quis nulla aliquip eiusmod ullamco et magna.",
  bgImg: "./assets/img/tech.jpg",
};

const repeat = 4;

const { data } = await useAsyncData('home', () => queryContent('/home/content').findOne())
console.log(data)
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
      class="pb-20"
      :imgsrc="'./assets/img/startup (2).jpg'"
      :imgalt="'katzen'"
      :title="'Willkommen bei der GIM '"
      :description="'Gesellschaft für integratives Management mbH, Ihrem kompetenten Partner für IT-Infrastruktur, Managed Services und SAP Basis Dienstleistungen. Unser Unternehmen wurde gegründet, um gezielt die Bedürfnisse von Mittelständlern zu erfüllen, die häufig mit Herausforderungen wie begrenzten Budgets und knappen Ressourcen konfrontiert sind.'"
    ></ImageWithText>
    <Features class="pb-20"></Features>
    <!-- <ServiceShowcase></ServiceShowcase> -->
    <ImageWithText
      class="pb-20"
      :imgsrc="'./assets/img/service.jpg'"
      :imgalt="'katzen'"
      :title="'Was zeichnet uns aus'"
      :description="'Unser Team von Experten besitzt mehrjährige Erfahrung in IT-Infrastruktur, Managed Services und SAP-Basis Diensten. Wir haben von den “Großen” Unternehmen gelernt und möchten den “Kleinen” mit skalierbaren, modernen sowie individuellen Lösungen und Dienstleistungen helfen, ihre Effizienz, Schnelligkeit und Sicherheit zu optimieren und damit den Grundstein für mehr Wachstum zu legen.'"
      :imgPos="'left'"
    ></ImageWithText>
    <!-- <LandingCta></LandingCta> -->
    <Hero class="pb-20"></Hero>
  </LayoutContainer>
</template>
