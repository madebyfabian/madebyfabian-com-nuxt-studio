// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxthq/studio',
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'@nuxt/fonts',
		'@vueuse/nuxt',
	],

	// @nuxt/content
	content: {
		// ... options
	},

	// @nuxtjs/tailwindcss
	tailwindcss: {
		exposeConfig: {
			level: 2,
		},
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
