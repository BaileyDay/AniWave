import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'pages/home/IndexPage'
import { getAllPosts, getLatestNews, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

interface PageProps {
  posts: Post[]
  settings: Settings
  preview: boolean
  token: string | null
  newsArticles: Post[]
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Page(props: PageProps) {
  const { posts, settings, preview, token, newsArticles } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <IndexPage
            loading
            preview
            posts={posts}
            settings={settings}
            newsArticles={newsArticles}
          />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return (
    <IndexPage posts={posts} settings={settings} newsArticles={newsArticles} />
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, posts = [], newsArticles = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
    getLatestNews(),
  ])

  return {
    props: {
      posts,
      settings,
      preview,
      newsArticles,
      token: previewData.token ?? null,
    },
  }
}
