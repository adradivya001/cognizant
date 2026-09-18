export type ExamCategory = 'ALL' | 'IITJEE' | 'JEE ADVANCED' | 'EAMCET' | 'AIEEE' | 'NEET / MEDICAL' | 'OTHER ENTRANCE EXAMS';

export interface AchievementItem {
  id: string;
  value: string;
  label: string;
  examCategory: ExamCategory;
  description: string;
  facultyMentor: string;
  sourceType: 'mentor-track-record' | 'historical-achievement';
  year?: string;
}

export interface FacultyAchievementGroup {
  facultyName: string;
  subject: string;
  highlights: string[];
}

export interface JourneyStep {
  stepNumber: number;
  stageName: string;
  description: string;
}

export interface ResultsPageData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    breadcrumb: string;
  };
  intro: {
    title: string;
    description: string;
  };
  achievementsHeader: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  achievements: AchievementItem[];
  facultyAchievementsHeader: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  facultyGroups: FacultyAchievementGroup[];
  journeyHeader: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  journeySteps: JourneyStep[];
  navigationCards: {
    whyCognizant: {
      title: string;
      description: string;
      btnText: string;
      link: string;
    };
    meetGurus: {
      title: string;
      description: string;
      btnText: string;
      link: string;
    };
  };
  cta: {
    title: string;
    subtitle: string;
    primaryBtnText: string;
    secondaryBtnText: string;
  };
}
