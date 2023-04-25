import { StorageSerializers } from '@vueuse/core'

export const useCachedFetch = async <T>(url: string) => {
  const cache = useSessionStorage<T>(
    url,
    null,
    {
      serializer: StorageSerializers.object
    }
  )

  if (cache.value) {
    return cache
  }

  const { data, error } = await useFetch<T>(url, {
    headers: useRequestHeaders(['cookie']) as HeadersInit
  })

  if (error.value) {
    throw createError(error.value)
  }

  cache.value = data.value as T

  return cache
}
