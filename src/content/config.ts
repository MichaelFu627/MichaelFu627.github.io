import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // venue badge shown in the corner of the teaser image, e.g. "NeurIPS 2024"
    venue: z.string().default(''),
    year: z.number().optional(),
    // teaser image path, e.g. "/uploads/lenet.png"
    image: z.string().default('/uploads/placeholder.svg'),
    // main click target for the project card image/title
    url: z.string().optional(),
    // sub-line under the title, e.g. tech stack or collaborators
    authors: z.string().default(''),
    // link buttons: [{ label: "Code", url: "https://..." }, ...]
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    // controls display order (lower = first)
    order: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
