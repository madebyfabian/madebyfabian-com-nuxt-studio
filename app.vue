<template>
	<div>
		<NuxtLayout name="page">
			<NuxtLoadingIndicator :color="_accent['700']" :height="4" />
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script lang="ts" setup>
	import { _accent } from '#tailwind-config/theme/colors'
</script>
