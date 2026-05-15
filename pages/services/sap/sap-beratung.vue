<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(
  'SAP Beratung in Hamburg | GIM GmbH',
  'Maßgeschneiderter SAP-Support ✅Praxisnah, transparent, zuverlässig ✅Klare Lösungen und Prozesse ►Jetzt kontaktieren!'
)

const hero = '/assets/img/hero_network.png'
const analysisImage = '/assets/img/analysis_structure.png'
const processImage = '/assets/img/process_steps.png'
const stabilization = '/assets/img/stabilization_cloud.png'
const golive = '/assets/img/golive_flow.png'

const consultingServices = [
  'Analyse bestehender SAP-Prozesse',
  'Optimierung von Abläufen',
  'Technische SAP-Beratung',
  'Unterstützung bei der Weiterentwicklung des Systems und Erweiterungen',
  'Begleitung von Migrationen, wie z. B. eine S/4HANA-Migration',
  'Praxisnahe Beratung mit Blick auf Umsetzbarkeit und betriebliche Anforderungen'
]

const targetGroups = [
  {
    title: 'Unternehmen mit gewachsener SAP-Landschaft',
    text: 'Ihre SAP-Systeme sind über die Jahre organisch gewachsen und benötigen eine stärkere Strukturierung und verbesserte Dokumentation.'
  },
  {
    title: 'Firmen mit Optimierungsbedarf',
    text: 'SAP ist ein komplexes System. Für Business-Anwendungen muss es immer wieder optimiert werden, damit es ideal läuft. Dafür bieten wir beispielsweise SAP-Prozessberatung in Hamburg an.'
  },
  {
    title: 'Unternehmen vor Veränderungen oder Migrationen',
    text: 'SAP-Migrationen übersteigen oft die Kapazitäten interner IT-Abteilungen. Eine SAP-Migrations-Beratung in Hamburg sorgt dafür, dass das Go-live und die kritische Phase danach ohne Beeinträchtigungen für Ihr Unternehmen ablaufen.'
  },
  {
    title: 'Organisationen mit speziellen Anforderungen an Entwicklung, Prozesse oder technische Betreuung',
    text: 'Hat Ihr Unternehmen besondere Anforderungen an SAP und technische Systeme, ist externe Expertise hilfreich. Wir unterstützen Ihre interne IT-Abteilung mit punktueller und spezialisierter SAP-Beratung für Unternehmen in Hamburg.'
  },
  {
    title: 'Mittelstand mit Bedarf an direkter, pragmatischer Zusammenarbeit',
    text: 'Gerade bei mittelständischen Unternehmen sind personelle und technische Kapazitäten ein Flaschenhals für IT-Systeme. Holen Sie sich externe Unterstützung ins Haus, um Ihr IT-Team zu entlasten. Wir schaffen pragmatische, praxistaugliche IT-Lösungen für Sie.'
  }
]

const processSteps = [
  {
    title: 'Analyse der Ausgangslage und Ziele',
    paragraphs: [
      'Wir starten mit einer <strong>Analyse Ihrer Ausgangslage und den Zielen für Ihr SAP-System</strong>. Dazu gehören beispielsweise die <strong>Untersuchung Ihrer bestehenden SAP-Landschaft sowie der existierenden Schnittstellen und Dokumentation</strong>.'
    ]
  },
  {
    title: 'Bewertung von Prozessen, Systemen und Engpässen',
    paragraphs: [
      'Haben wir die notwendigen Informationen und Zugänge von Ihnen erhalten, untersuchen wir Ihr bestehendes SAP-System näher. Wir <strong>bewerten Prozesse und Systeme</strong> und legen ein Augenmerk darauf, Engpässe zu identifizieren.'
    ]
  },
  {
    title: 'Erarbeitung konkreter Lösungsansätze',
    paragraphs: [
      '<strong>Unsere Arbeit ist praxisnah, konkret und transparent.</strong> Wenn wir Lösungsansätze für Ihre SAP-Systeme erarbeiten, <strong>stehen wir im Dialog mit Ihnen</strong>. So können wir klären, welcher Lösungsansatz am besten für Ihr Unternehmen geeignet ist. Dank dieser <strong>offenen Kommunikation</strong> ist <strong>unsere Arbeit für Sie transparent und nachvollziehbar</strong>.'
    ]
  },
  {
    title: 'Abstimmung mit Fachbereichen und IT',
    paragraphs: [
      'Wir stimmen unsere SAP-Lösungen mit den relevanten Fachbereichen und Ihrer IT ab. So <strong>entsteht ein SAP-System, das technisch fundiert ist und den Arbeitsalltag in Ihrem Betrieb unterstützt</strong>.'
    ]
  },
  {
    title: 'Unterstützung bei Umsetzung, Entwicklung oder Migration',
    paragraphs: [
      'Auf Wunsch beraten wir Ihre IT-Abteilung bei der SAP-Umsetzung oder übernehmen diese für Sie. Je nach Ihren Kapazitäten kann es hier sinnvoller sein, <strong>Ihre SAP-Prozesse komplett an uns abzugeben</strong>. Insbesondere bei <strong>technisch komplexen Projekten wie einer S/4HANA-Migration</strong> ist es sinnvoll, <strong>Ihr IT-Team um unsere Kapazitäten zu ergänzen</strong>.'
    ]
  },
  {
    title: 'Begleitung bis zur stabilen Anwendung im Alltag',
    paragraphs: [
      'Als SAP-Beratungshaus in Hamburg <strong>unterstützen wir Sie so lange, bis Ihre Systeme im Alltag stabil laufen</strong>. Darüber hinaus können Sie uns <strong>als verlässlichen Partner für Ihre SAP-Systeme buchen.</strong>'
    ]
  }
]

