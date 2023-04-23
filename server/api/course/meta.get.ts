import { CourseMeta } from '~/types/course'
import course from '~/server/course'

export default defineEventHandler((): CourseMeta => {
  return {
    title: course.title,
    chapters: course.chapters.map((chapter) => {
      return {
        title: chapter.title,
        slug: chapter.slug,
        number: chapter.number,
        lessons: chapter.lessons.map((lesson) => {
          return {
            title: lesson.title,
            slug: lesson.slug,
            number: lesson.number
          }
        })
      }
    })
  }
})
