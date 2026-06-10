<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(
  'KIS GUARD – KIS-Notfallsystem für Krankenhäuser | Sicherer Dokumentenzugriff bei IT-Ausfall',
  'KIS GUARD hält kritische Patientendokumente und klinische Patientendaten auch bei KIS-Ausfall, Cyberangriff oder Netzwerkstörung verfügbar. Entwickelt für Krankenhaus-IT, KRITIS-Umgebungen und klinischen Notbetrieb.'
)

const heroImage = '/assets/img/kis-guard-risiken.png'
const functionsImage = '/assets/img/kis-guard-funktionen.png'
const processImage = '/assets/img/kis-guard-sicherheit.png'
const securityImage = '/assets/img/KIS GUARD - visual selection 7.png'


const solutionFeatures = [
  {
    title: 'Automatisierte Datensynchronisation',
    points: [
      'Synchronisiert aus SMB/CIFS-Freigaben, Netzlaufwerken und lokalen Verzeichnissen',
      'Zeitgesteuert per integriertem Scheduler',
      'Ansible-basiert: reproduzierbar und versionierbar'
    ]
  },
  {
    title: 'Sichere Patientendaten-Aufbereitung',
    points: [
      'Dokumente werden technisch neu aufgebaut (Content Reconstruction)',
      'Eingebettete Risikoinhalte werden entfernt',
      'Klinische Workflows bleiben unverändert'
    ]
  },
  {
    title: 'Rollenbasierte Benutzerverwaltung',
    points: [
      'Zentrale Kontoverwaltung mit Rechtezuweisung',
      'Bcrypt-Passwortspeicherung',
      'Passwortänderung nach Erstlogin',
      'Mail-Benachrichtigung bei erster Anmeldung'
    ]
  },
  {
    title: 'Webbasiertes Admin-Panel',
    points: [
      'Keine Softwareinstallation nötig',
      'Verwaltung von Datenquellen, Rollen, Logs und Wartungsstatus',
      'Live-Logs und Fehleranalyse direkt im Browser'
    ]
  },
  {
    title: 'Dezentrale Stationsbereitstellung',
    points: [
      'Lokale Satelliten-Clients auf Stationsebene',
      'Dokumente verfügbar – auch ohne Zugriff auf zentrale Systeme',
      'Kürzere Wege, schnellere Reaktion im Notbetrieb'
    ]
  }
]

const capabilities = [
  {
    title: 'Automatisierte Datensynchronisation aus definierten Quellen',
    text: 'KIS GUARD synchronisiert klinische Dokumente automatisiert aus bestehenden Datenquellen, darunter SMB/CIFS-Freigaben, Netzlaufwerke und lokale Verzeichnisse. Ein integrierter Scheduler übernimmt die zeitgesteuerte Ausführung ohne manuellen Eingriff. Die zugrundeliegenden Prozesse sind reproduzierbar, versionierbar und strukturiert erweiterbar.'
  },
  {
    title: 'Sichere PDF-Aufbereitung für den klinischen Betrieb',
    text: 'Nach jedem Synchronisationslauf werden eingehende PDF-Dateien technisch neu aufgebaut. Dabei werden Inhalte gelesen und sauber re-serialisiert, wodurch potenziell risikobehaftete eingebettete Strukturen oder aktive Elemente aus den Dokumenten entfernt werden können. Klinische Workflows bleiben unverändert: Dokumente lassen sich weiterhin anzeigen, archivieren und drucken.'
  },
  {
    title: 'Rollenbasierte Benutzerverwaltung mit sicherer Authentifizierung',
    text: 'Benutzerkonten können zentral angelegt, bestimmten Inhalten zugewiesen und rollenbasiert eingeschränkt werden. KIS GUARD unterstützt bcrypt-basiertes Passwort-Hashing, erzwungene Passwortänderungen nach dem Erstlogin sowie automatische Mail-Benachrichtigungen.'
  },
  {
    title: 'Webbasiertes Admin-Panel ohne Zusatzsoftware',
    text: 'Die zentrale Verwaltungsoberfläche ist browserbasiert und erfordert keine lokale Installation. Über das Admin-Panel lassen sich Datenquellen, Synchronisationsintervalle, Benutzerkonten, Wartungsstatus und Fehlerprotokolle verwalten, ohne direkten Serverzugriff.'
  },
  {
    title: 'Live-Logs und Fehleranalyse in Echtzeit',
    text: 'Administratoren können Betriebslogs, Synchronisationsstatus, Reprint-Protokolle und Fehlermeldungen zentral im Browser einsehen. Das beschleunigt die Fehleranalyse und macht Betriebszustände transparent, auch für Teams ohne tiefgreifende Systemkenntnisse.'
  },
  {
    title: 'Dezentrale Stationsbereitstellung für höhere Resilienz',
    text: 'KIS GUARD unterstützt lokale Satelliten-Clients auf Stationsebene. Wichtige Verlaufsdokumentationen und klinische PDFs sind damit direkt am Arbeitsplatz verfügbar, auch wenn zentrale Systeme oder einzelne Netzwerksegmente nicht erreichbar sind.'
  },
  {
    title: 'Wartungsmodus und Betriebssteuerung',
    text: 'Administratoren können Synchronisationsprozesse manuell starten, Verbindungen testen, PDF-Reprints auslösen und den Wartungsmodus zentral aktivieren oder deaktivieren, direkt über das Admin-Panel ohne Kommandozeile.'
  }
]

