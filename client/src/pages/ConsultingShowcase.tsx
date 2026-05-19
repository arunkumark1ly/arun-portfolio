import { useEffect } from "react";
import { getConsultingProjects } from "@/data/consulting-projects";
import { ConsultingCaseStudy } from "@/components/consulting/ConsultingCaseStudy";
import { ConsultingCollectionHero } from "@/components/consulting/ConsultingCollectionHero";
import { ConsultingEngagementCatalog } from "@/components/consulting/ConsultingEngagementCatalog";
import { ConsultingShowcaseCTA } from "@/components/consulting/ConsultingShowcaseCTA";
import { ConsultingShowcaseNav } from "@/components/consulting/ConsultingShowcaseNav";
import { absoluteUrl } from "@/lib/site-config";
import { updateSEO } from "@/lib/seo";

const CONSULTING_DESCRIPTION =
  "Independent technical consulting engagements — modern frontend engineering, UI craftsmanship, product thinking, and production deployment. Case studies document end-to-end client delivery from concept to production.";

export default function ConsultingShowcase() {
  const projects = getConsultingProjects();

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO({
      title: "Independent Consulting Engagements | ArunKumar Kandasamy",
      description: CONSULTING_DESCRIPTION,
      url: absoluteUrl("/consulting"),
      path: "/consulting",
      structuredData: {
        includeCreativeWorks: true,
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
