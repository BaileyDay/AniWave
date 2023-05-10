// pages/categories/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import GlobalNav from '../../components/common/GlobalNav'
import PostListings from '../../components/category/PostListings'
import GlobalFooter from '../../components/common/GlobalFooter'

// Mock data
const mockCategories = [
  {
    slug: 'news',
    title: 'News',
    description: 'Get the latest news and updates from the anime world.',
  },
  {
    slug: 'reviews',
    title: 'Reviews',
    description:
      'Read in-depth reviews of your favorite anime series and movies.',
  },
  {
    slug: 'streaming',
    title: 'Streaming',
    description:
      'Discover the best platforms to stream and watch anime online.',
  },
  {
    slug: 'manga',
    title: 'Manga',
    description: 'Explore the exciting world of manga and graphic novels.',
  },
  {
    slug: 'events',
    title: 'Events',
    description:
      'Stay informed about upcoming anime conventions, expos, and gatherings.',
  },
  {
    slug: 'culture',
    title: 'Culture',
    description:
      'Learn about Japanese culture and how it influences the world of anime.',
  },
  {
    slug: 'merchandise',
    title: 'Merchandise',
    description:
      'Find the coolest anime merchandise, from clothing to collectibles.',
  },
]

export const getStaticPaths = async () => {
  const paths = mockCategories.map((category) => ({
    params: { slug: category.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug
  const category = mockCategories.find((c) => c.slug === slug)

  if (!category) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      category,
    },
  }
}

const CategoryPage = ({ category }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <GlobalNav />
      <div className="lg:mt-24">
        <PostListings category={category} />
      </div>
      <GlobalFooter />
    </>
  )
}

export default CategoryPage
