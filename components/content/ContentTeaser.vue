<template>
	<section
		class="p-6 my-6 first:mt-0 last:mb-0 rounded-box flex flex-col md:flex-row gap-4 bg-frost shadow-border"
	>
		<div v-if="props?.icon" class="text-2xl">
			<span v-if="props?.icon === 'info'">&#8505;&#65039;</span>
			<span v-if="props?.icon === 'warning'">&#9888;&#65039;</span>
			<span v-if="props?.icon === 'finger'">👉</span>
		</div>
		<div class="flex-1">
			<h3 v-if="$slots.title">
				<ContentSlot :use="$slots.title" unwrap="p" />
			</h3>
			<slot />
		</div>
	</section>
</template>

<script setup lang="ts">
	const props = defineProps<{
		icon?: 'info' | 'warning' | 'finger'
	}>()
</script>
