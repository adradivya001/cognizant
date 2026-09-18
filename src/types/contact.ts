export interface ContactAddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
}

export interface HelpCardItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactPageData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    breadcrumb: string;
  };
  phones: string[];
  address: ContactAddress;
  form: {
    title: string;
    subtitle: string;
    submitLabel: string;
    sendingLabel: string;
    successMessage: string;
    errorMessage: string;
  };
  whyContactHeader: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  helpCards: HelpCardItem[];
  locationHeader: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    description: string;
    primaryBtnText: string;
    secondaryBtnText: string;
  };
}
