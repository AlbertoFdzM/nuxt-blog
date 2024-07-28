// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/nuxt-blog/",
  },

  devtools: { enabled: true },

  extends: ["node_modules/nuxt-content-assets/cache"],

  modules: ["nuxt-content-assets", "@nuxt/content", "@nuxt/image"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2024-07-27",
});
