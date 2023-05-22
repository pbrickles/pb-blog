import { json } from '@sveltejs/kit'
import { getPosts } from './getPosts/get-posts'
import type { PostsGlobPath } from '$lib/types'


export async function GET() {
	const paths: Record<string, PostsGlobPath> = import.meta.glob('/src/posts/*.md', {eager: true})
	const posts = await getPosts(paths)
	return json(posts)
}