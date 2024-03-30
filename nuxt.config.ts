// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxthq/studio',
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'@nuxt/fonts',
	],

	// @nuxt/content
	content: {
		// ... options
	},

	// @nuxt/fonts
	fonts: {
		families: [
			{
				name: 'Plus Jakarta Sans',
				provider: 'google',
			},
		],
	},
})
