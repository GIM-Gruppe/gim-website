<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(
  'IT-Abteilung outsourcen in Hamburg: Managed IT für den Mittelstand',
  'Outsourcing für Ihre IT: ✅ teilweise oder komplett ✅ Persönlicher Ansprechpartner, klare Kommunikation ► Hier mehr erfahren!'
)

/*
Alter Script-Stand – bewusst auskommentiert und nicht gelöscht:

definePageMeta({ documentDriven: { page: false, surround: false, }, });

useSeoMeta(
  'GIM Website - Managed Services',
  'Entdecken Sie die Managed Services der GIM GmbH. Wir bieten umfassende IT-Wartung, Support und Management für Unternehmen, um einen reibungslosen Betrieb zu gewährleisten.'
)

const { data, pending, error } = await useAsyncData('managedservices', async () => {
  const doc = await queryCollection('content').path('/services/content').first()
  return doc?.meta ?? null
})
*/

const heroImage = '/assets/img/workplace-8793724_1920.jpg'
const challengeImage = '/assets/img/typing.jpg'
const targetImage = '/assets/img/startup (2).jpg'
const criteriaImage = '/assets/img/fiber.jpg'

const challenges = [
  '<strong>Fachkräftemangel:</strong> 85% der Unternehmen in Deutschland bemängeln einen Personalmangel in der IT. Für Betriebe entstehen hierdurch Umsatzeinbußen und Störungen im Betriebsalltag.',
  '<strong>Interne Überlastung:</strong> Wenn Ihr IT-Team vom Tagesgeschäft voll ausgelastet ist, bleibt wenig Raum für strategische IT-Planung. Ein externer Dienstleister kann Ihre interne IT gezielt unterstützen, damit wieder Raum für Strategie entsteht und Ihr Team sich auf das Wesentliche konzentrieren kann.',
  '<strong>Fehlendes Spezialwissen:</strong> Die IT-spezialisiert sich. Auch bei gut qualifizierten internen Kräften ist es schwierig, Zugang zum notwendigen IT-Wissen zu haben. IT-Security, SAP-Basis oder SAP-Cloud-Migrationen erfordern tiefe Expertise und praktische Erfahrung, um diese Aufgaben effektiv und störungsfrei zu erledigen. Ein externer Partner kann Sie hier gezielt unterstützen.'
]

const services = [
  '<strong>SAP-Basis Consulting:</strong> Optimierung und Betrieb Ihrer SAP-Systeme, die besonders hilfreich sind, falls Sie keine SAP-Experten in Ihrem Unternehmen haben.',
  '<strong>Helpdesk und Support im laufenden IT-Betrieb:</strong> Unterstützung bei Ausfällen und kurzfristigen Herausforderungen, um einen stabilen Betrieb der Systeme zu garantieren. Hilft Ihnen dabei, Umsatzeinbußen durch technische Probleme zu vermeiden.',
  '<strong>Server- und Backup-Management:</strong> Durch regelmäßige Backups und Wiederherstellungstests können Sie sichergehen, dass Inhalte zugänglich bleiben. Im Ernstfall hilft Ihnen ein IT-Service mit Disaster Recovery dabei, wichtige Firmendaten wiederherzustellen.',
  '<strong>Desktop-Management (z.B. Microsoft 365):</strong> Ihre Mitarbeiter bemerken hier die Arbeit eines IT-Teams besonders stark. Desktop-Anwendungen werden eingerichtet und betreut, sodass die IT für die alltäglichen Aufgaben effizient funktioniert.',
  '<strong>Arbeitsplätze und Benutzerverwaltung:</strong> Ein IT-Team übernimmt On- und Offboarding von Mitarbeitern, verteilt Zugriffsrechte, weist Geräte zu und kümmert sich um Password Policies.',
  '<strong>Security, Firewalls und Antivirus-Management:</strong> Dank proaktivem Erkennen von Bedrohungen laufen Ihre IT-Systeme sicher und Ihr Betrieb ist vor Cyberangriffen geschützt. Dieser Service beinhaltet beispielsweise Bedrohungserkennung, Firewall-Konfigurationen und das Erstellen von Sicherheitsrichtlinien.',
  '<strong>Patch- und Update-Management:</strong> Regelmäßige Updates von Betriebssystemen und Software halten Ihre IT auf dem neuesten Stand. Im Fall von Updates sorgt dies auch dafür, dass es nur zu minimalen Betriebsunterbrechungen kommt – eine deutliche Erleichterung für Ihr Team.'
]

