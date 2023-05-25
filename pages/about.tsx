import { getAllAuthors } from 'lib/sanity.client'
import GlobalFooter from 'components/common/GlobalFooter'
import GlobalNav from 'components/common/GlobalNav'
import People from 'components/about/People'
import Head from 'next/head'

const AboutPage = ({ authors }) => {
  return (
    <>
      <Head>
        <title>AniWave | About</title>
      </Head>
      <GlobalNav />
      <People authors={authors} />
      <GlobalFooter />
    </>
  )
}

export async function getStaticProps() {
  const authors = await getAllAuthors()

  return {
    props: {
      authors,
    },
    revalidate: 60, // In seconds
  }
}

export default AboutPage
