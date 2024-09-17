<script setup lang="ts">

const props = defineProps<{
	title: string,
	subtitle: string,
	description: string,
	bgImg: string,
}>()

</script>

<template>
	<LayoutContainer :style="{ backgroundImage: `url(${props.bgImg})` }"
	class="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center !max-w-full ">
		<!-- White Fade Effect -->
		<div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r sm:bg-gradient-to-l"></div>

		<div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8 ">
			<div class="max-w-xl text-left ">
				<h1 class="font-extrabold">
					{{props.title}}
					<strong class="block font-extrabold text-secondary"> {{ props.subtitle }} </strong>
				</h1>

				<p class="mt-4 max-w-lg ">
					{{props.description}}
				</p>

			</div>
		</div>
	</LayoutContainer>
</template>
