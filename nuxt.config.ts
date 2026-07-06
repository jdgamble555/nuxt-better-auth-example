// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	components: [
		{
			path: "~/components/ui/v-calendar",
			prefix: "V",
			pathPrefix: false,
			extensions: ["vue"],
		},
		{
			path: "~/components/ui",
			pathPrefix: false,
			extensions: ["vue"],
			ignore: ["v-calendar/**"],
		},
		{
			path: "~/components",
			ignore: ["ui/**"],
		},
	],
	imports: {
		dirs: ["lib"],
	},
});
