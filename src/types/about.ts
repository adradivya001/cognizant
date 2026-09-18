export interface AboutHeroData {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  image?: string;
}

export interface StoryData {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image?: string;
}

export interface FactItem {
  value: string;
  label: string;
  iconName: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface MissionVisionData {
  eyebrow: string;
  title: string;
  mission: {
    title: string;
    officialStatement: string;
    points: string[];
  };
  vision: {
    title: string;
    officialStatement: string;
  };
}

export interface FounderMessageData {
  eyebrow: string;
  title: string;
  name: string;
  role: string;
  paragraphs: string[];
  closing: string;
  image?: string;
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AboutCtaData {
  title: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaHref: string;
}

export interface AboutPageData {
  hero: AboutHeroData;
  story: StoryData;
  facts: FactItem[];
  approach: ApproachStep[];
  missionVision: MissionVisionData;
  founderMessage: FounderMessageData;
  principles: PrincipleItem[];
  cta: AboutCtaData;
}
