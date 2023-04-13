<script setup lang="ts">
import { NuxtError } from '#app'

const error = useError()

const handleError = () => {
  clearError({
    redirect: '/course/chapters/1-chapter-1/lessons/1-introduction-to-typescript-with-vue-js-3'
  })
}
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col">
      <div
        v-if="(error as NuxtError).statusCode === 404"
        class="prose"
      >
        <h1>404</h1>
      </div>
      <div
        v-else
        class="prose"
      >
        <h1>Dang</h1>
        <p>It looks like something broke!</p>
        <p>Sorry about that.</p>
      </div>
      <div class="prose mt-5">
        <p class="font-bold">
          {{ error?.message }}
        </p>
        <p>
          Go to the
          <a
            class="hover:cursor-pointer"
            @click="handleError"
          >
            first lesson
          </a>
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
