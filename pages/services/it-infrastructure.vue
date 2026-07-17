<script setup lang="ts">
import { useSeoMeta } from '~/composables/seo'

definePageMeta({ documentDriven: { page: false, surround: false } })

useSeoMeta(
  'IT-Infrastrukturmanagement in Hamburg: So klappt es!',
  '✅Proaktive IT-Unterstützung ✅Transparent, planbar, verlässlich ✅z.B. Monitoring, Backup, Servermanagement ► Hier mehr!'
)

/*
Alter Script-Stand – bewusst auskommentiert und nicht gelöscht:

definePageMeta({ documentDriven: { page: false, surround: false, }, });

useSeoMeta(
  'GIM Website - IT-Infrastruktur',
  'Erfahren Sie mehr über die IT-Infrastruktur der GIM GmbH. Wir bieten maßgeschneiderte IT-Lösungen und modernste Technologien zur Unterstützung Ihrer Unternehmensanforderungen.'
)

const { data, pending, error } = await useAsyncData('infra', async () => {
  const doc = await queryCollection('content').path('/services/content').first()
  return doc?.meta ?? null
})
// console.log(data);
*/

const heroImage = '/assets/img/processor.jpg'
const relevanceImage = '/assets/img/network.jpg'
const areasImage = '/assets/img/server.jpg'
const contactImage = '/assets/img/technology.jpg'

const infrastructureServices = [
  '<strong>Analyse der bestehenden Infrastruktur:</strong> Prüfung Ihrer vorhandenen Netzwerke, Cloud und Server, um Sicherheitsrisiken, Engpässe und Optimierungspotenziale zu identifizieren',
  '<strong>Planung und Optimierung: </strong>Modernisierung Ihrer Systeme und Verbesserung deren Performance, Konzeption neuer Lösungen für Ihre IT, Überprüfung von Verfügbarkeit und Kosten',
  '<strong>Betreuung von Netzwerk, Server, Cloud und WLAN: </strong>Einrichtung, Administration und Support von Cloud, Servern, Microsoft 365, Netzwerken und WLAN-Setups',
  '<strong>Backup und Restore/Wiederherstellbarkeit Ihrer Systeme: </strong>Automatische Datensicherungen, regelmäßige Überprüfung Ihrer Backups sowie schnelle Wiederherstellung von Systemen und Daten im Ernstfall',
  '<strong>Sicherheitsmaßnahmen wie Firewalls, VPNs und Antivirenprogramme:</strong> Verwaltung von Firewalls, VPN-Zugängen, E-Mail-Sicherheit und weiteren Maßnahmen zum Schutz vor digitalen Angriffen',
  '<strong>Monitoring, Wartung und laufende Betreuung Ihrer Systeme: </strong>Überwachung Ihrer Server, Netzwerke und Dienste, proaktive Behebung von Störfällen',
  '<strong>Dokumentation:</strong> Erstellen und Pflege einer umfassenden Dokumentation, inklusive z.B. Netzwerkplänen, Systemkonfigurationen und Betriebsprozessen',
  '<strong>Weiterentwicklung Ihrer Systeme: </strong>Skalierung Ihrer IT, Integration neuer Technologien, Anpassung Ihrer IT-Infrastruktur an sich entwickelnde Geschäftsanforderungen'
]

const targetGroups = [
  'Unternehmen mit mehreren Standorten, deren IT es zu harmonisieren gilt',
  'KMUs mit wachsender IT-Landschaft, die systematisiert werden muss',
  'Firmen mit Sicherheits- und Verfügbarkeitsanforderungen',
  'Betriebe mit Modernisierungsbedarf',
  'Unternehmenswachstum und Standorterweiterungen',
  'Cloud-Migrationen, z.B. S/4HANA-Migration',
  'Fachkräftemangel und personelle Engpässe',
  'Compliance-Anforderungen'
]

