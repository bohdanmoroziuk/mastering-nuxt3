/* eslint-disable no-console */

import urlcat from 'urlcat'

import { CourseProgress } from '~/types/course'

export const useCourseProgressStore = defineStore('course-progress', () => {
  const progress = ref<CourseProgress>({})

  const percentageCompleted = computed(() => {
    const chapters = Object.values(progress.value).map(
      (chapter) => {
        const lessons = Object.values(chapter)
        const completedLessons = lessons.filter(
          lesson => lesson
        )
        return Number(
          (completedLessons.length / lessons.length) * 100
        ).toFixed(0)
      },
      []
    )

    const totalLessons = Object.values(
      progress.value
    ).reduce((number, chapter) => {
      return number + Object.values(chapter).length
    }, 0)

    const totalCompletedLessons = Object.values(
      progress.value
    ).reduce((number, chapter) => {
      return (
        number +
        Object.values(chapter).filter(lesson => lesson)
          .length
      )
    }, 0)

    const course = Number(
      (totalCompletedLessons / totalLessons) * 100
    ).toFixed(0)

    return {
      chapters,
      course
    }
  })

  const initialized = ref(false)

  function initialize () {
    if (initialized.value) { return }

    initialized.value = true

    const { data } = useFetch<CourseProgress>('/api/user/progress', {
      headers: useRequestHeaders(['cookie']) as HeadersInit
    })

    if (data.value) {
      progress.value = data.value
    }
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
    percentageCompleted,
    initialize,
    toggleComplete
  }
})
