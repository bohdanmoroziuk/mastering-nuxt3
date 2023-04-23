import urlcat from 'urlcat'

import { Lesson } from '~/types/course'

export const useLesson = async (
  chapterSlug: string,
  lessonSlug: string
) => {
  const url = urlcat('/api/course/chapters/:chapterSlug/lessons/:lessonSlug', { chapterSlug, lessonSlug })

  const { error, data } = await useFetch<Lesson>(url)

  if (error.value) {
    throw createError({
      statusCode: 404,
      statusMessage: `Could not fetch lesson "${lessonSlug}" in chapter "${chapterSlug}"`
    })
  }

  return data as Ref<Lesson>
}
