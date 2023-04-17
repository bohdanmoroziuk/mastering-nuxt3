<script setup lang="ts">
const course = useCourse()

const title = computed(() => course.title)

const chapters = computed(() => course.chapters)

const resetError = (error: Ref<unknown>) => {
  error.value = null
}

const user = useUser()
</script>

<template>
  <div>
    <div class="mb-4 flex justify-between items-center w-full">
      <h1 class="text-3xl font-bold">
        {{ title }}
      </h1>
      <UserCard :user="user" />
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
      >
        <h3>Chapters</h3>
        <div
          v-for="chapter of chapters"
          :key="chapter.slug"
          class="space-y-1 mb-4 flex flex-col"
        >
          <h4>
            {{ chapter.title }}
          </h4>
          <NuxtLink
            v-for="(lesson, lessonIndex) of chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal"
            :to="`/course/chapters/${chapter.slug}/lessons/${lesson.slug}`"
            active-class="text-blue-500"
          >
            <span class="text-gray-500">
              {{ lessonIndex + 1 }}.
            </span>
            <span>
              {{ lesson.title }}
            </span>
          </NuxtLink>
        </div>
      </div>

      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <NuxtErrorBoundary>
          <NuxtPage />

          <template #error="{ error }">
            <div>
              <p>
                Oh no, something went wrong with the lesson!
                <code>{{ error }}</code>
              </p>
              <button
                class="bg-gray-500 text-white font-bold py-1 px-3 rounded hover:cursor-pointer"
                @click="resetError(error)"
              >
                Reset
              </button>
            </div>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>
