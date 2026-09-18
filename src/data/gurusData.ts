import { Guru, GurusPageData } from '../types/guru';

export const gurusData: Guru[] = [
  {
    id: 's-v-ratnakar-prasad',
    slug: 's-v-ratnakar-prasad',
    name: 'Sri. S V Ratnakar Prasad',
    subject: 'Mathematics',
    image: null,
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
    id: 'vipin-kumar',
    slug: 'vipin-kumar',
    name: 'Sri. Vipin Kumar',
    subject: 'Mathematics',
    image: null,
    highlights: [
      'B.Tech from IIT INDORE',
      'M.Tech from MNNIT-Allahabad',
      'Topper in JEE Advanced - 2013',
    ],
  },
  {
    id: 'sujit-kumar-giri',
    slug: 'sujit-kumar-giri',
    name: 'Sri. Sujit Kumar Giri',
    subject: 'Chemistry',
    image: null,
    highlights: [
      'B.Tech & M.Tech in Chemical Engineering from NIT-Rourkela',
      '5 years of Experience in JEE coaching',
    ],
  },
  {
    id: 'tapas-vaibhav',
    slug: 'tapas-vaibhav',
    name: 'Sri. Tapas Vaibhav',
    subject: 'Physics',
    image: null,
    highlights: [
      'B.Tech in Mechanical Engineering from IIT-ISM Dhanbad, 2016 batch',
      'Topper in JEE Advanced-2012',
      'Cracked CUSAT 12, WBJEE 12 and BITSAT 12',
    ],
  },
  {
    id: 'satya-prakash',
    slug: 'satya-prakash',
    name: 'Sri. Satya Prakash',
    subject: 'Biology',
    image: null,
    highlights: [
      'M.Sc from Andhra University',
      'Topper of Entrance Test in University',
      '15 Years of Experience in FIITJEE and ALLEN',
      'Produced more than 250 medicos',
    ],
  },
];

export const gurusPageData: GurusPageData = {
  hero: {
    eyebrow: 'OUR GURUS',
    title: 'Meet the Gurus Behind the Academic Journey',
    description: 'All of our Gurus at Cognizant are with great experience in nurturing students to achieve best ranks in NEET and JEE.',
    breadcrumb: 'Home / Our Gurus',
  },
  introduction: 'All of our Gurus at Cognizant are with great experience in nurturing students to achieve best ranks in NEET and JEE.',
  gurus: gurusData,
  finalNote: 'This is not the end of our Gurus list, more Gurus to join us soon.',
  cta: {
    title: 'Explore the Cognizant Academic Journey',
    primaryBtnText: 'Explore Programs',
    secondaryBtnText: 'Why Cognizant',
  },
};
