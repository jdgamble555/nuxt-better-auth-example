import Database from "better-sqlite3";
import { betterAuth } from "better-auth";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

const socialProviders =
	googleClientId && googleClientSecret
		? {
			google: {
				clientId: googleClientId,
				clientSecret: googleClientSecret,
			},
		}
		: undefined;

export const auth = betterAuth({
	baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
	database: new Database("./db.sqlite"),
	...(socialProviders ? { socialProviders } : {}),
	emailAndPassword: {
		enabled: true,
		async sendResetPassword(url, user) {
			console.log("Reset password url:", url);
		},
	},
});
