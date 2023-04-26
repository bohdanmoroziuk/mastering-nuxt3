export type { Lesson } from '@prisma/client'

export type { CourseMeta, ChapterMeta, LessonMeta } from '~/server/api/course/meta.get'

export type ChapterProgress = Record<string, boolean>

export type CourseProgress = Record<string, ChapterProgress>
