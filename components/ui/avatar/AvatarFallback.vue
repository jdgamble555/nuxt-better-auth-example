<script setup lang="ts">
import { AvatarFallback as AvatarFallbackPrimitive, type AvatarFallbackProps } from "radix-vue";

const props = defineProps<AvatarFallbackProps>();
</script>

<template>
  <AvatarFallbackPrimitive v-bind="props">
    <slot />
  </AvatarFallbackPrimitive>
</template>
