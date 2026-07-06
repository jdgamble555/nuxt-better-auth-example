<script setup lang="ts">
import { signOut, useSession } from "~/lib/auth-client";

const router = useRouter();
const session = useSession();
const user = computed(() => session.value.data?.user ?? null);
</script>

<template>
  <div
    class="min-h-[80vh] flex items-center justify-center overflow-hidden no-visible-scrollbar px-6 md:px-0"
  >
    <Card class="w-87.5">
      <CardHeader>
        <CardTitle> User </CardTitle>
      </CardHeader>
      <CardContent>
        <div v-if="user" class="flex gap-2 items-center">
          <Avatar class="bg-gray-200">
            <AvatarImage :src="user.image || ''" alt="User profile" />
            <AvatarFallback>{{ user.name?.[0] }}</AvatarFallback>
          </Avatar>
          <div>
            <p class="text-sm">{{ user.name }}</p>
            <p class="text-xs">{{ user.email }}</p>
          </div>
        </div>
        <div v-else class="flex gap-2 items-center">
          <Skeleton class="h-10 w-10 rounded-full" />
          <div class="space-y-2">
            <Skeleton class="h-4 w-28" />
            <Skeleton class="h-3 w-40" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          :disabled="!user"
          @click="
            async () => {
              await signOut();
              router.push('/');
            }
          "
          variant="secondary"
        >
          Sign Out
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
