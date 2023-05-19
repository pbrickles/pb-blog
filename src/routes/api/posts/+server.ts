import { json } from '@sveltejs/kit'
import { getPosts } from './getPosts/get-posts'


export async function GET() {
	const posts = await getPosts()
	return json(posts)
}