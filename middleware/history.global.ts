export default defineNuxtRouteMiddleware((to) => {
  const history = useLocalStorage<string[]>('history', [])

  history.value.push(to.path)
})
