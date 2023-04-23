import { User } from '~/types/user'

export const useUser = (): Ref<User | null> => {
  const user = useSupabaseUser()

  if (!user.value) {
    return ref(null)
  }

  const name = computed(() => user.value!.user_metadata.full_name)

  const avatar = computed(() => user.value!.user_metadata.avatar_url)

  return ref({
    name: name.value,
    avatar: avatar.value
  })
}
