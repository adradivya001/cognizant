export interface WhyCognizantHeroData {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
}

export interface WhyIntroData {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface QualityFeatureItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
}

export interface QualitySectionData {
  statement: string;
  title: string;
  features: QualityFeatureItem[];
}

export interface MethodologyStep {
  number: string;
  stage: string;
  title: string;
  description: string;
}

export interface MethodologyData {
  title: string;
  description: string;
  steps: MethodologyStep[];
}

export interface StudyMaterialData {
  title: string;
  highlight: string;
  description: string;
  features: string[];
}

export interface InfrastructureData {
  title: string;
  description: string;
  features: string[];
}

export interface CounsellingData {
  title: string;
  description: string;
  steps: Array<{
    stage: string;
    description: string;
  }>;
}

export interface WinningProcessStep {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
}

export interface WhyCognizantCtaData {
  title: string;
  subtitle: string;
  primaryBtnText: string;
  secondaryBtnText: string;
}

export interface WhyCognizantPageData {
  hero: WhyCognizantHeroData;
  intro: WhyIntroData;
  quality: QualitySectionData;
  methodology: MethodologyData;
  studyMaterial: StudyMaterialData;
  infrastructure: InfrastructureData;
  counselling: CounsellingData;
  winningProcess: WinningProcessStep[];
  cta: WhyCognizantCtaData;
}
