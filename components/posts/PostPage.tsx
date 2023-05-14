import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreStories from 'components/MoreStories'
import PostBody from 'components/posts/PostBody'
import PostHeader from 'components/PostHeader'
import PostPageHead from 'components/PostPageHead'
import PostTitle from 'components/PostTitle'
import SectionSeparator from 'components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import GlobalFooter from '../../components/common/GlobalFooter'
import GlobalNav from '../../components/common/GlobalNav'
import AdvertisingModal from './AdvertisingModal'
import AniwavePromise from './AniwavePromise'
import Container from './BlogContainer'
import ScrollingShare from './ScrollingShare'
import SideBar from './SideBar'
import EmailForm from '../common/EmailForm'

import { urlForImage } from 'lib/sanity.image'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props
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

  console.log(sectionTitles)
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
              <main className="bg-slate-1 py-8 dark:bg-slatedark-1 lg:py-16">
                <div className="mx-auto flex max-w-screen-xl justify-between px-4">
                  <ScrollingShare />

                  <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-full p-4">
                    <header className="not-format mb-4 lg:mb-6">
                      <nav className="flex" aria-label="Breadcrumb"></nav>

                      <h1 className="mb-2 text-3xl font-semibold leading-tight text-slatedark-1 dark:text-slate-1 lg:mb-6 lg:text-4xl">
                        {post?.title}
                      </h1>

                      <div className=" flex items-center justify-between  py-4">
                        <div className="mr-4 text-xl">
                          <address className="inline font-light not-italic text-slate-12 dark:text-slatedark-12">
                            By{' '}
                            <Link
                              rel="author"
                              className="font-bold text-slatedark-1 no-underline hover:underline dark:text-blue-9 "
                              href="#"
                            >
                              {post.author.name}
                            </Link>
                          </address>{' '}
                          <span>
                            <span className="font-light text-slate-12 dark:text-slatedark-12">
                              on{' '}
                            </span>
                            <time
                              className="font-semibold text-slate-12 dark:text-blue-9"
                              dateTime={post.date}
                              title={new Date(post.date).toLocaleDateString(
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
                        <span className="dark:text-slatedark-12">
                          <i className="fa-regular fa-clock mr-1 text-slate-12 dark:text-slatedark-12 "></i>
                          {post?.readTime} Min Read
                        </span>
                        <span className="mx-2 text-slate-12 dark:text-slatedark-12">
                          •
                        </span>
                        <div>
                          <i className="fa-regular fa-clipboard mr-1 text-slate-12 dark:text-slatedark-12"></i>
                          <button
                            className=" font-semibold text-blue-11"
                            onClick={() => setDisclosureOpen(true)}
                          >
                            Advertising Disclosure
                          </button>
                        </div>
                      </div>
                      <AniwavePromise />
                    </header>
                    <div>
                      <p className="text-[1.25rem] text-slate-12 dark:text-slatedark-12">
                        {post?.excerpt}
                      </p>
                    </div>
                    <div className=" relative h-96 w-full rounded-xl">
                      <Image
                        src={urlForImage(post?.coverImage).url()}
                        alt={`Cover Image for ${post?.title}`}
                        layout="fill"
                        objectFit="cover" // Change this line
                        className="rounded-xl"
                      />
                    </div>
                    <div className="mt-4 flex  w-full items-center gap-6 border-b border-t border-slate-8 bg-slate-1 py-6 pl-3 dark:bg-slatedark-1  dark:text-slatedark-12 lg:hidden lg:border-slate-3 lg:px-10">
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
                className="bg-gray-50 dark:bg-gray-800 py-8 lg:py-16"
              >
                <div className="mx-auto max-w-screen-xl px-4">
                  <h2 className="mb-8 text-2xl font-bold text-slatedark-1 dark:text-slate-1">
                    Read Next
                  </h2>
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <article>
                      <a href="#">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-1.jpg"
                          className="mb-5 w-full max-w-full rounded-lg"
                          alt="Image 1"
                        />
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-slatedark-1 dark:text-slate-1">
                        <a href="#">
                          Flowbite enables IT to automate Apple device
                          configuration
                        </a>
                      </h2>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium underline underline-offset-4 hover:no-underline"
                      >
                        Read more
                      </a>
                    </article>
                    <article>
                      <a href="#">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-2.jpg"
                          className="mb-5 w-full max-w-full rounded-lg"
                          alt="Image 2"
                        />
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-slatedark-1 dark:text-slate-1">
                        <a href="#">How AI is transforming your smartphone</a>
                      </h2>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium underline underline-offset-4 hover:no-underline"
                      >
                        Read more
                      </a>
                    </article>
                    <article>
                      <a href="#">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-3.jpg"
                          className="mb-5 w-full max-w-full rounded-lg"
                          alt="Image 3"
                        />
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-slatedark-1 dark:text-slate-1">
                        <a href="#">
                          Android, ChromeOS, and the future of app discovery
                        </a>
                      </h2>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium underline underline-offset-4 hover:no-underline"
                      >
                        Read more
                      </a>
                    </article>
                    <article>
                      <a href="#">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-4.jpg"
                          className="mb-5 w-full max-w-full rounded-lg"
                          alt="Image 4"
                        />
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-slatedark-1 dark:text-slate-1">
                        <a href="#">
                          What Google collaboration app offers remote teams
                        </a>
                      </h2>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium underline underline-offset-4 hover:no-underline"
                      >
                        Read more
                      </a>
                    </article>
                    <article>
                      <a href="#">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-5.jpg"
                          className="mb-5 w-full max-w-full rounded-lg"
                          alt="Image 5"
                        />
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-slatedark-1 dark:text-slate-1">
                        <a href="#">
                          Collaboration app spending grows in the face of crisis
                        </a>
                      </h2>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium underline underline-offset-4 hover:no-underline"
                      >
                        Read more
                      </a>
                    </article>
                    <article>
                      <a href="#">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-6.jpg"
                          className="mb-5 w-full max-w-full rounded-lg"
                          alt="Image 6"
                        />
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-slatedark-1 dark:text-slate-1">
                        <a href="#">
                          For developers, too many meetings, too little focus
                          time
                        </a>
                      </h2>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium underline underline-offset-4 hover:no-underline"
                      >
                        Read more
                      </a>
                    </article>
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
