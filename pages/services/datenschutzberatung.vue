<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(
  'Datenschutzberatung in Hamburg & Norderstedt: Persönlich & planbar',
  '✅ Externer Datenschutzbeauftragter ✅ Vier Datenschutzpakete mit transparenten Kosten ✅ Persönlicher Ansprechpartner ► Jetzt unverbindlich beraten lassen!'
)

/*
Bilder: Alle Bilder sind Stockfotos aus /public/assets/img (keine KI-Bilder).
Zum Austauschen einfach den Pfad ändern oder die Datei gleichen Namens ersetzen.
*/
const heroImage = '/assets/img/online-4208112_1920.jpg'
const practiceImage = '/assets/img/technology (2).jpg'
const onboardingImage = '/assets/img/john-schnobrich-FlPc9_VocJ4-unsplash.jpg'
const personalImage = '/assets/img/job.jpg'

const services = [
  'Aufbau und Pflege der grundlegenden Datenschutzdokumentation',
  'Datenschutzhinweise für Websites, Kunden, Beschäftigte und Bewerber',
  'Erstellung und Prüfung von Vorlagen für Auftragsverarbeitungsverträge',
  'Unterstützung beim Verzeichnis von Verarbeitungstätigkeiten',
  'Beratung zu Aufbewahrungs- und Löschfristen',
  'Unterstützung bei Auskunfts-, Berichtigungs- und Löschanfragen',
  'Beratung beim Einsatz von Cloud-Diensten und externen Dienstleistern',
  'Datenschutzrechtliche Begleitung neuer Systeme und Prozesse',
  'Unterstützung und Dokumentation bei Videoüberwachung',
  'Beratung bei Datenschutzvorfällen',
  'Sensibilisierung und Schulung von Mitarbeitenden',
  'Regelmäßige Datenschutz-Checks',
  'Stellung eines externen Datenschutzbeauftragten',
  'Kommunikation mit Datenschutzaufsichtsbehörden'
]

