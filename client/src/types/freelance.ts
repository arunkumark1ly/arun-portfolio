export type FreelanceFeatureIcon =
  | "smartphone"
  | "layers"
  | "monitor"
  | "code2"
  | "cloud";

export type FreelanceTechIcon = "code2" | "layers" | "cloud";

export interface FreelanceProjectFeature {
  title: string;
  description: string;
  icon: FreelanceFeatureIcon;
}

export interface FreelanceProjectTech {
  label: string;
  icon: FreelanceTechIcon;
  color: string;
}

export interface FreelanceProjectDeploymentStep {
  title: string;
  description: string;
}

export interface FreelanceProjectHighlight {
  title: string;
  description: string;
}

export interface FreelanceProject {
  slug: string;
  name: string;
  /** Optional accent line shown below the primary title in case-study hero */
  nameAccent?: string;
  tagline: string;
  website: string;
  websiteDisplay: string;
  category: string;
  role: string;
  engagementType: string;
  featured: boolean;
  order: number;
  story: {
    headline: string;
    paragraphs: string[];
    deliverables: string[];
  };
  design: {
    title: string;
    description: string;
    features: FreelanceProjectFeature[];
  };
  techStack: FreelanceProjectTech[];
  deployment: {
    title: string;
    description: string;
    steps: FreelanceProjectDeploymentStep[];
  };
  highlights: FreelanceProjectHighlight[];
  preview: {
    iframeUrl: string;
    enableIframe: boolean;
  };
}
