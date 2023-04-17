/* eslint-disable no-console */

export const useAuth = () => {
  const { auth } = useSupabaseClient()

  const login = async () => {
    const { error } = await auth.signInWithOAuth({ provider: 'github' })

    if (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    const { error } = await auth.signOut()

    if (error) {
      console.log(error)
      return
    }

    await navigateTo({ name: 'login' })
  }

  return {
    login,
    logout
  }
}
