const FREE_CHAPTER_SLUG = '1-chapter-1'

export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  console.log(user.value)

  if (user.value) { return }

  if (to.params.chapterSlug === FREE_CHAPTER_SLUG) { return }

  return navigateTo({
    name: 'login',
    query: {
      redirectTo: to.path
    }
  })
})
