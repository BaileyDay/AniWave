import { GetStaticProps } from 'next'
import Page from '../components/static/Page' // Create or use your own page component
import { getPage, getAllPagesSlugs } from 'lib/sanity.client' // Ensure you have these methods in your sanity client
import { Page as PageType } from 'lib/sanity.queries' // Create a type for your page data in your sanity queries file

interface PageProps {
  page: PageType
}

interface Query {
  [key: string]: string
}

export default function PageSlugRoute(props: PageProps) {
  const { page } = props
  return <Page page={page} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { params = {} } = ctx
  const page = await getPage(params.slug)

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      page,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPagesSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/${slug.current}`) || [],
    fallback: 'blocking',
  }
}
