import { z } from "zod";

// === TYPES ===

export interface Skill {
  id: number;
  name: string;
  category: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  role: string;
  link: string | null;
}

export interface Experience {
  id: number;
  role: string;
  company: string | null;
  period: string;
  description: string;
  order: number;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: Date | null;
}

export interface ResumeAccess {
  id: number;
  email: string;
  phone?: string;
  accessedAt: Date | null;
}

// === SCHEMAS ===

export const insertMessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
});

export const insertResumeAccessSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional()
});

// === EXPLICIT API TYPES ===

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type InsertResumeAccess = z.infer<typeof insertResumeAccessSchema>;