const packages = [
  {
    id: 'XS',
    name: 'Datenschutz Basis',
    audience: 'Für Unternehmen mit 1–5 Mitarbeitenden',
    price: '89,00 €',
    priceNote: 'netto / Monat',
    facts: ['30 Minuten Beratung pro Monat inklusive', 'Einmaliges Onboarding: 249,00 € netto'],
    paragraphs: [
      'Der unkomplizierte Einstieg in einen professionell organisierten Datenschutz.',
      'Das XS-Paket eignet sich für kleinere Unternehmen, die ihre grundlegenden Datenschutzanforderungen strukturiert umsetzen möchten und bei Fragen einen festen Ansprechpartner benötigen.'
    ],
    features: [
      'Bereitstellung und Pflege grundlegender Datenschutzvorlagen',
      'Datenschutzhinweise für Website und Kunden',
      'Vorlagen für Mitarbeiter- und Bewerberdatenschutz',
      'Muster für Auftragsverarbeitungsverträge',
      'Unterstützung bei allgemeinen Datenschutzfragen',
      'Beratung zu externen Dienstleistern und Cloud-Diensten',
      'Standardvorlagen und Hinweise zur Videoüberwachung',
      'Unterstützung bei Auskunfts- und Löschanfragen',
      '30 Minuten persönliche Datenschutzberatung pro Monat'
    ],
    term: 'Mindestvertragslaufzeit: 6 Monate',
    ctaLabel: 'Jetzt XS-Paket anfragen'
  },
  {
    id: 'S',
    name: 'Datenschutz Komfort',
    audience: 'Für Unternehmen mit 6–19 Mitarbeitenden',
    price: '129,00 €',
    priceNote: 'netto / Monat',
    facts: ['1 Stunde Beratung pro Monat inklusive', 'Einmaliges Onboarding: 349,00 € netto'],
    paragraphs: [
      'Laufende Datenschutzbetreuung für kleine und mittelständische Unternehmen, die mehr als eine reine Vorlagensammlung benötigen.',
      'Wir unterstützen Sie bei der praktischen Umsetzung des Datenschutzes und stehen Ihnen kontinuierlich als Ansprechpartner zur Verfügung.'
    ],
    features: [
      'Sämtliche grundlegenden Datenschutzunterlagen',
      'Datenschutzhinweise für Website und digitale Dienste',
      'Vorlagen für Mitarbeiter-, Bewerber- und Kundendatenschutz',
      'Unterstützung bei Auftragsverarbeitungsverträgen',
      'Beratung zu Cloud-Diensten und externen Dienstleistern',
      'Unterstützung bei Aufbewahrungs- und Löschkonzepten',
      'Beratung bei Videoüberwachung',
      'Unterstützung bei Auskunfts- und Löschanfragen',
      'Datenschutzinformationen und Schulungsunterlagen für Mitarbeitende',
      'Unterstützung bei neuen digitalen Prozessen und Systemen',
      '1 Stunde persönliche Datenschutzberatung pro Monat'
    ],
    term: 'Mindestvertragslaufzeit: 6 Monate',
    ctaLabel: 'Jetzt S-Paket anfragen'
  },
  {
    id: 'M',
    name: 'Datenschutz & externer Datenschutzbeauftragter',
    audience: 'Für Unternehmen mit 20–49 Mitarbeitenden',
    price: '279,00 €',
    priceNote: 'netto / Monat',
    badge: 'Externer Datenschutzbeauftragter möglich',
    facts: ['2 Stunden Beratung pro Monat inklusive', 'Einmaliges Onboarding: 749,00 € netto'],
    paragraphs: [
      'Umfassende Datenschutzbetreuung für mittelständische Unternehmen.',
      'Neben der laufenden Beratung können wir – sofern erforderlich oder gewünscht – die Funktion Ihres externen Datenschutzbeauftragten übernehmen.'
    ],
    features: [
      'Sämtliche Leistungen der grundlegenden Datenschutzbetreuung',
      'Stellung eines externen Datenschutzbeauftragten, sofern vereinbart',
      'Unterstützung bei der formellen Benennung und Meldung gegenüber der zuständigen Aufsichtsbehörde',
      'Ansprechpartner für Geschäftsführung und Mitarbeitende',
      'Ansprechpartner für betroffene Personen und Aufsichtsbehörden im Rahmen der DSB-Tätigkeit',
      'Regelmäßiger Datenschutz-Check',
      'Prüfung und Beratung zu eingesetzten IT- und Cloud-Systemen',
      'Beratung zu Aufbewahrungs- und Löschfristen',
      'Unterstützung bei Auftragsverarbeitungsstrukturen',
      'Beratung und Dokumentation zur Videoüberwachung',
      'Unterstützung bei Betroffenenanfragen',
      'Unterstützung bei Datenschutzvorfällen',
      'Datenschutzinformationen und Schulungsunterlagen für Mitarbeitende',
      '2 Stunden Beratungs- und Betreuungszeit pro Monat inklusive'
    ],
    term: 'Mindestvertragslaufzeit: 12 Monate',
    ctaLabel: 'Jetzt M-Paket anfragen'
  },
  {
    id: 'L',
    name: 'Datenschutz Premium',
    audience: 'Für Unternehmen ab 50 Mitarbeitenden oder mit erhöhtem Datenschutzbedarf',
    price: 'ab 799,00 €',
    priceNote: 'netto / Monat',
    badge: 'Externer Datenschutzbeauftragter inklusive',
    facts: ['Individuelles Beratungskontingent', 'Einmaliges Onboarding: ab 1.690,00 € netto'],
    paragraphs: [
      'Das Premium-Paket richtet sich an größere Unternehmen, Unternehmen mit mehreren Standorten sowie Organisationen mit komplexen oder besonders sensiblen Datenverarbeitungen.',
      'Die Betreuung wird individuell auf Unternehmensgröße, Systeme, Standorte und Datenschutzrisiken abgestimmt.'
    ],
    features: [
      'Vollumfängliche Betreuung durch einen externen Datenschutzbeauftragten',
      'Formelle Benennung und Kommunikation mit der zuständigen Aufsichtsbehörde',
      'Regelmäßige Datenschutzprüfungen und Audits',
      'Prüfung komplexer IT- und Cloud-Landschaften',
      'Prüfung umfangreicher Dienstleister- und Auftragsverarbeitungsstrukturen',
      'Erstellung und Überprüfung von Lösch- und Aufbewahrungskonzepten',
      'Vertiefte Prüfung von Videoüberwachungssystemen',
      'Datenschutzrechtliche Bewertung von Zutritts- und Zugangssystemen',
      'Prüfung besonders sensibler personenbezogener Daten',
      'Unterstützung bei Datenschutz-Folgenabschätzungen',
      'Begleitung bei Datenschutzvorfällen',
      'Unterstützung bei Betroffenenanfragen',
      'Begleitung neuer Projekte und Systemeinführungen',
      'Regelmäßige Mitarbeiterschulungen',
      'Priorisierte Bearbeitung dringender Datenschutzanfragen',
      'Individuell vereinbartes Beratungskontingent'
    ],
    term: 'Mindestvertragslaufzeit: 12 Monate',
    ctaLabel: 'Jetzt individuelle Betreuung anfragen'
  }
]

