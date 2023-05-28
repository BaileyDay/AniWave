import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'pages/home/IndexPage'
import {
  getAllPosts,
  getLatestNews,
  getSettings,
  getRandomPosts,
} from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'


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

  return (
    <IndexPage posts={posts} settings={settings} newsArticles={newsArticles} />
  )
}

//testing

export async function getServerSideProps(ctx) {
  const { preview = false, previewData = {} } = ctx

  try {
    const [settings, posts = [], newsArticles = []] = await Promise.all([
      getSettings(),
      getRandomPosts(3),
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
  } catch (error) {
    console.error(error)
    return {
      props: {
        error: 'Failed to fetch data',
      },
    }
  }
}
