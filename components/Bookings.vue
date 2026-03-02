<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const props = defineProps<{
  bookings?: string;
  label?: string;
}>();

const isVisible = ref(false);
const dialogRef = ref<HTMLElement | null>(null);
const closeButtonRef = ref<HTMLButtonElement | null>(null);
const lastFocusedElement = ref<HTMLElement | null>(null);

const isMobileClient = () => {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

// Overlay öffnen
const openOverlay = async () => {
  if (typeof window === "undefined") return;

  if (isMobileClient()) {
    window.open(
      "https://outlook.office365.com/owa/calendar/GIMGesellschaftfampuumlrintegrativesManagement@gim-gruppe.com/bookings/",
      "_blank"
    );
  } else {
    lastFocusedElement.value = document.activeElement as HTMLElement | null;
    isVisible.value = true;
    await nextTick();
    // Fokus auf den Close-Button setzen
    if (closeButtonRef.value) {
      closeButtonRef.value.focus();
    } else if (dialogRef.value) {
      dialogRef.value.focus();
    }
  }
};

// Overlay schließen
const closeOverlay = () => {
  isVisible.value = false;
  // Fokus zurück auf das zuvor fokussierte Element
  if (lastFocusedElement.value) {
    lastFocusedElement.value.focus();
  }
};

// ESC-Taste schließt Overlay
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && isVisible.value) {
    event.preventDefault();
    closeOverlay();
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeydown);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", handleKeydown);
  }
});
</script>

<template>
  <div>
    <!-- Button mit flexiblem Label -->
    <UiButton
      @click="openOverlay"
      :label="label || 'Termin vereinbaren'"
    />

    <!-- Overlay -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 delay-100 ease-out"
      :class="{
        'opacity-100 visible': isVisible,
        'opacity-0 invisible': !isVisible,
      }"
      :aria-hidden="!isVisible"
    >
      <div
        ref="dialogRef"
        class="relative bg-white p-4 rounded shadow-lg transform transition-transform duration-300 ease-out outline-none"
        :class="isVisible ? 'scale-100' : 'scale-95'"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-dialog-title"
        tabindex="-1"
      >
        <!-- Überschrift im Dialog (für aria-labelledby) -->
        <h2 id="booking-dialog-title" class="sr-only">
          Terminbuchung
        </h2>

        <!-- Close Button -->
        <button
          ref="closeButtonRef"
          @click="closeOverlay"
          class="absolute top-5 right-9 p-3 text-secondary rounded-full hover:bg-secondary/20 focus:outline-none"
          aria-label="Terminbuchung schließen"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Booking Iframes -->
        <iframe
          v-if="bookings == 'resilienz'"
          src="https://outlook.office.com/book/Resilienztraining@gim-gruppe.com/?ismsaljsauthenabled"
          width="700"
          height="800"
          frameborder="0"
          class="rounded"
          title="Terminbuchung Resilienztraining"
        ></iframe>

        <iframe
          v-else-if="bookings == 'coreszon'"
          src="https://outlook.office.com/book/CoreszonTraining@gim-gruppe.com/?ismsaljsauthenabled"
          width="700"
          height="800"
          frameborder="0"
          class="rounded"
          title="Terminbuchung CORESZON Training"
        ></iframe>

        <iframe
          v-else
          src="https://outlook.office365.com/owa/calendar/GIMGesellschaftfampuumlrintegrativesManagement@gim-gruppe.com/bookings/"
          width="700"
          height="800"
          frameborder="0"
          class="rounded"
          title="Terminbuchung GIM"
        ></iframe>
      </div>
    </div>
  </div>
</template>
