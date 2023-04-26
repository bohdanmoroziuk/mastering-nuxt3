export type { Lesson } from '@prisma/client'

export type { CourseMeta } from '~/server/api/course/meta.get'

export type CourseProgress = Record<string, Record<string, boolean>>
