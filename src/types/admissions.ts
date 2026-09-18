export type AdmissionStatus = 'open' | 'closed' | 'upcoming' | 'information-updating' | 'historical';

export interface AdmissionPathway {
  programId: string;
  programCode: string;
  programName: string;
  studentStage: string;
  duration?: string;
  streams?: string[];
  features?: string[];
  assessmentMethod?: string;
  status: AdmissionStatus;
  statusText: string;
  slug: string;
}

export interface SubjectQuestionCount {
  subject: string;
  count: number;
}

export interface HistoricalTestPattern {
  name: string;
  stream: string;
  durationMinutes: number;
  totalQuestions: number;
  questionType: string;
  subjectBreakdown: SubjectQuestionCount[];
}

export interface HistoricalMarkingScheme {
  correct: string;
  incorrect: string;
  unanswered: string;
}

export interface HistoricalAdmissionData {
  enabled: boolean;
  title: string;
  yearLabel: string;
  disclaimer: string;
  jeePattern: HistoricalTestPattern;
  neetPattern: HistoricalTestPattern;
  markingScheme: HistoricalMarkingScheme;
}

export interface AdmissionStep {
  stepNumber: number;
  programCode: string;
  title: string;
  description: string;
  badge?: string;
}

export interface AdmissionFAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AdmissionsPageData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    breadcrumb: string;
  };
  pathwayHeader: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  pathways: AdmissionPathway[];
  processHeader: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  processSteps: AdmissionStep[];
  historicalInformation: HistoricalAdmissionData;
  faqHeader: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  faqs: AdmissionFAQItem[];
  cta: {
    title: string;
    subtitle: string;
    primaryBtnText: string;
    secondaryBtnText: string;
  };
}
