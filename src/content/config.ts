import { defineCollection, z } from "astro:content";

const blogArticles = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    date: z.string(),
    readtime: z.string(),
    tags: z.array(z.string()),
    img: z.string().optional(),
  }),
});

export const collections = { blogArticles };
