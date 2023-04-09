type CourseProgressRecord = (boolean | undefined)[]

type CourseProgress = CourseProgressRecord[]

export const useCourseProgress = (chapterNumber: number, lessonNumber: number) => {
  const progress = useState<CourseProgress>('course-progress', () => { return [] })

  const isLessonComplete = computed(() => {
    if (!progress.value[chapterNumber - 1]) { return false }

    if (!progress.value[chapterNumber - 1][lessonNumber - 1]) { return false }

    return progress.value[chapterNumber - 1][lessonNumber - 1]
  })

  const toggleLessonComplete = () => {
    if (!progress.value[chapterNumber - 1]) {
      progress.value[chapterNumber - 1] = []
    }

    progress.value[chapterNumber - 1][lessonNumber - 1] = !isLessonComplete.value
  }

  return [isLessonComplete, toggleLessonComplete] as const
}
