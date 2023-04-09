<script setup lang="ts">
const route = useRoute()

const chapterSlug = computed(() => route.params.chapterSlug)

const lessonSlug = computed(() => route.params.lessonSlug)

const course = await useCourse()

const chapter = useChapter(chapterSlug.value, course)

const lesson = useLesson(lessonSlug.value, chapter.value)

const title = computed(() => `${lesson.value?.title} - ${course.title}`)

useHead({
  title: title.value
})

const [isComplete, toggleComplete] = useCourseProgress(chapter.value!.number, lesson.value!.number)
</script>

<template>
  <div v-if="chapter && lesson">
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0">
      {{ lesson.title }}
    </h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <NuxtLink
        v-if="lesson.sourceUrl"
        class="font-normal text-md text-gray-500"
        :href="lesson.sourceUrl"
      >
        Download Source Code
      </NuxtLink>
      <NuxtLink
        v-if="lesson.downloadUrl"
        class="font-normal text-md text-gray-500"
        :href="lesson.downloadUrl"
      >
        Download Video
      </NuxtLink>
    </div>
    <VideoPlayer v-if="lesson.videoId" :video-id="lesson.videoId" />
    <p>{{ lesson.text }}</p>
    <ClientOnly>
      <LessonCompleteButton
        :model-value="isComplete"
        @update:model-value="toggleComplete"
      />
    </ClientOnly>
  </div>
</template>