const targetGroups = [
  'Krankenhäuser und Kliniken mit hohen Verfügbarkeitsanforderungen',
  'Einrichtungen mit KRITIS-Einstufung oder entsprechenden regulatorischen Anforderungen',
  'Häuser mit dezentralen Stationsstrukturen und komplexen IT-Landschaften',
  'Organisationen mit erhöhtem Bedarf an Cybersecurity und IT-Notfallplanung',
  'Kliniken, die ihre Notfallprozesse strukturiert absichern wollen'
]

const processSteps = [
  {
    title: 'Infrastrukturanalyse',
    paragraphs: ['Zu Beginn analysieren wir die bestehende KIS-Landschaft, Dokumentenquellen, Netzwerkstrukturen und sicherheitsrelevante Anforderungen Ihrer Einrichtung.']
  },
  {
    title: 'Konzeption',
    paragraphs: ['Gemeinsam definieren wir relevante Dokumententypen, Synchronisationsintervalle, Rollen- und Rechtekonzepte sowie Stationsanforderungen.']
  },
  {
    title: 'Technische Implementierung',
    paragraphs: ['KIS GUARD wird in die bestehende Infrastruktur integriert und individuell konfiguriert, einschließlich Datenquellen, Benutzerrollen, Automatisierungen und Logging.']
  },
  {
    title: 'Testbetrieb und Validierung',
    paragraphs: ['Vor dem produktiven Einsatz werden alle Prozesse gemeinsam getestet und dokumentiert.']
  },
  {
    title: 'Betrieb und Weiterentwicklung',
    paragraphs: ['KIS GUARD kann kontinuierlich an neue Anforderungen angepasst und erweitert werden.']
  }
]

const faqItems = [
  {
    question: 'Was ist KIS GUARD?',
    answerParagraphs: ['KIS GUARD ist ein KIS-Notfallsystem für Krankenhäuser und Kliniken. Es stellt wichtige medizinische Dokumente auch dann bereit, wenn das zentrale Krankenhaus-Informationssystem nicht verfügbar ist.']
  },
  {
    question: 'Welche Dokumente können bereitgestellt werden?',
    answerParagraphs: ['Je nach Infrastruktur und Konfiguration lassen sich unter anderem Patientendokumente, medizinische Verlaufsdokumentationen, Arztbriefe, Laborbefunde, Operationsberichte und pflegerische Dokumentationen einbinden.']
  },
  {
    question: 'Unterstützt KIS GUARD rollenbasierte Berechtigungen?',
    answerParagraphs: ['Ja. Benutzer können gezielt für bestimmte Inhalte oder Bereiche berechtigt werden. Zugriffsrechte sind zentral verwaltbar und dokumentiert.']
  },
  {
    question: 'Wie werden Benutzerkonten abgesichert?',
    answerParagraphs: ['KIS GUARD nutzt bcrypt-basiertes Passwort-Hashing, erfordert Passwortänderungen nach dem Erstlogin und sendet automatische Mail-Benachrichtigungen bei erstmaliger Anmeldung.']
  },
  {
    question: 'Können Dokumente lokal auf Stationen bereitgestellt werden?',
    answerParagraphs: ['Ja. KIS GUARD unterstützt dezentrale Stationsbereitstellungen über lokale Clients, unabhängig vom Zentralsystem.']
  },
  {
    question: 'Ist KIS GUARD für KRITIS-Umgebungen geeignet?',
    answerParagraphs: ['KIS GUARD wurde für sensible Gesundheitsinfrastrukturen entwickelt und adressiert Anforderungen an Verfügbarkeit, Resilienz und Nachvollziehbarkeit, auch in KRITIS-nahen Umgebungen.']
  },
  {
    question: 'Werden Betriebsprozesse protokolliert?',
    answerParagraphs: ['Ja. Betriebs- und Fehlerprotokolle werden getrennt geführt und sind zentral über das Admin-Panel einsehbar.']
  }
]
</script>

