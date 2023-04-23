import { CourseMeta } from '~/types/course'

export const useCourseMeta = async () => {
  const url = '/api/course/meta'

  const courseMeta = await useCachedFetch<CourseMeta>(url)

  return courseMeta
}