const processSteps = [
  { title: 'Analyse der bestehenden IT-Infrastruktur', paragraphs: ['Unsere Zusammenarbeit beginnt immer mit einem Gespräch und einer eingehenden Infrastruktur-Analyse: Welche Schwierigkeiten haben Sie? Wo sind Lücken in Ihren Systemen? Wo gibt es personelle Engpässe? Welche Prozesse existieren? So erhalten wir zwei Dinge: ein tiefes Verständnis für Ihre IT ebenso wie Ihre Wünsche und Bedürfnisse.'] },
  { title: 'Bewertung von Risiken, Engpässen und Abhängigkeiten', paragraphs: ['Nach unserer Analyse und dem Gespräch bewerten wir Risiken, Engpässe und Abhängigkeiten sowie deren Einfluss auf die Performance Ihrer technischen Systeme. Mit dieser Risikobewertung können wir passende Lösungen für mehr Sicherheit und die Minimierung von technischen Abhängigkeiten für Sie umsetzen.'] },
  { title: 'Konzeption einer stabilen und skalierbaren Zielstruktur', paragraphs: ['Nach Abschluss unserer Analyse erstellen wir ein Konzept für die Optimierung Ihrer Systemlandschaft. Sind beispielsweise Updates und technische Upgrades notwendig oder gar strukturelle Veränderungen ratsam? Unsere Arbeit für Sie hier ist bedarfsgerecht und realistisch. Wir empfehlen Ihnen, was notwendig ist, ohne den Umfang unserer Arbeit unnötig aufzublähen.'] },
  { title: 'Umsetzung technischer Maßnahmen', paragraphs: ['Nach Rücksprache mit Ihnen setzt unser Team die beschlossenen technischen Maßnahmen um. Wir stehen dabei in engem Austausch mit Ihnen, damit Sie und Ihre IT über unsere Arbeiten stets informiert sind. Dabei achten wir auf Skalierbarkeit der Systeme und nehmen eine genaue Dokumentation vor. So sind unsere Arbeiten für Sie und Ihr Team nachvollziehbar.'] },
  { title: 'Monitoring, Wartung und laufende Optimierung', paragraphs: ['Wir stehen Ihnen auch nach der Optimierung Ihrer Systemlandschaft für Monitoring, Wartung und die laufende Betreuung Ihrer IT-Systeme zur Verfügung – auch langfristig. So können Sie und Ihr Team in dem Vertrauen arbeiten, dass wir den technischen Rahmen für Ihr Unternehmenswachstum schaffen. Denn: Gute IT-Systeme passen sich laufend den Gegebenheiten in Ihrem Betrieb und den technischen Weiterentwicklungen an.'] }
]

const managedAreas = [
  '<strong>Netzwerk und WLAN: </strong>Einrichtung von Routern, Segmentierung von Netzwerken (VLANs), sowie Fehleranalyse bei Verbindungs- und Performanceproblemen',
  '<strong>Server und Virtualisierung: </strong>Installation, Konfiguration und Betreuung von Servern für Windows, Linux und weitere Systeme',
  '<strong>Cloud-Dienste: </strong>Einrichtung und Verwaltung von Cloud-Lösungen wie Microsoft 365 und Azure, Benutzer- und Rechteverwaltung, Integration lokaler Systeme in die Cloud',
  '<strong>Firewalls und VPN:</strong> Einrichtung sicherer VPNs für Homeoffice und Außendienst, Konfiguration von Firewall-Regeln, Standortvernetzung',
  '<strong>Backup und Recovery: </strong>Automatisierte Backup-Lösungen zur Sicherung von Daten und Servern, Durchführung regelmäßigen Wiederherstellungstests',
  '<strong>Monitoring: </strong>Überwachung von Servern, Netzwerken, Diensten und Internetverbindungen, Prävention von Aus- und Zwischenfällen',
  '<strong>Dokumentation: </strong>Genaue Dokumentation von Netzwerkstrukturen, Benutzerrechten, Sicherheitsrichtlinien und technischen Prozessen für eine nachvollziehbare IT-Landschaft',
  '<strong>Sicherheits- und Update-Management: </strong>Verwaltung von Updates und Patches, Umsetzung aktueller IT-Sicherheitsstandards sowie Schwachstellenmanagement für robuste technische Systeme in Ihrem Betrieb.'
]

