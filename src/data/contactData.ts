import { ContactPageData } from '../types/contact';

export const contactData: ContactPageData = {
  hero: {
    eyebrow: 'CONTACT COGNIZANT',
    title: "Let's Start Your Academic Journey",
    description: 'Connect with Cognizant for program guidance, admissions information, and academic enquiries.',
    breadcrumb: 'Home / Contact',
  },

  phones: [
    '+91 8096651111',
    '+91 8096671111',
  ],

  address: {
    line1: 'Ramnagar 80 Feet Road',
    line2: 'Opp. to Ayyappa Swamy Temple',
    city: 'Anantapur',
    state: 'Andhra Pradesh',
  },

  form: {
    title: 'Send an Enquiry',
    subtitle: 'Fill in your details below and our academic team will get in touch with you.',
    submitLabel: 'Send Enquiry',
    sendingLabel: 'Sending...',
    successMessage: 'Thank you. Your enquiry has been received.',
    errorMessage: 'Something went wrong. Please try again.',
  },

  whyContactHeader: {
    eyebrow: 'ASSISTANCE',
    title: 'How Can We Help?',
    subtitle: 'Dedicated support for your educational decision-making and admission queries.',
  },

  helpCards: [
    {
      id: 'program-guidance',
      title: 'PROGRAM GUIDANCE',
      description: 'Understand the available academic pathways, integrated college models, and competitive stream selections.',
      iconName: 'book-open',
    },
    {
      id: 'admissions-info',
      title: 'ADMISSIONS',
      description: 'Get verified information about eligibility, program enrolment guidelines, and upcoming academic batch sessions.',
      iconName: 'user-check',
    },
    {
      id: 'academic-enquiries',
      title: 'ACADEMIC ENQUIRIES',
      description: 'Connect directly with Cognizant Institute for faculty-guided teaching methodology and curriculum details.',
      iconName: 'help-circle',
    },
  ],

  locationHeader: {
    eyebrow: 'CAMPUS LOCATION',
    title: 'Find Cognizant',
    subtitle: 'Visit our main junior college campus located in Ramnagar, Anantapur.',
  },

  cta: {
    title: 'Ready to Explore Your Options?',
    description: "Explore Cognizant's academic programs or connect with our team for personalized guidance.",
    primaryBtnText: 'Explore Programs',
    secondaryBtnText: 'Contact Cognizant',
  },
};
