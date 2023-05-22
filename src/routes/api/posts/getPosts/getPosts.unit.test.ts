import { postWithoutSlug } from "$lib/testData/postMetadata";
import type { PostsGlobPath } from "$lib/types";
import { getPosts } from "./get-posts"

describe("getPosts", () => {
  describe("GIVEN no posts", () => {
    it("SHOULD return an empty array", async () => {
      const result = await getPosts({});
      expect(result).toEqual([])
    })
  })
  describe("GIVEN a valid posts object", () => {
    const post1 = { ...postWithoutSlug, title: "post1", slug: "path1", date: "12-21-2022" };
    const post2 = { ...postWithoutSlug, title: "post2", slug: "path2", date: "1-2-2023" };


    it("SHOULD return an array of posts", async () => {
      const globResult: Record<string, PostsGlobPath> = {
        [post1.slug]: {
          default: vitest.fn(),
          metadata: post1
        },

      }
      const result = await getPosts(globResult);
      expect(result).toEqual([post1])
    });
    it("SHOULD return an array of posts in descending date order", async () => {
      const globResult: Record<string, PostsGlobPath> = {
        [post1.slug]: {
          default: vitest.fn(),
          metadata: post1
        },
        [post2.slug]: {
          default: vitest.fn(),
          metadata: post2
        },
      }
      const result = await getPosts(globResult);
      expect(result).toEqual([post2, post1])
    })
  })
})