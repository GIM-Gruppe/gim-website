<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src?: string | null
    alt?: string | null
    imgClass?: string
    buttonClass?: string
    loading?: 'lazy' | 'eager'
  }>(),
  {
    src: '',
    alt: '',
    imgClass: '',
    buttonClass: '',
    loading: 'lazy'
  }
)

const isOpen = ref(false)
const dialogRef = ref<HTMLElement | null>(null)

const imageAlt = computed(() => props.alt || 'Bild')

const open = async () => {
  isOpen.value = true
  await nextTick()
  dialogRef.value?.focus()
}

const close = () => {
  isOpen.value = false
}

watch(isOpen, (openState) => {
  if (import.meta.client) {
    document.documentElement.classList.toggle('overflow-hidden', openState)
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.documentElement.classList.remove('overflow-hidden')
  }
})
</script>

<template>
  <div>
    <button
      type="button"
      class="group relative block overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-4"
      :class="props.buttonClass"
      :aria-label="`${imageAlt} im Vollbild anzeigen`"
      @click="open"
    >
      <img
        :src="props.src || ''"
        :alt="props.alt || ''"
        :class="props.imgClass"
        :loading="props.loading"
      />
      <span
        class="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-xs font-semibold text-secondary opacity-0 shadow-sm ring-1 ring-black/10 backdrop-blur transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden="true"
      >
        <span class="text-sm leading-none">⌕</span>
        Vollbild
      </span>
    </button>

    <Teleport to="body">
      <div
        v-if="isOpen"
        ref="dialogRef"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
        role="dialog"
        aria-modal="true"
        :aria-label="`${imageAlt} im Vollbild`"
        tabindex="-1"
        @click.self="close"
        @keydown.esc="close"
      >
        <button
          type="button"
          class="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-secondary shadow-sm ring-1 ring-black/10 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 md:right-6 md:top-6"
          aria-label="Vollbildansicht schließen"
          @click="close"
        >
          Schließen
        </button>
        <img
          :src="props.src || ''"
          :alt="props.alt || ''"
          class="max-h-[88vh] max-w-[95vw] rounded-2xl bg-white object-contain shadow-2xl"
        />
      </div>
    </Teleport>
  </div>
</template>
