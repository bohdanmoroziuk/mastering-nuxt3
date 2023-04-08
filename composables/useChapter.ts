import { Course } from '~/types'

export const useChapter = (chapterSlug: string | string[], course?: Course) => {
  if (!course) { return ref(undefined) }

  const chapter = computed(() => (
    course
      .chapters
      .find(chapter => chapter.slug === chapterSlug)
  ))

  if (!chapter.value) { return ref(undefined) }

  return chapter
}
