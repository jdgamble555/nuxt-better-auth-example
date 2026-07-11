export default defineNuxtRouteMiddleware(async (to, from) => {
	const session = await $fetch("/api/auth/get-session", {
		headers: useRequestHeaders(["cookie"]),
	}).catch(() => null);

	const authPages = ["/sign-in", "/sign-up", "/forget-password", "/reset-password"];
	const protectedPages = ["/dashboard", "/change-password"];

	if (!session) {
		if (protectedPages.includes(to.path)) {
			return navigateTo("/");
		}
	}

	if (session && authPages.includes(to.path)) {
		return navigateTo("/dashboard");
	}
});
