<script setup lang="ts">
import { defineComponent, h, ref } from "vue";

const { data, pending, error } = await useAsyncData("about", async () => {
  try {
    const response = await queryContent("/aboutus/content").findOne();
    // console.log(response); // Log response for debugging
    return response;
  } catch (err) {
    console.error(err); // Log any errors
    return null;
  }
});
// // console.log(data);

const mobileMenuOpen = ref(false);
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Failed to load content</div>
  <div v-else>
    <LayoutContainer>
      <div class="bg-white">
        <!-- 'Header
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>' -->

        <main class="isolate">
          <!-- Hero section -->
          <div class="relative isolate -z-10">
            <svg
              class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  width="200"
                  height="200"
                  x="50%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  stroke-width="0"
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              />
            </svg>
            <div
              class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
              aria-hidden="true"
            >
              <div
                class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style="
                  clip-path: polygon(
                    63.1% 29.5%,
                    100% 17.1%,
                    76.6% 3%,
                    48.4% 0%,
                    44.6% 4.7%,
                    54.5% 25.3%,
                    59.8% 49%,
                    55.2% 57.8%,
                    44.4% 57.2%,
                    27.8% 47.9%,
                    35.1% 81.5%,
                    0% 97.7%,
                    39.2% 100%,
                    35.2% 81.4%,
                    97.2% 52.8%,
                    63.1% 29.5%
                  );
                "
              />
            </div>
            <div class="overflow-hidden">
              <div
                class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32"
              >
                <div
                  class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
                >
                  <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 class="font-semibold tracking-tight text-primary-900">
                      {{ data?.intro.title }}
                    </h1>
                    <p
                      class="relative mt-6 leading-8 text-secondary-600 sm:max-w-md lg:max-w-none"
                    >
                      {{ data?.intro.subtitle }}
                    </p>
                  </div>
                  <div
                    class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
                  >
                    <div
                      class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                    >
                      <div class="relative">
                        <img
                          :src="data?.intro.images[0].image"
                          :alt="data?.intro.images[0].imagealt"
                          class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div
                          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                        />
                      </div>
                    </div>
                    <div
                      class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
                    >
                      <div class="relative">
                        <img
                          :src="data?.intro.images[1].image"
                          :alt="data?.intro.images[1].imagealt"
                          class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div
                          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                        />
                      </div>
                      <div class="relative">
                        <img
                          :src="data?.intro.images[2].image"
                          :alt="data?.intro.images[2].imagealt"
                          class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div
                          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Content section -->
          <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h1 class="font-bold tracking-tight text-primary-900">
                {{ data?.mission.title }}
              </h1>
              <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p class="leading-8 text-secondary-600">
                    {{ data?.mission.subtitle }}
                  </p>
                  <div
                    class="mt-10 max-w-xl text-base leading-7 text-secondary-700"
                  >
                    {{ data?.mission.text }}
                  </div>
                </div>
                <!-- <div class="lg:flex lg:flex-auto lg:justify-center">
              <dl class="w-64 space-y-8 xl:w-80">
                <div v-for="stat in stats" :key="stat.label" class="flex flex-col-reverse gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">{{ stat.label }}</dt>
                  <dd class="text-5xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
                </div>
              </dl>
            </div> -->
              </div>
            </div>
          </div>

          <!-- Image section -->
          <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
              :src="data?.breakImage"
              alt=""
              class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
          </div>

          <!-- Values section -->
          <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h1 class="font-semibold tracking-tight text-primary-900">
                {{ data?.gruende.title }}
              </h1>
              <p class="mt-6 leading-8 text-secondary-600">
                {{ data?.gruende.subtitle }}
              </p>
            </div>
            <dl
              class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              <div v-for="value in data?.gruende.gruende" :key="value.name">
                <dt class="font-semibold text-primary-900">
                  {{ value.title }}
                </dt>
                <dd class="mt-1 text-secondary-600">{{ value.description }}</dd>
              </div>
            </dl>
          </div>

          <!-- Cooperation section -->
          <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h1 class="font-semibold tracking-tight text-primary-900">
                {{ data?.gruende.title }}
              </h1>
              <p class="mt-6 leading-8 text-secondary-600">
                {{ data?.gruende.subtitle }}
              </p>
            </div>
            <dl
              class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
            >
              <div
                v-for="value in data?.gruende.gruende"
                :key="value.name"
                class="flex gap-x-4 mb-6 items-center"
              >
                <img
                  :src="value.image"
                  alt="Image for {{ value.title }}"
                  class="w-16 h-16 rounded-lg object-cover shadow-md"
                />

                <div>
                  <dt class="font-semibold text-primary-900">
                    {{ value.title }}
                  </dt>
                  <dd class="mt-1 text-secondary-600">
                    {{ value.description }}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <!-- Logo cloud -->
          <!-- <div class="relative isolate -z-10 mt-32 sm:mt-48">
        <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
            <defs>
              <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="50%" class="overflow-visible fill-gray-50">
              <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
          </svg>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
          <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
            <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
            <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
          </div>
        </div>
      </div> -->

          <!-- Team section -->
          <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h1 class="font-bold tracking-tight text-primary-900">
                {{ data?.team.title }}
              </h1>
              <p class="mt-6 leading-8 text-gray-600">
                {{ data?.team.subtitle }}
              </p>
            </div>
            <ul
              role="list"
              class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
            >
              <li v-for="person in data?.team.persons" :key="person.name">
                <img
                  class="mx-auto h-24 w-24 rounded-full"
                  :src="person.image"
                  alt=""
                />
                <p
                  class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900"
                >
                  {{ person.name }}
                </p>
                <div class="leading-6 text-gray-600 text-sm">
                  {{ person.position }}
                </div>
              </li>
            </ul>
          </div>

          <!-- Blog section -->
          <!-- <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">Vel dolorem qui facilis soluta sint aspernatur totam cumque.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="post in blogPosts" :key="post.id" class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img :src="post.imageUrl" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
              <div class="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div class="flex gap-x-2.5">
                  <img :src="post.author.imageUrl" alt="" class="h-6 w-6 flex-none rounded-full bg-white/10" />
                  {{ post.author.name }}
                </div>
              </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
              <a :href="post.href">
                <span class="absolute inset-0" />
                {{ post.title }}
              </a>
            </h3>
          </article>
        </div>
      </div> -->
        </main>

        <!-- Footer -->
        <!-- <footer class="mx-auto mt-40 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-64 sm:pb-24 lg:px-8">
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <div v-for="item in footerNavigation.main" :key="item.name" class="pb-6">
          <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
        </div>
      </nav>
      <div class="mt-10 flex justify-center space-x-10">
        <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <p class="mt-10 text-center text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
    </footer> -->
      </div>
    </LayoutContainer>
  </div>
</template>
