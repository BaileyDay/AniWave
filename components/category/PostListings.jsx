import React, { useState } from 'react'
import { urlForImage } from 'lib/sanity.image'
import Link from 'next/link'
import Image from 'next/image'

export default function PostListings({ category, posts }) {
  const [visiblePosts, setVisiblePosts] = useState(5)

  const loadMorePosts = () => {
    setVisiblePosts(visiblePosts + 5)
  }

  return (
    <div className="bg-white py-24 dark:bg-zinc-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-sky-500 sm:text-4xl">
            {category?.title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-slate-900 dark:text-slate-100">
            {category?.description}
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.slice(0, visiblePosts).map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <Link
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                  href={`/posts/${post.slug}`}
                >
                  <div className="relative aspect-[16/9] h-64 sm:aspect-[2/1] lg:aspect-[1/1] lg:w-64 lg:shrink-0">
                    <Image
                      src={urlForImage(post?.coverImage).url()}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 h-full w-full rounded-2xl bg-slate-500"
                    />

                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        className="font-semibold text-slate-900 dark:text-sky-500"
                        dateTime={post?.date}
                        title={new Date(post?.date).toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      >
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <a
                        href={post.category?.href}
                        className="relative z-10 rounded-full bg-slate-300 px-3 py-1.5 font-medium text-slate-900 hover:bg-slate-600 dark:bg-slate-800 dark:text-slate-100"
                      >
                        {category?.title}
                      </a>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="group-hover:text-slate-9 mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-white">
                        <a href={``}>
                          <span className="absolute inset-0" />
                          {post?.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-slate-900 dark:text-slate-100">
                        {post?.excerpt && post?.excerpt.length > 200
                          ? `${post?.excerpt.substring(0, 200)}...`
                          : post?.excerpt}
                      </p>
                    </div>
                    <div className="mt-2 flex border-t border-slate-900/5 pt-6 dark:border-slate-100">
                      <div className="relative flex items-center gap-x-4">
                        <div className="bg-slate-5 relative h-10 w-10 rounded-full">
                          <Image
                            src={urlForImage(post?.author.picture).url()}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-slate-900 dark:text-white">
                            <a href={post.author.href}>
                              <span className="absolute inset-0 dark:text-white" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-blue-700">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          {visiblePosts < posts.length && (
            <div className="mt-8 text-center">
              <button
                onClick={loadMorePosts}
                className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-700"
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
