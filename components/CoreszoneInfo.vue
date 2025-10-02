<script setup lang="ts">

</script>


<template>
  <div class="coreszon-info font-sans leading-relaxed text-gray-900 mx-auto p-2">
    <!-- Header Section -->
    <section class="intro py-8">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Text -->
        <div class="md:w-1/2 space-y-4">
          <h2 class="text-2xl font-bold mt-6 mb-2">
            Was ist 
            <a 
              href="https://www.coreszon.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-blue-600 hover:underline"
            >
              CORESZON?
            </a>
          </h2>
          <p class="text-base">
            CORESZON (Community Resilience Network) verbindet neueste Erkenntnisse aus 
            Neurowissenschaft, Psychologie und Praxis.
          </p>
          <p class="text-base font-medium mt-4">
            <strong>Ziel:</strong> Psychische Widerstandskraft im Team stärken – gemeinsam, alltagstauglich, wirksam.
          </p>
          <p class="text-base">
            Hinter CORESZON steckt ein vielseitiges Team am Universitätsklinikum Hamburg-Eppendorf, 
            das aus Trainern, Klinikern und Wissenschaftlern besteht.
          </p>
          <p class="text-base">
            CORESZON ist ein gemeinnütziges Projekt für mentale Gesundheit und faire Gesundheitschancen. 
            Beziehungen, Umfeld und Arbeitsbedingungen prägen, wie gesund wir leben können.
          </p>
        </div>

        <!-- Bild -->
        <div class="md:w-1/2 flex justify-center">
          <img 
            src="public/assets/img/Untitled_Artwork-332-1024x530.png"
            alt="CORESZON Illustration" 
            class="max-w-full h-auto rounded my-4"
          />
        </div>
      </div>
    </section>

    <!-- Second Text Block -->
    <section class="about py-12">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <!-- Bild -->
        <div class="md:w-1/2 flex justify-center">
          <img 
            src="/assets/img/CTA_Auftaktworkshop-5.png"  
            alt="CORESZON Illustration" 
            class="max-w-full h-auto rounded my-4"
          />
        </div>

        <!-- Text -->
        <div class="md:w-1/2 space-y-6">
          <h3 class="text-2xl font-bold mt-6 mb-2">
            <a 
              href="https://coreszon.com/de/uber-uns/die-garten-methode/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-blue-600 hover:underline"
            >
              Die Garten-Methode
            </a>
          </h3>
          
          <p class="text-base">Fünf einfache Techniken, die helfen:</p>
          
          <ul class="space-y-3 text-base text-gray-700">
            <li class="flex items-center gap-3">
              <!-- Fokus: Zielscheibe mit Pfeil -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="w-6 h-6 text-primary">
                <!-- Kreis der Zielscheibe -->
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
                <!-- Pfeil -->
                <line x1="12" y1="12" x2="19" y2="5"/>
                <polyline points="19 5 15 5 15 9"/>
              </svg>
              <span>Aufmerksamkeit fokussieren</span>
            </li>

            <li class="flex items-center gap-3">
              <!-- Sicherheit im Körper: Schild mit Person -->
              <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="w-6 h-6 text-primary">
                <!-- Schild-Umriss -->
                <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"/>
                <!-- Kopf -->
                <circle cx="12" cy="10" r="2"/>
                <!-- Körper -->
                <path d="M9 16c0-2 6-2 6 0v2H9v-2z"/>
              </svg>
              <span>Sicherheit im Körper aktivieren</span>
            </li>

            <li class="flex items-center gap-3">
              <!-- Herz / Emotionen -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Mit starken Emotionen umgehen</span>
            </li>

            <li class="flex items-center gap-3">
              <!-- Lupe / Analyse -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-4.35-4.35M9.5 17A7.5 7.5 0 109.5 2a7.5 7.5 0 000 15z" />
              </svg>
              <span>Herausforderungen analysieren</span>
            </li>

            <li class="flex items-center gap-3">
              <!-- Handschlag / Kooperation -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 640 512" fill="currentColor">
                <path
                  d="M598.1 139.4C608.8 131.6 611.2 116.6 603.4 105.9C595.6 95.2 580.6 92.8 569.9 100.6L495.4 154.8L485.5 148.2C465.8 135 442.6 128 418.9 128L359.7 128L359.3 128L215.7 128C189 128 163.2 136.9 142.3 153.1L70.1 100.6C59.4 92.8 44.4 95.2 36.6 105.9C28.8 116.6 31.2 131.6 41.9 139.4L129.9 203.4C139.5 210.3 152.6 209.3 161 201L164.9 197.1C178.4 183.6 196.7 176 215.8 176L262.1 176L170.4 267.7C154.8 283.3 154.8 308.6 170.4 324.3L171.2 325.1C218 372 294 372 340.9 325.1L368 298L465.8 395.8C481.4 411.4 481.4 436.7 465.8 452.4L456 462.2L425 431.2C415.6 421.8 400.4 421.8 391.1 431.2C381.8 440.6 381.7 455.8 391.1 465.1L419.1 493.1C401.6 503.5 381.9 509.8 361.5 511.6L313 463C303.6 453.6 288.4 453.6 279.1 463C269.8 472.4 269.7 487.6 279.1 496.9L294.1 511.9L290.3 511.9C254.2 511.9 219.6 497.6 194.1 472.1L65 343C55.6 333.6 40.4 333.6 31.1 343C21.8 352.4 21.7 367.6 31.1 376.9L160.2 506.1C194.7 540.6 241.5 560 290.3 560L342.1 560L343.1 561L344.1 560L349.8 560C398.6 560 445.4 540.6 479.9 506.1L499.8 486.2C501 485 502.1 483.9 503.2 482.7C503.9 482.2 504.5 481.6 505.1 481L609 377C618.4 367.6 618.4 352.4 609 343.1C599.6 333.8 584.4 333.7 575.1 343.1L521.3 396.9C517.1 384.1 510 372 499.8 361.8L385 247C375.6 237.6 360.4 237.6 351.1 247L307 291.1C280.5 317.6 238.5 319.1 210.3 295.7L309 197C322.4 183.6 340.6 176 359.6 175.9L368.1 175.9L368.3 175.9L419.1 175.9C433.3 175.9 447.2 180.1 459 188L482.7 204C491.1 209.6 502 209.3 510.1 203.4L598.1 139.4z"/>              </svg>
              <span>Lösungswege gemeinsam entwickeln</span>
            </li>
          </ul>


          <p class="text-gray-800 font-medium text-base mt-4">
            Drei zentrale Wirkfaktoren: <strong>Wissen</strong>. <strong>Sicherheit</strong>. <strong>Verbundenheit</strong>.  
            <br />
            <span class="text-primary">Weil gute Zusammenarbeit mentale Gesundheit stärkt!</span>
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta py-16 text-gray-800 ">
      <div class="container mx-auto max-w-6xl">
        
        <!-- Inhalt nebeneinander -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-left">
          
          <!-- Format & Ablauf -->
          <div>
            <h3 class="text-2xl font-bold mb-4 mt-6">Format & Ablauf</h3>
            <ul class="list-disc space-y-2 text-base ml-6">
              <li>Online-Workshops (Standard)</li>
              <li>Inhouse-Trainings auf Anfrage (zzgl. Anfahrt & Tagessatz)</li>
            </ul>
            <p class="mt-4 text-base">
              Ideal für Führungskräfte & Mitarbeitende in kleinen und mittleren Unternehmen.
            </p>
            <p class="italic text-gray-600 text-base mt-2">
              Praxisnah, kultursensibel, evidenzbasiert
            </p>
          </div>

          <!-- Vorteile -->
          <div>
            <h3 class="text-2xl font-bold mb-4 mt-6">Vorteile für Ihr Unternehmen</h3>
            <ul class="list-disc grid grid-cols-1 sm:grid-cols-2 gap-3 text-base ml-6">
              <li>Mehr Resilienz im Team</li>
              <li>Stärkere soziale Bindung</li>
              <li>Weniger Stress im Arbeitsalltag</li>
              <li>Hoher Transfer in die Praxis</li>
            </ul>
          </div>
        </div>

        <!-- CTA Button im Vordergrund -->
        <div class="flex mt-12 items-center justify-center">
          <Bookings bookings="coreszon" label="Jetzt Workshop anfragen" />
        </div>

      </div>
    </section>
  </div>
</template>

