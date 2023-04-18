<script setup lang="ts">
const route = useRoute()

const course = useCourse()

const title = computed(() => course.title)

const { isLoggedIn, login } = useAuth()

const redirectTo = computed(() => `${location.origin}${route.query.redirectTo}`)

watchEffect(async () => {
  if (isLoggedIn.value) {
    await navigateTo(route.query.redirectTo as string, { replace: true })
  }
})
</script>

<template>
  <div class="prose w-full max-w-2xl h-9">
    <h1>Log in to {{ title }}</h1>
    <button
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      @click="login({ redirectTo })"
    >
      Log in with GitHub
    </button>
  </div>
</template>