const onboardingItems = [
  'Aufnahme Ihres Unternehmens und der verantwortlichen Ansprechpartner',
  'Sichtung der bestehenden Datenschutzorganisation',
  'Erfassung wesentlicher Verarbeitungstätigkeiten',
  'Aufnahme relevanter IT-Systeme und Cloud-Dienste',
  'Erfassung wichtiger Dienstleister und Auftragsverarbeiter',
  'Sichtung vorhandener Datenschutzdokumente',
  'Identifikation offensichtlicher Lücken und Risiken',
  'Abstimmung der notwendigen Unterlagen',
  'Festlegung der zukünftigen Kommunikations- und Betreuungswege'
]

const processSteps = [
  {
    title: 'Erstgespräch und Bedarfsklärung',
    paragraphs: [
      'Zunächst sprechen wir über Ihr Unternehmen, bestehende Prozesse und die aktuellen Herausforderungen. Gemeinsam klären wir, welches Betreuungsmodell zu Ihnen passt.'
    ]
  },
  {
    title: 'Datenschutz-Bestandsaufnahme',
    paragraphs: [
      'Im Onboarding erfassen wir relevante Prozesse, Systeme, Dienstleister und bestehende Datenschutzunterlagen. So erhalten wir einen nachvollziehbaren Überblick über den aktuellen Stand.'
    ]
  },
  {
    title: 'Prioritäten und Maßnahmen',
    paragraphs: [
      'Wir identifizieren Handlungsbedarf und priorisieren die notwendigen Maßnahmen. Dabei konzentrieren wir uns zunächst auf die Themen, die für Ihr Unternehmen tatsächlich relevant sind.'
    ]
  },
  {
    title: 'Umsetzung',
    paragraphs: [
      'Gemeinsam bringen wir Dokumentation, Prozesse und Datenschutzorganisation auf einen strukturierten Stand. Sie wissen dabei jederzeit, welche Maßnahmen durchgeführt werden und warum.'
    ]
  },
  {
    title: 'Laufende Betreuung',
    paragraphs: [
      'Datenschutz endet nicht nach dem Onboarding. Neue Mitarbeitende, Systeme, Dienstleister und Geschäftsprozesse verändern auch die Datenschutzanforderungen.',
      'Wir begleiten Sie deshalb langfristig und stehen Ihnen bei Fragen als persönlicher Ansprechpartner zur Verfügung.'
    ]
  }
]

