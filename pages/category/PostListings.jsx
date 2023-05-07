const posts = [
  // Existing post
  // ...

  {
    id: 2,
    title: 'Top 10 Anime Series of the Year',
    href: '#',
    description:
      'Explore the best anime series of the year that captivated audiences and critics alike with their compelling storytelling and stunning visuals.',
    imageUrl: 'https://placewaifu.com/image/800',
    date: 'Apr 05, 2020',
    datetime: '2020-04-05',
    category: { title: 'Anime', href: '#' },
    author: {
      name: 'Samantha Johnson',
      role: 'Staff Writer',
      href: '#',
      imageUrl: 'https://placewaifu.com/image/100',
    },
  },
  {
    id: 3,
    title: 'The Impact of Streaming Platforms on Anime Industry',
    href: '#',
    description:
      'Discover how streaming platforms have revolutionized the anime industry, making it more accessible and increasing its global popularity.',
    imageUrl: 'https://placewaifu.com/image/800',
    date: 'Jun 22, 2020',
    datetime: '2020-06-22',
    category: { title: 'Streaming', href: '#' },
    author: {
      name: 'Alex Smith',
      role: 'Contributor',
      href: '#',
      imageUrl: 'https://placewaifu.com/image/100',
    },
  },
  {
    id: 4,
    title: 'A Deep Dive into the World of Manga',
    href: '#',
    description:
      'Learn about the history of manga, its impact on Japanese culture, and its growing popularity around the world.',
    imageUrl: 'https://placewaifu.com/image/800',
    date: 'Aug 14, 2020',
    datetime: '2020-08-14',
    category: { title: 'Manga', href: '#' },
    author: {
      name: 'Emily White',
      role: 'Senior Editor',
      href: '#',
      imageUrl: 'https://placewaifu.com/image/100',
    },
  },
  {
    id: 5,
    title: 'The Evolution of Anime Art Styles',
    href: '#',
    description:
      "Trace the evolution of anime art styles from their early beginnings to the diverse range of styles seen in today's popular series.",
    imageUrl: 'https://placewaifu.com/image/800',
    date: 'Oct 12, 2020',
    datetime: '2020-10-12',
    category: { title: 'ArtStyles', href: '#' },
    author: {
      name: 'Oliver Martinez',
      role: 'Art Critic',
      href: '#',
      imageUrl: 'https://placewaifu.com/image/100',
    },
  },
  {
    id: 6,
    title: 'The Influence of Japanese Culture on Anime',
    href: '#',
    description:
      'Explore the deep connection between Japanese culture and anime, and how it has shaped the stories and visuals of the medium.',
    imageUrl: 'https://placewaifu.com/image/800',
    date: 'Dec 15, 2020',
    datetime: '2020-12-15',
    category: { title: 'Culture', href: '#' },
    author: {
      name: 'Natalie Brown',
      role: 'Culture Writer',
      href: '#',
      imageUrl: 'https://placewaifu.com/image/100',
    },
  },
  {
    id: 7,
    title: 'The Role of Music in Anime',
    href: '#',
    description:
      'Discover the importance of music in anime and how it adds emotional depth and enhances storytelling.',
    imageUrl: 'https://placewaifu.com/image/800',
    date: 'Feb 02, 2021',
    datetime: '2021-02-02',
    category: { title: 'Music', href: '#' },
    author: {
      name: 'Lucas Anderson',
      role: 'Music Critic',
      href: '#',
      imageUrl: 'https://placewaifu.com/image/100',
    },
  },
  {
    id: 8,
    title: 'Voice Acting in Anime: The Unsung Heroes',
    href: '#',
    description:
      'Celebrate the talented voice actors behind some of the most iconic anime characters and their impact on the industry.',
    imageUrl: 'https://placewaifu.com/image/800',
    date: 'Apr 01, 2021',
    datetime: '2021-04-01',
    category: { title: 'Voice Acting', href: '#' },
    author: {
      name: 'Sophia Johnson',
      role: 'Voice Acting Enthusiast',
      href: '#',
      imageUrl: 'https://placewaifu.com/image/100',
    },
  },
  {
    id: 9,
    title: 'The Best Anime Merchandise and Collectibles',
    href: '#',
    description:
      'Discover the must-have anime merchandise and collectibles that every fan should own, from figures to clothing and more.',
    imageUrl: 'https://placewaifu.com/image/800',
    date: 'Jun 04, 2021',
    datetime: '2021-06-04',
    category: { title: 'Merchandise', href: '#' },
    author: {
      name: 'William Jackson',
      role: 'Collectibles Expert',
      href: '#',
      imageUrl: 'https://placewaifu.com/image/100',
    },
  },
  {
    id: 10,
    title: 'The Rise of Anime-Inspired Video Games',
    href: '#',
    description:
      'Learn about the growing trend of anime-inspired video games and how they are bringing beloved series to life in an interactive medium.',
    imageUrl: 'https://placewaifu.com/image/800',
    date: 'Aug 16, 2021',
    datetime: '2021-08-16',
    category: { title: 'Video Games', href: '#' },
    author: {
      name: 'Grace Thompson',
      role: 'Gaming Journalist',
      href: '#',
      imageUrl: 'https://placewaifu.com/image/100',
    },
  },
]

import React, { useState } from 'react'

export default function PostListings({ category }) {
  const [visiblePosts, setVisiblePosts] = useState(5)

  const loadMorePosts = () => {
    setVisiblePosts(visiblePosts + 5)
  }

  console.log(category)

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-12 sm:text-4xl">
            {category?.title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-slate-9">
            {category?.description}
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.slice(0, visiblePosts).map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-slate-5 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-12/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-slate-50">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="hover:bg-slate-3-100 relative z-10 rounded-full bg-slate-5 px-3 py-1.5 font-medium text-slate-9"
                    >
                      {post?.category?.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-12 group-hover:text-slate-9">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post?.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-slate-9">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-slate-12/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-10 w-10 rounded-full bg-slate-5"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-slate-12">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-slate-9">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {visiblePosts < posts.length && (
            <div className="mt-8 text-center">
              <button
                onClick={loadMorePosts}
                className="text-white rounded bg-slate-9 px-6 py-2 hover:bg-slate-11"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
