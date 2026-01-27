import { useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Skill, Experience, Project } from "@shared/schema";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
}

export function ResumeModal({ open, onOpenChange, skills, experience, projects }: ResumeModalProps) {
  const resumeRef = useRef<HTMLDivElement>(null);

  const technicalSkills = skills.filter(s => s.category === "Technical");
  const managementSkills = skills.filter(s => s.category === "Management");
  const sortedExperience = [...experience].sort((a, b) => a.order - b.order);

  const areasOfImpact = [
    "Solution architecture (HLD/LLD), API design (REST/GraphQL), and domain modeling",
    "Performance engineering (profiling, caching, query/index optimization, scalability practices)",
    "Asynchronous & event-driven systems (Sidekiq, queues, messaging, retries, idempotency)",
    "Cloud & DevOps (Docker, CI/CD, release automation, environment strategy, production readiness)",
    "Modernization programs (Rails upgrades, refactoring, zero-downtime migrations, test coverage)",
    "Technical delivery leadership (planning, execution tracking, dependency management, incident triage, stakeholder updates)"
  ];

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const resumeHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>ArunKumar Kandasamy - Resume</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
            font-size: 10px; 
            line-height: 1.4; 
            color: #1a1a2e; 
            padding: 24px;
            max-width: 800px;
            margin: 0 auto;
          }
          h1 { font-size: 20px; font-weight: 700; margin-bottom: 2px; }
          h2 { font-size: 12px; font-weight: 600; color: #cc9966; margin-bottom: 8px; border-bottom: 1px solid #e5e5e5; padding-bottom: 4px; margin-top: 16px; }
          h3 { font-size: 11px; font-weight: 600; margin-bottom: 2px; }
          .subtitle { font-size: 13px; color: #666; margin-bottom: 6px; }
          .contact { font-size: 9px; color: #666; margin-bottom: 12px; }
          .contact a { color: #cc9966; text-decoration: none; }
          .summary { font-size: 10px; color: #444; margin-bottom: 12px; line-height: 1.5; }
          .section { margin-bottom: 12px; }
          .skills-grid { display: flex; flex-wrap: wrap; gap: 4px 12px; }
          .skill { font-size: 9px; color: #444; }
          .exp-item { margin-bottom: 10px; }
          .exp-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; }
          .exp-role { font-weight: 600; font-size: 10px; }
          .exp-company { color: #cc9966; font-size: 10px; }
          .exp-period { font-size: 9px; color: #888; }
          .exp-desc { font-size: 9px; color: #555; line-height: 1.5; }
          .project { margin-bottom: 8px; }
          .project-title { font-weight: 600; font-size: 10px; }
          .project-role { color: #cc9966; font-size: 9px; }
          .project-desc { font-size: 9px; color: #555; line-height: 1.4; margin-top: 2px; }
          .project-tech { font-size: 8px; color: #888; margin-top: 2px; }
          .impact-list { list-style: none; }
          .impact-list li { font-size: 9px; color: #555; margin-bottom: 3px; padding-left: 12px; position: relative; }
          .impact-list li::before { content: "-"; position: absolute; left: 0; color: #cc9966; }
          .edu { font-size: 10px; }
          .edu-degree { font-weight: 600; }
          .edu-school { font-size: 9px; color: #666; }
          @media print {
            body { padding: 0; }
            @page { margin: 0.5in; }
          }
        </style>
      </head>
      <body>
        <h1>ArunKumar Kandasamy</h1>
        <div class="subtitle">Solution Architect & Tech Lead</div>
        <div class="contact">
          <a href="mailto:k.arun@outlook.com">k.arun@outlook.com</a> | 
          +91 9003457395 (India) | 
          <a href="https://linkedin.com/in/arun1ly">LinkedIn</a> | 
          <a href="https://github.com/arunkumark1ly">GitHub</a>
        </div>
        
        <div class="summary">
          Forward-focused Solution Architect with 16+ years of experience designing and delivering web platforms and enterprise products across Agile and Hybrid delivery models. I blend hands-on architecture and engineering leadership with end-to-end technical delivery ownership to ship predictable outcomes.
        </div>

        <h2>Areas of Impact</h2>
        <ul class="impact-list">
          ${areasOfImpact.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <h2>Technical Skills</h2>
        <div class="skills-grid">
          ${technicalSkills.map(s => `<span class="skill">${s.name}</span>`).join('')}
        </div>

        <h2>Leadership & Management</h2>
        <div class="skills-grid">
          ${managementSkills.map(s => `<span class="skill">${s.name}</span>`).join('')}
        </div>

        <h2>Professional Experience</h2>
        ${sortedExperience.map(exp => `
          <div class="exp-item">
            <div class="exp-header">
              <div>
                <span class="exp-role">${exp.role}</span>
                ${exp.company ? `<span class="exp-company"> @ ${exp.company}</span>` : ''}
              </div>
              <span class="exp-period">${exp.period}</span>
            </div>
            <div class="exp-desc">${exp.description}</div>
          </div>
        `).join('')}

        <h2>Key Projects</h2>
        ${projects.map(project => `
          <div class="project">
            <span class="project-title">${project.title}</span>
            <span class="project-role"> - ${project.role}</span>
            <div class="project-desc">${project.description}</div>
            <div class="project-tech">Tech: ${project.techStack.join(', ')}</div>
          </div>
        `).join('')}

        <h2>Education</h2>
        <div class="edu">
          <span class="edu-degree">B.Tech, Electrical and Electronics Engineering</span>
          <div class="edu-school">Bharath University, Chennai (2005-2009)</div>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(resumeHtml);
    printWindow.document.close();
    
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Resume Preview</span>
            <Button size="sm" onClick={handleDownload} className="font-mono text-xs gap-2" data-testid="button-download-pdf">
              <Download className="w-3 h-3" />
              Download PDF
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div ref={resumeRef} className="bg-white text-gray-900 p-6 rounded text-xs">
          <h1 className="text-xl font-bold">ArunKumar Kandasamy</h1>
          <p className="text-sm text-gray-600">Solution Architect & Tech Lead</p>
          <p className="text-[10px] text-gray-500 mt-1">
            k.arun@outlook.com | +91 9003457395 (India) | LinkedIn: arun1ly | GitHub: arunkumark1ly
          </p>
          
          <p className="text-[10px] text-gray-700 mt-3 leading-relaxed">
            Forward-focused Solution Architect with 16+ years of experience designing and delivering web platforms and enterprise products across Agile and Hybrid delivery models.
          </p>

          <h2 className="text-xs font-semibold mt-4 mb-2 border-b border-gray-200 pb-1" style={{color: '#cc9966'}}>Areas of Impact</h2>
          <ul className="space-y-1">
            {areasOfImpact.map((item, i) => (
              <li key={i} className="text-[10px] text-gray-600 flex gap-2">
                <span style={{color: '#cc9966'}}>-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xs font-semibold mt-4 mb-2 border-b border-gray-200 pb-1" style={{color: '#cc9966'}}>Technical Skills</h2>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {technicalSkills.map(s => (
              <span key={s.id} className="text-[10px] text-gray-600">{s.name}</span>
            ))}
          </div>

          <h2 className="text-xs font-semibold mt-4 mb-2 border-b border-gray-200 pb-1" style={{color: '#cc9966'}}>Leadership & Management</h2>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {managementSkills.map(s => (
              <span key={s.id} className="text-[10px] text-gray-600">{s.name}</span>
            ))}
          </div>

          <h2 className="text-xs font-semibold mt-4 mb-2 border-b border-gray-200 pb-1" style={{color: '#cc9966'}}>Professional Experience</h2>
          <div className="space-y-3">
            {sortedExperience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-semibold text-[10px]">{exp.role}</span>
                    {exp.company && <span className="text-[10px]" style={{color: '#cc9966'}}> @ {exp.company}</span>}
                  </div>
                  <span className="text-[9px] text-gray-500">{exp.period}</span>
                </div>
                <p className="text-[9px] text-gray-600 mt-1 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xs font-semibold mt-4 mb-2 border-b border-gray-200 pb-1" style={{color: '#cc9966'}}>Key Projects</h2>
          <div className="space-y-2">
            {projects.map(project => (
              <div key={project.id}>
                <span className="font-semibold text-[10px]">{project.title}</span>
                <span className="text-[9px]" style={{color: '#cc9966'}}> - {project.role}</span>
                <p className="text-[9px] text-gray-600 mt-0.5">{project.description}</p>
                <p className="text-[8px] text-gray-400 mt-0.5">Tech: {project.techStack.join(', ')}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xs font-semibold mt-4 mb-2 border-b border-gray-200 pb-1" style={{color: '#cc9966'}}>Education</h2>
          <div>
            <span className="font-semibold text-[10px]">B.Tech, Electrical and Electronics Engineering</span>
            <p className="text-[9px] text-gray-500">Bharath University, Chennai (2005-2009)</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
