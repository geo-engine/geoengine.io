// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const features = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/features" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        icon: image(),
    }),
});
const components = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/components" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        subtitle: z.string(),
        icon: image(),
        links: z.array(
            z.object({
                title: z.string(),
                url: z.string(),
            }),
        ),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { features, components };