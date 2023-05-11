import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  indexQuery,
  Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  Settings,
  settingsQuery,
  // Add these imports:
  pageBySlugQuery,
  pageSlugsQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'

// Create a type for your page data:
export type Page = {
  title: string
  body: any
  slug: {
    current: string
  }
}
/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getPostAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(postAndMoreStoriesQuery, { slug })
  }
  return { post: null, morePosts: [] }
}

export async function getPage(
  slug: string,
  token?: string | null
): Promise<Page> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(pageBySlugQuery, { slug })
  }
  return null
}

// New method for getting all page slugs:
export async function getAllPagesSlugs(): Promise<Pick<Page, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<{ slug: string }[]>(pageSlugsQuery)) || []
    return slugs.map(({ slug }) => ({ slug: { current: slug } }))
  }
  return []
}
