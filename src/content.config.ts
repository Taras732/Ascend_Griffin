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
    readingTime: z.string().optional(),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cases" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    service: z.enum(["audit", "discovery", "rescue"]),
    domain: z.string(),
    icp: z.string(),
    complexity: z.enum(["low", "medium", "high"]),
    duration: z.string(),
    budgetRange: z.string().optional(),
    illustrative: z.boolean().default(true),
    year: z.string().optional(),
    lang: z.enum(["en", "uk"]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, cases };
