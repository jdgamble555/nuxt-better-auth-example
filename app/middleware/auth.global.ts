export default defineNuxtRouteMiddleware(async (to, from) => {
	const session = await $fetch("/api/auth/get-session", {
		headers: useRequestHeaders(["cookie"]),
	}).catch(() => null);

	const authPages = ["/sign-in", "/sign-up", "/forget-password", "/reset-password"];

	if (!session) {
		if (to.path === "/dashboard") {
			return navigateTo("/");
		}
	}

	if (session && authPages.includes(to.path)) {
		return navigateTo("/dashboard");
	}
});
