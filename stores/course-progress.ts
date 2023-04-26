import { CourseProgress } from '~/types/course'

export const useCourseProgressStore = defineStore('course-progress', () => {
  const progress = useLocalStorage<CourseProgress>('course-progress', {})

  const initialized = ref(false)

  function initialize () {
    if (initialized.value) { return }

    initialized.value = true
  }

  function toggleComplete (chapter: string, lesson: string) {
    const user = useSupabaseUser()

    if (!user.value) { return }

    const currentProgress = progress.value?.[chapter]?.[lesson]

    progress.value[chapter] = {
      ...progress.value[chapter],
      [lesson]: !currentProgress
    }
  }

  return {
    progress,
    initialize,
    toggleComplete
  }
})
