import GlobalFooter from '../common/GlobalFooter'
import GlobalNav from '../common/GlobalNav'
import PostBody from 'components/posts/PostBody'
import Head from 'next/head'

const Page = ({ page }) => {
  return (
    <>
      <GlobalNav />
      <Head>
        <title>{page?.title} - AniWave</title>
      </Head>
      <div className="mt-24 px-4 lg:mt-48">
        <h1 className="mb-2 text-center text-3xl font-semibold leading-tight text-slatedark-1 dark:text-slate-1 lg:mb-6 lg:text-4xl">
          {page?.title}
        </h1>

        <PostBody content={page?.body} />
      </div>
      <GlobalFooter />
    </>
  )
}

export default Page