const personalPoints = [
  {
    title: 'Klare Kommunikation',
    paragraphs: [
      'Datenschutz kann komplex sein. Unsere Aufgabe ist es, Ihnen verständlich zu erklären, was erforderlich ist und was nicht.'
    ]
  },
  {
    title: 'Persönliche Ansprechpartner',
    paragraphs: [
      'Bei Fragen wissen Sie, wen Sie erreichen können. Sie müssen Ihren Betrieb nicht bei jeder Anfrage erneut erklären.'
    ]
  },
  {
    title: 'Praxisnahe Lösungen',
    paragraphs: [
      'Datenschutz muss mit Ihren Geschäftsprozessen funktionieren. Wir suchen deshalb Lösungen, die rechtliche Anforderungen und betriebliche Realität sinnvoll zusammenbringen.'
    ]
  },
  {
    title: 'IT und Datenschutz aus einer Hand',
    paragraphs: [
      'Viele Datenschutzfragen sind heute unmittelbar mit IT-Systemen, Cloud-Diensten, Microsoft 365, Berechtigungen oder IT-Sicherheit verbunden.',
      'Als IT-Dienstleister können wir technische und organisatorische Fragestellungen gemeinsam betrachten und müssen Datenschutz und IT nicht künstlich voneinander trennen.'
    ]
  },
  {
    title: 'Wir reden Klartext',
    paragraphs: [
      'Sie erhalten nachvollziehbare Empfehlungen und klare Prioritäten. Wir verkaufen Ihnen nicht mehr Datenschutzprojekt, als Ihr Unternehmen tatsächlich benötigt.'
    ]
  }
]

// Erste drei Karten: je 2 von 6 Spalten, Karten 4 und 5: je 3 von 6 Spalten (Desktop)
const personalCardClass = (index: number) => {
  if (index < 3) return 'lg:col-span-2'
  if (index === 3) return 'lg:col-span-3'
  return 'md:col-span-2 lg:col-span-3'
}

const contractTerms = [
  {
    packages: 'Pakete XS und S',
    duration: '6 Monate',
    paragraphs: [
      'Der Vertrag kann mit einer Frist von <strong>30 Tagen zum Ende der jeweiligen Vertragslaufzeit</strong> gekündigt werden. Erfolgt keine fristgerechte Kündigung, verlängert sich der Vertrag um weitere <strong>6 Monate</strong>.'
    ]
  },
  {
    packages: 'Pakete M und L',
    duration: '12 Monate',
    paragraphs: [
      'Der Vertrag kann ebenfalls mit einer Frist von <strong>30 Tagen zum Ende der jeweiligen Vertragslaufzeit</strong> gekündigt werden. Erfolgt keine fristgerechte Kündigung, verlängert sich der Vertrag um weitere <strong>12 Monate</strong>.'
    ]
  }
]

