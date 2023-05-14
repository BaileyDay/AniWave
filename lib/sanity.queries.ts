import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  readTime,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content[]{
      ...,
      "asset": asset-> // This fetches the asset fields for the image blocks
    },
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content[]{
      ...,
      "asset": asset-> // This fetches the asset fields for the image blocks
    },
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  content[]{
    ...,
    "asset": asset-> // This fetches the asset fields for the image blocks
  },
  ${postFields}
}
`

export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  body,
  slug
}`

export const pageSlugsQuery = `*[_type == "page" && defined(slug.current)]{
  "slug": slug.current
}`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  readTime?: number
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}

export interface Page {
  title: string
  body: any
  slug: {
    current: string
  }
}
