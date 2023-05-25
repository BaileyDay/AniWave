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
        <meta
          name="description"
          content="Meet the AniWave team! A passionate community of anime lovers creating content that celebrates the magical world of anime and manga. Discover our journey, meet our team members, and see how we're dedicated to bringing you the best in anime news, reviews, and more. Join us in our love for all things anime!"
        ></meta>
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
