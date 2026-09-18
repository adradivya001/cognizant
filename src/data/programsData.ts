import { ProgramsPageData, ProgramDetail } from '../types/program';

export const programsList: ProgramDetail[] = [
  {
    id: 'm2',
    slug: 'm2',
    code: 'M²',
    name: 'METAMORPH',
    shortDescription: 'An integrated academic program combining Intermediate education with focused competitive-exam preparation.',
    fullDescription: 'M² Metamorph is a comprehensive two-year integrated program designed for students moving from 10th to 11th class. It combines Intermediate Board education (MPC or BPC) with rigorous coaching for JEE and NEET competitive examinations.',
    audienceTag: '10th Passed → 11th Entering',
    targetStudents: 'Students moving from 10th to 11th class',
    duration: '2 Years (Integrated Intermediate + Coaching)',
    focus: [
      'Intermediate MPC / BPC',
      'JEE Mains & Advanced',
      'NEET Medical Entrance',
      'Foundational Problem Solving',
    ],
    subjects: [
      'Mathematics / Biology',
      'Physics',
      'Chemistry',
      'English (Taught by Cognizant Faculty)',
      'Sanskrit (Taught by Cognizant Faculty)',
    ],
    features: [
      'Integrated Intermediate Board curriculum + NEET/JEE coaching',
      'Choice of MPC or BPC group options',
      'English and Sanskrit language subjects taught by Cognizant faculty',
      'Daily problem-solving practice and concept synchronization',
      'Regular assessment and progress reporting',
    ],
    eligibility: ['Completion of 10th Class / SSC / CBSE / ICSE examination'],
    admission: {
      description: 'Direct admission following academic assessment and counseling.',
      isHistorical: true,
      historicalNote: 'Historical CAT-23 test references are archived and not active for current admission.',
    },
    status: 'active',
    cta: {
      text: 'Explore Program Details',
      href: '/programs/m2',
    },
  },
  {
    id: 'e2',
    slug: 'e2',
    code: 'E²',
    name: 'EAGLE EYE',
    shortDescription: 'A specialized Cognizant academic program built around focused competitive preparation.',
    fullDescription: 'Eagle Eye is a specialized academic preparation track. Detailed curriculum schedules and enrollment guidelines for current sessions are being updated.',
    audienceTag: 'Specialized Competitive Track',
    targetStudents: 'Program details are currently being updated',
    focus: ['Focused Preparation', 'Academic Development'],
    features: [
      'Specialized competitive preparation track',
      'Academic development and problem-solving focus',
    ],
    status: 'information-updating',
    cta: {
      text: 'Explore Program Details',
      href: '/programs/e2',
    },
  },
  {
    id: 'pv',
    slug: 'pv',
    code: 'PV',
    name: 'PYRRIC VICTORS',
    shortDescription: 'A one-year long-term competitive exam coaching program for 12th passed students.',
    fullDescription: 'PV Pyrric Victors is a dedicated 1-year long-term coaching program designed for 12th-class passed students aiming for top performance in NEET & JEE competitive exams.',
    audienceTag: '12th Passed / Intermediate Completed',
    targetStudents: '12th Class / Second Year Intermediate Passed Students',
    duration: '1 Year (Long-Term Intensive Coaching)',
    focus: [
      'NEET Long-Term Coaching',
      'JEE Long-Term Coaching',
      'Advanced Problem Solving',
      'Full-Length Mock Series',
    ],
    features: [
      'One-year dedicated long-term competitive coaching',
      'Comprehensive coverage of 11th and 12th competitive syllabus',
      'Intensive mock test series with granular performance analytics',
      'Personalized doubt remediation and mentor support',
    ],
    eligibility: ['Completion of 12th Class / 2nd Year Intermediate (MPC / BPC)'],
    admission: {
      description: 'Direct admission follows assessment of previous Intermediate / 12th examination results.',
    },
    status: 'active',
    cta: {
      text: 'Explore Program Details',
      href: '/programs/pv',
    },
  },
];

export const programsPageData: ProgramsPageData = {
  hero: {
    eyebrow: 'OUR PROGRAMS',
    title: 'Programs Designed Around the NEET & JEE Journey',
    description: 'Cognizant Institute provides structured academic pathways tailored for students at different stages of their competitive entrance preparation.',
    breadcrumb: 'Home / Programs',
  },
  gridHeader: {
    eyebrow: 'ACADEMIC PATHWAYS',
    title: 'Explore Our Programs',
    subtitle: 'Structured preparation pathways combining core board fundamentals with competitive NEET & JEE coaching.',
  },
  programs: programsList,
  comparisonRows: [
    {
      label: 'Target Student Stage',
      m2Value: '10th to 11th Moving Students',
      e2Value: 'Details updating',
      pvValue: '12th / Intermediate Passed Students',
    },
    {
      label: 'Program Duration',
      m2Value: '2 Years (Integrated)',
      e2Value: 'Details updating',
      pvValue: '1 Year (Long-Term)',
    },
    {
      label: 'Academic Group',
      m2Value: 'MPC / BPC + Languages',
      e2Value: 'Competitive Track',
      pvValue: 'NEET / JEE Focus',
    },
    {
      label: 'Admission Pathway',
      m2Value: 'Assessment & Counseling',
      e2Value: 'Details updating',
      pvValue: 'Direct Admission via 12th Marks Assessment',
    },
  ],
  journeySteps: [
    {
      stage: '10th Completed',
      programCode: 'M²',
      programName: 'Metamorph',
      description: 'Join 2-Year Integrated Intermediate + NEET/JEE preparation directly after 10th.',
    },
    {
      stage: 'Intermediate / 11th-12th',
      description: 'Strengthen fundamental concepts and pattern-proof problem solving.',
    },
    {
      stage: '12th Completed',
      programCode: 'PV',
      programName: 'Pyrric Victors',
      description: 'Join 1-Year Intensive Long-Term Coaching for dedicated NEET/JEE focus.',
    },
    {
      stage: 'Competitive Exam Success',
      description: 'Achieve admissions into top engineering and medical universities.',
    },
  ],
  cta: {
    title: 'Have Questions About Our Programs?',
    subtitle: 'Connect with Cognizant admissions desk to understand the right academic pathway for your educational goals.',
    primaryBtnText: 'Contact Cognizant',
    secondaryBtnText: 'Get Directions',
  },
};
