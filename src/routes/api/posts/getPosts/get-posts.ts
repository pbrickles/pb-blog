import type { Post, PostsGlobPath } from '$lib/types'
import { removeUndefined } from '$lib/helpers/remove-undefined'

export async function getPosts(paths: Record<string, PostsGlobPath>): Promise<Post[]> {
  const posts = Object.keys(paths).map((path) => {
    const file = paths[path]
    const slug = path.split('/').at(-1)?.replace('.md', '')
    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata
      return { ...metadata, slug }
    }
  }).filter(removeUndefined)


	const sortedPosts: Post[] = posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return sortedPosts
}