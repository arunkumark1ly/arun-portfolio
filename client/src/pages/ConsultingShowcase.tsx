import { useEffect } from "react";
import { getConsultingProjects } from "@/data/consulting-projects";
import { ConsultingCaseStudy } from "@/components/consulting/ConsultingCaseStudy";
import { ConsultingCollectionHero } from "@/components/consulting/ConsultingCollectionHero";
import { ConsultingEngagementCatalog } from "@/components/consulting/ConsultingEngagementCatalog";
import { ConsultingShowcaseCTA } from "@/components/consulting/ConsultingShowcaseCTA";
import { ConsultingShowcaseNav } from "@/components/consulting/ConsultingShowcaseNav";
import { absoluteUrl } from "@/lib/site-config";
import {
  CONSULTING_KEYWORDS,
  CONSULTING_META_DESCRIPTION,
  CONSULTING_TITLE,
  updateSEO,
} from "@/lib/seo";

export default function ConsultingShowcase() {
  const projects = getConsultingProjects();

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO({
      title: CONSULTING_TITLE,
      description: CONSULTING_META_DESCRIPTION,
      keywords: CONSULTING_KEYWORDS,
      url: absoluteUrl("/consulting"),
      path: "/consulting",
      structuredData: {
        includeCreativeWorks: true,
        includeBreadcrumbs: true,
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ConsultingShowcaseNav />

      <main className="pt-14">
        <ConsultingCollectionHero projects={projects} />
        <ConsultingEngagementCatalog projects={projects} />

        <section id="case-studies" className="border-t border-border">
          {projects.map((project, index) => (
            <ConsultingCaseStudy
              key={project.slug}
              project={project}
              caseIndex={index}
            />
          ))}
        </section>

        <ConsultingShowcaseCTA />

        <footer className="py-8 text-center border-t border-border">
          <p className="font-mono text-xs text-muted-foreground">
            Designed & Built by ArunKumar Kandasamy
          </p>
        </footer>
      </main>
    </div>
  );
}
