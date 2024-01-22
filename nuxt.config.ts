// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-appwrite', '@nuxtjs/tailwindcss'],
  appwrite: {
    endpoint: 'https://cloud.appwrite.io/v1',
    // project: 'nuxt-playground',
  },
  tailwindcss: {
    cssPath: false,
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 4,
    config: {},
    injectPosition: 'first',
    viewer: true,
  }
})
