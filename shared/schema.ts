import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // 'Technical' | 'Management'
  icon: text("icon").notNull(), // Lucide icon name
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  techStack: text("tech_stack").array().notNull(),
  role: text("role").notNull(),
  link: text("link"),
});

export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  role: text("role").notNull(),
  company: text("company"), // Optional if self-employed/freelance
  period: text("period").notNull(),
  description: text("description").notNull(),
  order: serial("order").notNull(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const resumeAccess = pgTable("resume_access", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  accessedAt: timestamp("accessed_at").defaultNow(),
});

// === SCHEMAS ===

export const insertSkillSchema = createInsertSchema(skills).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertExperienceSchema = createInsertSchema(experience).omit({ id: true });
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, createdAt: true });
export const insertResumeAccessSchema = createInsertSchema(resumeAccess).omit({ id: true, accessedAt: true });

// === EXPLICIT API TYPES ===

export type Skill = typeof skills.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Experience = typeof experience.$inferSelect;
export type Message = typeof messages.$inferSelect;

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type ResumeAccess = typeof resumeAccess.$inferSelect;
export type InsertResumeAccess = z.infer<typeof insertResumeAccessSchema>;
