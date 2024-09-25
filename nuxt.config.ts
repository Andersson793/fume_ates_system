// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui", "@pinia/nuxt"],

  headlessui: {
    prefix: "Headless",
  },

  vite: {
    build: {
      manifest: true,
      target: "esnext",
    },
  },
});