const managedModels = [
  'Ergänzung des bestehenden Teams',
  'Entlastung interner Administratoren',
  'Spezielles Know-how auf Abruf',
  'Unser Team als komplette externe IT-Abteilung'
]

const targetGroups = [
  '<strong>Mittelständler und KMUs mit einer kleinen IT oder die Ihr IT-Team in Hamburg auslagern wollen:</strong> Wenn Sie Kosten sparen wollen oder aufgrund Fachkräftemangel nicht genügend Mitarbeiter finden können',
  '<strong>Wachsende Unternehmen mit Engpässen:</strong> Für Firmen, die Ihre IT zügig skalieren wollen und schnell effektive fachliche Unterstützung benötigen',
  '<strong>Firmen mit mehreren Standorten:</strong> IT-Dienstleister unterstützen Sie dabei, Ihre IT wie Server, Clouds und Systeme zwischen den Standorten zu harmonisieren (besonders hilfreich, wenn Sie ein anderes Unternehmen aufgekauft haben)',
  '<strong>Unternehmen mit erhöhten Sicherheitsanforderungen:</strong> Erhalten Sie Zugang zu spezialisiertem Security-Know-how, das Sie intern nicht haben',
  '<strong>Betriebe, die ihre IT professioneller aufstellen wollen:</strong> Nach Wachstumsprozessen oder im Zuge der Digitalisierung kann ein externer Dienstleister Ihre IT professionell und skalierbar einrichten',
  '<strong>Startups:</strong> Für Firmen, die sich Entlastung wünschen, damit sie sich auf ihr Kerngeschäft konzentrieren können'
]

const processSteps = [
  { title: 'Erstgespräch und Bedarfsklärung', paragraphs: ['In einem Erstgespräch klären wir Ihre Bedürfnisse: Welche Herausforderungen gibt es in Ihrer Firma? Welche Hilfe wünschen Sie sich? Outsourcing ist technisch und persönlich: In diesem Treffen gehen wir auf Ihre Anliegen ein und klären den Stand Ihrer IT ebenso wie die Herausforderungen an Ihre Systeme.'] },
  { title: 'Analyse Ihrer bestehenden IT-Struktur', paragraphs: ['Eine eingehende Untersuchung Ihrer bestehenden IT-Landschaft ist Dreh- und Angelpunkt für unser IT-Outsourcing in Hamburg. Wir analysieren Lücken und Verbesserungspotenzial in Ihren IT-Systemen eingehend. So können wir tragfähige Konzepte entwickeln, die skalierbar sind und technische Herausforderungen vorwegnehmen. Wir planen so, dass wir Zwischenfälle verhindern, bevor sie entstehen können.'] },
  { title: 'Definition von Zuständigkeiten und Leistungsumfang', paragraphs: ['Gutes IT-Outsourcing benötigt Strukturen. Wir definieren Ansprechpartner, Leistungsumfang und Zuständigkeiten genau. So erhalten Sie planbare IT-Kosten und eine klare Aufgabentrennung zwischen interner und externer IT. Das ist insbesondere dort wichtig, wo wir ergänzend zu bestehenden Teams eingesetzt werden. Buchen Sie uns als Ihre externe IT-Abteilung ist eine Definition des Leistungsumfangs besonders wichtig, um einen Scope Creep und Überraschungen bei der Abrechnung zu verhindern.'] },
  { title: 'Geordnetes Onboarding und Übergabe', paragraphs: ['Zu unserer Arbeit gehört eine planvolle Zusammenarbeit mit geordnetem Onboarding und Übergaben in Ihrem Unternehmen. Ein strukturierter Übergang erleichtert Ihrem IT-Team und Ihren Mitarbeitern die Arbeit mit den IT-Systemen. Hinzu kommt eine detaillierte Dokumentation, damit Ihr IT-Team unsere Arbeiten jederzeit nachvollziehen kann.'] },
  { title: 'Laufende Betreuung mit festen Ansprechpartnern', paragraphs: ['Auf Wunsch unterstützen wir Sie auch langfristig. Wir agieren als Ihr dauerhafter IT-Partner für eine laufende Betreuung. Mit regelmäßigen, monatlichen IT-Berichten halten wir Sie über den Zustand Ihrer Systeme am Laufen. Wir informieren Sie in verständlicher Sprache, ohne Fachjargon.'] }
]

