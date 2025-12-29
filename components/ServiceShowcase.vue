<script setup lang="ts">
const props = defineProps<{
  imgsrc?: string;
  imgalt?: string;
  title?: string;
  description?: string;
}>();
</script>

<template>
  <LayoutContainer as="section" topMargin bottomMargin>
    <div class="flex flex-wrap gap-6 justify-center">
      <figure
        class="h-full relative overflow-hidden group max-w-md w-full rounded-lg shadow-md bg-black"
      >
        <!-- Background Image -->
        <img
          :src="props.imgsrc || 'https://loremflickr.com/800/600'}"
          :alt="props.imgalt || (props.title ? `Illustration zu ${props.title}` : '')"
          class="w-full h-64 object-cover"
          loading="lazy"
        />

        <!-- Text Overlay -->
        <figcaption
          class="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 ease-in-out group-hover:from-black/90 group-hover:via-black/70 group-hover:to-transparent"
        >
          <div class="w-full p-5 text-left text-white space-y-2">
            <h2 class="text-xl font-bold">
              {{ props.title || 'Titel des Angebots' }}
            </h2>
            <p class="text-sm leading-relaxed">
              {{ props.description || 'Beschreibung des Inhalts. Ersetze diesen Text durch eine aussagekräftige Beschreibung deiner Leistung oder deines Angebots.' }}
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  </LayoutContainer>
</template>
