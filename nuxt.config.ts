// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  srcDir: "./app",
  css: ["./app/assets/css/main.css"],
  modules: [],
  components: [
    {
      path: "~/components/ui",
      pathPrefix: false,
      extensions: ["vue"],
    },
    {
      path: "~/components",
      ignore: ["ui/**"],
    },
  ],
  imports: {
    dirs: ["lib"],
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@vueuse/core',
        'better-auth/vue',
        'class-variance-authority',
        'clsx',
        'radix-vue',
        'reka-ui',
        'tailwind-merge',
      ],
    },
  },
})
