<script setup lang="ts">
import { User } from '~/types/user'

interface Props {
  user: User | null
}

interface Emits {
  (event: 'logout'): void
}

defineProps<Props>()

const emit = defineEmits<Emits>()

const logout = () => {
  emit('logout')
}
</script>

<template>
  <div v-if="user" class="rounded p-3 flex items-center space-x-3 bg-white">
    <img :src="user.avatar" :alt="user.name" class="rounded-full w-12 h-12 border-2 border-blue-400">
    <div class="text-right">
      <div class="font-medium">
        {{ user.name }}
      </div>
      <button
        class="text-sm underline text-slate-500"
        @click="logout"
      >
        Log out
      </button>
    </div>
  </div>
</template>
