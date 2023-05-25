import React, { useState } from 'react'
import { urlForImage } from 'lib/sanity.image'
import Link from 'next/link'

export default function PostListings({ category, posts }) {
  const [visiblePosts, setVisiblePosts] = useState(5)

  const loadMorePosts = () => {
    setVisiblePosts(visiblePosts + 5)
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-blue-11 sm:text-4xl">
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
                <Link
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                  href={`/posts/${post.slug}`}
                >
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      src={urlForImage(post?.coverImage).url()}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-2xl bg-slate-5 object-cover"
                    />

                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-12/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        className="font-semibold text-slate-12 dark:text-blue-9"
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
                        className="hover:bg-slate-3-100 relative z-10 rounded-full bg-slate-5 px-3 py-1.5 font-medium text-slate-9"
                      >
                        {category?.title}
                      </a>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-12 group-hover:text-slate-9 dark:text-slatedark-12">
                        <a href={``}>
                          <span className="absolute inset-0" />
                          {post?.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-slate-9">
                        {post?.excerpt && post?.excerpt.length > 200
                          ? `${post?.excerpt.substring(0, 200)}...`
                          : post?.excerpt}
                      </p>
                    </div>
                    <div className="mt-2 flex border-t border-slate-12/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <img
                          src={urlForImage(post?.author.picture).url()}
                          alt=""
                          className="h-10 w-10 rounded-full bg-slate-5"
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-slate-12 dark:text-slatedark-12">
                            <a href={post.author.href}>
                              <span className="absolute inset-0 dark:text-slatedark-12" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-blue-11">{post.author.role}</p>
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
                className="rounded bg-blue-9 px-6 py-2 text-slate-1 hover:bg-blue-11"
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
