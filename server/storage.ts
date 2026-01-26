import { db } from "./db";
import {
  skills, projects, experience, messages,
  type Skill, type Project, type Experience, type Message, type InsertMessage
} from "@shared/schema";

export interface IStorage {
  getSkills(): Promise<Skill[]>;
  getProjects(): Promise<Project[]>;
  getExperience(): Promise<Experience[]>;
  createMessage(message: InsertMessage): Promise<Message>;
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

  async seedData(): Promise<void> {
    const existingSkills = await this.getSkills();
    if (existingSkills.length === 0) {
      // Seed Skills
      await db.insert(skills).values([
        { name: "Ruby on Rails", category: "Technical", icon: "Gem" },
        { name: "React.js", category: "Technical", icon: "React" },
        { name: "PostgreSQL", category: "Technical", icon: "Database" },
        { name: "AWS", category: "Technical", icon: "Cloud" },
        { name: "Agile/Scrum Master", category: "Management", icon: "Users" },
        { name: "Product Roadmap", category: "Management", icon: "Map" },
        { name: "Stakeholder Relations", category: "Management", icon: "Handshake" },
        { name: "JIRA", category: "Management", icon: "ClipboardList" },
      ]);

      // Seed Experience
      await db.insert(experience).values([
        {
          role: "Lead Technical Consultant",
          company: "Current Company",
          period: "2021 - Present",
          description: "Leading cross-functional teams and managing complex SaaS project lifecycles. Bridging engineering and product vision.",
          order: 1
        },
        {
          role: "Senior Software Engineer",
          company: "Previous Tech Corp",
          period: "2018 - 2021",
          description: "Full-stack development using Ruby on Rails and React. Mentored junior developers and optimized CI/CD pipelines.",
          order: 2
        },
        {
          role: "Software Engineer",
          company: "Startup Inc",
          period: "2015 - 2018",
          description: "Developed core features for flagship product. Collaborated with product team on roadmap execution.",
          order: 3
        }
      ]);

      // Seed Projects
      await db.insert(projects).values([
        {
          title: "SaaS Analytics Platform",
          description: "End-to-end product ownership of a high-traffic analytics dashboard.",
          techStack: ["React", "Ruby on Rails", "PostgreSQL"],
          role: "Lead Technical Consultant",
          link: "#"
        },
        {
          title: "E-Commerce Migration",
          description: "Led the migration of a legacy monolithic app to microservices.",
          techStack: ["AWS", "Docker", "Node.js"],
          role: "Senior Software Engineer",
          link: "#"
        },
        {
          title: "Project Management Tool",
          description: "Internal tool for tracking agile sprints and velocity.",
          techStack: ["Vue.js", "Firebase"],
          role: "Lead Developer",
          link: "#"
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