const topicItems = [
  'Prozessoptimierung',
  'technische Fragestellungen',
  'Migration, wie z. B. von SAP ECC zu S/4HANA und SAP BW zu BW/4HANA',
  'Analytics',
  'Planung',
  'Schnittstellen'
]

const qualityItems = [
  'Klares Verständnis von Geschäftsprozessen',
  'Technische Umsetzbarkeit und realistische Empfehlungen hierzu',
  'Direkte Kommunikation',
  'Belastbare Handlungsempfehlungen',
  'Verzicht auf unnötige Komplexität',
  'Verlässliche Ansprechpartner und Verbindlichkeit'
]

const faqItems = [
  {
    question: 'Was umfasst eine SAP-Beratung?',
    content: [
      {
        type: 'paragraph' as const,
        html: '<strong>Eine SAP-Beratung umfasst die Analyse Ihrer bestehenden SAP-Prozesse und -systeme.</strong> Wir können für Sie die <strong>Erarbeitung technischer Lösungsansätze</strong> für SAP sowie die <strong>Optimierung, Migration oder technische Weiterentwicklung</strong> Ihrer SAP-Systeme übernehmen.'
      }
    ]
  },
  {
    question: 'Für welche Unternehmen ist SAP-Beratung sinnvoll?',
    content: [
      {
        type: 'paragraph' as const,
        html: 'Als Unternehmen für SAP-Entwicklung in Hamburg unterstützen wir vor allem Unternehmen mit bestehender SAP-Landschaft. <strong>Eine Zusammenarbeit mit uns ist für Sie beispielsweise sinnvoll bei:</strong>'
      },
      {
        type: 'bullets' as const,
        items: [
          'Optimierungsbedarf',
          'Technischen Herausforderungen',
          'Geplanten Veränderungen wie Erweiterungen, Integrationen, Migrationen sowie Produktupdates und -upgrades',
          'Begrenzten Kapazitäten Ihrer IT-Abteilung'
        ]
      }
    ]
  },
  {
    question: 'Worin unterscheidet sich eine gute SAP-Beratung von allgemeiner IT-Beratung?',
    content: [
      {
        type: 'paragraph' as const,
        html: '<strong>Gutes SAP-Consulting verbindet SAP-Kenntnisse mit einem tiefen Prozessverständnis</strong>. Das heißt, dass die <strong>Beratungsfirma weiß, wie sich die technischen Zusammenhänge konkret im Unternehmensalltag äußern</strong>. Das <strong>Ergebnis einer SAP-Beratung soll den Arbeitsalltag in Ihrem Unternehmen unterstützen</strong> und erleichtern.'
      }
    ]
  },
  {
    question: 'Unterstützt SAP-Beratung auch bei technischen Themen?',
    content: [
      {
        type: 'paragraph' as const,
        html: 'Ja, wir bieten eine solche Unterstützung an. Wir kommen aus der technischen Basis. Das heißt, <strong>dass wir Expertise zu Systemarchitektur, Schnittstellen, Infrastruktur und Betrieb mitbringen</strong>. Das zahlt sich insbesondere bei SAP-Migrationen oder Weiterentwicklung Ihrer SAP-Systeme aus.'
      }
    ]
  },
  {
    question: 'Ist SAP-Beratung auch für mittelständische Unternehmen in Hamburg und Umgebung relevant?',
    content: [
      {
        type: 'paragraph' as const,
        html: '<strong>Ja, für den Mittelstand ist praxisnahe, effiziente und klare SAP-Beratung unerlässlich.</strong> Sind die <strong>Kapazitäten Ihrer IT-Abteilung eingeschränkt</strong>, ist es <strong>umso wichtiger, einen verlässlichen Partner für das SAP-Umfeld an Ihrer Seite zu haben</strong>.'
      }
    ]
  },
  {
    question: 'Kann SAP-Beratung auch Entwicklung und Migration einbeziehen?',
    content: [
      {
        type: 'paragraph' as const,
        html: 'Ja, eine Beratung kann diese Aspekte mit einbeziehen. In vielen IT-Projekten kommen unterschiedliche Bereiche zusammen. <strong>So kann die SAP-Beratung auch die Weiterentwicklung und Migration Ihres Systems beinhalten.</strong> Wir bieten für Sie beispielsweise eine SAP-S/4HANA-Beratung in Hamburg und arbeiten standardmäßig mit SAP Fiori, SAPUI5 und ABAP.'
      }
    ]
  },
  {
    question: 'Wie läuft die Zusammenarbeit typischerweise ab?',
    content: [
      {
        type: 'paragraph' as const,
        html: '<strong>Wir beginnen unsere Zusammenarbeit mit der Analyse Ihrer Ausgangssituation</strong>. Danach <strong>sprechen wir konkrete Handlungsempfehlungen aus</strong>. Dies erfolgt immer im Dialog mit Ihnen. So können Sie jederzeit nachvollziehen, weshalb welche Schritte implementiert wurden. Je nach Bedarf bieten wir Ihnen auch <strong>Unterstützung bei der Umsetzung und Weiterentwicklung Ihrer SAP-Systeme</strong>, ebenso wie eine <strong>langfristige Zusammenarbeit als externer SAP-Support.</strong>'
      }
    ]
  },
  {
    question: 'Ist eine SAP-Beratung nur in Hamburg vor Ort möglich?',
    content: [
      {
        type: 'paragraph' as const,
        html: '<strong>Nein, wir betreuen Projekte in Hamburg und Umgebung ebenso wie deutschland- und europaweit.</strong> Unser Team arbeitet bevorzugt remote.'
      }
    ]
  }
]
</script>

