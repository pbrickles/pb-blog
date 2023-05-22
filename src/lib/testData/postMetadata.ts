import type { Post } from "$lib/types";

export const postWithoutSlug: Omit<Post, "slug"> = {
  title: "post title",
  description: "post description",
  date: "01-01-2023",
  categories: [],
  published: true,
}

export const postWithSlug: Post = {
  ...postWithoutSlug,
  slug: "post-with-slug"
}