<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(
  'S/4HANA-Migration in Hamburg und Umgebung | GIM Gruppe',
  'SAP-Migration ✅Von Analyse bis Inbetriebnahme ✅In Hamburg und remote ✅Professionell und zuverlässig ►Jetzt buchen!'
)

const sapImage = '/assets/img/Basis-System-Administrator.jpg'

const processSteps = [
  {
    title: 'Analyse der bestehenden SAP-Systemlandschaft',
    paragraphs: [
      'Wir starten unsere Zusammenarbeit mit einer eingehenden <strong>Analyse Ihrer existierenden SAP Systemlandschaft</strong>. In gewachsenen Systemen <strong>bestehen oft Abhängigkeiten, die leider selten in Dokumentationen festgehalten sind</strong>. <strong>Diese gilt es zunächst zu finden,</strong> damit sie sich später zu keinem Problem für die Migration entwickeln.',
      'Ein solcher Analyseprozess benötigt Zeit. Wie lange, hängt von der Komplexität des gewachsenen Systems ab und von der Verfügbarkeit unserer Kunden für unsere Anfragen. Auf dieser Grundlage können wir einen <strong>passenden Migrationspfad entwickeln</strong>.'
    ]
  },
  {
    title: 'Bewertung von Risiken, Abhängigkeiten und Ressourcen',
    paragraphs: [
      'Die Migration Ihres kompletten SAP-Systems ist eine komplexe Aufgabe. Deshalb <strong>bewerten wir zu Beginn Risiken und Abhängigkeiten in Ihrem System</strong>. Gleichzeitig erheben wir die existierenden Ressourcen und welche im Laufe der Migration noch benötigt werden.',
      '<strong>So wissen Sie früh, womit Sie rechnen müssen: personell, technisch und zeitlich.</strong> Für Sie entstehen so <strong>keine bösen Überraschungen auf halbem Weg, weil etwas übersehen wurde.</strong>'
    ]
  },
  {
    title: 'Entwicklung eines passenden Migrationspfads',
    paragraphs: [
      'Nach der Analyse und Risikobewertung <strong>entwickeln wir den Migrationspfad, der für Ihren Betrieb am besten passt.</strong> Sie bekommen bei uns <strong>keinen Standardplan von der Stange</strong>. Ob Brownfield, Greenfield oder Selective Data Transition: <strong>Wir empfehlen den Weg, der zu Ihrer Systemlandschaft und Ihren Ressourcen passt</strong>. Unsere Leistungen sind <strong>für Sie maßgeschneidert</strong> und können auf Wunsch eine Systemberatung (Cloud oder Hybrid) beinhalten.'
    ]
  },
  {
    title: 'Technische Vorbereitung von Systemen, Schnittstellen und Berechtigungen',
    paragraphs: [
      'Eine erfolgreiche S/4HANA-Migration <strong>benötigt eine gründliche Vorarbeit</strong>. Deshalb leiten wir diesen Prozess mit der <strong>Vorbereitung der Systeme, Schnittstellen und Berechtigungen</strong> in Ihrem Unternehmen ein.',
      '<strong>Dieser Schritt ist besonders wichtig. Die meisten Migrationsprobleme entstehen nicht beim späteren Go-live, sondern in der Vorbereitung.</strong> Wird diese nicht sorgfältig genug durchgeführt, kann dies beim Go-live unangenehme Konsequenzen haben. In diesem Schritt <strong>beseitigen wir deshalb Probleme, bevor sie zu echten Schwierigkeiten werden</strong>.'
    ]
  },
  {
    title: 'Begleitung der Umsetzung und Tests',
    paragraphs: [
      'Wir begleiten den Umsetzungsprozess der S/4HANA-Migration fortwährend. Zeitgleich <strong>führen wir Tests auf SAP-Basis-Ebene durch, um zu prüfen, ob alles wie geplant funktioniert</strong>. So können wir <strong>Herausforderungen frühzeitig erkennen</strong> und <strong>die dafür notwendigen Lösungsschritte einleiten.</strong>',
      '<strong>Ihr internes Team muss die Migration nicht nebenbei im Blick behalten. Wir sind durchgehend dabei</strong>, erkennen Abweichungen frühzeitig und lösen sie, bevor sie den Zeitplan gefährden. <strong>Ihr Betrieb läuft währenddessen weiter.</strong>'
    ]
  },
  {
    title: 'Unterstützung beim Go-live und in der Hypercare-Phase',
    paragraphs: [
      'Das <strong>Go-live ist für Ihren Betrieb die wohl anspruchsvollste Phase</strong>. Es ist der riskanteste Moment der Systemmigration. <strong>Deshalb sind wir an diesem Tag vor Ort oder remote für Sie erreichbar</strong>. Falls Probleme in den ersten Stunden des Go-lives auftauchen, adressieren wir sie sofort. Sie können <strong>auf unsere Unterstützung</strong> <strong>sowohl beim Go-live als auch in der anschließenden Hypercare-Phase zählen</strong>. So <strong>gelingt eine reibungslose Umstellung der Systeme</strong>.'
    ]
  },
  {
    title: 'Stabilisierung, Support und Betrieb nach der Migration',
    paragraphs: [
      '<strong>Ein erfolgreiches Go-live ist der Anfang der Migration. In den Wochen danach zeigt sich, ob das System im realen Betrieb stabil läuft.</strong>',
      '<strong>Wir bleiben für Sie so lange dabei, bis Ihr Team selbstständig mit dem neuen System arbeitet.</strong> Dafür stehen wir Ihnen zur Seite, ohne unser Engagement künstlich zu verlängern. Die Kapazitäten Ihres IT-Teams bleiben so geschont. Sie kann sich Ihre IT-Abteilung weiterhin auf die notwendigen Aufgaben im Arbeitsalltag konzentrieren.'
    ]
  }
]

