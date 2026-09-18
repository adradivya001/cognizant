import { siteConfig } from '../data/siteConfig';
import { homeData } from '../data/homeData';
import { programsData } from '../data/programsData';
import { gurusData } from '../data/gurusData';
import { eventsData } from '../data/eventsData';

import { SiteConfig, HomeData } from '../types/site';
import { ProgramsSectionData } from '../types/program';
import { GurusSectionData } from '../types/guru';
import { EventsSectionData } from '../types/event';

/**
 * Service abstraction layer for fetching content.
 * Structuring it this way ensures backend/Supabase API integration
 * can replace static datasets seamlessly in the future without modifying UI components.
 */
export const contentService = {
  getSiteConfig(): SiteConfig {
    return siteConfig;
  },

  getHomePageData(): HomeData {
    return homeData;
  },

  getPrograms(): ProgramsSectionData {
    return programsData;
  },

  getGurus(): GurusSectionData {
    return gurusData;
  },

  getEvents(): EventsSectionData {
    return eventsData;
  }
};
