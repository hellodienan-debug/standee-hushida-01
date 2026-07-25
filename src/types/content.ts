export type Cta = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
  animate?: boolean;
};

export type Industry = {
  name: string;
  description: string;
  icon: string;
};

export type ProblemItem = {
  title: string;
  description: string;
};

export type SolutionStep = {
  step: number;
  title: string;
  description: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type BenefitGroup = {
  title: string;
  items: string[];
};

export type UseCase = {
  title: string;
  description: string;
};

export type Spec = {
  label: string;
  value: string;
  benefit: string;
};

export type ComparisonRow = {
  criterion: string;
  poster: string;
  digital: string;
};

export type CaseStudy = {
  industry: string;
  context: string;
  need: string;
  solution: string;
  value: string;
  disclaimer: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LeadNeedOption = {
  value: string;
  label: string;
};

export type AnnouncementContent = {
  label: string;
  href: string;
  cta: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  /** Tailwind class controlling the grid row span for the masonry effect */
  span?: "row-span-2" | "row-span-1";
};

export type GalleryContent = {
  headline: string;
  description: string;
  images: GalleryImage[];
};

export type LeadFormContent = {
  headline: string;
  description: string;
  fields: {
    name: string;
    phone: string;
    company: string;
    region: string;
    need: string;
    quantity: string;
    note: string;
    consent: string;
  };
  placeholders: {
    name: string;
    phone: string;
    company: string;
    region: string;
    quantity: string;
    note: string;
  };
  needs: LeadNeedOption[];
  consentText: string;
  submitLabel: string;
  loadingLabel: string;
  successMessage: string;
  errorMessage: string;
  errors: {
    name: string;
    phone: string;
    company: string;
    need: string;
    consent: string;
  };
};
