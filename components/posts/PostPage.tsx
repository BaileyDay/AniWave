import Layout from 'components/BlogLayout'
import PostPageHead from 'components/PostPageHead'
import PostBody from 'components/posts/PostBody'
import PostTitle from 'components/PostTitle'
import { urlForImage } from 'lib/sanity.image'
import type { Post, Settings } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'

import GlobalFooter from '../../components/common/GlobalFooter'
import GlobalNav from '../../components/common/GlobalNav'
import EmailForm from '../common/EmailForm'
import AdvertisingModal from './AdvertisingModal'
import AniwavePromise from './AniwavePromise'
import Container from './BlogContainer'
import ScrollingShare from './ScrollingShare'
import SideBar from './SideBar'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
  randomPosts: Post[]
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const {
    preview,
    loading,
    morePosts = NO_POSTS,
    post,
    settings,
    randomPosts,
  } = props
  const [disclosureOpen, setDisclosureOpen] = useState(false)
  const [sectionTitles, setSectionTitles] = useState([])

  useEffect(() => {
    const titles = Array.from(document.querySelectorAll('.post-body h2')).map(
      (h2) => {
        // Transform the text content into a suitable id.
        const id = `section-${h2.textContent
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')}`

        // Add the id to the h2 element for linking.
        h2.id = id

        return {
          id,
          title: h2.textContent,
        }
      }
    )

    setSectionTitles(titles)
  }, [post?.content])

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <GlobalNav />
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <AdvertisingModal
                open={disclosureOpen}
                setOpen={setDisclosureOpen}
              />
              <main className="bg-white py-8 dark:bg-zinc-900 lg:py-16">
                <div className="mx-auto flex max-w-screen-xl justify-between px-1 lg:px-4">
                  <ScrollingShare />

                  <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-full p-4">
                    <header className="not-format mb-4 lg:mb-6">
                      <nav className="flex" aria-label="Breadcrumb"></nav>

                      <h1 className="mb-2 text-3xl font-semibold leading-tight text-zinc-900 dark:text-white lg:mb-6 lg:text-4xl">
                        {post?.title}
                      </h1>

                      <div className=" flex items-center justify-between  py-4">
                        <div className="mr-4 text-xl">
                          <address className="inline font-light not-italic text-slate-900 dark:text-white">
                            By{' '}
                            <Link
                              rel="author"
                              className="font-bold text-zinc-900 no-underline hover:underline dark:text-blue-500 "
                              href="#"
                            >
                              {post?.author.name}
                            </Link>
                          </address>{' '}
                          <span>
                            <span className="font-light text-slate-900 dark:text-white">
                              on{' '}
                            </span>
                            <time
                              className="font-semibold text-slate-900 dark:text-blue-500"
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
                          </span>
                        </div>
                      </div>
                      <div className="flex pb-2">
                        <span className="dark:text-white">
                          <i className="fa-regular fa-clock mr-1 text-slate-900 dark:text-white "></i>
                          {post?.readTime} Min Read
                        </span>
                        <span className="mx-2 text-slate-900 dark:text-white">
                          •
                        </span>
                        <div>
                          <i className="fa-regular fa-clipboard mr-1 text-slate-900 dark:text-white"></i>
                          <button
                            className=" font-semibold text-sky-500"
                            onClick={() => setDisclosureOpen(true)}
                          >
                            Advertising Disclosure
                          </button>
                        </div>
                      </div>
                      <AniwavePromise />
                    </header>
                    <div>
                      <p className="text-[1.25rem] text-lg text-slate-900 dark:text-white lg:text-xl">
                        {post?.excerpt}
                      </p>
                    </div>
                    <div className="relative my-2 h-56 w-full rounded-xl lg:h-96">
                      <Image
                        src={urlForImage(post?.coverImage).url()}
                        alt={`Cover Image for ${post?.title}`}
                        layout="fill"
                        objectFit="cover" // Change this line
                        className="rounded-xl"
                      />
                    </div>
                    <div className="border-slate-8 lg:border-slate-3  mt-4 flex w-full items-center gap-6 border-b border-t bg-white py-6 pl-3  dark:bg-zinc-900 dark:text-white lg:hidden lg:px-10">
                      On this Page
                      <ul className="scrollbar-hide flex h-full flex-1 snap-x snap-mandatory items-center gap-8 overflow-x-auto overscroll-x-contain whitespace-nowrap lg:w-full lg:flex-col lg:items-start ">
                        {sectionTitles.map(({ id, title }) => (
                          <li key={id} className=" my-1 font-bold">
                            <a href={`#${id}`}>{title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="overflow-auto whitespace-normal">
                      <PostBody content={post?.content} />
                    </div>
                    <EmailForm />
                  </article>
                  <SideBar sectionTitles={sectionTitles} />
                </div>
              </main>

              <aside
                aria-label="Related articles"
                className=" py-8 dark:bg-gray-800 lg:py-16"
              >
                <div className="mx-auto max-w-screen-xl px-4">
                  <h2 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-white">
                    Read Next
                  </h2>
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {randomPosts.map((post, index) => (
                      <article key={index}>
                        <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-lg">
                          <a href={`/posts/${post.slug}`}>
                            <Image
                              src={urlForImage(post?.coverImage).url()}
                              alt={post.title}
                              layout="fill"
                              objectFit="cover"
                            />
                          </a>
                        </div>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-zinc-900 dark:text-white">
                          <a href={`/posts/${post.slug}`}>{post.title}</a>
                        </h2>
                      </article>
                    ))}
                  </div>
                </div>
              </aside>
            </>
          )}
        </Container>
        <GlobalFooter />
      </Layout>
    </>
  )
}
