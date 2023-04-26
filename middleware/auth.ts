import { FREE_CHAPTER_SLUG } from '~/config'

export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  if (user.value) { return }

  if (to.params.chapterSlug === FREE_CHAPTER_SLUG) { return }

  return navigateTo({
    name: 'login',
    query: {
      redirectTo: to.path
    }
  })
})
