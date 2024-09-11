<script setup lang="ts">

const props = defineProps<{
  title: string
  services: any
}>()

const features = [
  {
    title: "IT-Support",
    description:
      "Wir bieten Ihnen einen proaktiven und vorausschauenden IT-Support. Sie müssen sich nicht mehr um die Wartung Ihrer IT kümmern, sondern können sich komplett auf Ihr Tagesgeschäft konzentrieren.",
    icon: "ph:headset",
  },
  {
    title: "IT-Sicherheit",
    description:
      "Überlassen Sie uns den Schutz Ihrer IT und Ihrer sensiblen Daten. Wir kümmern uns um Ihre IT, als wäre diese unsere eigene.",
    icon: "jam:shield-half",
  },
  {
    title: "Managed Services",
    description:
      "Eine umfassende Lösung für KMUs, um ihre IT-Infrastruktur effizient zu verwalten und von Expertenbetreuung im Bereich SAP Basis Consulting zu profitieren.",
    icon: "material-symbols:folder-managed",
  },
  {
    title: "Cloud Lösungen",
    description:
      "Cloud Lösungen sind beliebig skalierbar und somit auf Ihre aktuelle Unternehmungslage anpassbar. Sie profitieren von dauerhaft planbaren Konstenstrukturen.",
    icon: "simple-icons:icloud",
  },
  {
    title: "SAP Basis",
    description:
      "Unsere SAP Basis Consulting Services optimieren die Leistung und Stabilität Ihrer SAP-Systeme, um Ihr Geschäft reibungslos am Laufen zu halten.",
    icon: "simple-icons:sap",
  },
  {
    title: "IT-Infrastruktur",
    description:
      "Unsere IT-Infrastrukturlösungen bieten Ihnen alle erforderlichen Tools und Technologien für eine effiziente und sichere IT-Umgebung in Ihrem Unternehmen. ",
    icon: "streamline:industry-innovation-and-infrastructure-solid",
  },
];
</script>

<template>
  <LayoutContainer topMargin bottomMargin>
    <div class="mt-16 md:mt-0">
      <h1 class="text-2xl lg:text-4xl  lg:tracking-tight font-semibold">
        {{props.title}}
      </h1>
      <p class="text-xl mt-4 text-slate-600">
       
      </p>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
      <div v-for="item of props.services" class="flex gap-4 items-start">
        <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
          <Icon class="text-white" :name="item.icon" />
        </div>
        <div>
          <h3 class="font-semibold text-xl">{{ item.title }}</h3>
          <p class="text-slate-500 mt-2 leading-relaxed text-l">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </LayoutContainer>
  
</template>
