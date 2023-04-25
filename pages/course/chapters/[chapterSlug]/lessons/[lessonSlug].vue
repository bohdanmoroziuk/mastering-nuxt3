<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const user = useSupabaseUser()

const route = useRoute()

const courseProgressStore = useCourseProgressStore()

const { initialize, toggleComplete } = courseProgressStore

const { chapterSlug, lessonSlug } = route.params

const isCompleted = computed(() => courseProgressStore.progress?.[chapterSlug as string]?.[lessonSlug as string] ?? false)

const courseMeta = await useCourseMeta()

const lesson = await useLesson(chapterSlug as string, lessonSlug as string)

const title = computed(() => `${lesson.value.title} - ${courseMeta.value.title}`)

initialize()

useHead({
  title: title.value
})
</script>

<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ lesson.number }}
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
    <LessonCompleteButton
      v-if="user"
      :model-value="isCompleted"
      @update:model-value="toggleComplete(chapterSlug as string, lessonSlug as string)"
    />
  </div>
</template>