<template>
  <div>
    <Breadcrumbs :items="[
      { label: 'Leistungen', to: '/services' },
      { label: 'SAP Basis', to: '/services/sap' },
      { label: 'SAP Beratung' }
    ]" />

    <ServiceLead
      eyebrow="SAP Basis"
      title="SAP-Beratung in Hamburg und Umgebung für Unternehmen mit klaren Anforderungen"
      :paragraphs="[
        'In unserer SAP-Beratung für Unternehmen setzen wir auf <strong>praxisnahe Lösungen für Ihr SAP-Umfeld:</strong> klar, strukturiert und <strong>nah an den alltäglichen Anforderungen in Ihrem Betrieb</strong>. Wir unterstützen Sie mit <strong>Lösungen für gewachsene Prozesse, Support und einem persönlichen Ansprechpartner</strong>.',
        'Kontaktieren Sie uns für <strong>zuverlässige SAP-Beratung, die Ihre Systeme intelligent an den Arbeitsalltag in Ihrer Firma anpasst.</strong> Wir freuen uns darauf, die für Sie passende SAP-Lösung zu schaffen!'
      ]"
      cta-label="Jetzt für unverbindliche Erstberatung kontaktieren!"
      cta-href="/contact"
      :image-src="hero"
      image-alt="Abstrakte SAP Beratung"
    />

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-center">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Keine Standardberatung</p>
            <h2 class="mt-3 font-semibold">Warum SAP-Beratung für Unternehmen mehr als eine Standardberatung sein muss</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p>SAP-Landschaften sind so individuell wie Ihr Unternehmen. Damit Ihre <strong>Systeme optimal auf die Anforderungen in Ihrem Firmenalltag abgestimmt sind</strong>, <strong>reicht eine Standardberatung oft nicht aus</strong>. Wir <strong>finden für Sie die passenden Lösungen</strong> und übernehmen ihre Implementierung – <strong>praxisnah und effizient</strong>.</p>
              <p>Insbesondere dort, wo <strong>fachliche und technische Themen ineinandergreifen</strong>, brauchen Sie einen SAP-Berater in Hamburg, der über den IT-Tellerrand hinausschauen kann. Von uns bekommen Sie deshalb <strong>praxisnahe Beratung statt abstrakter Software-Konzepte</strong>.</p>
              <p>Kontaktieren Sie uns jetzt für ein <strong>unverbindliches Erstgespräch zu den SAP-Systemen in Ihrem Unternehmen</strong>!</p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" label="Jetzt Erstgespräch anfragen!" />
            </div>
          </div>
          <img :src="analysisImage" alt="SAP Beratung Analyse" class="h-[300px] w-full rounded-[1.75rem] object-cover md:h-[420px]" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Leistungsüberblick</p>
          <h2 class="mt-3 font-semibold">Unsere Leistungen in der SAP-Beratung für Hamburg und Umgebung</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p>Als SAP-Consulting-Firma in Hamburg helfen wir Ihnen dabei, SAP für Ihr Unternehmen maßgeschneidert einzurichten. <strong>Hier sind unsere Leistungen als SAP-Beratungshaus in Hamburg im Überblick:</strong></p>
          </div>
        </div>

        <div class="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
          <div
            v-for="service in consultingServices"
            :key="service"
            class="flex gap-4 border-t border-black/10 pt-5"
          >
            <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <p class="text-secondary leading-relaxed">{{ service }}</p>
          </div>
        </div>

        <div class="mt-10 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <p class="max-w-3xl text-secondary leading-relaxed [&_strong]:font-semibold"><strong>Wir unterstützen Ihre IT-Abteilung bei allen SAP-Fragen</strong>. So <strong>halten wir Ihrem Team den Rücken für alltägliche Abläufe</strong> frei, während wir uns um Ihr SAP kümmern!</p>
          <UiButton href="/contact" label="Jetzt kontaktieren!" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <img :src="processImage" alt="SAP Beratung Prozess" class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[460px] lg:sticky lg:top-24" loading="lazy" />
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Relevanz</p>
            <h2 class="mt-3 font-semibold">Für welche Unternehmen in Hamburg und Umgebung SAP-Beratung besonders relevant ist</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p>Unsere Erfahrung zeigt, dass <strong>SAP-Consulting in Hamburg vor allem in diesen Fällen besonders relevant ist:</strong></p>
            </div>
            <div class="mt-8 space-y-6">
              <article
                v-for="item in targetGroups"
                :key="item.title"
                class="border-l-2 border-primary/50 pl-5"
              >
                <h3 class="font-semibold">{{ item.title }}</h3>
                <p class="mt-2 text-secondary leading-relaxed">{{ item.text }}</p>
              </article>
            </div>
            <div class="mt-8 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p><strong>Kontaktieren Sie uns für eine unverbindliche Erstberatung</strong> und besprechen Sie die SAP-Herausforderungen in Ihrer Firma mit uns!</p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" label="Jetzt für Erstberatung kontaktieren!" />
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <ProcessSteps
      title="So läuft SAP-Beratung in Hamburg und Umgebung mit unserer IT-Consulting-Firma ab"
      intro="<strong>Arbeiten Sie mit uns zusammen, bieten wir Ihnen einen strukturierten Prozess für technische SAP-Beratung in Hamburg an.</strong>"
      :steps="processSteps"
      cta-label="Jetzt kontaktieren!"
      cta-href="/contact"
    />

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Themenfelder</p>
            <h2 class="mt-3 font-semibold">Typische Themen in der SAP-Beratung für Unternehmen</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p>SAP ist ein komplexes System. Aufgrund dessen lohnt es sich, sich externe Unterstützung zu holen, auch wenn Sie eine gut funktionierende interne IT-Abteilung haben. <strong>Arbeiten wir mit Unternehmen in Hamburg zusammen, übernehmen wir oft diese Aufgaben:</strong></p>
            </div>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <div
              v-for="topic in topicItems"
              :key="topic"
              class="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-secondary"
            >
              {{ topic }}
            </div>
          </div>
        </div>

        <div class="mt-10 max-w-4xl space-y-4 border-t border-black/10 pt-8 text-secondary leading-relaxed [&_strong]:font-semibold">
          <p>Kein Unternehmen arbeitet gleich. Umso wichtiger ist es, <strong>mit einem IT-Dienstleister zusammenzuarbeiten, der versteht, wie sich Veränderungen in der Softwarearchitektur auf den Alltag in Ihrem Betrieb auswirken können</strong>.</p>
          <p>Als erfahrene SAP-Beratung schlagen wir die Brücke zwischen IT und Arbeitsabläufen!</p>
        </div>
        <div class="mt-8">
          <UiButton href="/contact" label="Jetzt kontaktieren!" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.85fr)] lg:items-center">
          <div class="max-w-4xl">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Qualität</p>
            <h2 class="mt-3 font-semibold">Was gute SAP-Beratung auszeichnet</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p><strong>IT ist für uns Vertrauenssache.</strong> SAP-Beratung <strong>bedeutet nicht nur Systeme aufzusetzen, sondern auch klar und verlässlich zu agieren.</strong></p>
              <p><strong>Sind Sie auf der Suche nach einer guten SAP-Beratung in Hamburg, sollten Sie auf diese Faktoren achten:</strong></p>
            </div>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div
                v-for="quality in qualityItems"
                :key="quality"
                class="flex gap-3"
              >
                <span class="mt-2 h-px w-7 shrink-0 bg-primary" aria-hidden="true" />
                <p class="text-secondary leading-relaxed">{{ quality }}</p>
              </div>
            </div>
            <div class="mt-8 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p><strong>Unser Team setzt sich gemeinsam für Ihren Erfolg ein!</strong> Sind Sie auf der Suche nach einem verlässlichen Ansprechpartner für SAP, <strong>buchen Sie jetzt ein unverbindliches Erstgespräch mit uns</strong>. So lernen Sie uns und unseren praxisnahen Ansatz kennen.</p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" label="Jetzt Erstgespräch buchen!" />
            </div>
          </div>
          <img :src="stabilization" alt="SAP Beratung Stabilität" class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[420px]" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <LayoutContainer as="section" topMargin bottomMargin>
      <div class="overflow-hidden rounded-[2rem] bg-primary px-6 py-8 text-white shadow-lg shadow-primary/10 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center">
          <div class="max-w-4xl">
            <h2 class="font-semibold text-white">SAP-Beratung in Hamburg und Umgebung: Direkte Kommunikation und kurze Wege</h2>
            <div class="mt-6 space-y-4 leading-relaxed text-white/90 [&_strong]:font-semibold [&_strong]:text-white">
              <p>Als SAP-Beratung für den Mittelstand in Hamburg <strong>unterstützen wir Unternehmen dabei, SAP optimal zu nutzen.</strong> Nutzen Sie unsere über 30-jährige Erfahrung und meistern Sie die digitale Transformation!</p>
              <p>Dafür bieten wir Ihnen eine <strong>partnerschaftliche Zusammenarbeit, Transparenz und Verbindlichkeit</strong>. Sie haben von Anfang an einen persönlichen Ansprechpartner bei uns. So sind die Zuständigkeiten geklärt und Sie erhalten zügig Hilfe, falls Sie ein akutes IT-Problem haben.</p>
              <p>Wir sind <strong>im Raum Hamburg und Umgebung ebenso wie deutschland- und europaweit remote für Sie einsatzfähig</strong>.</p>
              <p>Kommen Sie jetzt auf uns zu und <strong>vereinbaren Sie einen Termin für eine Erstberatung</strong>. Bei dieser Gelegenheit <strong>besprechen wir Ihre aktuelle SAP-Landschaft, mögliche Herausforderungen und wie wir Sie und Ihr IT-Team realistisch unterstützen können</strong>. Wir freuen uns auf Sie!</p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" label="Jetzt Erstberatung anfragen!" class="!border-white !text-primary hover:!bg-white/90" />
            </div>
          </div>
          <img :src="golive" alt="SAP Beratung Erstberatung" class="h-72 w-full rounded-[1.75rem] object-cover" loading="lazy" />
        </div>
      </div>
    </LayoutContainer>

    <FaqAccordion
      title="FAQ: SAP-Beratung in Hamburg und Umgebung"
      :items="faqItems"
    />

    <LayoutContainer as="section" class="pb-16 md:pb-20 lg:pb-24">
      <div class="border-t border-black/10 pt-8 md:flex md:items-center md:justify-between md:gap-8">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Unverbindlich sprechen</p>
          <p class="mt-3 text-lg font-semibold leading-snug md:text-xl">
            Sind Sie auf der Suche nach einer verlässlichen SAP-Beratung mit praxistauglichen Lösungen in Hamburg?
          </p>
          <p class="mt-3 text-secondary leading-relaxed">
            Dann kontaktieren Sie uns jetzt und vereinbaren Sie ein unverbindliches Erstgespräch mit uns.
          </p>
        </div>
        <div class="mt-6 shrink-0 md:mt-0">
          <UiButton href="/contact" label="Jetzt kontaktieren!" />
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>
