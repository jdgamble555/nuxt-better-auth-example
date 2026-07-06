<script setup lang="ts">
import { AvatarImage as AvatarImagePrimitive, type AvatarImageProps } from "radix-vue";

const props = defineProps<AvatarImageProps>();
</script>

<template>
  <AvatarImagePrimitive v-bind="props" class="h-full w-full object-cover" />
</template>
