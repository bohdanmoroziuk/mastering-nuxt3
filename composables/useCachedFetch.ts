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

  const { error, data } = await useFetch<T>(url)

  if (error.value) {
    throw createError(error.value)
  }

  cache.value = data.value as T

  return cache
}
