
export type GlobPath<T> = {
	default: unknown;
	metadata: T
}
export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}

export type PostsGlobPath = GlobPath<Omit<Post, "slug">>

export type Categories = 'sveltekit' | 'svelte'
