<script setup lang="ts">
import { ref } from "vue";

// Reactive variable to manage overlay visibility
const isVisible = ref(false);

// Function to show the overlay
const openOverlay = () => {
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  window.open(
    "https://outlook.office365.com/owa/calendar/GIMGesellschaftfampuumlrintegrativesManagement@gim-gruppe.com/bookings/",
    "_blank"
  );
} else {
  isVisible.value = true;
}

};

// Function to hide the overlay
const closeOverlay = () => {
  isVisible.value = false;
};
</script>

<template>
  <div>
    <UiButton @click="openOverlay" :label="'Termin vereinbaren'"  />

    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 delay-100 ease-out"
      :class="{
        'opacity-100 visible': isVisible,
        'opacity-0 invisible': !isVisible,
      }"
    >
      <div
        class="relative bg-white p-4 rounded shadow-lg transform transition-transform duration-300 ease-out"
        :class="isVisible ? 'scale-100' : 'scale-95'"
      >
        <button
          @click="closeOverlay"
          class="absolute top-5 right-9 p-3 text-secondary rounded-full hover:bg-secondary/20 "
          aria-label="Close overlay"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <iframe
          src="https://outlook.office365.com/owa/calendar/GIMGesellschaftfampuumlrintegrativesManagement@gim-gruppe.com/bookings/"
          width="700"
          height="800"
          frameborder="0"
          class="rounded"
        ></iframe>
      </div>
    </div>
  </div>
</template>
