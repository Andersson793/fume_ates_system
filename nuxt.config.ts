import vueJsx from "@vitejs/plugin-vue-jsx";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui"],

  headlessui: {
    prefix: "Headless",
  },

  vite: {
    plugins: [vueJsx()],
  },
});
