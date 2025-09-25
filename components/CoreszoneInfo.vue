<template>
  <div class="coreszon-info">
    <!-- Header Section -->
    <section class="intro py-8">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Text -->
        <div class="md:w-1/2 space-y-4">
          <h2 class="text-2xl font-bold">
            Was ist 
            <a href="https://www.coreszon.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
              CORESZON?
            </a>
          </h2>
          <p>
            CORESZON (Community Resilience Network) verbindet neueste Erkenntnisse aus 
            Neurowissenschaft, Psychologie und Praxis.
          </p>
          <p class="goal font-medium">
            <strong>Ziel:</strong> Psychische Widerstandskraft im Team stärken – gemeinsam, alltagstauglich, wirksam.
          </p>
          <p>
            Hinter CORESZON steckt ein vielseitiges Team am Universitätsklinikum Hamburg-Eppendorf, 
            das aus Trainern, Klinikern und Wissenschaftlern besteht.
          </p>
            <p>
            CORESZON ist ein gemeinnütziges Projekt für mentale Gesundheit und faire Gesundheitschancen. 
            Beziehungen, Umfeld und Arbeitsbedingungen prägen, wie gesund wir leben können.
          </p>
        </div>

        <!-- Bild -->
        <div class="md:w-1/2 flex justify-center">
          <img 
            src="public/assets/img/Untitled_Artwork-332-1024x530.png"
            alt="CORESZON Illustration" 
            class="max-w-full h-auto rounded"
          />
        </div>
      </div>
    </section>


        <!-- Second Text Block -->
    <section class="about py-12 bg-gray-50">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <!-- Bild -->
        <div class="md:w-1/2 flex justify-center">
          <img 
            src="/assets/img/CTA_Auftaktworkshop-5.png"  
            alt="CORESZON Illustration" 
            class="max-w-full h-auto rounded "
          />
        </div>

        <!-- Text -->
        <div class="md:w-1/2 space-y-6">
          <h3 class="text-2xl font-bold">
            <a href="https://www.coreszon.com/garten-methode" target="_blank" rel="noopener noreferrer" 
              class="text-green-700 hover:underline">
              Die Garten-Methode
            </a>
          </h3>
          
          <p class="text-lg">Fünf einfache Techniken, die helfen:</p>
          
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Aufmerksamkeit zu fokussieren</li>
            <li>Sicherheit im Körper zu aktivieren</li>
            <li>Mit starken Emotionen umzugehen</li>
            <li>Herausforderungen zu analysieren</li>
            <li>Lösungswege gemeinsam zu entwickeln</li>
          </ul>

          <p class="factors text-gray-800 font-medium">
            Drei zentrale Wirkfaktoren: <strong>Wissen</strong>. <strong>Sicherheit</strong>. <strong>Verbundenheit</strong>.  
            <br />
            <span class="text-green-700">Weil gute Zusammenarbeit mentale Gesundheit stärkt!</span>
          </p>
        </div>
      </div>
    </section>


    <!-- CTA Section -->
    <section class="cta py-16 text-gray-800 text-center">
      <div class="container mx-auto max-w-4xl space-y-8">
        
        <!-- Format & Ablauf -->
        <div>
          <h3 class="text-3xl font-bold mb-4">Format & Ablauf</h3>
          <ul class="space-y-2">
            <li>✅ Online-Workshops (Standard)</li>
            <li>✅ Inhouse-Trainings auf Anfrage (zzgl. Anfahrt & Tagessatz)</li>
          </ul>
          <p class="mt-4 text-lg">
            Ideal für Führungskräfte & Mitarbeitende in kleinen und mittleren Unternehmen.
          </p>
          <p class="italic">Praxisnah, kultursensibel, evidenzbasiert</p>
        </div>

        <!-- Divider -->
        <div class="border-t border-white/30 my-8"></div>

        <!-- Vorteile -->
        <div>
          <h3 class="text-2xl font-semibold mb-4">Vorteile für Ihr Unternehmen</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
            <li>✨ Mehr Resilienz im Team</li>
            <li>✨ Stärkere soziale Bindung</li>
            <li>✨ Weniger Stress im Führungs- und Arbeitsalltag</li>
            <li>✨ Hoher Transfer in die Praxis</li>
          </ul>
        </div>

        <!-- CTA Button -->
        <div class="pt-6">
          <a href="/kontakt" 
            class="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Jetzt Workshop anfragen
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// Keine Logik nötig, reine Präsentationskomponente
</script>

<style scoped>
.coreszon-info {
  font-family: sans-serif;
  line-height: 1.6;
  color: #222;
  max-width: auto;
  margin: auto;
  padding: .5rem;
}

h2, h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

a {
  color: #0077cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
}

ul {
  margin: 0.5rem 0 1rem 1.5rem;
}

.goal, .factors {
  margin-top: 1rem;
  font-weight: 500;
}
</style>