const faqItems = [
  {
    question: 'Wann benötigt ein Unternehmen einen Datenschutzbeauftragten?',
    content: [
      { type: 'paragraph' as const, html: 'Die Mitarbeiterzahl allein entscheidet nicht automatisch über die Pflicht zur Benennung eines Datenschutzbeauftragten.' },
      { type: 'paragraph' as const, html: 'Nach § 38 BDSG besteht für nichtöffentliche Stellen unter anderem eine Benennungspflicht, wenn in der Regel <strong>mindestens 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten</strong> beschäftigt sind.' },
      { type: 'paragraph' as const, html: 'Darüber hinaus kann unabhängig von dieser Personenzahl eine Verpflichtung bestehen, beispielsweise aufgrund bestimmter besonders risikoreicher Datenverarbeitungen.' },
      { type: 'paragraph' as const, html: '<strong>Wir prüfen mit Ihnen, ob für Ihr Unternehmen eine gesetzliche Benennungspflicht besteht.</strong>' }
    ]
  },
  {
    question: 'Warum einen externen Datenschutzbeauftragten einsetzen?',
    content: [
      { type: 'paragraph' as const, html: 'Ein externer Datenschutzbeauftragter stellt <strong>spezialisiertes Fachwissen</strong> bereit, ohne dass im eigenen Unternehmen dauerhaft entsprechende Ressourcen aufgebaut werden müssen.' },
      { type: 'paragraph' as const, html: 'Gleichzeitig erhalten Geschäftsführung und Mitarbeitende einen <strong>festen Ansprechpartner</strong> für datenschutzrechtliche Fragestellungen.' }
    ]
  },
  {
    question: 'Sind die Pakete nur für Unternehmen aus Hotellerie und Gastronomie geeignet?',
    content: [
      { type: 'paragraph' as const, html: '<strong>Nein.</strong>' },
      { type: 'paragraph' as const, html: 'Unsere Datenschutzpakete stehen Unternehmen unterschiedlicher Branchen zur Verfügung. Für Hotellerie und Gastronomie bieten wir zusätzlich eine auf typische Branchenprozesse abgestimmte Betreuung.' }
    ]
  },
  {
    question: 'Was zählt zum monatlichen Beratungskontingent?',
    content: [
      { type: 'paragraph' as const, html: 'Zum Beratungskontingent gehören telefonische Gespräche, Videotermine, schriftliche Beratung sowie die Bearbeitung individueller Datenschutzfragen und vereinbarter Datenschutzaufgaben.' }
    ]
  },
  {
    question: 'Was passiert, wenn das enthaltene Zeitkontingent nicht ausreicht?',
    content: [
      { type: 'paragraph' as const, html: 'Zusätzliche Tätigkeiten rechnen wir transparent mit <strong>90,00 € netto pro Stunde im 15-Minuten-Takt</strong> ab.' },
      { type: 'paragraph' as const, html: 'Dadurch bezahlen Sie zusätzlichen Aufwand nur dann, wenn dieser tatsächlich entsteht.' }
    ]
  },
  {
    question: 'Kann nicht genutzte Beratungszeit angespart werden?',
    content: [
      { type: 'paragraph' as const, html: '<strong>Nein.</strong> Nicht genutztes Beratungskontingent verfällt jeweils zum Monatsende.' },
      { type: 'paragraph' as const, html: 'Dadurch können wir für alle betreuten Unternehmen verlässlich monatliche Betreuungskapazitäten vorhalten.' }
    ]
  },
  {
    question: 'Können bereits vorhandene Datenschutzunterlagen übernommen werden?',
    content: [
      { type: 'paragraph' as const, html: '<strong>Ja.</strong>' },
      { type: 'paragraph' as const, html: 'Im Rahmen des Onboardings prüfen wir vorhandene Dokumente und Prozesse. Sinnvolle bestehende Unterlagen müssen nicht unnötig neu erstellt werden.' }
    ]
  },
  {
    question: 'Können Sie auch Unternehmen außerhalb von Hamburg und Norderstedt betreuen?',
    content: [
      { type: 'paragraph' as const, html: '<strong>Ja.</strong>' },
      { type: 'paragraph' as const, html: 'Viele Leistungen der Datenschutzberatung können vollständig digital durchgeführt werden. Dadurch können wir Unternehmen bundesweit betreuen. Persönliche Termine können bei Bedarf individuell abgestimmt werden.' }
    ]
  }
]
</script>