const faqItems = [
  {
    question: 'Was ist bei einer SAP S/4HANA-Migration technisch besonders zu beachten?',
    content: [
      {
        type: 'paragraph' as const,
        html: '<strong>Möchten Sie eine S/4HANA-Migration vornehmen, gibt es zu Beginn eine Vielzahl von Fragen zu klären. Dazu gehören beispielsweise:</strong>'
      },
      {
        type: 'bullets' as const,
        items: [
          'Braucht meine Firma wirklich externe Hilfe oder schaffen wir das intern?',
          'Was passiert, wenn wir zu spät anfangen?',
          'Wie aufwändig ist der Prozess für mein Team?',
          'Wie viel kostet eine Migration ungefähr?'
        ]
      },
      {
        type: 'paragraph' as const,
        html: '<strong>Daneben gibt es eine Reihe von Themen in Ihrer bestehenden IT-Landschaft, die Sie vor dem Systemwechsel untersuchen sollten. Darunter fallen:</strong>'
      },
      {
        type: 'bullets' as const,
        items: [
          'Schnittstellen',
          'Eigenentwicklungen',
          'Berechtigungen',
          'Datenqualität',
          'Tests'
        ]
      },
      {
        type: 'paragraph' as const,
        html: 'Es ist <strong>wichtig, den späteren Betrieb sauber zu planen</strong>. Deshalb <strong>lohnt es sich, mit erfahrenen IT-Spezialisten zusammenzuarbeiten</strong>. In einem gemeinsamen Erstgespräch können wir die oben genannten Fragen und technischen Themen mit Ihnen klären.'
      }
    ]
  },
  {
    question: 'Wann sollten Unternehmen in Hamburg und Umgebung mit der Planung einer S/4HANA-Migration beginnen?',
    content: [
      {
        type: 'paragraph' as const,
        html: '<strong>Je früher wir die technische Ausgangslage bewerten können, desto besser</strong> können wir Risiken bestimmen sowie den Ressourcenbedarf und sinnvolle Migrationspfade festlegen.'
      }
    ]
  },
  {
    question: 'Welche Migrationsansätze gibt es bei SAP S/4HANA?',
    content: [
      {
        type: 'paragraph' as const,
        html: '<strong>Einige typische Ansätze sind Brownfield, Greenfield und Selective Data Transition.</strong> Wir <strong>passen unser Vorgehen immer an Ihr Unternehmen</strong> an. Die Wahl des Migrationspfades hängt von Faktoren wie der bestehenden Systemlandschaft, den Prozessen, IT-Altlasten und Ihren Projektzielen ab.'
      }
    ]
  },
  {
    question: 'Welche Rolle übernimmt eine IT-Consulting-Firma bei der S/4HANA-Migration?',
    content: [
      {
        type: 'paragraph' as const,
        html: 'Arbeiten Sie mit einer IT-Consulting-Firma, erhalten Sie eine <strong>Rundum-Unterstützung bei der für die Migration notwendigen Tätigkeiten</strong>. <strong>Dazu gehören:</strong>'
      },
      {
        type: 'bullets' as const,
        items: [
          'Analyse',
          'Technische Planung',
          'Koordination',
          'Umsetzungsbegleitung',
          'Testing',
          'Go-live und Hypercare',
          'Stabilisierung'
        ]
      },
      {
        type: 'paragraph' as const,
        html: 'Wir helfen Ihnen dabei, <strong>technische Risiken frühzeitig zu identifizieren</strong> und die <strong>Migration effizient und strukturiert umzusetzen</strong>.'
      }
    ]
  },
  {
    question: 'Wie lange dauert eine S/4HANA-Migration?',
    content: [
      {
        type: 'paragraph' as const,
        html: 'Wie lange eine Migration dauert, <strong>hängt von einer Vielzahl von Faktoren ab</strong>. Darunter fallen beispielsweise die <strong>Systemlandschaft, die Komplexität der Migrationsaufgaben, externe Schnittstellen und die vorhandenen internen Ressourcen</strong>. Wir teilen gerne unsere Einschätzung mit Ihnen nach einer technischen Bestandsaufnahme.'
      }
    ]
  },
  {
    question: 'Kann eine S/4HANA-Migration auch mit kleiner interner IT-Abteilung gelingen?',
    content: [
      {
        type: 'paragraph' as const,
        html: 'Ja. <strong>Hat Ihre Firma knappe interne Ressourcen, ist es besonders wichtig, für eine strukturierte technische Begleitung zu sorgen</strong>. Eine <strong>SAP-Migration gelingt</strong>, wenn <strong>Rollen und Verantwortlichkeiten geklärt sind</strong> und eine <strong>externe Unterstützung frühzeitig miteinbezogen wird</strong>.'
      }
    ]
  },
  {
    question: 'Welche Risiken gibt es beim Go-live?',
    content: [
      {
        type: 'paragraph' as const,
        html: '<strong>Beim Go-live zeigt sich, wie erfolgreich die Migration war. Typische Risiken sind hier beispielsweise:</strong>'
      },
      {
        type: 'bullets' as const,
        items: [
          'Übersehene Abhängigkeiten',
          'Unvollständige Tests',
          'Probleme in der Performance',
          'Unerwartete Fehler in Schnittstellen'
        ]
      },
      {
        type: 'paragraph' as const,
        html: 'Auch fehlende <strong>Zuständigkeiten und Berechtigungen können sich hier negativ auswirken</strong>. Deswegen ist es umso wichtiger, eine <strong>technische SAP-Beratung miteinzubeziehen</strong>. So <strong>halten Sie die Risiken beim Go-live so gering wie möglich</strong>.'
      }
    ]
  },
  {
    question: 'Was passiert nach dem Go-live?',
    content: [
      {
        type: 'paragraph' as const,
        html: 'War das Go-live erfolgreich, geht es jetzt darum, die <strong>langfristige Funktionalität Ihres Systems zu gewährleisten</strong>. Hier führen wir für Sie eine <strong>Stabilisierung des Systems, ein Monitoring und eine eventuelle Behebung noch bestehender Fehler</strong> durch. Nach dem Go-live stehen wir Ihnen mit <strong>Support zur Seite, um den laufenden Betrieb abzusichern</strong>.'
      }
    ]
  },
  {
    question: 'Ist technische SAP-Beratung sinnvoll, wenn keine Modulberatung benötigt wird?',
    content: [
      {
        type: 'paragraph' as const,
        html: 'Ja. Eine <strong>technische Beratung durch eine IT-Consulting-Firma ist für viele Unternehmen sinnvoll</strong>. Das ist insbesondere der Fall, wenn es um <strong>Architektur, Systemlandschaft, den nahtlosen Betrieb und Schnittstellen</strong> geht. Wir können Ihnen hier mit den <strong>Erfahrungswerten aus unserer langjährigen Tätigkeit</strong> zur Seite stehen.'
      }
    ]
  },
  {
    question: 'Ist eine Betreuung auch außerhalb von Hamburg möglich?',
    content: [
      {
        type: 'paragraph' as const,
        html: 'Auf jeden Fall! Wir können <strong>Projekte in Hamburg und Umgebung ebenso wie überregional begleiten.</strong> Wo dies sinnvoll ist, sind wir auch bereit, europa- und weltweit zu agieren. Bevorzugt arbeiten wir remote.'
      }
    ]
  }
]
</script>

