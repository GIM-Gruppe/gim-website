<script setup lang="ts">

const props = withDefaults(defineProps<{
	title: string,
	subtitle: string,
	description: string,
	bgImg: string,
	hasButtons?: boolean,
	buttonLeft?: string,
	buttonRight?: string,
}>(),{
	hasButtons: false,
})

</script>

<template>
	<LayoutContainer :class="`bg-[url(${props.bgImg})]`" class="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center">
		<!-- White Fade Effect -->
		<div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r sm:bg-gradient-to-l"></div>

		<div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8 ">
			<div class="max-w-xl text-left ">
				<h1 class="text-3xl font-extrabold sm:text-5xl">
					{{props.title}}
					<strong class="block font-extrabold text-secondary"> {{ props.subtitle }} </strong>
				</h1>

				<p class="mt-4 max-w-lg sm:text-xl/relaxed">
					{{props.description}}
				</p>

				<div v-if="props.hasButtons" class="mt-8 flex flex-wrap gap-4 text-left">
					<UiButton :style="'primary'" :label="props.buttonLeft">
						{{props.buttonLeft}}
					</UiButton>

					<UiButton :style="'outline'" :label="props.buttonLeft">
						{{props.buttonRight}}
					</UiButton>
				</div>
			</div>
		</div>
	</LayoutContainer>
</template>
