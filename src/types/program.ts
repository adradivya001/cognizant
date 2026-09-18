import { CTA } from './site';

export type ProgramStatus = 'active' | 'information-updating' | 'historical' | 'inactive';

export interface ProgramAdmissionInfo {
  description: string;
  isHistorical?: boolean;
  historicalNote?: string;
  criteria?: string[];
}

export interface ProgramDetail {
  id: string;
  slug: string;
  code: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  audienceTag: string;
  targetStudents: string;
  duration?: string;
  focus: string[];
  subjects?: string[];
  features?: string[];
  eligibility?: string[];
  admission?: ProgramAdmissionInfo;
  status: ProgramStatus;
  cta: CTA;
}

export interface ProgramComparisonRow {
  label: string;
  m2Value: string;
  e2Value: string;
  pvValue: string;
}

export interface JourneyStep {
  stage: string;
  programCode?: string;
  programName?: string;
  description: string;
}

export interface ProgramsPageData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    breadcrumb: string;
  };
  gridHeader: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  programs: ProgramDetail[];
  comparisonRows: ProgramComparisonRow[];
  journeySteps: JourneyStep[];
  cta: {
    title: string;
    subtitle: string;
    primaryBtnText: string;
    secondaryBtnText: string;
  };
}
