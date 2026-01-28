import { z } from 'zod';
import { insertMessageSchema, insertResumeAccessSchema } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills',
      responses: {
        200: z.array(z.any()),
      },
    },
  },
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects',
      responses: {
        200: z.array(z.any()),
      },
    },
  },
  experience: {
    list: {
      method: 'GET' as const,
      path: '/api/experience',
      responses: {
        200: z.array(z.any()),
      },
    },
  },
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertMessageSchema,
      responses: {
        201: z.any(),
        400: errorSchemas.validation,
      },
    },
  },
  resumeAccess: {
    verify: {
      method: 'POST' as const,
      path: '/api/resume-access',
      input: insertResumeAccessSchema,
      responses: {
        201: z.any(),
        400: errorSchemas.validation,
      },
    },
  },
};
