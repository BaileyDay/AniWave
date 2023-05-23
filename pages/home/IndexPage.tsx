import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import HomeNav from './HomeNav'
import HomeHero from './HomeHero'
import Reviews from './TwitterReviews'
import News from './News'
import AnimeReviews from './AnimeReviews'
import HomeTabs from './HomeTabs'
import RelatedPosts from './RelatedPosts'
import GlobalFooter from '../../components/common/GlobalFooter'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
  newsArticles: Post[]
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings, newsArticles } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <HomeNav />
      <Layout preview={preview} loading={loading}>
        <HomeHero />
        <Reviews />
        <News newsArticles={newsArticles} />
        <AnimeReviews />
        <HomeTabs />
        <RelatedPosts />
        <GlobalFooter />
        {/* <Container>
          <BlogHeader title={title} description={description} level={1} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container> */}
      </Layout>
    </>
  )
}
