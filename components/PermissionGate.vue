<script setup lang="ts">
const { isLoggedIn } = useAuth()
</script>

<template>
  <slot v-if="isLoggedIn" />
  <slot v-else name="no-access" />
</template>