const benefits = [
  'Klare Zuständigkeiten',
  'Weniger personelle Abhängigkeiten von internen Schlüsselpersonen in der IT',
  'Schnellere Reaktion durch klar definierte Ansprechpartner',
  'Mehr Stabilität und Sicherheit'
]

const criteria = [
  '<strong>Transparente Prozesse:</strong> Ist die Arbeit Ihres Dienstleisters nachvollziehbar? Sind deren Prozesse, z.B. bei Eskalationen, klar definiert?',
  '<strong>Saubere Dokumentation:</strong> Je besser der Outsourcing-Partner deren Arbeit dokumentiert, desto besser sind Ihre Einblicke und desto einfacher können die Prozesse nach Ende einer Zusammenarbeit genutzt werden.',
  '<strong>Definierte Reaktionswege:</strong> Wenn es Zwischenfälle gibt, sollte geklärt sein, wer wie schnell welche Aufgaben übernimmt. Das schützt vor Ausfällen und Umsatzeinbußen.',
  '<strong>Passende Abgrenzung von Leistungen:</strong> Was inklusive ist und was nicht, sollte aus den Unterlagen hervorgehen. So ist für alle Seiten der Umfang der Arbeiten klar. Die Aufgaben des externen Teams sind von denen Ihrer internen IT-Kräften sauber getrennt.',
  '<strong>Persönliche, klare Kommunikation:</strong> Das ist vor allem wichtig, wenn es um fachliche Themen geht, die in Ihrem Betrieb nicht besetzt sind. Die Arbeit eines externen IT-Dienstleisters sollte immer so kommuniziert werden, dass Sie sie nachvollziehen können.',
  '<strong>Transparente Abrechnung:</strong> Mit Festpreisen oder Pauschalmodellen haben Sie die Kontrolle über Kosten und den Umfang der Zusammenarbeit. So vermeiden Sie Überraschungen bei der Rechnungsstellung am Monatsende.'
]

const finalOptions = [
  'Spezielle Aufgaben an uns abgeben',
  'Ihr IT-Team personell und fachlich unterstützen',
  'Unterstützung in akuten Wachstumsprozessen erhalten'
]

