import { EventsSectionData } from '../types/event';

export const eventsData: EventsSectionData = {
  eyebrow: "CAMPUS ANNOUNCEMENTS",
  title: "Latest Updates",
  description: "Stay informed with official admissions desk notices and examination schedules.",
  events: [
    {
      id: "admissions-open-2026",
      date: "Active Admissions Desk",
      category: "Admissions",
      title: "Admissions Open for Integrated Intermediate & Competitive Batches",
      shortDescription: "Enrollment active for M² Metamorph, E² Eagle Eye, and PV Pyrric Victors streams at Ramnagar Campus.",
      location: "Cognizant Ramnagar Campus, Anantapur"
    }
  ],
  emptyMessage: "Current campus updates and exam schedules will appear here.",
  cta: {
    label: "View All Updates",
    href: "/updates"
  }
};
