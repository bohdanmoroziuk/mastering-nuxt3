<script setup lang="ts">
const route = useRoute()

const course = await useCourse()

const chapterSlug = computed(() => route.params.chapterSlug)

const lessonSlug = computed(() => route.params.lessonSlug)

const lesson = useLesson(course, chapterSlug.value, lessonSlug.value)
</script>

<template>
  <div>
    <h2>Lesson</h2>
    <p>This is a lesson</p>
    <p>Chapter slug: {{ $route.params.chapterSlug }}</p>
    <p>Lesson slug: {{ $route.params.lessonSlug }}</p>
    {{ lesson?.text }}
  </div>
</template>
