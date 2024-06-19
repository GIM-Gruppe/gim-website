<script setup lang="ts">

withDefaults(defineProps<{
	title: string,
	subtitle: string,
	description: string,
	bgImg: string,
	altImg: string,
	hasButtons: boolean,
	buttonLeft?: string,
	buttonRight?: string,
}>(),{
	hasButtons: false,
})

const data = {
	title: "Lorem ipsum dolor",
	subtitle: "Lorem ipsum dolor",
	description: "Lorem ipsum dolor",
	bgImg: "Lorem ipsum dolor",
	altImg: "Lorem ipsum dolor",
	hasButtons: true,
	buttonLeft: "Lorem ipsum dolor",
	buttonRight: "Lorem ipsum dolor",
}

</script>

<template>
	<section
		class="relative h-[500px] bg-[url('~/assets/img/tech.jpg')] bg-cover bg-center bg-no-repeat flex items-center">
		<div
			class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r sm:bg-gradient-to-l">
		</div>

		<div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8 ">
			<div class="max-w-xl text-left ">
				<h1 class="text-3xl font-extrabold sm:text-5xl">
					Wir GIM

					<strong class="block font-extrabold text-white"> uns Mühe. </strong>
				</h1>

				<p class="mt-4 max-w-lg sm:text-xl/relaxed">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
					numquam ea!
				</p>

				<div class="mt-8 flex flex-wrap gap-4 text-left">
					<a href="#"
						class="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
						Get Started
					</a>

					<a href="#"
						class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
						Learn More
					</a>
				</div>
			</div>
		</div>
	</section>
</template>
