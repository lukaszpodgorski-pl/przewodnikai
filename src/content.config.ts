import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// GEO/AEO — dane strukturalne (schema.org) przenoszone z meta.php
				// starego serwisu; generowanie JSON-LD z tych pól: Etap 2 migracji.
				educationalLevel: z
					.enum(['Beginner', 'Intermediate', 'Advanced'])
					.optional(),
				teaches: z.array(z.string()).optional(),
				about: z
					.array(z.object({ name: z.string(), sameAs: z.string().url() }))
					.optional(),
				mentions: z
					.array(
						z.object({
							name: z.string(),
							sameAs: z.string().url(),
							type: z.string().optional(),
						}),
					)
					.optional(),
				faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
			}),
		}),
	}),
};
