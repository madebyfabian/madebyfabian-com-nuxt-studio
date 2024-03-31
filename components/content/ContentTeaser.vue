<template>
	<section
		class="p-6 py-10 my-6 first:mt-0 last:mb-0 rounded-box flex flex-col items-center text-center gap-4 bg-frost shadow-border"
	>
		<div class="flex-1">
			<h3 class="mt-0" v-if="$slots.title">
				<ContentSlot :use="$slots.title" unwrap="p" />
			</h3>
			<slot />
		</div>
	</section>
</template>
