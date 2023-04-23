export interface Lesson {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  sourceUrl?: string;
  videoId: number;
  text: string;
}

export interface LessonMeta {
  title: string;
  slug: string;
  number: number;
}

export interface Chapter {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[];
}

export interface ChapterMeta {
  title: string;
  slug: string;
  number: number;
  lessons: LessonMeta[];
}

export interface Course {
  title: string;
  chapters: Chapter[];
}

export interface CourseMeta {
  title: string;
  chapters: ChapterMeta[];
}
