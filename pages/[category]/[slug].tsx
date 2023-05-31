import { PreviewSuspense } from '@sanity/preview-kit'
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getRandomPosts,
  getSettings,
} from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { lazy } from 'react'

import PostPage from '../../components/posts/PostPage'

const PreviewPostPage = lazy(() => import('components/PreviewPostPage'))

interface PageProps {
  post: Post
  morePosts: Post[]
  settings?: Settings
  preview: boolean
  token: string | null
  randomPosts: Post[]
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { settings, post, morePosts, preview, token, randomPosts } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PostPage
            loading
            preview
            post={post}
            morePosts={morePosts}
            settings={settings}
            randomPosts={randomPosts}
          />
        }
      >
        <PreviewPostPage
          token={token}
          post={post}
          morePosts={morePosts}
          settings={settings}
          randomPosts={randomPosts}
        />
      </PreviewSuspense>
    )
  }

  return (
    <>
      <PostPage
        post={post}
        morePosts={morePosts}
        settings={settings}
        randomPosts={randomPosts}
      />
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [settings, { post, morePosts }, randomPosts = []] = await Promise.all([
    getSettings(),
    getPostAndMoreStories(params.category, params.slug, token), // Adjust this function to consider category and slug
    getRandomPosts(3),
  ])

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      morePosts,
      settings,
      preview,
      token: previewData.token ?? null,
      randomPosts,
    },
  }
}
