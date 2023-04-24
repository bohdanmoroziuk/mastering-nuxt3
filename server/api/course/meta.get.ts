import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const lessonSelect = Prisma.validator<Prisma.LessonArgs>()({
  select: {
    title: true,
    slug: true,
    number: true
  }
})

export type LessonMeta = Prisma.LessonGetPayload<typeof lessonSelect>

const chapterSelect = Prisma.validator<Prisma.ChapterArgs>()({
  select: {
    title: true,
    slug: true,
    number: true,
    lessons: lessonSelect
  }
})

export type ChapterMeta = Prisma.ChapterGetPayload<typeof chapterSelect>

const courseSelect = Prisma.validator<Prisma.CourseArgs>()({
  select: {
    title: true,
    chapters: chapterSelect
  }
})

export type CourseMeta = Prisma.CourseGetPayload<typeof courseSelect>

export default defineEventHandler(async () => {
  const courseMeta = await prisma.course.findFirst(courseSelect)

  return courseMeta
})
