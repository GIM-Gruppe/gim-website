<template>
  <LayoutContainer>
    <main class="grid lg:grid-cols-2 place-items-center">
      <div class="p-24 md:order-1 hidden md:block">
        <img
          class="rounded-full transition-transform transform hover:scale-125"
          src="https://loremflickr.com/380/380/cat"
          alt="Starship starts the engine"
          loading="eager"
          format="avif"
          width="512"
          height="512"
        />
      </div>

      <div>
        <h1 class="text-xl lg:text-2xl xl:text-3xl lg:tracking-tight font-semibold">
          Bist du auf dem Weg, dein Unternehmen zu neuen Höhen zu bringen?
        </h1>
        <p class="text-lg mt-4 text-slate-600 max-w-xl ">
          Lass dich noch heute von uns unverbindlich und persönlich beraten und entdecke, wie unsere maßgeschneiderten IT-Lösungen deine Effizienz und Leistung steigern können.
        </p>
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <UiButton
            href="#"
            target="_blank"
            label="Book appointment"
            ></UiButton
          >
          <UiButton
            size="lg"
            :style="'outline'"
            href="#"
            target="_blank"
            label="View Services"
            ></UiButton
          >
        </div>
      </div>
    </main>
  </LayoutContainer>
</template>
