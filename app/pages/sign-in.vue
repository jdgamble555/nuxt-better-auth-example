<script setup lang="ts">
import { signIn } from "~/lib/auth-client.js";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleSignIn = async () => {
    await signIn.email({
        email: email.value,
        password: password.value,
        callbackURL: "/dashboard",
        fetchOptions: {
            onError(context) {
                alert(context.error.message);
            },
            onSuccess() {
                router.push("/dashboard");
            },
        },
    });
};
</script>

<template>
    <div class="h-screen flex justify-center items-center">
        <Card class="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle class="text-2xl">
                    Login
                </CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form class="grid gap-4" @submit.prevent="handleSignIn">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" autocomplete="email" placeholder="m@example.com" v-model="email" required />
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password">Password</Label>
                            <a href="/forget-password" class="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </a>
                        </div>
                        <Input id="password" type="password" autocomplete="current-password" placeholder="password" v-model="password" required />
                    </div>
                    <Button type="submit" class="w-full">
                        Login
                    </Button>
                </form>
                <div class="mt-4 text-center text-sm">
                    Don't have an account?
                    <a href="/sign-up" class="underline">
                        Sign up
                    </a>
                </div>
            </CardContent>
        </Card>
    </div>
</template>