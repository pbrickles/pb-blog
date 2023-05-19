import type { Post } from '$lib/types'
import { removeUndefined } from '$lib/helpers/remove-undefined'

export async function getPosts() {

	const paths = import.meta.glob('/src/posts/*.md', {eager: true})

  const posts = Object.keys(paths).map((path) => {
    const file = paths[path]
    const slug = path.split('/').at(-1)?.replace('.md', '')
    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>
      return { ...metadata, slug } satisfies Post
    }
  }).filter(removeUndefined)


	const sortedPosts = posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return sortedPosts
}