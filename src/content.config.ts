import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const useCases = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/use-cases' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    tag: z.string(),
    order: z.number(),
  }),
});

const marketStats = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/market-stats' }),
  schema: z.object({
    value: z.string(),
    label: z.string(),
    order: z.number(),
  }),
});

const valuePillars = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/value-pillars' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  'use-cases': useCases,
  'market-stats': marketStats,
  'value-pillars': valuePillars,
};
