// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/nuxt-blog/",
  },

  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/tailwindcss"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2024-07-27",
});
