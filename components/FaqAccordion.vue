<script setup lang="ts">
import { ref } from 'vue';

type FaqContentBlock =
  | {
      type: 'paragraph';
      html: string;
    }
  | {
      type: 'bullets';
      items: string[];
    };

const props = defineProps<{
  title: string;
  items: {
    question: string;
    answerParagraphs?: string[];
    bullets?: string[];
    content?: FaqContentBlock[];
  }[];
}>();

const openItems = ref<number[]>([]);

function isOpen(index: number) {
  return openItems.value.includes(index);
}

function toggleItem(index: number) {
  if (isOpen(index)) {
    openItems.value = openItems.value.filter((item) => item !== index);
    return;
  }

  openItems.value = [...openItems.value, index];
}

function onBeforeEnter(el: Element) {
  const element = el as HTMLElement;
  element.style.height = '0';
  element.style.opacity = '0';
  element.style.overflow = 'hidden';
}

function onEnter(el: Element) {
  const element = el as HTMLElement;

  requestAnimationFrame(() => {
    element.style.height = `${element.scrollHeight}px`;
    element.style.opacity = '1';
  });
}

function onAfterEnter(el: Element) {
  const element = el as HTMLElement;
  element.style.height = 'auto';
  element.style.overflow = 'visible';
}

function onBeforeLeave(el: Element) {
  const element = el as HTMLElement;
  element.style.height = `${element.scrollHeight}px`;
  element.style.opacity = '1';
  element.style.overflow = 'hidden';
}

function onLeave(el: Element) {
  const element = el as HTMLElement;

  requestAnimationFrame(() => {
    element.style.height = '0';
    element.style.opacity = '0';
  });
}
</script>

<template>
  <LayoutContainer as="section" topMargin bottomMargin>
    <div class="max-w-3xl">
      <h2 class="font-semibold">
        {{ props.title }}
      </h2>
    </div>

    <div class="mt-10 divide-y divide-gray-200 rounded-3xl border border-gray-200 bg-white">
      <div
        v-for="(item, index) in props.items"
        :key="item.question"
        class="group px-6 py-2"
      >
        <button
          type="button"
          class="flex w-full items-center justify-between gap-4 py-4 text-left font-semibold transition-colors duration-300 hover:text-primary"
          :aria-expanded="isOpen(index)"
          @click="toggleItem(index)"
        >
          <span>{{ item.question }}</span>
          <span
            class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-xl leading-none text-secondary transition-all duration-300"
            :class="isOpen(index) ? 'rotate-45 border-primary text-primary' : 'rotate-0'"
          >
            +
          </span>
        </button>

        <Transition
          name="faq"
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @after-enter="onAfterEnter"
          @before-leave="onBeforeLeave"
          @leave="onLeave"
        >
          <div
            v-if="isOpen(index)"
            class="faq-content"
          >
            <div class="faq-inner pb-5">
              <div class="max-w-3xl space-y-4 leading-relaxed text-secondary [&_strong]:font-semibold">
                <template v-if="item.content?.length">
                  <template v-for="(block, contentIndex) in item.content" :key="`${item.question}-${contentIndex}`">
                    <p v-if="block.type === 'paragraph'" v-html="block.html" />
                    <ul v-else class="list-disc space-y-2 pl-5">
                      <li v-for="bullet in block.items" :key="bullet" v-html="bullet" />
                    </ul>
                  </template>
                </template>
                <template v-else>
                  <p v-for="paragraph in item.answerParagraphs" :key="paragraph" v-html="paragraph" />
                  <ul v-if="item.bullets?.length" class="list-disc space-y-2 pl-5">
                    <li v-for="bullet in item.bullets" :key="bullet" v-html="bullet" />
                  </ul>
                </template>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </LayoutContainer>
</template>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: height 0.38s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.28s ease;
  will-change: height, opacity;
}

.faq-inner {
  transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.28s ease;
  transform-origin: top;
}

.faq-enter-from .faq-inner,
.faq-leave-to .faq-inner {
  opacity: 0;
  transform: translateY(-8px);
}

.faq-enter-to .faq-inner,
.faq-leave-from .faq-inner {
  opacity: 1;
  transform: translateY(0);
}
</style>