const qualityItems = [
  '<strong>Transparenz in unserer Arbeit:</strong> Wir informieren Sie über alle Schritte, die wir vornehmen, sodass Sie jederzeit nachvollziehen können, woran wir arbeiten.',
  '<strong>Klare Prioritäten für Ihre IT-Architektur:</strong> Alle Arbeiten werden von uns so erledigt, dass wir uns um die Themen kümmern, die notwendig sind, ohne Ihnen Überflüssiges zu verkaufen.',
  '<strong>Planbare Betreuung und Kapazitätsplanung:</strong> Wir unterstützen Ihre interne IT und planen unsere Arbeit mit Ihnen so, dass klar ist, wann Sie mit unserer Hilfe rechnen können.',
  '<strong>Stabile Systeme, standardisierte Prozesse und Skalierbarkeit:</strong> Arbeiten Sie mit uns, richten wir Ihre IT so ein, dass sie Unternehmenswachstum gut aufnehmen kann und stabil läuft.',
  '<strong>Frühzeitiges Erkennen von Risiken und Initiative in der Problemlösung:</strong> Das beste IT-Management identifiziert Probleme und Engpässe, bevor es zu Schwierigkeiten kommen kann und löst diese frühzeitig.',
  '<strong>Verständliche Empfehlungen und effektive Kommunikation:</strong> Wir wissen, dass nicht jeder fließend IT spricht. Deshalb legen wir Wert auf klare Kommunikation, sodass Sie unsere Empfehlungen gut nachvollziehen können.'
]

