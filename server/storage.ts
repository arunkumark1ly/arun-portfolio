import { db } from "./db";
import {
  skills, projects, experience, messages, resumeAccess,
  type Skill, type Project, type Experience, type Message, type InsertMessage,
  type ResumeAccess, type InsertResumeAccess
} from "@shared/schema";

export interface IStorage {
  getSkills(): Promise<Skill[]>;
  getProjects(): Promise<Project[]>;
  getExperience(): Promise<Experience[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  createResumeAccess(data: InsertResumeAccess): Promise<ResumeAccess>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getExperience(): Promise<Experience[]> {
    return await db.select().from(experience).orderBy(experience.order);
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }

  async createResumeAccess(data: InsertResumeAccess): Promise<ResumeAccess> {
    const [access] = await db.insert(resumeAccess).values(data).returning();
    return access;
  }

  async seedData(): Promise<void> {
    const existingSkills = await this.getSkills();
    if (existingSkills.length === 0) {
      await db.insert(skills).values([
        { name: "Ruby on Rails", category: "Technical", icon: "Gem" },
        { name: "React / Next.js", category: "Technical", icon: "Code" },
        { name: "PostgreSQL", category: "Technical", icon: "Database" },
        { name: "AWS / Cloud", category: "Technical", icon: "Cloud" },
        { name: "Docker / CI/CD", category: "Technical", icon: "Container" },
        { name: "REST / GraphQL", category: "Technical", icon: "Globe" },
        { name: "Sidekiq / Redis", category: "Technical", icon: "Zap" },
        { name: "JavaScript / TypeScript", category: "Technical", icon: "FileCode" },
        { name: "TailwindCSS", category: "Technical", icon: "Paintbrush" },
        { name: "Solution Architecture", category: "Management", icon: "Layout" },
        { name: "Technical Leadership", category: "Management", icon: "Users" },
        { name: "Agile Delivery", category: "Management", icon: "Target" },
        { name: "Stakeholder Management", category: "Management", icon: "Handshake" },
        { name: "Release Governance", category: "Management", icon: "CheckCircle" },
      ]);

      await db.insert(experience).values([
        {
          role: "Co-founder & Solution Architect",
          company: "ThinkPro Technologies",
          period: "Jan 2024 - Present",
          description: "Founded and lead engineering direction, owning solution architecture (HLD/LLD), execution planning, and end-to-end delivery. Architected VoiceHunt.news using Rails API + Next.js with edge caching and performance optimizations.",
          order: 1
        },
        {
          role: "Technical Lead",
          company: "CAI Info India Pvt. Ltd.",
          period: "Feb 2020 - Mar 2023",
          description: "Led technical execution for enterprise platforms using Ruby on Rails. Owned SDLC including architecture discussions, delivery planning, and production support. Improved performance through query optimization and CI/CD pipelines.",
          order: 2
        },
        {
          role: "Senior Software Engineer",
          company: "ZiniosEdge",
          period: "Apr 2018 - Jan 2020",
          description: "Developed and scaled large CRM platform using Ruby on Rails. Built REST APIs, integrated analytics using MicroStrategy and JSReport, improved query performance by ~30%.",
          order: 3
        },
        {
          role: "Senior Software Engineer",
          company: "Aspire Software Consultancy",
          period: "Nov 2016 - Jan 2018",
          description: "Remote collaboration with UK-based B2B marketplace team (Rightboat). Owned full lifecycle delivery from requirement discussions to release support.",
          order: 4
        },
        {
          role: "Co-founder & CTO",
          company: "Code Rabbits Technologies",
          period: "Dec 2013 - Oct 2016",
          description: "Founded and led engineering for eCommerce solutions and internal SaaS platform. Designed modular architecture using Ruby on Rails for catalog, cart, checkout, and order workflows.",
          order: 5
        }
      ]);

      await db.insert(projects).values([
        {
          title: "VoiceHunt.news",
          description: "Technology news publication platform with scalable publishing workflow for curated news, blogs, and thought leadership content. Decoupled architecture with edge caching and ISR revalidation.",
          techStack: ["Ruby on Rails", "Next.js", "PostgreSQL", "Redis", "AWS", "Docker"],
          role: "Solution Architect",
          link: "https://voicehunt.news"
        },
        {
          title: "Effortless FinLabs",
          description: "Hybrid accounting platform with distributed data sync bridging on-prem Tally DB with cloud services. Event-driven workflows using Kafka for financial data processing.",
          techStack: ["Ruby on Rails", "React", "PostgreSQL", "GCP", "gRPC", "Kafka", "Sidekiq"],
          role: "Lead Consultant",
          link: null
        },
        {
          title: "EdCast Platform Modernization",
          description: "Led multi-version Rails and PostgreSQL upgrades across legacy enterprise systems. Zero-downtime migrations with backward-compatible constraints and phased rollouts.",
          techStack: ["Ruby on Rails", "PostgreSQL", "React", "RSpec", "Webpack"],
          role: "Lead Consultant",
          link: null
        },
        {
          title: "AI-Powered Project Governance",
          description: "Large-scale project governance platform with domain-driven design, multi-queue Sidekiq architecture, ElasticSearch integration, and enterprise reporting pipelines.",
          techStack: ["Ruby on Rails", "Angular", "PostgreSQL", "Sidekiq Pro", "ElasticSearch", "ActiveMQ"],
          role: "Technical Lead",
          link: null
        },
        {
          title: "Mahindra Retail Campaign Platform",
          description: "High-volume campaign and messaging platform with coupon lifecycle engine, async messaging using RabbitMQ, and Twilio SMS integration with rate-limiting.",
          techStack: ["Ruby on Rails", "MySQL", "RabbitMQ", "Sidekiq", "Twilio", "Redis"],
          role: "Technical Lead",
          link: null
        },
        {
          title: "CommonLit EdTech Platform",
          description: "Large-scale educational technology platform with authentication using Devise + Pundit RBAC, Stripe payment workflows, and blue-green deployments on Heroku.",
          techStack: ["Ruby on Rails", "PostgreSQL", "React", "Stripe", "Heroku", "CircleCI"],
          role: "Senior Software Engineer",
          link: null
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
