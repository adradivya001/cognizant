import { ResultsPageData } from '../types/results';

export const resultsData: ResultsPageData = {
  hero: {
    eyebrow: 'RESULTS & ACHIEVEMENTS',
    title: 'Experience and Outcomes That Shape the Journey',
    description: 'Documented mentor achievements and academic track record built over decades of competitive exam guidance.',
    breadcrumb: 'Home / Results',
  },

  intro: {
    title: 'Performance Built Over Years of Academic Mentorship',
    description: 'At Cognizant Institute, student outcomes are driven by senior faculty with proven histories of guiding aspirants to top engineering and medical ranks. Below is the verified track record of academic mentorship delivered by our lead faculty team.',
  },

  achievementsHeader: {
    eyebrow: 'MENTOR TRACK RECORD',
    title: 'Key Academic Accomplishments',
    subtitle: 'Verified track record highlights generated through lead faculty guidance in national and state entrance examinations.',
  },

  achievements: [
    {
      id: 'air-7-iitjee',
      value: 'AIR 7',
      label: 'IITJEE Top Rank',
      examCategory: 'IITJEE',
      description: 'Documented national top 10 rank achieved under mentor guidance of Sri. S V Ratnakar Prasad.',
      facultyMentor: 'Sri. S V Ratnakar Prasad',
      sourceType: 'mentor-track-record',
    },
    {
      id: 'eamcet-first-rank',
      value: '1st Rank × 3',
      label: 'EAMCET First Rank',
      examCategory: 'EAMCET',
      description: 'Produced EAMCET 1st rank 3 separate times during extensive JEE/EAMCET coaching career.',
      facultyMentor: 'Sri. S V Ratnakar Prasad',
      sourceType: 'mentor-track-record',
    },
    {
      id: 'aieee-single-digit',
      value: 'Top 9 × 3',
      label: 'AIEEE Single-Digit Ranks',
      examCategory: 'AIEEE',
      description: 'Single-digit national ranks achieved 3 times in AIEEE examination mentorship.',
      facultyMentor: 'Sri. S V Ratnakar Prasad',
      sourceType: 'mentor-track-record',
    },
    {
      id: '450-iitians',
      value: '450+',
      label: 'IITians Produced',
      examCategory: 'IITJEE',
      description: 'Over 450 students mentored into premier Indian Institutes of Technology (IITs).',
      facultyMentor: 'Sri. S V Ratnakar Prasad',
      sourceType: 'mentor-track-record',
    },
    {
      id: '250-medicos',
      value: '250+',
      label: 'Medicos Produced',
      examCategory: 'NEET / MEDICAL',
      description: 'Over 250 medical aspirants successfully guided into MBBS and medical colleges.',
      facultyMentor: 'Sri. Satya Prakash',
      sourceType: 'mentor-track-record',
    },
    {
      id: 'jee-adv-2013',
      value: 'Topper',
      label: 'JEE Advanced 2013',
      examCategory: 'JEE ADVANCED',
      description: 'Achieved top honors in JEE Advanced examination (2013 batch).',
      facultyMentor: 'Sri. Vipin Kumar',
      sourceType: 'historical-achievement',
      year: '2013',
    },
    {
      id: 'jee-adv-2012',
      value: 'Topper',
      label: 'JEE Advanced 2012',
      examCategory: 'JEE ADVANCED',
      description: 'Achieved top honors in JEE Advanced examination (2012 batch).',
      facultyMentor: 'Sri. Tapas Vaibhav',
      sourceType: 'historical-achievement',
      year: '2012',
    },
    {
      id: 'other-entrance-exams',
      value: 'Ranks 12',
      label: 'CUSAT, WBJEE & BITSAT',
      examCategory: 'OTHER ENTRANCE EXAMS',
      description: 'Cracked CUSAT Rank 12, WBJEE Rank 12, and BITSAT Rank 12 in engineering entrances.',
      facultyMentor: 'Sri. Tapas Vaibhav',
      sourceType: 'historical-achievement',
      year: '2012',
    },
  ],

  facultyAchievementsHeader: {
    eyebrow: 'FACULTY EXCELLENCE',
    title: 'Achievements Across the Faculty',
    subtitle: 'Comprehensive achievement portfolios of the Gurus leading Cognizant Institute classes.',
  },

  facultyGroups: [
    {
      facultyName: 'Sri. S V Ratnakar Prasad',
      subject: 'Mathematics',
      highlights: [
        '25 years of Experience in JEE Coaching',
        'Produced EAMCET first rank 3 times',
        'AIEEE Single digit ranks 3 times',
        'AIR 7 in IITJEE',
        'Several double digit ranks in IITJEE and more than 450 IITians',
        'Worked in ALLEN as Centre Head',
        'Professor in FIITJEE',
        'Sr IIT Lecturer in Sri Chaitanya',
      ],
    },
    {
      facultyName: 'Sri. Vipin Kumar',
      subject: 'Mathematics',
      highlights: [
        'B.Tech from IIT INDORE',
        'M.Tech from MNNIT-Allahabad',
        'Topper in JEE Advanced - 2013',
      ],
    },
    {
      facultyName: 'Sri. Tapas Vaibhav',
      subject: 'Physics',
      highlights: [
        'B.Tech in Mechanical Engineering from IIT-ISM Dhanbad, 2016 batch',
        'Topper in JEE Advanced-2012',
        'Cracked CUSAT 12, WBJEE 12 and BITSAT 12',
      ],
    },
    {
      facultyName: 'Sri. Satya Prakash',
      subject: 'Biology',
      highlights: [
        'M.Sc from Andhra University',
        'Topper of Entrance Test in University',
        '15 Years of Experience in FIITJEE and ALLEN',
        'Produced more than 250 medicos',
      ],
    },
  ],

  journeyHeader: {
    eyebrow: 'ACADEMIC PATHWAY',
    title: 'From Preparation to Performance',
    subtitle: 'A structured 6-stage methodology ensuring student readiness for competitive excellence.',
  },

  journeySteps: [
    {
      stepNumber: 1,
      stageName: 'FOUNDATION',
      description: 'Building deep conceptual clarity across core Physics, Chemistry, Mathematics, and Biology fundamentals.',
    },
    {
      stepNumber: 2,
      stageName: 'CONCEPT BUILDING',
      description: 'Transitioning from basic curriculum concepts to advanced problem-solving techniques.',
    },
    {
      stepNumber: 3,
      stageName: 'PRACTICE',
      description: 'Solving multi-level practice sets, previous year papers, and high-difficulty objective questions.',
    },
    {
      stepNumber: 4,
      stageName: 'ASSESSMENT',
      description: 'Simulating actual exam conditions through CBT computer-based test series and periodic evaluations.',
    },
    {
      stepNumber: 5,
      stageName: 'COMPETITIVE EXAM PREPARATION',
      description: 'Targeted error analysis, time management optimization, and doubt resolution by senior faculty.',
    },
    {
      stepNumber: 6,
      stageName: 'OUTCOMES',
      description: 'Achieving competitive performance and securing admissions into top IIT, NIT, and medical institutions.',
    },
  ],

  navigationCards: {
    whyCognizant: {
      title: 'Results Begin With the Right Preparation',
      description: 'Learn more about our pattern-proof teaching methodology, individual attention, and academic quality.',
      btnText: 'Why Cognizant →',
      link: '/why-cognizant',
    },
    meetGurus: {
      title: 'Meet the Gurus Behind the Journey',
      description: 'Explore full profiles, experience details, and teaching credentials of our subject experts.',
      btnText: 'Meet Our Gurus →',
      link: '/gurus',
    },
  },

  cta: {
    title: 'Ready to Explore Your Academic Path?',
    subtitle: 'Enroll in Cognizant Institute preparation programs for NEET & JEE.',
    primaryBtnText: 'Explore Programs',
    secondaryBtnText: 'Contact Cognizant',
  },
};
