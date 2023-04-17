<script setup lang="ts">
import { User } from '~/types'

interface Props {
  user: User | null
}

defineProps<Props>()
</script>

<template>
  <div v-if="user" class="rounded p-3 flex items-center space-x-3 bg-white">
    <img :src="user.avatar" :alt="user.name" class="rounded-full w-12 h-12 border-2 border-blue-400">
    <div class="text-right">
      <div class="font-medium">
        {{ user.name }}
      </div>
      <button class="text-sm underline text-slate-500">
        Log out
      </button>
    </div>
  </div>
</template>
