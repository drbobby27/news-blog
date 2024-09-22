// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig( {
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      apiKey: process.env.VITE_NUXT_API_KEY, 
    },
  },
  app: {
    head: {
      title: 'New Era News',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'New Era News'
        }
      ],
    }
  },
  // typescript: {
  //   strict: true,
  //   shim: false
  // },

  compatibilityDate: '2024-09-22',
} )