const faqItems = [
  {
    question: 'Was bedeutet es, eine IT-Abteilung auszulagern?',
    content: [
      { type: 'paragraph' as const, html: 'Eine IT-Abteilung auszulagern bedeutet, dass <strong>Aufgaben Ihrer internen IT ganz oder teilweise von einem externen Dienstleister übernommen werden. Dazu gehören zum Beispiel: </strong>' },
      { type: 'bullets' as const, items: ['Support', 'Helpdesk', 'Monitoring', 'Sicherheit', 'Microsoft 365', 'Server'] },
      { type: 'paragraph' as const, html: 'Externe Spezialisten für IT<strong> liefern Unterstützung im laufenden Betrieb.</strong>' }
    ]
  },
  {
    question: 'Für welche Unternehmen ist IT-Outsourcing sinnvoll?',
    content: [
      { type: 'paragraph' as const, html: '<strong>Ein Outsourcing der IT lohnt sich für Unternehmen vor allem in diesen Fällen: </strong>' },
      { type: 'bullets' as const, items: ['Kleinere Unternehmen oder Mittelständler ohne eigene IT-Abteilung oder deren IT-Team (zu) klein ist', 'Wachsende Komplexität Ihrer IT', 'Bedarf an verlässlicher externer Unterstützung', 'Fachkräftemangel', 'Erhöhte Anforderungen an die Cybersecurity', 'Wachsende Unternehmen, die Unterstützung bei der IT-Skalierung benötigen'] },
      { type: 'paragraph' as const, html: 'Eine IT-Abteilung auszulagern heißt, sich <strong>genau das Maß an Unterstützung zu holen, das für Ihren Betrieb sinnvoll ist.</strong>' }
    ]
  },
  {
    question: 'Muss die komplette IT ausgelagert werden?',
    content: [{ type: 'paragraph' as const, html: 'Nein, das ist nicht notwendig. Neben der vollständigen Übernahme sind <strong>auch Modelle möglich, bei denen ein bestehendes internes IT-Team gezielt ergänzt und entlastet wird</strong> – als sogenannte Co-Managed IT.' }]
  },
  {
    question: 'Verliert ein Unternehmen beim IT-Outsourcing die Kontrolle?',
    content: [{ type: 'paragraph' as const, html: 'Nein, ein <strong>Unternehmen verliert beim IT-Outsourcing nicht die Kontrolle</strong>. Allerdings geben Sie ein Stück weit den Einfluss auf Ihre technischen Prozesse ab. Wenn <strong>Zuständigkeiten, Prozesse und Ansprechpartner sauber definiert</strong> sind, entsteht hier allerdings eine effektive Zusammenarbeit. <strong>Gute IT-Outsourcing-Modelle schaffen dank guter Abstimmung mehr Klarheit statt weniger.</strong><strong> Service-Level-Agreements und gut geregelte Zuständigkeiten </strong>sorgen dafür, dass das Outsourcing von Anfang an gut organisiert ist. <strong>Detailliertes Reporting </strong>gibt Ihnen dazu <strong>regelmäßig Einsichten in unsere Arbeit.</strong>' }]
  },
  {
    question: 'Welche Leistungen kann eine externe IT-Abteilung übernehmen?',
    content: [
      { type: 'paragraph' as const, html: 'Das hängt vom Bedarf in Ihrer Firma ab. <strong>Typische Leistungen sind unter anderem: </strong>' },
      { type: 'bullets' as const, items: ['Helpdesk und Support', 'Monitoring', 'Patch-Management', 'Security', 'Cloud- und Microsoft-365-Betreuung', 'Serververwaltung', 'Backup und laufender IT-Betrieb'] },
      { type: 'paragraph' as const, html: 'Dazu bieten wir auch spezialisierte SAP-Basis-Dienstleistungen an und Projektunterstützung wie z.B. eine S/4HANA-Migration.' }
    ]
  },
  {
    question: 'Wie läuft die Übernahme der IT ab?',
    content: [
      { type: 'paragraph' as const, html: '<strong>Die IT-Übernahme folgt in der Regel diesem Prozess: </strong>' },
      { type: 'bullets' as const, items: ['1. <strong>Analyse der bestehenden IT.</strong> Dazu kann z.B. auch gehören, dass wir den typischen Alltag und Prozesse in Ihrem Unternehmen begutachten.', '2. <strong>Dokumentation</strong> z.B. von Lücken und dem IT-Bedarf in Ihrem Unternehmen sowie eine Definition des Leistungsumfangs', '3. <strong>Strukturiertes Onboarding </strong>', '4. <strong>Laufende Betreuung </strong>während der Übernahme Ihrer IT', '5. <strong>Regelmäßige Reviews</strong> unserer Übernahmeprozesse für optimale Leistung'] },
      { type: 'paragraph' as const, html: 'Bitte beachten Sie, dass zur Übernahme Ihrer IT auch ein SLA (Service-Level-Agreement) gehört.' }
    ]
  },
  {
    question: 'Welche Vorteile hat IT-Outsourcing für Unternehmen?',
    content: [
      { type: 'paragraph' as const, html: '<strong>Für Firmen bringt das IT-Outsourcing folgende Vorteile:</strong>' },
      { type: 'bullets' as const, items: ['Zugriff auf breiteres und spezialisiertes Know-how', 'Weniger personelle Abhängigkeit', 'Stabile Abläufe', 'Mehr Zeit für das eigentliche Kerngeschäft', 'Skalierbarkeit der IT-Betreuung'] },
      { type: 'paragraph' as const, html: 'Insbesondere in Zeiten von IT-Fachkräftemangel verschafft Ihnen IT-Outsourcing Zugang zum für Ihren Betrieb notwendigen IT-Know-how. Das Institut der deutschen Wirtschaft prognostiziert einen Fachkräftemangel von über 133.000 Personen in Digitalisierungsberufen. Arbeiten Sie mit uns, umgehen Sie dies und können strategisch wichtige Projekte durchführen – auch mit kleiner oder ohne interner IT-Abteilung.' },
      { type: 'paragraph' as const, html: '<strong>Sie erhalten planbare Betreuung und Support in technischen Fragen.</strong>' }
    ]
  },
  {
    question: 'Ist IT-Outsourcing nur für Unternehmen in Hamburg möglich?',
    content: [{ type: 'paragraph' as const, html: '<strong>Nein, unser IT-Outsourcing ist auch über Hamburg hinaus erhältlich.</strong> Wir arbeiten vorrangig remote und <strong>bieten unsere Dienstleistungen auch deutschland- und europaweit an</strong>. Auf Anfrage ist auch eine Zusammenarbeit darüber hinaus möglich. IT-Abteilung extern in Hamburg: Bei uns erhalten Sie Unterstützung!' }]
  },
  {
    question: 'Was kostet IT-Outsourcing für ein mittelständisches Unternehmen?',
    content: [
      { type: 'paragraph' as const, html: 'Eine pauschale Antwort wäre unseriös, die Kosten hängen vom <strong>Leistungsumfang, der Komplexität Ihrer IT und dem gewünschten Serviceniveau</strong> ab. Übliche Modelle reichen von einer monatlichen Pauschale pro Arbeitsplatz bis hin zu individuellen Vereinbarungen.' },
      { type: 'paragraph' as const, html: 'Statt schnell eine Zahl zu nennen, finden wir lieber die Lösung, die zu Ihnen passt: <strong>transparent kalkuliert, an Ihrem tatsächlichen Bedarf ausgerichtet und mitwachsend, ohne unnötige Komplexität</strong>. Sprechen Sie uns an, in einem unverbindlichen Gespräch erstellen wir Ihnen ein transparentes Angebot.' }
    ]
  },
  {
    question: 'Wie lange dauert das Onboarding bzw. die Übernahme der IT?',
    content: [
      { type: 'paragraph' as const, html: '<strong>Die Dauer für die Übernahme Ihrer IT hängt von mehreren Faktoren ab:</strong>' },
      { type: 'bullets' as const, items: ['Umfang der Übernahme', 'Aufwand für die Übernahme', 'Zustand der Dokumentation'] },
      { type: 'paragraph' as const, html: 'Ist der Aufwand überschaubar und sind Ihre Prozesse klar in Ihrer Dokumentation hinterlegt, können wir zügiger starten als bei lückenhaften Informationen. In der Regel können wir zeitnah nach unserem Erstgespräch loslegen.' }
    ]
  },
  {
    question: 'Welche IT-Aufgaben sollten nicht ausgelagert werden?',
    content: [{ type: 'paragraph' as const, html: 'Ein IT-Dienstleister kann viele IT-Aufgaben für Sie übernehmen und Ihnen auch beratend zur Seite stehen. Gleichzeitig sollten Sie strategische Entscheidungen zu Ihrer IT ebenso wie grundlegende Erwägungen zur Architektur weiterhin inhouse treffen. Auch Compliance und Datenschutz sollten intern bleiben, wobei Sie sich auch hier von einem externen Unternehmen beraten lassen können. Gehen Sie mit personenbezogenen Daten, geistigem Eigentum oder geschäftskritischen Informationen ebenfalls sorgfältig um.' }]
  }
]
</script>

