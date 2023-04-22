export interface Lesson {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  sourceUrl?: string;
  videoId: number;
  text: string;
}

export interface Chapter {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[];
}

export interface Course {
  title: string;
  chapters: Chapter[];
}

export interface CourseMeta {
  title: string;
  chapters: {
    title: string;
    slug: string;
    number: number;
    lessons: {
      title: string;
      slug: string;
      number: number;
    }[]
  }[]
}
