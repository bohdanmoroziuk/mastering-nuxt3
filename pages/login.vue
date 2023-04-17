<script setup lang="ts">
const course = useCourse()

const title = computed(() => course.title)

const supabase = useSupabaseClient()

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({ provider: 'github' })

  if (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
</script>

<template>
  <div class="prose w-full max-w-2xl h-9">
    <h1>Log in to {{ title }}</h1>
    <button
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      @click="login"
    >
      Log in with GitHub
    </button>
  </div>
</template>
