import { CTA } from './site';

export type EventItem = {
  id: string;
  date: string;
  category: 'Admissions' | 'Academic' | 'Orientation' | 'Announcement';
  title: string;
  shortDescription: string;
  location?: string;
  isHistorical?: boolean;
};

export type EventsSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  events: EventItem[];
  emptyMessage?: string;
  cta: CTA;
};
