<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'
import data from '~/content/services/content.json'

definePageMeta({ documentDriven: { page: false, surround: false } })
useSeoMeta(data.sapSeo.title, data.sapSeo.description)
const service = data.services.find(item => item.name === 'sap')
</script>

<template>
  <div v-if="service">
    <Breadcrumbs :items="[
      { label: 'Leistungen', to: '/services' },
      { label: 'SAP Basis' }
    ]" />
    <LayoutContainer>
      
      <withProductScreenshotPanel
        :title="service.title"
        :subtitle="service.subtitle"
        :description="service.description"
        :image=" service.image"
        :imagealt="service.imagealt"
        :features="service.subservice"
      ></withProductScreenshotPanel>
    </LayoutContainer>
  </div>
  <LayoutContainer v-else class="py-8">
    <p>Die SAP-Leistungsübersicht ist derzeit nicht verfügbar.</p>
  </LayoutContainer>
</template>