const faqItems = [
  { question: 'Was umfasst IT-Infrastrukturmanagement?', content: [{ type: 'paragraph' as const, html: 'IT-Infrastrukturmanagement umfasst die <strong>Planung, Betreuung, Überwachung, Optimierung und Weiterentwicklung der technischen IT-Basis eines Unternehmens. Dazu gehören zum Beispiel </strong>Netzwerk, Server, Cloud, Incident Management, Sicherheit, Backup und Monitoring.' }] },
  { question: 'Für welche Unternehmen ist IT-Infrastrukturmanagement sinnvoll?', content: [{ type: 'paragraph' as const, html: 'Eine Managed IT-Infrastruktur in Hamburg ist <strong>vor allem für Unternehmen sinnvoll, deren IT zuverlässig, sicher und skalierbar laufen muss.</strong> Wenn Sie dafür <strong>klare technische Zuständigkeiten und planbare Betreuung</strong> benötigen, ist ein <strong>externer Dienstleister das Richtige für Sie. </strong>Dies ist insbesondere der Fall, nachdem<strong> laut Bitkom 85% der deutschen Unternehmen einen Fachkräftemangel in der IT beklagen</strong>. Mit externen IT-Infrastrukturmanagement umgehen Sie dies.' }] },
  { question: 'Worin unterscheidet sich IT-Infrastrukturmanagement von klassischem IT-Support?', content: [{ type: 'paragraph' as const, html: '<strong>Klassischer IT-Support reagiert häufig auf Probleme</strong>. IT-Infrastrukturmanagement geht weiter: Hier betrachten wir die IT-Struktur, erkennen Risiken frühzeitig und sorgen für stabile, planbare Abläufe. IT-Support kümmert sich um Ihre Server, wenn sie nicht funktionieren. IT-Infrastrukturmanagement nimmt vorweg, weshalb es zu Serverproblemen kommen kann und richtet Lösungen ein, die dies verhindern.' }] },
  { question: 'Welche Bereiche gehören typischerweise dazu?', content: [{ type: 'paragraph' as const, html: '<strong>Typischerweise gehören die folgenden Bereiche zu IT-Infrastrukturmanagement:</strong>' }, { type: 'bullets' as const, items: ['Netzwerk, WLAN, Server und Cloud-Dienste', 'Segmentierung Ihrer Systeme', 'Firewalls und VPN', 'Backups', 'Monitoring, Wartung, Dokumentation', 'Sicherheitsmaßnahmen', 'Managed Services'] }] },
  { question: 'Ist IT-Infrastrukturmanagement auch für kleinere Unternehmen sinnvoll?', content: [{ type: 'paragraph' as const, html: '<strong>Ja, gerade für kleinere und mittlere Unternehmen ist IT-Infrastrukturmanagement sinnvoll.</strong> Sie profitieren davon, dass ihre<strong> Infrastruktur nicht nur bei Problemen betrachtet wird, sondern auch laufend betreut und weiterentwickelt.</strong>' }] },
  { question: 'Kann bestehende IT-Infrastruktur weiter genutzt werden?', content: [{ type: 'paragraph' as const, html: '<strong>Ja, in vielen Fällen kann die bestehende IT-Infrastruktur weiter genutzt werden</strong>. Das Ziel einer Zusammenarbeit mit uns ist <strong>nicht zwangsläufig ein kompletter Neuaufbau, sondern eine sinnvolle Bewertung und Optimierung der vorhandenen Infrastruktur</strong>.' }] },
  { question: 'Warum ist Monitoring im Infrastrukturmanagement wichtig?', content: [{ type: 'paragraph' as const, html: '<strong>Monitoring hilft dabei, Störungen, Ausfälle oder Engpässe frühzeitig zu erkennen, bevor sie den laufenden Betrieb beeinträchtigen. </strong>So gehören unerwartete Software-Ausfälle, die die Abläufe blockieren, der Vergangenheit an.' }] },
  { question: 'Ist die Betreuung nur in Hamburg und Umgebung möglich?', content: [{ type: 'paragraph' as const, html: '<strong>Nein, die Betreuung ist auch überregional und europaweit möglich</strong>. Wir arbeiten remote und können die IT an Standorten sowohl in Hamburg als auch andernorts betreuen.' }] },
  { question: 'Was kostet professionelles IT-Infrastrukturmanagement?', content: [{ type: 'paragraph' as const, html: 'Eine <strong>pauschale Aussage</strong> zu den Kosten für das IT-Infrastrukturmanagement wäre <strong>unseriös</strong>. Der Aufwand richtet sich unter anderem nach der <strong>Größe und Komplexität Ihrer IT-Landschaft</strong>, den <strong>eingesetzten Systemen, dem gewünschten Betreuungsumfang und den vereinbarten Servicezeiten</strong>. Mögliche Abrechnungsmodelle reichen von festen <strong>monatlichen Betreuungspauschalen</strong> bis hin zu <strong>individuell kalkulierten Leistungspaketen</strong>.' }, { type: 'paragraph' as const, html: 'Statt Ihnen vorschnell eine Zahl zu nennen, entwickeln wir eine Lösung, die zu Ihrer bestehenden IT-Infrastruktur und Ihren tatsächlichen Anforderungen passt: <strong>transparent kalkuliert, bedarfsgerecht aufgebaut und flexibel erweiterbar</strong>. In einem unverbindlichen Gespräch analysieren wir Ihre Ausgangssituation und erstellen Ihnen ein nachvollziehbares Angebot für das Management Ihrer IT-Infrastruktur.' }] },
  { question: 'Wie schnell kann die Betreuung übernommen werden?', content: [{ type: 'paragraph' as const, html: 'Das kommt auf den Umfang der Arbeiten, die bestehende Dokumentation in Ihrem Betrieb und die Anzahl der Arbeitsplätze an. Wir können in der Regel zügig nach unserem Erstgespräch starten – abhängig davon, auf welcher Daten- und Dokumentationsgrundlage unsere Analyse stattfinden kann.' }] },
  { question: 'Welche IT-Systeme sollten priorisiert überwacht werden?', content: [{ type: 'paragraph' as const, html: 'IT-Infrastrukturüberwachung beinhaltet beispielsweise:' }, { type: 'bullets' as const, items: ['Hardware', 'Server', 'Netzwerke', 'Anwendungen', 'Datenbanken', 'Cloud-Ressourcen', 'Speicher-, Festplatten- und Netzwerkauslastung'] }, { type: 'paragraph' as const, html: 'Welche Systeme wir priorisiert überwachen, orientiert sich an den Gegebenheiten in Ihrem Unternehmen und den IT-Risiken, die wir in unserer Analyse festgestellt haben.' }] },
  { question: 'Welche Vorteile hat proaktives Monitoring?', content: [{ type: 'paragraph' as const, html: 'Ein ungeplanter Ausfall von kritischer Software oder dem IT-System ist für Unternehmen sehr kostspielig. Umso wichtiger ist es, diesen Zwischenfällen zuvorzukommen, beispielsweise mit einem effektiven Monitoring-System. Statt nur auf Stör- und Ausfälle zu antworten, nimmt proaktives Monitoring diese vorweg und verhindert sie, bevor sie entstehen können.' }] },
  { question: 'Wie verbessert IT-Infrastrukturmanagement die IT-Sicherheit?', content: [{ type: 'paragraph' as const, html: 'Gutes IT-Infrastrukturmanagement erkennt Schwachstellen in Ihrer IT. Veraltete Systeme oder Betriebssysteme ohne Updates sind Einfallstore für digitale Bedrohungen. Die Zusammenarbeit mit einer IT-Consultingfirma sorgt dafür, dass Sicherheitslücken geschlossen werden. Dies geschieht beispielsweise durch regelmäßige Wartung von Programmen und Infrastruktur.' }] },
  { question: 'Welche KPIs werden im Infrastrukturmanagement überwacht?', content: [{ type: 'paragraph' as const, html: 'Zu den wichtigsten KPIs gehören beispielsweise:' }, { type: 'bullets' as const, items: ['Systembetriebszeit (Uptime)', 'CPU- und Speicherauslastung', 'Kapazitätsauslastung', 'Lese- und Schreibgeschwindigkeiten auf Festplatten und Auslastung des Speichers', 'Fehlerraten und Zeiten für die Reaktion auf Vorfälle'] }] },
  { question: 'Was gehört zu einer modernen IT-Infrastruktur?', content: [{ type: 'paragraph' as const, html: 'Eine moderne IT-Infrastruktur umfasst alle Komponenten, die aus technischer und organisatorischer Perspektive notwendig für den IT-Betrieb in Unternehmen sind. Dazu gehören beispielsweise:' }, { type: 'bullets' as const, items: ['Server', 'Hardware (Storage und Endgeräte)', 'Netzwerke (WLAN, Firewalls)', 'Cloud-Dienste', 'Software-Plattformen', 'Sicherheitslösungen'] }] },
  { question: 'Wann sollte eine IT-Infrastruktur modernisiert werden?', content: [{ type: 'paragraph' as const, html: 'Wenn die IT in Ihrem Unternehmen veraltet ist, zeigt sich dies z.B. in langsamen Prozessen, instabil laufenden Systemen und fehlende Flexibilität bei der Remote-Arbeit. Hinzu kommen steigende Sicherheitsrisiken und Inkompatibilität der Systeme mit Updates. Im Idealfall halten Sie Ihre IT so modern, dass sie Ihre Wettbewerbsfähigkeit immer unterstützt, anstatt sie zu hindern.' }] }
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
        :title="data?.services[0].title"
        :subtitle="data?.services[0].subtitle"
        :description="data?.services[0].description"
        :image="data?.services[0].image"
        :imagealt="data?.services[0].imagealt"
        :features="data?.services[0].subservice"
      />
    </LayoutContainer>
  </div>
  -->

  <div>
    <Breadcrumbs :items="[{ label: 'Leistungen', to: '/services' }, { label: 'IT-Infrastruktur' }]" />

    <ServiceLead
      eyebrow="IT-Infrastrukturmanagement"
      title="IT-Infrastrukturmanagement in Hamburg und Umgebung für stabile und zukunftsfähige Systeme"
      :paragraphs="[
        'Moderne IT-Infrastruktur ist mehr als nur Hardware und Lizenzen. Sie muss sicher und stabil laufen, um den Betrieb in Ihrem Unternehmen zu unterstützen. <strong>Professionelles IT-Infrastrukturmanagement setzt hier an: Es umfasst die Planung, Überwachung, Wartung und Weiterentwicklung von IT-Landschaften.</strong> Dazu gehören beispielsweise Netzwerke, Serve, Clouddienste und Security-Leistungen wie Firewalls.',
        '<strong>Unser Team begleitet Ihr Unternehmen in Hamburg und Umgebung bei der Analyse, Optimierung und Betreuung Ihrer IT-Systeme. Sie erhalten von uns alles aus einer Hand – mit einem festen Ansprechpartner.</strong> Lassen Sie sich jetzt von uns unverbindlich zu Ihrer IT-Architektur beraten!'
      ]"
      cta-label="Jetzt Infrastruktur analysieren lassen!"
      cta-href="/contact"
      :image-src="heroImage"
      image-alt="IT-Infrastruktur und vernetzte Systeme"
    />

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-center">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Proaktive Betreuung</p>
            <h2 class="mt-3 font-semibold">Warum IT-Infrastrukturmanagement in Hamburg und Umgebung für Unternehmen immer wichtiger wird</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p>Es ist Montagmorgen, der Drucker streikt und das Vertriebsprogramm lässt sich nicht öffnen: <strong>Probleme mit der IT können die Arbeit in Ihrem Betrieb empfindlich stören.</strong> Um solche Zwischenfälle zu vermeiden, lohnt sich die Unterstützung durch eine IT-Infrastruktur-Betreuung in Hamburg.</p>
              <p><strong>Wir reagieren nicht auf IT-Probleme, sondern kümmern uns proaktiv um Ihre technischen Systeme. </strong>Das heißt, dass wir Herausforderungen und Sicherheitsrisiken in Ihrer IT frühzeitig erkennen und Lösungen schaffen, bevor es zu Problemen kommen kann. Dazu nehmen wir beispielsweise detailliertes Monitoring sowie eine Sicherheitsüberwachung und Kapazitätsplanung vor. So entsteht eine<strong> Infrastruktur, die zuverlässig, sicher und skalierbar ist.</strong> Kommen Sie IT-Problemen zuvor, ehe sie entstehen können, und sparen Sie Zeit und Geld bei technischen Ausfällen.</p>
              <p>Als Partner für die proaktive Betreuung Ihrer IT-Systeme <strong>unterstützen wir die Arbeit Ihrer IT-Abteilung auf Wunsch punktuell oder übernehmen sie ganz</strong>. Mit einem professionellen Partner für IT-Infrastrukturmanagement in Hamburg und Umgebung <strong>legen Sie so die technische Grundlage für reibungslose Abläufe in Ihrer Firma!</strong></p>
            </div>
            <div class="mt-8"><UiButton href="/contact" label="Jetzt IT-Beratung unverbindlich anfragen!" /></div>
          </div>
          <LightboxImage :src="relevanceImage" alt="Vernetzte IT-Infrastruktur" img-class="h-[300px] w-full rounded-[1.75rem] object-cover md:h-[420px]" button-class="w-full rounded-[1.75rem]" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Leistungsüberblick</p>
          <h2 class="mt-3 font-semibold">Unsere Leistungen im IT-Infrastrukturmanagement in Hamburg und Umgebung</h2>
          <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p>Damit <strong>Situationen wie Softwareausfälle oder Sicherheitslücken im System nicht passieren</strong>, bieten wir Ihnen ein <strong>breites Leistungsspektrum für Ihre IT-Infrastruktur</strong> in Hamburg an – <strong>maßgeschneidert für Ihr Unternehmen.</strong></p>
            <p><strong>Wir bieten Ihnen unter anderem diese Leistungen in unserer IT-Infrastruktur-Beratung:</strong></p>
          </div>
        </div>
        <div class="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
          <div v-for="service in infrastructureServices" :key="service" class="flex gap-4 border-t border-black/10 pt-5">
            <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="service" />
          </div>
        </div>
        <div class="mt-10 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div class="space-y-3 text-secondary leading-relaxed [&_strong]:font-semibold">
            <p><strong>So entsteht eine IT-Landschaft, die zu Ihrem Unternehmen passt. </strong>Dazu haben Sie einen <strong>persönlichen Ansprechpartner in unserem Team</strong>, der bei Fragen und Zwischenfällen zuverlässig für Sie erreichbar ist.</p>
            <p><strong>Kontaktieren Sie uns jetzt und lassen Sie Ihre IT-Infrastruktur optimieren in Hamburg!</strong></p>
          </div>
          <UiButton href="/contact" label="Jetzt unverbindlich beraten lassen!" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <LightboxImage :src="areasImage" alt="Server und IT-Systeme" img-class="h-[320px] w-full rounded-[1.75rem] object-cover md:h-[460px]" button-class="w-full rounded-[1.75rem] lg:sticky lg:top-24" loading="lazy" />
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Relevanz</p>
            <h2 class="mt-3 font-semibold">Für welche Unternehmen in Hamburg und Umgebung IT-Infrastrukturmanagement besonders relevant ist</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p>Als IT-Infrastrukturdienstleister in Deutschland und europaweit <strong>unterstützen wir Unternehmen unterschiedlicher Größe und in verschiedenen Branchen</strong>. Sie können fachlich komplexe Themen wie SAP-Migrationen oder Ihre IT ganz an uns als externe IT-Abteilung übergeben. In der deutschen Wirtschaft fehlen laut Branchenverband Bitkom derzeit über 100.000 IT-Fachkräfte. Ein externer Dienstleister löst dieses Problem für Sie.</p>
              <p><strong>Ein IT-Infrastruktur Service in Hamburg und Umgebung ist in diesen Fällen besonders wirkungsvoll:</strong></p>
            </div>
            <ul class="mt-8 grid gap-3 sm:grid-cols-2">
              <li v-for="item in targetGroups" :key="item" class="rounded-2xl border border-black/10 bg-white px-5 py-4 text-secondary">{{ item }}</li>
            </ul>
            <div class="mt-8 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p>Wir schaffen <strong>Verfügbarkeit und Ausfallsicherheit für Ihre IT-Architektur!</strong> Kontaktieren Sie uns jetzt und lassen Sie sich unverbindlich zu Ihrer Systemlandschaft beraten.</p>
            </div>
            <div class="mt-8"><UiButton href="/contact" label="Jetzt kostenlose Erstberatung anfragen!" /></div>
          </div>
        </div>
      </LayoutContainer>
    </section>

    <ProcessSteps title="So läuft IT-Infrastrukturmanagement in Hamburg und Umgebung mit uns ab" :steps="processSteps" cta-label="Jetzt IT-Infrastruktur analysieren lassen!" cta-href="/contact" />

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Betreuungsbereiche</p>
          <h2 class="mt-3 font-semibold">Welche Bereiche im IT-Infrastrukturmanagement in Hamburg und Umgebung typischerweise betreut werden</h2>
          <p class="mt-6 text-secondary leading-relaxed [&_strong]:font-semibold"><strong>Unsere IT-Arbeit ist individuell an Ihr Unternehmen angepasst.</strong> Das heißt, dass Sie von uns <strong>genau die Leistungen für das Infrastrukturmanagement Ihrer IT in Hamburg bekommen, die Sie auch wirklich brauchen wie zum Beispiel:</strong></p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2">
          <article v-for="item in managedAreas" :key="item" class="rounded-3xl border border-black/10 p-6">
            <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="item" />
          </article>
        </div>
        <div class="mt-8 space-y-5 text-secondary leading-relaxed">
          <p>Auf Wunsch bieten wir auch spezialisierte Services wie SAP-Beratung an.</p>
          <UiButton href="/contact" label="Jetzt unverbindlich IT-Support anfragen!" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-gray-50">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="max-w-4xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Qualitätsmerkmale</p>
          <h2 class="mt-3 font-semibold">Was gutes IT-Infrastrukturmanagement in Hamburg und Umgebung auszeichnet</h2>
          <p class="mt-6 text-secondary leading-relaxed">Neben dem notwendigen technischen Know-how sind klare Kommunikation und Verlässlichkeit wichtig für wirkungsvollen IT-Support. Wir bieten beides und darüber hinaus:</p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="item in qualityItems" :key="item" class="rounded-3xl bg-white p-6 shadow-sm">
            <p class="text-secondary leading-relaxed [&_strong]:font-semibold" v-html="item" />
          </article>
        </div>
        <div class="mt-10 max-w-4xl space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
          <p>Wollen Sie outsourcen, sollten technische Leistungen wie Netzwerk- und Serverbetreuung in Hamburg solide sein. Gleichzeitig ist es wichtig, eine <strong>Vertrauensbasis zu Ihrem IT-Partner </strong>aufzubauen. Mit<strong> langjähriger Erfahrung</strong> und einer <strong>Vorliebe für Klartext</strong> sind Sie dafür bei uns an der richtigen Stelle. Wir betreuen Projekte deutschlandweit und darüber hinaus – remote für Sie verfügbar.</p>
          <p>Kontaktieren Sie uns jetzt für IT-Dienstleistungen aus einer Hand.</p>
          <UiButton href="/contact" label="Jetzt IT-Management anfragen!" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-white">
      <LayoutContainer class="py-10 md:py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Persönliche Betreuung</p>
            <h2 class="mt-3 font-semibold">IT-Infrastrukturmanagement in Hamburg und Umgebung mit persönlichem Ansprechpartner</h2>
            <div class="mt-6 space-y-4 text-secondary leading-relaxed [&_strong]:font-semibold">
              <p>Wenig ist so frustrierend, wie ein technisches Problem zu haben und den IT-Dienstleister nicht zu erreichen. Wir bieten Ihnen deshalb von Anfang an <strong>schnelle Kommunikation</strong> und die <strong>Abstimmung mit einem persönlichen Ansprechpartner</strong>. Das macht <strong>unseren Einsatz bei Ihnen planbar und zuverlässig.</strong></p>
              <p>Darüber hinaus arbeiten wir remote und sind auch überregional einsetzbar. Das heißt, dass wir <strong>Unternehmen in Hamburg ebenso gut betreuen können wie Mittelständler mit Standorten über die Hansestadt hinaus</strong>.</p>
              <p>Kommen Sie jetzt auf uns zu für eine individuelle IT-Servicelandschaft-Betreuung in Hamburg und darüber hinaus. Wir unterstützen Sie gerne mit unserer jahrzehntelangen Erfahrung (seit 1994) und der tiefen Expertise unserer Mitarbeiter!</p>
            </div>
            <div class="mt-8"><UiButton href="/contact" label="Jetzt unverbindlich Kontakt aufnehmen!" /></div>
          </div>
          <LightboxImage :src="contactImage" alt="Persönliche Betreuung der IT-Infrastruktur" img-class="h-[300px] w-full rounded-[1.75rem] object-cover md:h-[420px]" button-class="w-full rounded-[1.75rem]" loading="lazy" />
        </div>
      </LayoutContainer>
    </section>

    <section class="bg-primary text-white">
      <LayoutContainer class="py-12 md:py-16">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div class="max-w-4xl">
            <h2 class="font-semibold text-white">Jetzt IT-Infrastrukturmanagement in Hamburg und Umgebung anfragen</h2>
            <div class="mt-5 space-y-4 leading-relaxed [&_strong]:font-semibold">
              <p>Wenn Sie einen <strong>zuverlässigen IT-Partner mit klarer Ansprache und langjähriger Erfahrung </strong>suchen, sind Sie bei uns richtig. <strong>Wir sind schnell zur Stelle, wenn es Zwischenfälle in Ihren Systemen gibt.</strong></p>
              <p><strong>Fragen Sie jetzt eine kostenlose Erstberatung zu Ihrer IT nach!</strong></p>
            </div>
          </div>
          <UiButton href="/contact" label="Jetzt Erstberatung anfragen!" style="outline" class="bg-white text-primary" />
        </div>
      </LayoutContainer>
    </section>

    <FaqAccordion title="FAQ zum IT-Infrastrukturmanagement in Hamburg und Umgebung" :items="faqItems" />

    <section class="bg-white">
      <LayoutContainer class="py-8 md:py-10">
        <div class="flex justify-center">
          <UiButton href="/contact" label="Jetzt unverbindlich Beratung anfragen!" />
        </div>
      </LayoutContainer>
    </section>

  </div>
</template>
