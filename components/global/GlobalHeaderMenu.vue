<template>
	<ul>
		<li v-for="(menuItem, key) of data?.body" class="flex items-center">
			<NuxtLink
				class="UILink whitespace-nowrap p-2 -m-2"
				:to="menuItem.url"
				:external="menuItem.target === '_blank'"
				:target="menuItem.target"
			>
				{{ menuItem.label }}
			</NuxtLink>
			<span
				v-if="key + 1 !== data?.body?.length"
				class="mx-2 lg:mx-3 font-bold scale-125 opacity-30 -mt-1 inline-block"
			>
				·
			</span>
		</li>
	</ul>
</template>

<script setup lang="ts">
	const { data } = await useAsyncData('GlobalHeaderMenu', () =>
		queryContent<{ body: { url: string; label: string; target: string }[] }>(
			'global/header-menu'
		).findOne()
	)
</script>
