<script setup lang="ts">
const course = await useCourse()

const chapters = computed(() => course.chapters)
</script>

<template>
  <div
    class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center"
  >
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">
          Course:
          <span class="font-bold">Mastering Nuxt 3</span>
        </span>
      </h1>
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
            href=""
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
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
