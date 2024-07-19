<script setup>
const features = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
    icon: "bx:bxs-data",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    icon: "bx:bxs-bot",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    icon: "bx:bxs-user",
  },
];
</script>

<template>
  <LayoutContainer topMargin bottomMargin>
    <div class="mt-16 md:mt-0">
      <h2 class="text-4xl lg:text-5xl  lg:tracking-tight">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
      </h2>
      <p class="text-lg mt-4 text-slate-600">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      </p>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
      <div v-for="item of features" class="flex gap-4 items-start">
        <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
          <Icon class="text-white" :name="item.icon" />
        </div>
        <div>
          <h3 class="font-semibold text-lg">{{ item.title }}</h3>
          <p class="text-slate-500 mt-2 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </LayoutContainer>
  
</template>
