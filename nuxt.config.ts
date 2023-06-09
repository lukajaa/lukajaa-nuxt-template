// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Lukajaa Nuxt Template',
    }
  },
  css: [
    '@/assets/styles/main.scss',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-gtag',
  ],
  googleFonts: {
    families: {
      'Inter': true,
    }
  },
  gtag: {
    id: 'G-QNLZ5NY7HH',
  }
})
