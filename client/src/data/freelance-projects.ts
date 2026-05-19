import type { FreelanceProject } from "@/types/freelance";

/**
 * Freelance portfolio registry — add new projects here.
 *
 * To add a project:
 * 1. Copy the legacy-apparels object below
 * 2. Assign a unique `slug`, set `order`, and mark one as `featured` if desired
 * 3. The showcase page and catalog update automatically
 */
export const freelanceProjects: FreelanceProject[] = [
  {
    slug: "legacy-apparels",
    name: "The Legacy",
    nameAccent: "Apparels",
    tagline:
      "A fashion-forward apparel brand website — independently designed, engineered, and deployed from zero to production.",
    website: "https://thelegacyapparels.com",
    websiteDisplay: "thelegacyapparels.com",
    category: "Fashion / Apparel",
    role: "Frontend Dev & Deployment",
    engagementType: "Independent Freelance",
    featured: true,
    order: 1,
    story: {
      headline: "A complete freelance engagement — independently executed.",
      paragraphs: [
        "The Legacy Apparels needed a modern, elegant web presence to reflect their brand identity in the fashion and apparel space. I was brought on as the sole developer to take this from concept to production.",
        "I owned the entire delivery chain — translating brand requirements into a polished UI, crafting responsive layouts with Tailwind CSS, and engineering the cloud deployment infrastructure using Terraform and AWS S3.",
        "No team. No handoffs. Just end-to-end ownership of frontend development and production deployment — the kind of independent execution that demonstrates real full-cycle capability.",
      ],
      deliverables: [
        "Responsive multi-device layout (mobile, tablet, desktop)",
        "Modern fashion-forward visual style with Tailwind CSS",
        "Smooth browsing and hover interaction experience",
        "Terraform scripts for reproducible infrastructure",
        "AWS S3 static website bucket with public access policy",
        "Production deployment configuration and handoff",
      ],
    },
    design: {
      title: "Crafted for the fashion aesthetic.",
      description:
        "Every pixel was intentional — clean whitespace, elegant typography, and smooth interactions built with utility-first Tailwind CSS to deliver a fashion-grade browsing experience.",
      features: [
        {
          icon: "smartphone",
          title: "Mobile-First Responsive",
          description:
            "Fluid layouts across all breakpoints — phone, tablet, and desktop — ensuring a seamless brand experience on every device.",
        },
        {
          icon: "layers",
          title: "Tailwind CSS Craftsmanship",
          description:
            "Utility-first styling with custom design tokens, consistent spacing rhythm, and fashion-inspired visual hierarchy.",
        },
        {
          icon: "monitor",
          title: "Smooth Interactions",
          description:
            "Subtle hover states, smooth transitions, and polished micro-interactions that elevate the premium feel of the brand.",
        },
      ],
    },
    techStack: [
      { label: "HTML", icon: "code2", color: "text-orange-400" },
      { label: "Tailwind CSS", icon: "layers", color: "text-sky-400" },
      { label: "JavaScript", icon: "code2", color: "text-yellow-400" },
      { label: "Terraform", icon: "cloud", color: "text-violet-400" },
      { label: "AWS S3", icon: "cloud", color: "text-amber-400" },
    ],
    deployment: {
      title: "Production-grade. Infrastructure-as-Code.",
      description:
        "Deployment wasn't an afterthought — it was engineered with the same rigor as the frontend. Terraform was used to provision the entire AWS infrastructure reproducibly and reliably.",
      steps: [
        {
          title: "Terraform Provisioning",
          description:
            "Infrastructure defined as code — S3 bucket creation, public access configuration, bucket policies, and website endpoint setup all version-controlled and reproducible.",
        },
        {
          title: "AWS S3 Static Hosting",
          description:
            "The frontend assets are hosted on an AWS S3 static website bucket — cost-effective, globally available, and highly reliable for a static web presence.",
        },
        {
          title: "Production Deployment",
          description:
            "Complete production configuration with proper MIME type handling, index document routing, and error page configuration for a seamless end-user experience.",
        },
      ],
    },
    highlights: [
      {
        title: "Independent Ownership",
        description:
          "Sole contributor — from first line of code to live deployment with zero handoffs.",
      },
      {
        title: "Frontend Engineering",
        description:
          "Semantic HTML, utility-first Tailwind CSS, and vanilla JS delivering smooth UX.",
      },
      {
        title: "Deployment Capability",
        description:
          "Production-grade IaC using Terraform to provision and manage AWS S3 static hosting.",
      },
      {
        title: "Clean UI Execution",
        description:
          "Responsive, mobile-first layouts with consistent spacing, hierarchy, and polish.",
      },
    ],
    preview: {
      iframeUrl: "https://thelegacyapparels.com",
      enableIframe: true,
    },
  },
];

export function getFreelanceProjects(): FreelanceProject[] {
  return [...freelanceProjects].sort((a, b) => a.order - b.order);
}

export function getFreelanceProject(slug: string): FreelanceProject | undefined {
  return getFreelanceProjects().find((p) => p.slug === slug);
}

export function getFeaturedFreelanceProject(): FreelanceProject | undefined {
  return getFreelanceProjects().find((p) => p.featured) ?? getFreelanceProjects()[0];
}
