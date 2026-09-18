// Tier 3 Content Loader: Abstracted data layer for all college configurations

// Cognizant Junior College Data (Primary)
import cognizantCollege from './content/colleges/cognizant/college.json';
import cognizantTheme from './content/colleges/cognizant/theme.json';
import cognizantSections from './content/colleges/cognizant/sections.json';
import cognizantNav from './content/colleges/cognizant/navigation.json';
import cognizantCourses from './content/colleges/cognizant/courses.json';
import cognizantFaculty from './content/colleges/cognizant/faculty.json';
import cognizantGallery from './content/colleges/cognizant/gallery.json';
import cognizantResults from './content/colleges/cognizant/results.json';
import cognizantUpdates from './content/colleges/cognizant/updates.json';
import cognizantSeo from './content/colleges/cognizant/seo.json';
import cognizantAbout from './content/colleges/cognizant/about.json';

// Chakra Junior College Data
import chakraCollege from './content/colleges/chakra/college.json';
import chakraTheme from './content/colleges/chakra/theme.json';
import chakraSections from './content/colleges/chakra/sections.json';
import chakraNav from './content/colleges/chakra/navigation.json';
import chakraCourses from './content/colleges/chakra/courses.json';
import chakraFacilities from './content/colleges/chakra/facilities.json';
import chakraHostel from './content/colleges/chakra/hostel.json';
import chakraSports from './content/colleges/chakra/sports.json';
import chakraDev from './content/colleges/chakra/student-development.json';
import chakraCampusLife from './content/colleges/chakra/campus-life.json';
import chakraGallery from './content/colleges/chakra/gallery.json';
import chakraSeo from './content/colleges/chakra/seo.json';

// Demo Junior College Data
import demoCollege from './content/colleges/demo/college.json';
import demoTheme from './content/colleges/demo/theme.json';
import demoSections from './content/colleges/demo/sections.json';
import demoNav from './content/colleges/demo/navigation.json';
import demoCourses from './content/colleges/demo/courses.json';
import demoFacilities from './content/colleges/demo/facilities.json';
import demoHostel from './content/colleges/demo/hostel.json';
import demoSports from './content/colleges/demo/sports.json';
import demoDev from './content/colleges/demo/student-development.json';
import demoCampusLife from './content/colleges/demo/campus-life.json';
import demoGallery from './content/colleges/demo/gallery.json';
import demoSeo from './content/colleges/demo/seo.json';

const collegeDatabase = {
  cognizant: {
    college: cognizantCollege,
    theme: cognizantTheme,
    sections: cognizantSections.sections,
    navigation: cognizantNav,
    courses: cognizantCourses,
    faculty: cognizantFaculty,
    gallery: cognizantGallery,
    results: cognizantResults,
    updates: cognizantUpdates,
    seo: cognizantSeo,
    about: cognizantAbout
  },
  chakra: {
    college: chakraCollege,
    theme: chakraTheme,
    sections: chakraSections.sections,
    navigation: chakraNav,
    courses: chakraCourses,
    facilities: chakraFacilities,
    hostel: chakraHostel,
    sports: chakraSports,
    studentDevelopment: chakraDev,
    campusLife: chakraCampusLife,
    gallery: chakraGallery,
    seo: chakraSeo
  },
  demo: {
    college: demoCollege,
    theme: demoTheme,
    sections: demoSections.sections,
    navigation: demoNav,
    courses: demoCourses,
    facilities: demoFacilities,
    hostel: demoHostel,
    sports: demoSports,
    studentDevelopment: demoDev,
    campusLife: demoCampusLife,
    gallery: demoGallery,
    seo: demoSeo
  }
};

/**
 * Returns a list of all configured colleges
 */
export function getAvailableColleges() {
  return [
    { id: 'cognizant', name: cognizantCollege.name, location: cognizantCollege.location.city },
    { id: 'chakra', name: chakraCollege.name, location: chakraCollege.location.city },
    { id: 'demo', name: demoCollege.name, location: demoCollege.location.city }
  ];
}

/**
 * Loads the complete dataset and configuration for a specified college ID
 * @param {string} collegeId 
 * @returns {object} Full college data bundle
 */
export function loadCollegeData(collegeId = 'cognizant') {
  const data = collegeDatabase[collegeId] || collegeDatabase.cognizant;
  return data;
}

/**
 * Helper to check if a specific section is enabled in the configuration
 */
export function isSectionEnabled(collegeData, sectionId) {
  if (!collegeData || !collegeData.sections) return true;
  const sec = collegeData.sections.find(s => s.id === sectionId);
  return sec ? sec.enabled !== false : true;
}
