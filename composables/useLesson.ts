import { Course } from '~/types'

export const useLesson = (
  course: Course,
  chapterSlug: string | string[],
  lessonSlug: string | string[]
) => (
  computed(() => (
    course
      .chapters
      .find(chapter => chapter.slug === chapterSlug)
      ?.lessons
      ?.find(lesson => lesson.slug === lessonSlug)
  ))
)
