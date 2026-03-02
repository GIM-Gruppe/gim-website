<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale, setLocale } = useI18n();

const open = ref(false); // mobile menu
const submenuOpen = ref(null); // submenu toggle (mobile + desktop)
const menuRef = ref(null);

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
    title: "Trainings",
    path: "/services/trainings",
    children: [
      {
        title: "Resilienztraining",
        path: "/services/trainings/resilienz",
      },
      {
        title: "CORESZON® Training",
        path: "/services/trainings/coreszon",
      },
    ],
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

// Animation für Mobile Menü
watch(open, (val) => {
  if (menuRef.value) {
    if (val) {
      menuRef.value.style.maxHeight = menuRef.value.scrollHeight + "px";
    } else {
      menuRef.value.style.maxHeight = "0px";
    }
  }
});
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white border-b border-primary shadow-sm"
  >
    <div
      class="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 h-20"
    >
      <!-- Branding -->
      <NuxtLink to="/" class="flex items-center space-x-3">
        <img
          src="/assets/img/GIM-Logo.jpg"
          alt="GIM Logo"
          class="h-14 w-auto"
        />
        <span class="text-secondary font-medium text-sm sm:text-base text-center">
          Gesellschaft für integratives<br class="hidden sm:block" />
          Management mbH
        </span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden lg:flex items-center space-x-8">
        <div
          v-for="(item, index) in menuitems"
          :key="index"
          class="relative group"
        >
          <!-- Menüpunkt mit Dropdown -->
          <div v-if="item.children" class="relative">
            <button
              @click="submenuOpen = submenuOpen === index ? null : index"
              class="flex items-center text-secondary hover:text-gray-900 text-sm"
            >
              {{ item.title }}
              <svg
                class="w-4 h-4 ml-1 transform transition-transform duration-300"
                :class="{ 'rotate-180': submenuOpen === index }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown -->
            <ul
              class="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md overflow-hidden transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"
              :class="{ 'scale-y-100': submenuOpen === index }"
            >
              <li
                v-for="child in item.children"
                :key="child.path"
                class="border-b last:border-0"
              >
                <NuxtLink
                  :to="child.path"
                  class="block px-4 py-2 text-sm text-secondary hover:bg-gray-100 hover:text-gray-900"
                >
                  {{ child.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Normaler Menüpunkt -->
          <NuxtLink
            v-else
            :to="item.path"
            class="text-secondary hover:text-gray-900 text-sm"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
      </nav>

      <!-- Mobile Burger -->
      <button
        @click="open = !open"
        class="lg:hidden text-secondary focus:outline-none"
      >
        <svg
          v-if="!open"
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <nav
      ref="menuRef"
      class="lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out"
      style="max-height: 0px"
    >
      <ul class="flex flex-col bg-white border-t border-gray-200">
        <li v-for="(item, index) in menuitems" :key="index">
          <!-- Dropdown im Mobile -->
          <div v-if="item.children" class="flex flex-col">
            <button
              @click="submenuOpen = submenuOpen === index ? null : index"
              class="flex items-center justify-between w-full px-4 py-3 text-sm text-secondary hover:text-gray-900"
            >
              {{ item.title }}
              <svg
                class="w-4 h-4 ml-2 transform transition-transform duration-300"
                :class="{ 'rotate-180': submenuOpen === index }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <ul
              v-show="submenuOpen === index"
              class="pl-6 bg-gray-50 overflow-hidden transition-all duration-300"
            >
              <li
                v-for="child in item.children"
                :key="child.path"
                class="border-b last:border-0"
              >
                <NuxtLink
                  :to="child.path"
                  class="block px-4 py-2 text-sm text-secondary hover:bg-gray-100"
                >
                  {{ child.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Normaler Menüpunkt -->
          <NuxtLink
            v-else
            :to="item.path"
            class="block px-4 py-3 text-sm text-secondary hover:bg-gray-100"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
