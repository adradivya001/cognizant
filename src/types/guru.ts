export type SubjectType = 'Mathematics' | 'Chemistry' | 'Physics' | 'Biology';

export interface Guru {
  id: string;
  slug: string;
  name: string;
  subject: SubjectType;
  image?: string | null;
  highlights: string[];
  role?: string;
}

export interface GurusPageData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    breadcrumb: string;
  };
  introduction: string;
  gurus: Guru[];
  finalNote: string;
  cta: {
    title: string;
    primaryBtnText: string;
    secondaryBtnText: string;
  };
}
