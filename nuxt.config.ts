// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['stores']
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: [
      'defineStore',
      'storeToRefs'
    ]
  },
  typescript: {
    strict: true,
    typeCheck: true
  }
})
