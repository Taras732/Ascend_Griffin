import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(["en", "uk"]),
    tags: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
    canonical: z.string().optional(),
    draft: z.boolean().default(false),
    relatedService: z.enum(["audit", "discovery", "support", "rescue"]).optional(),
  }),
});

export const collections = { blog };
