import { User } from '~/types'

export const useUser = (): User | null => {
  const user = useSupabaseUser()

  if (!user.value) {
    return null
  }

  const name = computed(() => user.value!.user_metadata.full_name)

  const avatar = computed(() => user.value!.user_metadata.avatar_url)

  return {
    name: name.value,
    avatar: avatar.value
  }
}
