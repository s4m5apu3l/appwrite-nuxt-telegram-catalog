// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	devtools: { enabled: true },
	app: {
		head: {
			title: "Telegram catalog",
			// link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
			link: [
				{
					id: 'theme-link-ligth',
					rel: 'stylesheet',
					href: 'primevue/resources/themes/lara-light-purple/theme.css'
				}
			]
		},
	},
	css: [
		'@/assets/css/main.css',
		// "primevue/resources/themes/lara-dark-teal/theme.css",
		// 'primevue/resources/themes/lara-light-green/theme.css',
		"primevue/resources/themes/lara-dark-teal/theme.css",
		"primeicons/primeicons.css",
	],
	modules: ['nuxt-appwrite', '@nuxtjs/tailwindcss', 'nuxt-primevue'],
	appwrite: {
		endpoint: 'https://cloud.appwrite.io/v1',
		project: process.env.APPWRITE_PROJECT_ID,
	},
	primevue: {
		// cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
	},
	tailwindcss: {
		cssPath: false,
		configPath: 'tailwind.config',
		exposeConfig: false,
		config: {},
		viewer: true,
	}
})