<template>
  <!--
  Alter Seitenstand – bewusst auskommentiert und nicht gelöscht:

  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Failed to load content</div>
  <div v-else>
    <LayoutContainer>
      <WithProductScreenshotPanel
        :title="data?.services[1].title"
        :subtitle="data?.services[1].subtitle"
        :description="data?.services[1].description"
        :image="data?.services[1].image"
        :imagealt="data?.services[1].imagealt"
        :features="data?.services[1].subservice"
      />
    </LayoutContainer>
  </div>
  -->

  <div>
    <Breadcrumbs :items="[{ label: 'Leistungen', to: '/services' }, { label: 'Managed Services' }]" />

    <ServiceLead
      eyebrow="IT-Outsourcing und Managed IT"
      title="IT Abteilung outsourcen für Hamburger Unternehmen: persönlicher Ansprechpartner, transparente Prozesse, IT-Analyse vorab – unverbindlich und ohne Risiko"
      :paragraphs="[
        'Komplexe Technologie macht es schwierig, den Überblick zu behalten. <strong>IT-Outsourcing schafft Abhilfe: Dabei geben Unternehmen gezielt IT-Aufgaben an einen externen Dienstleister ab. Dieser übernimmt je nach Bedarf einzelne Bereiche wie die Sicherheit oder das Helpdesk oder die kompletten Aufgaben Ihrer IT-Abteilung. </strong>So entlasten Sie Ihr internes IT-Team, holen sich <strong>bei Fachkräftemangel Expertise</strong> ins Haus und haben <strong>klar kalkulierbare Kosten</strong>. Mit <strong>klaren Zuständigkeiten </strong>und einer<strong> zuverlässigen Betreuung</strong> entsteht der Rahmen, den Ihre Firma für eine erfolgreiche Entwicklung benötigt.',
        'Ob <strong>komplette Übernahme oder punktuelle Ergänzung Ihrer IT</strong>: Wir bieten Ihnen <strong>maßgeschneidert das Modell, das zu Ihrem Unternehmen passt – planbar und zuverlässig.</strong>',
        '<strong>Lassen Sie jetzt unverbindlich Ihre IT-Struktur von uns analysieren!</strong>'
      ]"
      cta-label="Jetzt bestehende IT-Struktur analysieren lassen!"
      cta-href="/contact"
      :image-src="heroImage"
      image-alt="Managed IT und IT-Outsourcing im Unternehmen"
    />

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Herausforderungen</p>
            <h2 class="mt-3 font-semibold">Warum Unternehmen ihre IT-Abteilung in Hamburg und Umgebung outsourcen</h2>
            <p class="mt-6 text-secondary leading-relaxed [&_strong]:font-semibold">Auch wenn Sie eine kompetente IT-Abteilung in Ihrem Betrieb haben, führen immer <strong>anspruchsvoller werdende IT-Landschaften</strong> dazu, dass Ihre <strong>Fachkräfte nicht alle Aufgaben abdecken können</strong>. <strong>Viele mittelständische Firmen sehen sich diesen Herausforderungen in der IT gegenüber:</strong></p>
            <div class="mt-8 space-y-5">
              <article v-for="item in challenges" :key="item" class="rounded-2xl bg-white p-5 shadow-sm">
                <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="item" />
              </article>
            </div>
            <div class="mt-8 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p>Um diesen Lücken und den gleichzeitig<strong> hohen Anforderungen an Sicherheit und Verfügbarkeit </strong>in der IT entgegenzutreten, <strong>lohnt sich das Outsourcing Ihrer IT-Abteilung</strong>. Ein <strong>spezialisiertes Team übernimmt dabei punktuell Aufgaben oder die komplette IT-Arbeit für Sie</strong>. Klar abgesteckte Aufgabenbereiche entlasten Ihr Team – bei planbaren Kosten.</p>
              <UiButton href="/contact" label="Jetzt zu Outsourcing beraten lassen!" />
            </div>
          </div>
          <LightboxImage :src="challengeImage" alt="IT-Team bei der Zusammenarbeit" img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[460px]" button-class="w-full rounded-[1.75rem] lg:sticky lg:top-24" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Leistungsüberblick</p>
          <h2 class="mt-3 font-semibold">Welche Leistungen wir übernehmen, wenn Sie Ihre IT-Abteilung in Hamburg und Umgebung outsourcen</h2>
          <p class="mt-6 text-secondary leading-relaxed [&_strong]:font-semibold">Wir bieten Ihnen eine <strong>komplette oder teilweise Übernahme Ihrer IT</strong>, angepasst an die Anforderungen in Ihrem Betrieb. <strong>Dafür können wir unter anderem die folgenden Tätigkeiten für Sie ausführen:</strong></p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2">
          <article v-for="item in services" :key="item" class="rounded-3xl border border-black/10 p-6">
            <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="item" />
          </article>
        </div>
        <div class="mt-10 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <p class="text-secondary leading-relaxed [&_strong]:font-semibold">Zu unserem Service gehört auch, dass Sie <strong>von Anfang an einen persönlichen Ansprechpartner in unserem Team haben: </strong>Haben Sie <strong>Fragen oder gibt es Zwischenfälle, wissen Sie immer, wen Sie kontaktieren können.</strong></p>
          <UiButton href="/contact" label="Jetzt unverbindlich IT-Outsourcing anfragen!" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-primary text-white">
      <LayoutContainer class="py-12 md:py-16">
        <div class="max-w-5xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Flexible Betreuungsmodelle</p>
          <h2 class="mt-3 font-semibold text-white">Komplette Übernahme oder Co-Managed IT in Hamburg und Umgebung</h2>
          <p class="mt-6 max-w-4xl leading-relaxed [&_strong]:font-semibold">Co-Managed IT bedeutet, dass ein externer Dienstleister Aufgaben in Ihrer IT übernimmt – ergänzend zu Ihrem bestehenden Team. Sie können Ihr IT-Outsourcing mit uns nach Ihren Wünschen gestalten. <strong>Von punktueller Aufgabenübernahme bis zur kompletten Managed IT oder einer externen IT-Abteilung in Hamburg ist alles möglich, z.B.:</strong></p>
          <ul class="mt-8 grid gap-4 sm:grid-cols-2">
            <li v-for="item in managedModels" :key="item" class="rounded-2xl border border-white/20 bg-white/10 px-5 py-4">{{ item }}</li>
          </ul>
          <p class="mt-8 font-semibold">Unsere Betreuungsmodelle sind flexibel und passen sich den Anforderungen in Ihrem Betrieb an!</p>
          <div class="mt-8"><UiButton href="/contact" label="Jetzt unverbindlich Erstgespräch anfragen!" style="outline" class="bg-white text-primary" /></div>
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <LightboxImage :src="targetImage" alt="Wachsendes Unternehmen mit externer IT-Unterstützung" img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[460px]" button-class="w-full rounded-[1.75rem] lg:sticky lg:top-24" loading="lazy" />
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Zielgruppen</p>
            <h2 class="mt-3 font-semibold">Für welche Unternehmen in Hamburg und Umgebung IT-Outsourcing besonders sinnvoll ist</h2>
            <p class="mt-6 text-secondary leading-relaxed [&_strong]:font-semibold">Als IT-Dienstleister für Unternehmen in Hamburg <strong>stehen wir Betrieben unterschiedlicher Größe und in unterschiedlichen Wachstumsphasen zur Verfügung, zum Beispiel:</strong></p>
            <div class="mt-8 space-y-4">
              <article v-for="item in targetGroups" :key="item" class="rounded-2xl bg-white p-5">
                <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="item" />
              </article>
            </div>
            <p class="mt-8 text-secondary leading-relaxed [&_strong]:font-semibold">Wir bieten Ihnen eine <strong>Entlastung interner Ressourcen, Professionalisierung Ihrer IT sowie eine technische Unterstützung bei Wachstumsphasen und für Migrationen.</strong></p>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl rounded-3xl border border-black/10 p-7 md:p-10">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Realistische Einordnung</p>
          <h2 class="mt-3 font-semibold">Wann das Outsourcing nicht sinnvoll ist</h2>
          <p class="mt-6 text-secondary leading-relaxed [&_strong]:font-semibold">Auch wenn IT-Outsourcing sehr effektiv ist, eignet es sich nicht für jedes Unternehmen. Wenn Sie <strong>hochspezialisierte Eigenentwicklungen haben</strong> oder <strong>strengen Anforderungen in Datenschutz oder Compliance unterliegen, sollten Sie genau prüfen,</strong> ob die Zusammenarbeit mit einem externen Dienstleister zulässig ist. Ist das der Fall, sind Sie mit einer <strong>Co-Managed IT</strong> besser beraten. So erhalten Sie <strong>gezielte Unterstützung, wo sie notwendig ist,</strong> und<strong> halten gleichzeitig die Anforderungen an Ihre Compliance ein</strong>.</p>
          <div class="mt-8"><UiButton href="/contact" label="Jetzt unverbindlich über Outsourcing sprechen!" /></div>
        </div>
      </LayoutContainer>
    </section>

    <ProcessSteps title="So läuft das Outsourcing Ihrer IT-Abteilung in Hamburg und Umgebung ab" :steps="processSteps" cta-label="Jetzt IT-Outsourcing unverbindlich anfragen!" cta-href="/contact" />

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Vorteile</p>
          <h2 class="mt-3 font-semibold">Welche Vorteile das Outsourcing Ihrer IT-Abteilung in Hamburg und Umgebung bietet</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p>Wenn Sie Ihre <strong>IT auslagern in Hamburg</strong>, bekommen Sie <strong>Zugang zu breitem Know-how und entlasten Ihre Fachabteilung</strong>. Benötigen Sie beispielsweise SAP-Basis-Support und haben dafür keine interne Kraft, können Sie sich mit uns SAP-Kenntnisse ins Haus holen. So treten Sie dem Fachkräftemangel in der IT entgegen, den laut Bitkom 85% der Unternehmen in Deutschland beklagen.<strong> Outsourcing erlaubt es Ihren Mitarbeitern, sich auf das Kerngeschäft im Betrieb zu konzentrieren, während IT-Dienstleister die technische Betreuung der Systeme übernehmen. </strong></p>
            <p><strong>Arbeiten Sie mit einem professionellen IT-Support-Unternehmen in Hamburg, können Sie folgende Leistungen zählen: </strong></p>
          </div>
        </div>
        <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="item in benefits" :key="item" class="rounded-2xl border border-black/10 p-5 text-secondary">{{ item }}</li>
        </ul>
        <div class="mt-8 space-y-5 text-secondary leading-relaxed [&_strong]:font-semibold">
          <p>Kommt es zu Problemen, können Sie <strong>mit schnellen Reaktionszeiten rechnen</strong>. Ihre IT-Themen sind bei uns in vertrauenswürdigen Händen.</p>
          <UiButton href="/contact" label="Jetzt IT-Outsourcing unverbindlich anfragen!" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Auswahlkriterien</p>
            <h2 class="mt-3 font-semibold">Was beim Outsourcing einer IT-Abteilung in Hamburg und Umgebung wichtig ist</h2>
            <p class="mt-6 text-secondary leading-relaxed [&_strong]:font-semibold">Wenn Sie eine IT-Abteilung outsourcen wollen in Hamburg und Umgebung, sollten Sie darauf achten, einen <strong>zuverlässigen und kompetenten Partner auszuwählen</strong>. Oft gibt es in der IT <strong>Informationsgefälle zwischen Anbietern und Unternehmen</strong>. <strong>Achten Sie auf diese Kriterien, um hochwertige Dienstleister zu finden:</strong></p>
            <div class="mt-8 grid gap-5 md:grid-cols-2">
              <article v-for="item in criteria" :key="item" class="rounded-3xl bg-white p-6 shadow-sm">
                <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="item" />
              </article>
            </div>
            <div class="mt-8 space-y-5 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p>Insbesondere <strong>Kommunikation ist beim Outsourcing wichtig:</strong> Sprechen die externen IT-Partner so mit Ihnen, dass Sie und Ihre IT deren Arbeit nachvollziehen können? Sind <strong>Leistungen und eine realistische Übergabe definiert?</strong> <strong>Gibt es einen Jour fixe,</strong> an dem Sie über den Stand der Arbeiten informiert werden? Wichtig sind hier auch<strong> definierte Ansprechpartner und Eskalationswege im Fall von Zwischenfällen</strong>. Klären Sie zudem auch, <strong>wie schnell die Reaktionszeiten Ihres IT-Dienstleisters sind.</strong></p>
              <UiButton href="/contact" label="Jetzt Erstgespräch für IT-Outsourcing anfragen!" />
            </div>
          </div>
          <LightboxImage :src="criteriaImage" alt="Abstimmung mit einem IT-Outsourcing-Partner" img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[460px]" button-class="w-full rounded-[1.75rem] lg:sticky lg:top-24" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-primary text-white">
      <LayoutContainer class="py-12 md:py-16">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div class="max-w-4xl">
            <h2 class="font-semibold text-white">Jetzt IT-Abteilung in Hamburg und Umgebung outsourcen oder gezielt entlasten</h2>
            <p class="mt-5 leading-relaxed [&_strong]:font-semibold">Ob teilweise oder komplett: <strong>Outsourcing von IT-Abteilungen in Hamburg lohnt sich für mittelständische Unternehmen und Firmen in Wachstumsprozessen</strong>. Sie können:</p>
            <ul class="mt-6 list-disc space-y-2 pl-5">
              <li v-for="item in finalOptions" :key="item">{{ item }}</li>
            </ul>
            <div class="mt-6 space-y-4 leading-relaxed [&_strong]:font-semibold">
              <p>Wir verstehen uns als <strong>Ihr Partner für IT-Fragen</strong>, unabhängig davon, ob Sie einen Prozess oder Ihre ganze IT auslagern in Hamburg oder darüber hinaus.</p>
              <p><strong>Kontaktieren Sie uns jetzt und fragen Sie unverbindlich IT-Unterstützung von uns nach. </strong></p>
            </div>
          </div>
          <UiButton href="/contact" label="Jetzt IT-Betreuung in Hamburg anfragen!" style="outline" class="bg-white text-primary" />
        </div>
      </LayoutContainer>
    </section>

    <FaqAccordion title="FAQ zum Outsourcing der IT-Abteilung in Hamburg und Umgebung" :items="faqItems" />

    <section class="bg-white">
      <LayoutContainer class="py-8 md:py-10">
        <div class="flex flex-wrap justify-center gap-4">
          <UiButton href="/contact" label="Jetzt unverbindlich über IT-Outsourcing sprechen!" />
        </div>
      </LayoutContainer>
    </section>
  </div>
</template>
