import urlcat from 'urlcat'

import { Lesson } from '@prisma/client'

export const useLesson = async (chapterSlug: string, lessonSlug: string) => {
  const url = urlcat('/api/course/chapters/:chapterSlug/lessons/:lessonSlug', { chapterSlug, lessonSlug })

  const lesson = await useCachedFetch<Lesson>(url)

  return lesson
}
