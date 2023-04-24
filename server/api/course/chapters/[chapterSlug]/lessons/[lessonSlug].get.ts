import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { chapterSlug, lessonSlug } = event.context.params!

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      Chapter: {
        slug: chapterSlug
      }
    }
  })

  if (lesson) { return lesson }

  throw createError({
    statusCode: 404,
    statusMessage: 'Lesson not found'
  })
})
