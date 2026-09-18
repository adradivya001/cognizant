import { AdmissionsPageData } from '../types/admissions';

export const admissionsData: AdmissionsPageData = {
  hero: {
    eyebrow: 'ADMISSIONS',
    title: 'Begin Your Academic Journey With Cognizant',
    description: 'Explore verified admission pathways for 2-Year Integrated Intermediate and Long-Term NEET/JEE coaching programs at Cognizant Institute.',
    breadcrumb: 'Home / Admissions',
  },

  pathwayHeader: {
    eyebrow: 'PROGRAM PATHWAYS',
    title: 'Choose Your Academic Pathway',
    subtitle: 'Select from our specialized academic offerings tailored for 10th moving and 12th passed students.',
  },

  pathways: [
    {
      programId: 'm2',
      programCode: 'M²',
      programName: 'METAMORPH',
      studentStage: 'For students moving from 10th to 11th Class',
      duration: 'Two-year integrated program',
      streams: ['MPC (Maths, Physics, Chemistry)', 'BPC (Biology, Physics, Chemistry)'],
      features: [
        'Integrated with Cognizant Junior College',
        'Focused coaching for JEE & NEET',
        'English & Sanskrit taught by Cognizant faculty',
      ],
      assessmentMethod: 'Admissions guided by academic consultation & assessment guidelines',
      status: 'information-updating',
      statusText: 'Admission details being updated',
      slug: 'm2',
    },
    {
      programId: 'pv',
      programCode: 'PV',
      programName: 'PYRRIC VICTORS',
      studentStage: 'For 12th Class / 2nd Year Intermediate passed students',
      duration: 'One-year long-term coaching',
      streams: ['NEET Long-Term', 'JEE Long-Term'],
      features: [
        'Dedicated long-term repeaters coaching',
        'Rigorous entrance exam focus',
        'Direct admission process',
      ],
      assessmentMethod: 'Direct admission only after assessment of previous academic result',
      status: 'information-updating',
      statusText: 'Admission details being updated',
      slug: 'pv',
    },
    {
      programId: 'e2',
      programCode: 'E²',
      programName: 'EAGLE EYE',
      studentStage: 'Intermediate / Entrance Exam Aspirants',
      duration: 'Program duration based on batch allocation',
      features: [
        'Specialized academic mentorship',
        'Targeted competitive exam prep',
      ],
      status: 'information-updating',
      statusText: 'Admission details are currently being updated',
      slug: 'e2',
    },
  ],

  processHeader: {
    eyebrow: 'ADMISSION GUIDELINES',
    title: 'How Admission Information Works',
    subtitle: 'Verified admission procedures based strictly on official Cognizant program criteria.',
  },

  processSteps: [
    {
      stepNumber: 1,
      programCode: 'M²',
      title: 'Integrated Program Admissions (M²)',
      description: 'Designed for students transitioning from 10th to 11th standard. Students can opt for MPC or BPC streams with integrated Junior College education and specialized JEE/NEET preparation.',
      badge: '10th → 11th Moving',
    },
    {
      stepNumber: 2,
      programCode: 'PV',
      title: 'Long-Term Direct Admissions (PV)',
      description: 'For 12th-class / second-year intermediate passed candidates seeking one-year intensive long-term coaching. Admission is granted directly following the assessment of previous academic results.',
      badge: '12th Passed Direct Admission',
    },
    {
      stepNumber: 3,
      programCode: 'General',
      title: 'Current Session Updates & Consultation',
      description: 'For current batch availability, session start dates, and counseling scheduling, please contact Cognizant Institute administrative offices directly.',
      badge: 'Official Enquiry',
    },
  ],

  historicalInformation: {
    enabled: true,
    title: 'HISTORICAL ADMISSION INFORMATION — CAT-23',
    yearLabel: 'CAT-23 — Historical Reference',
    disclaimer: 'Historical information — not a current admission schedule.',
    jeePattern: {
      name: 'JEE / MPC Admission Test',
      stream: 'Engineering Pathway (MPC)',
      durationMinutes: 75,
      totalQuestions: 50,
      questionType: 'Objective Multiple Choice',
      subjectBreakdown: [
        { subject: 'Mathematics', count: 20 },
        { subject: 'Physics', count: 15 },
        { subject: 'Chemistry', count: 15 },
      ],
    },
    neetPattern: {
      name: 'NEET / BPC Admission Test',
      stream: 'Medical Pathway (BPC)',
      durationMinutes: 75,
      totalQuestions: 50,
      questionType: 'Objective Multiple Choice',
      subjectBreakdown: [
        { subject: 'Biology', count: 15 },
        { subject: 'Physics', count: 15 },
        { subject: 'Chemistry', count: 15 },
        { subject: 'Mathematics', count: 5 },
      ],
    },
    markingScheme: {
      correct: '+4 marks for correct answer',
      incorrect: '-1 mark for incorrect answer',
      unanswered: '0 marks for unanswered questions',
    },
  },

  faqHeader: {
    eyebrow: 'FREQUENTLY ASKED QUESTIONS',
    title: 'Admission Frequently Asked Questions',
    subtitle: 'Answers supported strictly by verified Cognizant institutional data.',
  },

  faqs: [
    {
      id: 'faq-m2',
      question: 'Who is eligible for the M² Metamorph program?',
      answer: 'M² is a two-year integrated program with Cognizant Junior College designed for students moving from 10th to 11th class, offering MPC and BPC streams with focused JEE & NEET coaching.',
    },
    {
      id: 'faq-pv',
      question: 'What is the admission procedure for the PV Pyrric Victors program?',
      answer: 'The PV (Pyrric Victors) long-term program for 12th class / second-year intermediate passed students offers direct admission following an assessment of previous academic results.',
    },
    {
      id: 'faq-subjects',
      question: 'Are non-science subjects taught at Cognizant Junior College?',
      answer: 'Yes, languages including English and Sanskrit are taught directly by Cognizant faculty alongside core science subjects and entrance examination preparation.',
    },
    {
      id: 'faq-cat23',
      question: 'What is the status of entrance tests like CAT-23?',
      answer: 'CAT-23 test patterns refer to historical entrance assessment data. Current admission guidelines and session updates for upcoming batches are currently being finalized by the institute.',
    },
  ],

  cta: {
    title: 'Have Questions About Admissions?',
    subtitle: 'Connect with Cognizant for current admission information and academic guidance.',
    primaryBtnText: 'Contact Cognizant',
    secondaryBtnText: 'Explore Programs',
  },
};
