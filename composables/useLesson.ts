import { Chapter } from '~/types/course'

export const useLesson = (lessonSlug: string | string[], chapter?: Chapter) => {
  if (!chapter) { return ref(undefined) }

  const lesson = computed(() => (
    chapter
      .lessons
      .find(lesson => lesson.slug === lessonSlug)
  ))

  if (!lesson.value) { return ref(undefined) }

  return lesson
}