<template>
  <div>
    <ServiceLead
      eyebrow="SAP Basis"
      title="S/4HANA-Migration in Hamburg: Technisch sauber planen – Risiken vermeiden – Betrieb sichern"
      :paragraphs="[
        '<strong>Spätestens 2027 endet der Support für SAP ERP (ECC). Für viele mittelständische Unternehmen bedeutet das: Eine Migration auf S/4HANA ist unvermeidlich – aber technisch deutlich komplexer als oft angenommen. Es handelt sich dabei um eine komplexe Aufgabe für Systemarchitektur, Schnittstellen, Berechtigungen und Tests</strong>. In mittelständischen Betrieben kann das <strong>schnell die Kapazitäten übersteigen, je nachdem welche Ressourcen Sie intern zur Verfügung haben</strong>.',
        'Deshalb <strong>begleiten wir Sie als IT-Consulting-Firma Unternehmen in Hamburg und Umgebung bei diesem Wechsel.</strong> Wir gehen <strong>strukturiert und pragmatisch</strong> und managen die <strong>technischen und strukturellen Herausforderungen einer S/4HANA-Migration</strong> für Sie. Dabei haben wir <strong>stets den stabilen Betrieb Ihrer IT-Systeme im Blick</strong>.',
        '<strong>Holen Sie sich jetzt erfahrene Unterstützung</strong> <strong>für die S/4HANA-Migration in Hamburg</strong> und Umgebung.'
      ]"
      cta-label="Jetzt kontaktieren!"
      cta-href="/contact"
      :image-src="sapImage"
      image-alt="SAP Basis Migration"
    />

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-center">
          <div class="max-w-3xl">
            <h2 class="font-semibold">Warum eine S/4HANA-Migration in Hamburg und Umgebung technisch anspruchsvoll ist</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p><strong>Eine Migration auf S/4HANA ist ein vollständiges Systemupdate</strong>. Es handelt sich dabei um einen <strong>Eingriff in laufende Prozesse</strong>. Dabei kann es zu einer <strong>Vielzahl von Fehlern kommen, die verzögerte oder gescheiterte Migrationen verursachen</strong>:</p>
              <ul class="list-disc space-y-2 pl-5">
                <li>Schnittstellenfehler nach dem Go-live können Lieferketten blockieren</li>
                <li>Fehlende Berechtigungen legen ganze Abteilungen lahm</li>
                <li>Unvollständige Tests zeigen sich nicht im Testsystem, sondern am ersten produktiven Tag</li>
              </ul>
              <p>Wenn Sie ein gewachsenes IT-System migrieren, gibt es Stolpersteine. Sie müssen die <strong>technischen Herausforderungen erfüllen</strong> und Ihr <strong>System auf die neue Plattform übertragen</strong>. Hier gibt es in der Regel <strong>komplexe Abhängigkeiten zwischen Ihren IT-Systemen, Ihrer Infrastruktur und Ihrem Betrieb</strong>. Eine S/4HANA-Migration ist zudem ein <strong>anspruchsvoller Prozess, der oftmals viele Stakeholder einbindet</strong>. Zeitliche Abhängigkeiten in diesem Kontext können ebenso zu Problemen führen wie Schnittstellen zu Drittsystemen. <strong>Häufig führen fehlendes Wissen und Dokumentation zu unerwarteten Fehlern.</strong></p>
            </div>
          </div>
          <img :src="sapImage" alt="SAP Basis Architektur" class="h-[300px] w-full rounded-[1.75rem] object-cover md:h-[420px]" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <h2 class="font-semibold">Unterstützung für Ihre S/4HANA-Migration: Ideal bei knappen Ressourcen</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p>Für viele Unternehmen ist die <strong>Knappheit interner Ressourcen</strong> eine <strong>Herausforderung in diesem Prozess</strong>. Die technische Migration <strong>erfordert zusätzlich einen hohen Abstimmungsbedarf</strong>, was <strong>ebenfalls interne Kräfte bindet.</strong> So entsteht <strong>insgesamt ein anspruchsvolles Umfeld für eine SAP-Migration für Unternehmen</strong>.</p>
            <p>Externe <strong>Unterstützung durch eine technische SAP-Beratung in Hamburg und Umgebung</strong> entlastet Ihr Team und sorgt für einen <strong>reibungslosen Ablauf der S/4HANA-Umstellung</strong>.</p>
          </div>
          <div class="mt-8">
            <UiButton href="/contact" label="Jetzt kontaktieren!" />
          </div>
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <img :src="sapImage" alt="SAP Beratung" class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[440px]" loading="lazy" />
          <div class="max-w-3xl">
            <h2 class="font-semibold">Ihre IT-Consulting-Firma für S/4HANA-Migration in Hamburg und Umgebung</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p>Wir sind erfahrene IT-Consultants kommen aus der technischen Basis wie Systemarchitektur, Schnittstellen, Infrastruktur und Betrieb. Als <strong>S/4HANA-Migrations-Dienstleister betrachten wir Ihre Migration vor diesem Hintergrund.</strong> Das bedeutet: <strong>Wir sehen die Abhängigkeiten, die in einem klassischen Migrationsprojekt erst nach dem Go-live auffallen</strong>. <strong>Dazu kennen wir die Fragen, die Ihr internes Team nachts wach halten,</strong> weil wir sie uns selbst schon gestellt haben.</p>
              <p>Wir analysieren bestehende SAP-Systemlandschaften eingehend. Darauf aufbauend <strong>erstellen wir eine für Ihren Betrieb passende Migrationsstrategie</strong>. Sie können auf uns zählen, wenn es um die <strong>Planung, Umsetzung und Koordination Ihrer S/4HANA-Migration</strong> geht. Dank unserer <strong>Erfahrung in der SAP-Systemmigration</strong> erkennen wir Herausforderungen frühzeitig.</p>
              <p>Darüber hinaus können Sie sich auf unsere <strong>Unterstützung während des ganzen Migrationsprozesses</strong> verlassen. Wir begleiten Testphasen und das Go-live inklusive Hypercare unmittelbar danach. So erhalten Sie <strong>alle Dienstleistungen für die SAP-Migration aus einer Hand</strong>.</p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" label="Jetzt kontaktieren!" />
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <h2 class="font-semibold">Für welche Unternehmen in Hamburg und Umgebung ist eine S/4HANA-Migration besonders relevant?</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p><strong>Diese Seite ist für Sie relevant, wenn:</strong></p>
            <ul class="list-disc space-y-2 pl-5">
              <li>Ihr IT-Team die Migration nebenbei stemmen soll – neben dem laufenden Betrieb.</li>
              <li>Sie Schnittstellen zu Drittsystemen haben, die niemand vollständig dokumentiert hat.</li>
              <li>Sie SAP seit Jahren nutzen und wissen, dass da Altlasten schlummern, die Sie bei der Migration einholen werden.</li>
              <li>Sie nicht unvorbereitet auf 2027 treffen wollen.</li>
            </ul>
            <p>Greifen Sie auf technisches Outsourcing zurück, <strong>schonen Sie firmeneigene Ressourcen</strong>. Ihre <strong>IT-Abteilung kann sich auf Ihre Aufgaben konzentrieren</strong>, während <strong>wir die Migration für Sie durchführen</strong>. Dadurch <strong>läuft Ihr Betrieb wie gewohnt weiter</strong>.</p>
          </div>
          <div class="mt-8">
            <UiButton href="/contact" label="Jetzt kontaktieren!" />
          </div>
        </div>
      </LayoutContainer>
    </section>

    <ProcessSteps
      title="So läuft eine S/4HANA-Migration mit uns in Hamburg und Umgebung ab"
      intro="Eine <strong>S/4HANA-Migration besteht in der Regel aus diesen Schritten</strong>:"
      :steps="processSteps"
      cta-label="Jetzt kontaktieren!"
      cta-href="/contact"
    />

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <h2 class="font-semibold">Typische Herausforderungen bei der S/4HANA-Migration</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p>Erfahrungsgemäß wartet eine S/4HANA-Migration mit einigen typischen Herausforderungen auf. Hier ist die <strong>Zusammenarbeit mit einer erfahrenen Firma für IT-Consulting für SAP in Hamburg hilfreich</strong>.</p>
            <p><strong>Typische Problemlagen bei der Migration sind beispielsweise:</strong></p>
            <ul class="list-disc space-y-2 pl-5">
              <li><strong>Unübersichtliche Bestandslandschaften –</strong> führen zu fehlender Transparenz</li>
              <li><strong>Technische Abhängigkeiten –</strong> werden deutlich unterschätzt</li>
              <li><strong>Ressourcen-Engpässe –</strong> sorgen für Verzögerungen</li>
              <li><strong>Hoher Zeitdruck –</strong> riskiert höhere Fehlerquoten</li>
              <li><strong>Risiken im Go-live –</strong> bedingen Unterbrechungen in Ihren Abläufen</li>
              <li><strong>Unklare Verantwortungen –</strong> interne IT und externe Partner arbeiten ohne klare Koordination</li>
            </ul>
            <p><strong>Die meisten der aufgelisteten Probleme sind vermeidbar, wenn sie vor der Migration identifiziert werden.</strong> Deshalb <strong>beginnen wir jedes Projekt mit einer ehrlichen technischen Bestandsaufnahme</strong> (die auch unsere Kunden betrifft). Dies mag bedeuten, dass wir unangenehme Wahrheiten ansprechen. Allerdings <strong>macht sich dies auf die lange Frist für Sie und Ihr Migrationsprojekt bezahlt</strong>. Arbeiten Sie hier mit einer <strong>erfahrenen IT-Beratungsfirma</strong> zusammen, <strong>können Sie dem Go-Live-Tag ruhig entgegensehen</strong>.</p>
          </div>
          <div class="mt-8">
            <UiButton href="/contact" label="Jetzt kontaktieren!" />
          </div>
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.85fr)] lg:items-center">
          <div class="max-w-4xl">
            <h2 class="font-semibold">Was Unternehmen in Hamburg und Umgebung von einer technischen S/4HANA-Beratung erwarten sollten</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p><strong>Wenn Sie Ihre IT-Systeme migrieren, benötigen Sie dafür einen verlässlichen Partner</strong>. Um einen <strong>guten Anbieter zu finden</strong>, sollten Sie <strong>auf folgende Signale achten:</strong></p>
              <ul class="list-disc space-y-2 pl-5">
                <li>Statistische Einschätzung Ihres IT-Bedarfs statt Schönfärberei</li>
                <li>Technische Tiefe und gleichzeitig strukturierte Planung</li>
                <li>Klare Definition von Rollen und Verantwortlichkeiten</li>
                <li>Belastbare Begleitung bei der Umsetzung der Migration</li>
                <li>Fokus auf stabilen Betrieb nach dem Go-live</li>
              </ul>
              <p>Kontaktieren Sie uns jetzt und <strong>buchen Sie ein erfahrenes IT-Beratungsunternehmen für Ihre SAP-Migration.</strong></p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" label="Jetzt kontaktieren!" />
            </div>
          </div>
          <img :src="sapImage" alt="Beratung zur S/4HANA-Migration" class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[420px]" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <img :src="sapImage" alt="Regionaler Ansprechpartner SAP" class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[420px]" loading="lazy" />
          <div class="max-w-3xl">
            <h2 class="font-semibold">S/4HANA-Migration in Hamburg und Umgebung mit regionalem Ansprechpartner und technischer Tiefe</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p>Es gibt viele gute IT-Unternehmen in Deutschland. Für <strong>Betriebe in Hamburg oder Umgebung zahlt sich eine Kooperation mit einem regionalen Partner aus.</strong></p>
              <p><strong>Arbeiten Sie mit uns, bieten sich Ihnen viele Vorteile, wie zum Beispiel:</strong></p>
              <ul class="list-disc space-y-2 pl-5">
                <li>Kurze Kommunikationswege</li>
                <li>Pragmatische Kooperation</li>
                <li>Remote und überregional einsetzbar</li>
              </ul>
              <p>Haben Sie ein <strong>Unternehmen an mehreren Standorten</strong>, können wir Sie hier <strong>ebenfalls unterstützen</strong>. Dank unseres <strong>überregionalen Fokus</strong> arbeiten wir mit Ihnen <strong>in Hamburg und Umgebung</strong> zusammen – <strong>bei Bedarf auch darüber hinaus</strong>.</p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" label="Jetzt kontaktieren!" />
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <LayoutContainer as="section" topMargin bottomMargin>
      <div class="overflow-hidden rounded-[2rem] bg-primary px-6 py-8 text-white shadow-lg shadow-primary/10 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center">
          <div class="max-w-4xl">
            <h2 class="font-semibold text-white">Jetzt S/4HANA-Migration in Hamburg und Umgebung technisch bewerten lassen</h2>
            <div class="mt-6 space-y-4 leading-relaxed text-white/90 [&_strong]:font-semibold [&_strong]:text-white">
              <p>Als <strong>IT-Beratung für Mittelständler</strong> sind wir darauf ausgelegt, mit den besonderen <strong>Herausforderungen dieses Unternehmenstypus umzugehen</strong>. In einer Zusammenarbeit mit uns erhalten Sie einen <strong>kompetenten, zuverlässigen Ansprechpartner für Ihre SAP S/4HANA Migration in Hamburg</strong>.</p>
              <p>Wir <strong>gehen sorgfältig und strategisch vor</strong> und <strong>begleiten die Umstellung Ihrer SAP-Systeme von der Planung bis über das Go-live hinaus</strong>. So haben Sie <strong>zu jeder Zeit kompetente Unterstützung, ohne Ihre internen IT-Spezialisten zu belasten</strong>. Ihr <strong>regulärer Betrieb geht wie gewohnt weiter</strong>.</p>
              <h3 class="pt-2 font-semibold text-white">So läuft ein Erstgespräch mit uns ab</h3>
              <p><strong>Wenn Sie mit uns in Kontakt treten, ist der erste Schritt ein gemeinsames Erstgespräch. Dabei klären wir Fragen wie:</strong></p>
              <ul class="list-disc space-y-2 pl-5">
                <li>Wie ist Ihre SAP-Landschaft aufgebaut?</li>
                <li>Welche Schnittstellen existieren?</li>
                <li>Was wurde intern bereits bewertet?</li>
              </ul>
              <p>Darauf aufbauend können wir Ihnen mitteilen, <strong>welche Informationen wir für eine fundierte technische Bestandsaufnahme benötigen und was danach realistisch möglich ist</strong>. So erhalten Sie von uns eine ehrliche und fundierte Einschätzung für Ihr Migrationsprojekt.</p>
              <p>Fragen Sie jetzt unsere <strong>Leistungen zu einer S/4HANA-Migration-Beratung</strong> oder <strong>SAP-Basis-Beratung in Hamburg</strong> an.</p>
            </div>
            <div class="mt-8">
              <UiButton href="/contact" label="Jetzt für Erstgespräch kontaktieren!" class="!border-white !text-primary hover:!bg-white/90" />
            </div>
          </div>
          <img :src="sapImage" alt="S/4HANA Erstgespräch" class="h-72 w-full rounded-[1.75rem] object-cover" loading="lazy" />
        </div>
      </div>
    </LayoutContainer>

    <FaqAccordion
      title="FAQ zur S/4HANA-Migration in Hamburg und Umgebung"
      :items="faqItems"
    />
  </div>
</template>
