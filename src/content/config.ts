//1 Import utilities from 'astro:content'
import { defineCollection, z } from "astro:content";

//2 Define your collection
const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      date: z.string(),
      image: image(),
      title: z.string(),
    }),
});

export const collections = {
  posts: postsCollection,
};