<template>
  <div>
    <Breadcrumbs :items="[{ label: 'Leistungen', to: '/services' }, { label: 'Datenschutzberatung' }]" />

    <ServiceLead
      eyebrow="Datenschutzberatung"
      title="Datenschutzberatung in Hamburg, Norderstedt und Umgebung – pragmatisch, persönlich und planbar"
      :paragraphs="[
        '<strong>Datenschutz muss im Unternehmen funktionieren – nicht nur auf dem Papier.</strong>',
        'Von Datenschutzhinweisen und Auftragsverarbeitungsverträgen über Löschkonzepte bis zur Betreuung durch einen externen Datenschutzbeauftragten: Wir unterstützen Unternehmen dabei, Datenschutz verständlich, strukturiert und praxistauglich umzusetzen.',
        'Dabei setzen wir auf <strong>klare Zuständigkeiten, persönliche Ansprechpartner und transparente Kosten</strong>. Sie erhalten genau die Unterstützung, die zu Größe, Struktur und Anforderungen Ihres Unternehmens passt.'
      ]"
      cta-label="Jetzt unverbindlich zu Datenschutz beraten lassen"
      cta-href="/contact"
      :image-src="heroImage"
      image-alt="Person arbeitet am Laptop – Datenschutz im Büroalltag"
    />

    <section class="bg-gray-50" aria-labelledby="datenschutz-praxis">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Ausgangslage</p>
            <h2 id="datenschutz-praxis" class="mt-3 font-semibold">Datenschutz, der in Ihrem Unternehmen funktioniert</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed">
              <p>Datenschutz betrifft heute nahezu jeden Unternehmensbereich. Mitarbeiterdaten, Kundendaten, Bewerbungen, Cloud-Dienste, Microsoft 365, Websites, Videoüberwachung oder externe Dienstleister bringen unterschiedliche Anforderungen mit sich.</p>
              <p>In vielen Unternehmen fehlt jedoch die Zeit, sich kontinuierlich mit diesen Themen auseinanderzusetzen. Dokumentationen werden einmal erstellt und anschließend nicht mehr gepflegt, Verantwortlichkeiten sind unklar oder neue Systeme werden eingeführt, ohne den Datenschutz frühzeitig zu berücksichtigen.</p>
            </div>
            <p class="mb-0 mt-8 rounded-2xl border-l-4 border-primary bg-white p-5 text-left text-lg font-semibold text-secondary">Genau hier setzen wir an.</p>
            <div class="mt-8 space-y-5 text-secondary leading-relaxed">
              <p>Wir unterstützen Sie dabei, Ihre Datenschutzorganisation strukturiert aufzubauen und langfristig zu betreuen – verständlich, nachvollziehbar und ohne unnötige Bürokratie.</p>
              <UiButton href="/contact" label="Jetzt Datenschutz-Bedarf besprechen" />
            </div>
          </div>
          <LightboxImage
            :src="practiceImage"
            alt="Datenschutz im Arbeitsalltag mit digitalen Geräten"
            img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[460px]"
            button-class="w-full rounded-[1.75rem] lg:sticky lg:top-24"
            loading="lazy"
          />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white" aria-labelledby="datenschutz-leistungen">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Leistungsüberblick</p>
          <h2 id="datenschutz-leistungen" class="mt-3 font-semibold">Unsere Leistungen im Datenschutz</h2>
          <p class="mt-6 text-secondary leading-relaxed">Unsere Datenschutzbetreuung wird auf Ihr Unternehmen abgestimmt. Je nach gewähltem Paket übernehmen wir unter anderem folgende Aufgaben:</p>
        </div>
        <CheckList class="mt-10" variant="cards" :items="services" />
        <div class="mt-10 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <p class="mb-0 text-secondary leading-relaxed">So entsteht keine Dokumentation für die Schublade, sondern eine Datenschutzorganisation, die sich in Ihren Unternehmensalltag integrieren lässt.</p>
          <UiButton href="/contact" label="Jetzt unverbindlich beraten lassen" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50" aria-labelledby="datenschutz-pakete">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Betreuungsmodelle</p>
          <h2 id="datenschutz-pakete" class="mt-3 font-semibold">Datenschutzpakete für Unternehmen</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed">
            <p>Nicht jedes Unternehmen benötigt den gleichen Umfang an Datenschutzbetreuung. Deshalb bieten wir <strong class="font-semibold">vier klar definierte Betreuungsmodelle</strong> an.</p>
            <p>Die Einteilung nach Mitarbeiterzahl dient dabei als transparente Preis- und Leistungsstaffelung. Welche Datenschutzanforderungen tatsächlich für Ihr Unternehmen gelten, prüfen wir individuell.</p>
          </div>
        </div>
        <PackageCards class="mt-10" :packages="packages" />
      </LayoutContainer>
    </section>

    <section class="bg-primary text-white" aria-labelledby="datenschutz-kosten">
      <LayoutContainer class="py-12 md:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-center">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Zusatzaufwand</p>
            <h2 id="datenschutz-kosten" class="mt-3 font-semibold text-white">Transparente Kosten – auch wenn einmal mehr zu tun ist</h2>
            <div class="mt-6 space-y-4 leading-relaxed">
              <p>In jedem Paket ist ein monatliches Beratungskontingent enthalten.</p>
              <p>Dieses Kontingent kann für telefonische, digitale und schriftliche Beratung sowie für die Bearbeitung individueller datenschutzrechtlicher Fragestellungen genutzt werden.</p>
              <p class="mb-0">Über das enthaltene Kontingent hinausgehende Beratungs- und Dienstleistungen rechnen wir transparent nach tatsächlichem Aufwand ab:</p>
            </div>
          </div>
          <div class="rounded-3xl border border-white/20 bg-white/10 p-7 md:p-8">
            <p class="mb-0 text-left font-heading text-3xl font-bold md:text-4xl">90,00 € netto pro Stunde</p>
            <p class="mb-0 mt-3 text-left text-lg font-semibold">Abrechnung im 15-Minuten-Takt = 22,50 € netto je 15 Minuten</p>
          </div>
        </div>
        <ul class="mt-10 grid gap-4 sm:grid-cols-2">
          <li class="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 leading-relaxed">Nicht genutztes Beratungskontingent verfällt zum Monatsende und wird nicht auf Folgemonate übertragen oder ausgezahlt.</li>
          <li class="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 leading-relaxed">Bei umfangreicheren Sonderprojekten stimmen wir den notwendigen Aufwand vor Beginn mit Ihnen ab.</li>
        </ul>
      </LayoutContainer>
    </section>

    <section class="bg-white" aria-labelledby="datenschutz-onboarding">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <LightboxImage
            :src="onboardingImage"
            alt="Gemeinsame Durchsicht von Systemen und Prozessen am Laptop"
            img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[460px]"
            button-class="w-full rounded-[1.75rem] lg:sticky lg:top-24"
            loading="lazy"
          />
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Onboarding</p>
            <h2 id="datenschutz-onboarding" class="mt-3 font-semibold">Ein strukturiertes Onboarding als Grundlage</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed">
              <p>Eine laufende Datenschutzbetreuung funktioniert nur, wenn wir Ihr Unternehmen und die bestehenden Prozesse kennen.</p>
              <p>Deshalb beginnt <strong class="font-semibold">jedes Paket mit einem strukturierten Onboarding.</strong></p>
              <p class="mb-0">Je nach Paket gehören dazu unter anderem:</p>
            </div>
            <CheckList class="mt-6" :items="onboardingItems" />
            <div class="mt-8 space-y-4 text-secondary leading-relaxed">
              <p>Bei den Paketen M und L erfolgt zusätzlich die Aufnahme der für die Tätigkeit als externer Datenschutzbeauftragter erforderlichen Strukturen.</p>
              <p class="mb-0 rounded-2xl border-l-4 border-primary bg-gray-50 p-5 text-left">Sollten wir während des Onboardings einen erheblichen zusätzlichen Bereinigungs- oder Projektbedarf feststellen, sprechen wir diesen vor zusätzlichen kostenpflichtigen Arbeiten mit Ihnen ab.</p>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <ProcessSteps
      title="So läuft die Datenschutzbetreuung mit uns ab"
      :steps="processSteps"
      cta-label="Jetzt unverbindliches Erstgespräch vereinbaren"
      cta-href="/contact"
    />

    <section class="bg-white" aria-labelledby="datenschutz-persoenlich">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-center">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Persönlich statt anonym</p>
            <h2 id="datenschutz-persoenlich" class="mt-3 font-semibold">Persönliche Datenschutzbetreuung statt anonymer Plattform</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed">
              <p class="font-semibold">Datenschutz ist Vertrauenssache.</p>
              <p>Deshalb setzen wir nicht ausschließlich auf automatisierte Portale und Vorlagen. Sie erhalten bei der GIM einen persönlichen Ansprechpartner, der Ihr Unternehmen und Ihre Prozesse kennt.</p>
            </div>
          </div>
          <LightboxImage
            :src="personalImage"
            alt="Team bei einer Besprechung im Büro"
            img-class="h-[280px] w-full rounded-[1.75rem] object-cover md:h-[360px]"
            button-class="w-full rounded-[1.75rem]"
            loading="lazy"
          />
        </div>

        <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          <article
            v-for="(item, index) in personalPoints"
            :key="item.title"
            class="rounded-3xl bg-gray-50 p-6"
            :class="personalCardClass(index)"
          >
            <h3 class="font-semibold">{{ item.title }}</h3>
            <div class="mt-3 space-y-3 text-secondary leading-relaxed">
              <p v-for="paragraph in item.paragraphs" :key="paragraph" class="mb-0 text-left">{{ paragraph }}</p>
            </div>
          </article>
        </div>

        <div class="mt-10">
          <UiButton href="/contact" label="Jetzt mit uns über Ihren Datenschutz sprechen" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50" aria-labelledby="datenschutz-laufzeiten">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Konditionen</p>
          <h2 id="datenschutz-laufzeiten" class="mt-3 font-semibold">Vertragslaufzeiten</h2>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article
            v-for="term in contractTerms"
            :key="term.packages"
            class="rounded-3xl border border-black/10 bg-white p-6 md:p-8"
          >
            <h3 class="font-semibold">{{ term.packages }}</h3>
            <p class="mb-0 mt-4 text-left font-heading text-4xl font-bold text-primary">{{ term.duration }}</p>
            <p class="mb-0 mt-1 text-left text-sm font-semibold uppercase tracking-[0.12em] text-secondary">Mindestvertragslaufzeit</p>
            <div class="mt-5 space-y-3 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p v-for="paragraph in term.paragraphs" :key="paragraph" class="mb-0 text-left" v-html="paragraph" />
            </div>
          </article>
        </div>

        <div class="mt-8 space-y-2 text-secondary leading-relaxed">
          <p class="mb-0">Die Kündigung kann in Textform erfolgen.</p>
          <p class="mb-0">Alle angegebenen Preise verstehen sich netto zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer.</p>
        </div>
      </LayoutContainer>
    </section>

    <FaqAccordion title="Häufige Fragen zur Datenschutzbetreuung" :items="faqItems" />

    <section class="bg-white" aria-labelledby="datenschutz-cta">
      <LayoutContainer class="pb-6 md:pb-10">
        <div class="grid gap-8 rounded-3xl bg-primary p-7 text-white md:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div class="max-w-3xl">
            <h2 id="datenschutz-cta" class="font-semibold text-white">Datenschutz strukturiert angehen</h2>
            <div class="mt-5 space-y-4 leading-relaxed">
              <p>Sie möchten wissen, wie Ihr Unternehmen im Datenschutz aufgestellt ist oder ob eines unserer Betreuungspakete zu Ihnen passt?</p>
              <p>In einem unverbindlichen Erstgespräch klären wir Ihren aktuellen Stand und den tatsächlichen Unterstützungsbedarf.</p>
              <p class="mb-0 font-semibold">Sie bekommen eine klare Einschätzung – ohne unnötige Leistungen und ohne komplizierten Fachjargon.</p>
            </div>
          </div>
          <UiButton
            href="/contact"
            label="Jetzt unverbindliche Datenschutzberatung anfragen"
            style="outline"
            class="bg-white text-primary"
          />
        </div>
      </LayoutContainer>
    </section>
  </div>
</template>
