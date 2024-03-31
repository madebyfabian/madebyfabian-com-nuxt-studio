<template>
	<div class="not-prose flex-1 md:flex-initial">
		<NuxtLink
			class="UIButton w-full"
			:class="{ 'UIButton-secondary': variant === 'secondary' }"
			v-bind="{ target }"
			:to="to"
			:external="!isInternalLink"
		>
			<slot />
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
	const runtimeConfig = useRuntimeConfig()

	const props = withDefaults(
		defineProps<{
			url: string
			variant?: 'primary' | 'secondary'
			target?: '_blank'
		}>(),
		{
			variant: 'primary',
		}
	)

	const siteUrlProd = runtimeConfig.public.siteUrlProd

	const isHashLink = computed(() => {
		return props.url.startsWith('#')
	})

	const isInternalLink = computed(() => {
		const startsWithSiteUrl = props.url.startsWith(siteUrlProd)
		return startsWithSiteUrl || isHashLink.value
	})

	const to = computed(() => {
		if (isHashLink.value) return { hash: props.url }
		if (!isInternalLink.value) return props.url
		return props.url.replace(siteUrlProd, '')
	})
</script>
