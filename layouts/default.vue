<template>
  <div class="flex flex-col min-h-screen">
    <!-- Skip-Link für Tastaturnutzer:innen -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-secondary focus:shadow-md rounded"
    >
      Zum Inhalt springen
    </a>

    <LayoutHeader />

    <!-- Hauptinhalt -->
    <main
      id="main-content"
      class="flex-grow pb-6 lg:px-0"
      role="main"
    >
      <slot />
    </main>

    <!-- Footer -->
    <LayoutSimpleCenteredFooter />
  </div>
</template>
