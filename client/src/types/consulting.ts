export type ConsultingFeatureIcon =
  | "smartphone"
  | "layers"
  | "monitor"
  | "code2"
  | "cloud";

export type ConsultingTechIcon = "code2" | "layers" | "cloud";

export interface ConsultingProjectFeature {
  title: string;
  description: string;
  icon: ConsultingFeatureIcon;
}

export interface ConsultingProjectTech {
  label: string;
  icon: ConsultingTechIcon;
  color: string;
}

export interface ConsultingProjectDeploymentStep {
  title: string;
  description: string;
}

export interface ConsultingProjectHighlight {
  title: string;
  description: string;
}

export interface ConsultingProject {
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
    features: ConsultingProjectFeature[];
  };
  techStack: ConsultingProjectTech[];
  deployment: {
    title: string;
    description: string;
    steps: ConsultingProjectDeploymentStep[];
  };
  highlights: ConsultingProjectHighlight[];
  preview: {
    iframeUrl: string;
    enableIframe: boolean;
  };
}
