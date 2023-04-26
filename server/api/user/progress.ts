import { PrismaClient } from '@prisma/client'

import { protectRoute } from '~/server/utils'
import {
  LessonMeta,
  ChapterMeta,
  ChapterProgress,
  CourseProgress
} from '~/types/course'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  protectRoute(event)

  const { email: userEmail } = event.context.user

  const userProgress = await prisma.lessonProgress.findMany({
    where: {
      userEmail,
      Lesson: {
        Chapter: {
          Course: {
            id: 1
          }
        }
      }
    },
    select: {
      completed: true,
      Lesson: {
        select: {
          slug: true,
          Chapter: {
            select: {
              slug: true
            }
          }
        }
      }
    }
  })

  const courseMeta = await $fetch('/api/course/meta')

  if (!courseMeta) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Course metadata not found'
    })
  }

  const progress = courseMeta.chapters.reduce((courseProgress: CourseProgress, chapterMeta: ChapterMeta) => {
    courseProgress[chapterMeta.slug] = chapterMeta.lessons.reduce((chapterProgress: ChapterProgress, lessonMeta: LessonMeta) => {
      chapterProgress[lessonMeta.slug] = userProgress.find(progress => (
        progress.Lesson.slug === lessonMeta.slug && progress.Lesson.Chapter.slug === chapterMeta.slug
      ))?.completed ?? false

      return chapterProgress
    }, {})

    return courseProgress
  }, {})

  return progress
})