<template>
  <div>
    <Breadcrumbs :items="[
      { label: 'Leistungen', to: '/services' },
      { label: 'KIS GUARD' }
    ]" />

    <ServiceLead
      eyebrow="KIS-Notfallsystem für Krankenhäuser"
      title="KIS GUARD: Dokumentenzugriff auch bei KIS-Ausfall"
      description="Wenn ein Krankenhaus-Informationssystem (KIS) ungeplant ausfällt, entsteht sofortiger Handlungsdruck: Stationen benötigen Verlaufsdokumentationen, Laborbefunde und klinische PDFs, unabhängig davon, ob das Kernsystem erreichbar ist oder nicht."
      :paragraphs="[
        'KIS GUARD wurde für genau diese Situation entwickelt. Das System stellt wichtige medizinische Dokumente auch bei IT-Störungen, Netzwerkausfällen oder Cyberangriffen strukturiert und kontrolliert bereit, auf Basis automatisierter Datensynchronisation, sicherer Dokumentenaufbereitung und dezentraler Stationsversorgung.'
      ]"
      cta-label="Beratung zu KIS GUARD anfragen"
      cta-href="/contact"
      :image-src="heroImage"
      image-alt="Visualisierung der Risiken bei KIS-Ausfall, Cyberangriff und Netzwerkstörung"
    />

    <LayoutContainer as="section" bottomMargin>
      <div class="rounded-[2rem] bg-gray-50 px-6 py-10 md:px-10">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Digitale Resilienz</p>
            <h2 class="mt-3 font-semibold">Warum Krankenhaus-IT heute auf ein KIS-Notfallsystem angewiesen ist</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed">
              <p>Die Abhängigkeit klinischer Prozesse von digitalen Systemen ist in den letzten Jahren erheblich gestiegen. Gleichzeitig haben Cyberangriffe auf Gesundheitseinrichtungen, Ransomware-Vorfälle und technische Betriebsunterbrechungen deutlich zugenommen.</p>
              <p>Fällt ein KIS aus, fehlen häufig genau die Informationen, die für eine sichere Patientenversorgung notwendig sind. Papierbasierte Notfallprozesse sind aufwändig, fehleranfällig und oft nicht ausreichend vorbereitet.</p>
            </div>

            <div class="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Die Lösung</p>
              <h3 class="mt-2 font-semibold text-xl">KIS GUARD</h3>
              <div class="mt-4 space-y-4 text-secondary leading-relaxed">
                <p>KIS GUARD schafft eine unabhängige Dokumentationsebene parallel zum KIS.</p>
                <p><strong class="text-primary">Kernprinzip:</strong> Wichtige klinische Dokumente werden automatisiert synchronisiert, sicher aufbereitet und dezentral bereitgestellt – unabhängig vom Zentralsystem.</p>
              </div>
            </div>
          </div>
          <LightboxImage
            :src="functionsImage"
            alt="Zentrale Funktionen und Vorteile von KIS GUARD"
            img-class="w-full rounded-[1.75rem] bg-white object-cover shadow-sm"
            button-class="w-full rounded-[1.75rem]"
          />
        </div>

        <div class="mt-10">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">5 zentrale Funktionen</p>
          <div class="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <article
              v-for="feature in solutionFeatures"
              :key="feature.title"
              class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <h3 class="font-semibold leading-snug text-xl hyphens-auto break-words">{{ feature.title }}</h3>
              <ul class="mt-4 space-y-3 text-sm text-secondary leading-relaxed">
                <li v-for="point in feature.points" :key="point" class="flex gap-2">
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{{ point }}</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </LayoutContainer>

    <LayoutContainer as="section" bottomMargin>
      <div class="max-w-4xl">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Funktionen</p>
        <h2 class="mt-3 font-semibold">Was KIS GUARD konkret leistet</h2>
        <p class="mt-5 text-secondary leading-relaxed">KIS GUARD kombiniert automatisierte Dokumentensynchronisation, rollenbasierte Zugriffssteuerung und dezentrale Bereitstellung in einer Plattform, die sich in bestehende Krankenhaus-IT-Infrastrukturen integrieren lässt.</p>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <article
          v-for="capability in capabilities"
          :key="capability.title"
          class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <h3 class="font-semibold">{{ capability.title }}</h3>
          <p class="mt-3 text-secondary leading-relaxed">{{ capability.text }}</p>
        </article>
      </div>
    </LayoutContainer>

    <section class="bg-gray-50 py-12 md:py-16 lg:py-20">
      <LayoutContainer>
        <div class="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <LightboxImage
            :src="securityImage"
            alt="Sicherheitsrahmen von KIS GUARD"
            img-class="w-full rounded-[1.75rem] bg-white object-cover shadow-sm"
            button-class="w-full rounded-[1.75rem]"
          />
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Zielgruppen und Sicherheit</p>
            <h2 class="mt-3 font-semibold">Für wen KIS GUARD geeignet ist</h2>
            <p class="mt-5 text-secondary leading-relaxed">KIS GUARD wurde für Einrichtungen entwickelt, in denen Dokumentenverfügbarkeit und IT-Resilienz keine optionalen Eigenschaften sind, sondern operative Notwendigkeiten.</p>
            <ul class="mt-6 space-y-3 text-secondary leading-relaxed">
              <li v-for="targetGroup in targetGroups" :key="targetGroup" class="flex gap-3">
                <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{{ targetGroup }}</span>
              </li>
            </ul>
            <div class="mt-8">
              <UiButton href="/contact" label="Unverbindliches Erstgespräch vereinbaren" />
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <LayoutContainer as="section" topMargin bottomMargin>
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.85fr)] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Nachvollziehbarkeit</p>
          <h2 class="mt-3 font-semibold">Sicherheit und Nachvollziehbarkeit als Grundprinzip</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed">
            <p>KIS GUARD wurde mit Fokus auf kontrollierte Prozesse, Betriebssicherheit und Nachvollziehbarkeit entwickelt. Dazu gehören getrennte Betriebs- und Fehlerlogs, rollenbasierte Rechteverwaltung, sichere Passwortspeicherung und eine dokumentierte Synchronisationshistorie.</p>
            <p>Es schafft eine strukturierte, technisch durchdachte Ergänzungsebene für klinische IT-Infrastrukturen, die auf Resilienz und Betriebsstabilität ausgelegt ist.</p>
          </div>
        </div>
        <LightboxImage
          :src="processImage"
          alt="KIS GUARD Prozesskette von KIS-Quelle bis Zugriff im Notbetrieb"
          img-class="w-full rounded-[1.75rem] bg-white object-cover shadow-sm"
          button-class="w-full rounded-[1.75rem]"
        />
      </div>
    </LayoutContainer>

    <ProcessSteps
      title="Einführung von KIS GUARD: Von der Analyse bis zum Betrieb"
      :steps="processSteps"
      cta-label="Jetzt Beratung anfragen"
      cta-href="/contact"
    />

    <FaqAccordion title="Häufige Fragen zu KIS GUARD" :items="faqItems" />

    <LayoutContainer as="section" class="pb-16 md:pb-20 lg:pb-24">
      <div class="border-t border-black/10 pt-8 md:flex md:items-center md:justify-between md:gap-8">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">KIS GUARD für Ihren klinischen Notbetrieb prüfen?</p>
          <p class="mt-3 text-lg font-semibold leading-snug md:text-xl">
            Wir beraten Sie zur passenden Bereitstellung, zu Datenquellen, Rollenmodellen und technischen Betriebsanforderungen.
          </p>
          <p class="mt-3 text-secondary leading-relaxed">
            Kontaktieren Sie uns jetzt und vereinbaren Sie ein unverbindliches Erstgespräch mit uns.
          </p>
        </div>
        <div class="mt-6 shrink-0 md:mt-0">
          <UiButton href="/contact" label="Jetzt kontaktieren!" />
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>
