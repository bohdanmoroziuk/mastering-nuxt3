import course from '~/server/course'

export default defineEventHandler((event) => {
  const { params } = event.context

  const chapter = course.chapters.find(chapter => chapter.slug === params!.chapterSlug)

  if (!chapter) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Chapter not found'
    })
  }

  const lesson = chapter.lessons.find(lesson => lesson.slug === params!.lessonSlug)

  if (!lesson) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Lesson not found'
    })
  }

  return lesson
})
