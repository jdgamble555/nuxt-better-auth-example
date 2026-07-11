<script lang="ts" setup>
import { resetPassword } from "~/lib/auth-client.js";

const confirmPassword = ref("");
const password = ref("");

const handleResetPassword = async () => {
  if (confirmPassword.value !== password.value) {
    alert("Please enter same passwords");
    return;
  }

  await resetPassword({
    newPassword: password.value,
    fetchOptions: {
      onSuccess(context) {
        window.location.href = "/sign-in";
      },
      onError(context) {
        alert(context.error.message);
      },
    },
  });
};
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <Card class="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl">Reset Password</CardTitle>
        <CardDescription>Enter your new password below</CardDescription>
      </CardHeader>
      <CardContent>
        <form class="grid gap-4" @submit.prevent="handleResetPassword">
          <div class="grid gap-2">
            <Label for="new-password">New Password</Label>
            <Input
              id="new-password"
              type="password"
              autocomplete="new-password"
              required
              v-model="password"
              placeholder="New Password"
            />
          </div>
          <div class="grid gap-2">
            <Label for="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              autocomplete="new-password"
              required
              placeholder="Confirm Password"
              v-model="confirmPassword"
            />
          </div>
          <Button type="submit" class="w-full">Reset</Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
