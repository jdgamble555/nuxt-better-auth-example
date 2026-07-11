<script setup lang="ts">
import { useSession } from "~/lib/auth-client";

definePageMeta({
  layout: "default",
});

const features = [
  "Email & Password",
  "Organization | Teams",
  "Passkeys",
  "Multi Factor",
  "Password Reset",
  "Email Verification",
  "Roles & Permissions",
  "Rate Limiting",
  "Session Management",
];
const session = useSession();
</script>

<template>
  <div
    class="min-h-[80vh] flex items-center justify-center overflow-hidden no-visible-scrollbar px-6 md:px-0"
  >
    <main class="flex flex-col gap-4 row-start-2 items-center justify-center">
      <div class="flex flex-col gap-1">
        <h3 class="font-bold text-4xl text-black dark:text-white text-center">
          Better Auth.
        </h3>

        <p class="text-center wrap-break-word text-sm md:text-base">
          <span class="inline-flex items-center gap-2">
            <span
              class="relative inline-block -rotate-2 pr-1 text-[0.78rem] font-black uppercase tracking-[0.16em] text-red-600/80"
            >
              <span
                class="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 -rotate-3 rounded-full bg-linear-to-r from-red-400 via-red-600 to-red-400 shadow-[0_0_10px_rgba(220,38,38,0.45)]"
              />
              <span>official</span>
            </span>
            <span
              class="inline-flex items-center rounded-full border border-blue-500/40 bg-linear-to-r from-blue-500/10 to-blue-500/10 px-2.5 py-0.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-blue-700 shadow-sm"
            >
              unofficial
            </span>
          </span>
          demo to showcase
          <a
            href="https://better-auth.com"
            target="_blank"
            className="italic underline"
            >better-auth
          </a>
          features and capabilities. <br />
        </p>

        <div class="flex flex-col gap-3 pt-2 flex-wrap">
          <div class="border-y py-2 border-dotted bg-secondary/60 opacity-80">
            <div
              class="text-xs flex items-center gap-2 justify-center text-muted-foreground"
            >
              <span class="text-center">
                All features on this demo are Implemented with Better Auth
                without any custom backend code
              </span>
            </div>
          </div>
          <div class="flex gap-2 justify-center flex-wrap">
            <div v-for="feature in features" :key="feature">
              <span
                class="border-b pb-1 text-muted-foreground text-xs cursor-pointer hover:text-foreground duration-150 ease-in-out transition-all hover:border-foreground flex items-center gap-1"
                >{{ feature }}
              </span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 mt-2 mx-auto">
          <NuxtLink to="/sign-in" v-if="!session?.data">
            <Button variant="outline" class="rounded-none"> Sign In </Button>
          </NuxtLink>
          <NuxtLink to="/dashboard" v-if="session?.data">
            <Button variant="outline" class="rounded-none"> Dashboard </Button>
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>
