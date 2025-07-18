<script setup>
const { locale, setLocale } = useI18n();

const menuitems = [
  {
    title: "IT-Infrastruktur",
    path: "/services/it-infrastructure",
  },
  {
    title: "Managed Services",
    path: "/services/managed-services",
  },
  {
    title: "SAP Basis",
    path: "/services/sap",
  },
  {
    title: "Resilienztraining",
    path: "/services/resilienz",
  },
  {
    title: "Über uns",
    path: "/about",
  },
  {
    title: "Kontakt",
    path: "/contact",
  },
];

const open = ref(false);

</script>

<template>
  <div class="sticky top-0 z-50 bg-white">
    <LayoutContainer>
      <header
        :class="[
          'flex flex-col lg:flex-row justify-between items-center',
          'overflow-hidden transition-all duration-1000 ease-out',
          open ? 'max-h-[400px]' : 'max-h-[96px]'
        ]"
      >
        <!-- logo + burger -->
        <div class="flex w-full lg:w-auto items-center justify-start">
          <NuxtLink to="/" class="flex items-center ">
            <img src="/assets/img/GIM-Logo.jpg" alt="GIM Logo" class="h-24" />
            <span class="ml-2 text-secondary text-sm">
              Gesellschaft für integratives Management mbH
            </span>
          </NuxtLink>
          <div class="block lg:hidden px-5">
            <button @click="open = !open" class="text-secondary focus:outline-none">
              <svg fill="currentColor" class="w-6 h-6" viewBox="0 0 20 20">
                <title>Menu</title>
                <path
                  v-show="open"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                <path
                  v-show="!open"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                />
              </svg>
            </button>
          </div>
        </div>

        <nav class="w-full lg:w-auto mt-2 lg:flex lg:mt-0 px-4 sm:px-0">
          <ul class="flex flex-col lg:flex-row lg:gap-6 bg-white">
            <li
              v-for="(item, index) in menuitems"
              :key="item.path"
              :class="[
                'transform transition-opacity transition-transform duration-300',
                open ? 'ease-out opacity-100 translate-y-0'
                      : 'ease-in  opacity-0  -translate-y-2',
                'lg:opacity-100 lg:translate-y-0'
              ]"
              :style="{
                // on open: stagger each item by 75ms
                // on close: wait 300ms (header collapse) before fading out
                transitionDelay: open
                  ? `${index * 75}ms`
                  : `300ms`
              }"
            >
              <NuxtLink
                :to="item.path"
                class="block text-sm lg:inline-block lg:px-3 py-2 text-secondary hover:text-gray-900 whitespace-nowrap "
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
          <!-- <div class="lg:hidden flex items-center mt-3 gap-4">
          <LandingLink href="#" styleName="muted" block size="md"
            >Log in</LandingLink
          >
          <LandingLink href="#" size="md" block>Sign up</LandingLink>
        </div> -->
        <!-- <div>
        <div class="hidden lg:flex items-center gap-4">
          <a href="#">Log in</a>
          <LandingLink href="#" size="md">Sign up</LandingLink>
        </div>
      </div> -->

        <!-- Language Change  -->
        <!-- Set locale here and have prefix in cms for folder structure and fetch from folder for correct language ....queryContent("$(locale)/aboutus/content") -->
        <!-- <div class="hidden lg:flex items-center gap-2"> -->
          <!-- English Language Button -->
          <!-- <button @click="setLocale('en')">
            <img
              src="/assets/img/circle-flags--uk.png"
              alt="English"
              class="w-4 h-4 rounded-full object-cover"
            />
          </button>
          <p>|</p> -->
          <!-- German Language Button -->
          <!-- <button @click="setLocale('de')">
            <img
              src="/assets/img/circle-flags--de.png"
              alt="Deutsch"
              class="w-4 h-4 rounded-full object-cover"
            />
          </button> -->
        <!-- </div> -->
    </LayoutContainer>
    <div class="border border-primary"></div>
  </div>
</template>
