import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    links: z.object({
      website: z.string().url().optional(),
      github: z.string().url(),
    }),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog, projects };
