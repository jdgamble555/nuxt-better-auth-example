<script lang="ts" setup>
import { changePassword } from "~/lib/auth-client.js";

const router = useRouter();

const currentPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const handleChangePassword = async () => {
  if (confirmPassword.value !== newPassword.value) {
    alert("Please enter the same password in both fields");
    return;
  }

  await changePassword({
    currentPassword: currentPassword.value,
    newPassword: newPassword.value,
    fetchOptions: {
      onSuccess() {
        alert("Password changed successfully");
        router.push("/dashboard");
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
        <CardTitle class="text-2xl">Change Password</CardTitle>
        <CardDescription
          >Enter your current password and choose a new one</CardDescription
        >
      </CardHeader>
      <CardContent>
        <form class="grid gap-4" @submit.prevent="handleChangePassword">
          <div class="grid gap-2">
            <Label for="current-password">Current Password</Label>
            <Input
              id="current-password"
              type="password"
              autocomplete="current-password"
              required
              v-model="currentPassword"
              placeholder="Current Password"
            />
          </div>
          <div class="grid gap-2">
            <Label for="new-password">New Password</Label>
            <Input
              id="new-password"
              type="password"
              autocomplete="new-password"
              required
              v-model="newPassword"
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
          <Button type="submit" class="w-full">Change Password</Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
