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
      <header class="flex flex-col lg:flex-row justify-between items-center">
        <div class="flex w-full lg:w-auto items-center justify-between">
          <NuxtLink to="/" class="items-center flex">
            <img src="/assets/img/GIM-Logo.jpg" alt="GIM Logo" class="h-24" />
            <text class="text-slate-500 text-secondary">
              Gesellschaft für integratives Management mbH
            </text>
          </NuxtLink>

          <!-- Menu Button for mobile -->
          <div class="block lg:hidden">
            <button @click="open = !open" class="text-gray-800">
              <svg
                fill="currentColor"
                class="w-4 h-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  v-show="open"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                ></path>
                <path
                  v-show="!open"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <nav
          class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
          :class="{ block: open, hidden: !open }"
        >
          <ul class="flex flex-col lg:flex-row lg:gap-3">
            <li v-for="item of menuitems">
              <NuxtLink
                :to="item.path"
                class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900 text-secondary"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
          <!-- <div class="lg:hidden flex items-center mt-3 gap-4">
          <LandingLink href="#" styleName="muted" block size="md"
            >Log in</LandingLink
          >
          <LandingLink href="#" size="md" block>Sign up</LandingLink>
        </div> -->
        </nav>
        <!-- <div>
        <div class="hidden lg:flex items-center gap-4">
          <a href="#">Log in</a>
          <LandingLink href="#" size="md">Sign up</LandingLink>
        </div>
      </div> -->

        <!-- Language Change  -->
        <!-- Set locale here and have prefix in cms for folder structure and fetch from folder for correct language ....queryContent("$(locale)/aboutus/content") -->
        <div class="hidden lg:flex items-center gap-2">
          <!-- English Language Button -->
          <button @click="setLocale('en')">
            <img
              src="/assets/img/circle-flags--uk.png"
              alt="English"
              class="w-4 h-4 rounded-full object-cover"
            />
          </button>
          <p>|</p>
          <!-- German Language Button -->
          <button @click="setLocale('de')">
            <img
              src="/assets/img/circle-flags--de.png"
              alt="Deutsch"
              class="w-4 h-4 rounded-full object-cover"
            />
          </button>
        </div>
      </header>
    </LayoutContainer>
    <div class="border border-primary"></div>
  </div>
</template>
