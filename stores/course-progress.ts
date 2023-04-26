/* eslint-disable no-console */

import urlcat from 'urlcat'

import { CourseProgress } from '~/types/course'

export const useCourseProgressStore = defineStore('course-progress', () => {
  const progress = ref<CourseProgress>({})

  const initialized = ref(false)

  function initialize () {
    if (initialized.value) { return }

    initialized.value = true
  }

  async function toggleComplete (chapter: string, lesson: string) {
    const currentProgress = progress.value?.[chapter]?.[lesson]

    progress.value[chapter] = {
      ...progress.value[chapter],
      [lesson]: !currentProgress
    }

    try {
      const url = urlcat('/api/course/chapters/:chapter/lessons/:lesson/progress', { chapter, lesson })

      await $fetch(url, {
        method: 'POST',
        body: {
          completed: !currentProgress
        }
      })
    } catch (error) {
      console.error(error)

      progress.value[chapter] = {
        ...progress.value[chapter],
        [lesson]: currentProgress
      }
    }
  }

  return {
    progress,
    initialize,
    toggleComplete
  }
})
