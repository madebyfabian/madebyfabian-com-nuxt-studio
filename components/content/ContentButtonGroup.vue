<template>
	<div class="not-prose UIButtonGroup flex flex-wrap my-6 first:mt-0 last:mb-0">
		<slot />
	</div>
</template>

<script setup lang="ts">
	import type { CSSProperties } from 'vue'

	withDefaults(
		defineProps<{
			justifyContent?: CSSProperties['justifyContent']
			alignItems?: CSSProperties['alignItems']
		}>(),
		{
			justifyContent: 'flex-start',
			alignItems: 'center',
		}
	)
</script>
