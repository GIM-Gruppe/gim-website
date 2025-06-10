<template>
  <div class="flex flex-col min-h-screen">
    <LayoutHeader />
    
    <div class="flex-grow pb-6 lg:px-0 ">
      <slot />
    </div>
    
    <!-- Footer -->
    <LayoutSimpleCenteredFooter />
  </div>
</template>

