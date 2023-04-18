/* eslint-disable no-console */

interface LoginOptions {
  redirectTo?: string
}

export const useAuth = () => {
  const client = useSupabaseClient()

  const user = useSupabaseUser()

  const isLoggedIn = computed(() => !!user.value)

  const login = async (options?: LoginOptions) => {
    const { error } = await client.auth.signInWithOAuth({ provider: 'github', options })

    if (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    const { error } = await client.auth.signOut()

    if (error) {
      console.log(error)
      return
    }

    await navigateTo({ name: 'login' })
  }

  return {
    isLoggedIn,
    login,
    logout
  }
}
