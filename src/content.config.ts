// Content collections. The schemas are the contract for every post
// and data file: a missing or misspelt field fails the build.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { FEATURE_KEYS, FEATURE_STATES, SOURCES, type FeatureKey } from './lib/decoders';

// One folder per post: src/content/blog/<slug>/index.md, images
// beside it. The entry id is the folder name, which becomes the URL.
const blog = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Set when a post is materially revised; date stays the first
    // publication date, so the URL never moves.
    updated: z.coerce.date().optional(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Documentation: reference pages that readers bookmark, so their
// URLs are permanent. One file per page under
// src/content/docs/<section>/<page>.md; the id is "<section>/<page>",
// which becomes /docs/<section>/<page>/.
const docs = defineCollection({
  loader: glob({
    pattern: '*/*.md',
    base: './src/content/docs',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Order within its section's list.
    order: z.number().int(),
    // When the facts were last checked against the sources. Required:
    // a reference page without one cannot be trusted.
    updated: z.coerce.date(),
    draft: z.boolean().default(false),
    // A data table rendered after the page's prose, by name. The page
    // route maps each name to its component.
    table: z.enum(['decoders']).optional(),
  }),
});

// The RailCom decoder index, one entry per decoder model and
// firmware. Columns and allowed values come from src/lib/decoders.ts.
const featureState = z.enum(FEATURE_STATES);
const featureShape = Object.fromEntries(
  FEATURE_KEYS.map((key) => [key, featureState]),
) as Record<FeatureKey, typeof featureState>;

const decoders = defineCollection({
  loader: file('./src/data/decoders.yaml'),
  schema: z.object({
    maker: z.string(),
    model: z.string(),
    firmware: z.string().optional(),
    // The maker's public documentation the row was read against.
    url: z.url().optional(),
    // Plain prose on where the row's values came from and any doubt
    // about them; shown with the link in the row's popup.
    notes: z.string().optional(),
    source: z.enum(SOURCES),
    features: z.object(featureShape),
  }),
});

// Documentation sections (RailCom, DCC, ...), in display order. The
// id is the folder name under src/content/docs/.
const docSections = defineCollection({
  loader: file('./src/data/doc-sections.yaml'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().int(),
  }),
});

// Repositories featured on the home page, in display order.
const projects = defineCollection({
  loader: file('./src/data/projects.yaml'),
  schema: z.object({
    url: z.url(),
    description: z.string(),
  }),
});

export const collections = { blog, docs, docSections, projects, decoders };
