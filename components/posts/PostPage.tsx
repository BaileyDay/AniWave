import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreStories from 'components/MoreStories'
import PostBody from 'components/PostBody'
import PostHeader from 'components/PostHeader'
import PostPageHead from 'components/PostPageHead'
import PostTitle from 'components/PostTitle'
import SectionSeparator from 'components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import GlobalFooter from '../../components/common/GlobalFooter'
import GlobalNav from '../../components/common/GlobalNav'
import AniwavePromise from './AniwavePromise'
import Container from './BlogContainer'
import ScrollingShare from './ScrollingShare'

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
  console.log(post)
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
                          <address className="inline font-light not-italic">
                            By{' '}
                            <Link
                              rel="author"
                              className="font-bold text-slatedark-1 no-underline hover:underline dark:text-slate-1"
                              href="#"
                            >
                              {post.author.name}
                            </Link>
                          </address>{' '}
                          <span>
                            <span className="font-light">on </span>
                            <time
                              className="font-semibold"
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
                        <span>
                          <i className="fa-regular fa-clock mr-1 text-slate-12"></i>
                          {post?.readTime} Min Read
                        </span>
                        <button className="ml-2 text-blue-11 underline">
                          Advertising Disclosure
                        </button>
                      </div>
                      <AniwavePromise />
                    </header>

                    <div className="overflow-auto whitespace-normal">
                      <PostBody content={post?.content} />
                    </div>
                  </article>
                  <aside
                    className="hidden xl:block xl:w-80"
                    aria-labelledby="sidebar-label"
                  >
                    <h3 id="sidebar-label" className="sr-only">
                      Sidebar
                    </h3>
                    <div className="text-gray-500 border-gray-200 divide-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:divide-gray-700 mb-6 divide-y rounded-lg border bg-slate-1 p-5 font-medium shadow">
                      <h4 className="mb-4 text-sm font-bold uppercase text-slatedark-1 dark:text-slate-1">
                        Latest news
                      </h4>
                      <div className="flex items-center py-4">
                        <a href="#" className="shrink-0">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                            className="mr-4 h-12 w-12 max-w-full rounded-lg"
                            alt="Image 1"
                          />
                        </a>
                        <a href="#">
                          <h5 className="font-semibold leading-tight text-slatedark-1 hover:underline dark:text-slate-1">
                            SaaS can help speed up Cybersecurity projects
                          </h5>
                        </a>
                      </div>
                      <div className="flex items-center py-4">
                        <a href="#" className="shrink-0">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                            className="mr-4 h-12 w-12 max-w-full rounded-lg"
                            alt="Image 2"
                          />
                        </a>
                        <a href="#">
                          <h5 className="font-semibold leading-tight text-slatedark-1 hover:underline dark:text-slate-1">
                            Crunching large datasets made fast: Flowbite Library
                          </h5>
                        </a>
                      </div>
                      <div className="flex items-center py-4">
                        <a href="#" className="shrink-0">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png"
                            className="mr-4 h-12 w-12 max-w-full rounded-lg"
                            alt="Image 2"
                          />
                        </a>
                        <a href="#">
                          <h5 className="font-semibold leading-tight text-slatedark-1 hover:underline dark:text-slate-1">
                            Here’s how to make a react app with Flowbite Blocks
                          </h5>
                        </a>
                      </div>
                      <div className="flex items-center py-4">
                        <a href="#" className="shrink-0">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                            className="mr-4 h-12 w-12 max-w-full rounded-lg"
                            alt="Image 3"
                          />
                        </a>
                        <a href="#">
                          <h5 className="font-semibold leading-tight text-slatedark-1 hover:underline dark:text-slate-1">
                            AI meets IoT: What is the artificial intelligence
                          </h5>
                        </a>
                      </div>
                      <div className="flex items-center pt-4">
                        <a href="#" className="shrink-0">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                            className="mr-4 h-12 w-12 max-w-full rounded-lg"
                            alt="Image 2"
                          />
                        </a>
                        <a href="#">
                          <h5 className="font-semibold leading-tight text-slatedark-1 hover:underline dark:text-slate-1">
                            How to create a basic application with Flowbite
                          </h5>
                        </a>
                      </div>
                    </div>
                    <div className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-6 rounded-lg border bg-slate-1 p-5 shadow">
                      <h4 className="mb-2 font-semibold text-slatedark-1 dark:text-slate-1">
                        Get the best of Flowbite News delivered to your inbox
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm font-light">
                        Subscribe our newsletter for latest world news.
                        Let&apos;s stay updated!
                      </p>
                      <form action="#">
                        <label htmlFor="name-icon" className="sr-only">
                          Your Email
                        </label>
                        <div className="relative mb-4">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                              aria-hidden="true"
                              className="text-gray-500 dark:text-gray-400 h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <input
                            required
                            type="text"
                            id="name-icon"
                            className="bg-gray-50 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg  border p-2.5 pl-10 text-sm text-slatedark-1 dark:text-slate-1"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="relative mb-4">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                              aria-hidden="true"
                              className="text-gray-500 dark:text-gray-400 h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                          </div>
                          <input
                            required
                            type="email"
                            id="email-address-icon"
                            className="bg-gray-50 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg  border p-2.5 pl-10 text-sm text-slatedark-1 dark:text-slate-1"
                            placeholder="name@company.com"
                          />
                        </div>
                        <button
                          type="submit"
                          className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mb-2 mr-2 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-slate-1 focus:outline-none focus:ring-4"
                        >
                          Subscribe
                        </button>
                      </form>
                    </div>
                    <div className="text-gray-500 border-gray-200 divide-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:divide-gray-700 mb-6 divide-y rounded-lg border bg-slate-1 p-5 font-medium shadow">
                      <h4 className="mb-4 text-sm font-bold uppercase text-slatedark-1 dark:text-slate-1">
                        Recent comments
                      </h4>
                      <div className="py-4">
                        <p className="text-gray-500 dark:text-gray-400 font-light">
                          Bonnie Green on{' '}
                          <a
                            href="#"
                            className="font-medium italic text-slatedark-1 hover:underline dark:text-slate-1"
                          >
                            5 Ways SaaS Can Help Speed Up Cybersecurity
                            Implementation
                          </a>
                        </p>
                      </div>
                      <div className="py-4">
                        <p className="text-gray-500 dark:text-gray-400 font-light">
                          Lana Byrd on{' '}
                          <a
                            href="#"
                            className="font-medium italic text-slatedark-1 hover:underline dark:text-slate-1"
                          >
                            Jese Leos on Crunching Large Datasets Made Fast and
                            Easy: the Polars Library
                          </a>
                        </p>
                      </div>
                      <div className="py-4">
                        <p className="text-gray-500 dark:text-gray-400 font-light">
                          Jese Leos on{' '}
                          <a
                            href="#"
                            className="font-medium italic text-slatedark-1 hover:underline dark:text-slate-1"
                          >
                            Founders, ditch your long presentations. Here’s how
                            to make ...
                          </a>
                        </p>
                      </div>
                      <div className="py-4">
                        <p className="text-gray-500 dark:text-gray-400 font-light">
                          Thomas Lean on{' '}
                          <a
                            href="#"
                            className="font-medium italic text-slatedark-1 hover:underline dark:text-slate-1"
                          >
                            AI Meets IoT: What is the Artificial Intelligence of
                            Things
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-500 border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 mb-6 rounded-lg border bg-slate-1 p-5 font-medium shadow">
                      <h4 className="mb-4 text-sm font-bold uppercase text-slatedark-1 dark:text-slate-1">
                        Follow me
                      </h4>
                      <div className="mb-4 flex items-center">
                        <div className="mr-3 shrink-0">
                          <img
                            className="mt-1 h-8 w-8 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                            alt="Jese Leos"
                          />
                        </div>
                        <div className="mr-3">
                          <span className="block font-medium text-slatedark-1 dark:text-slate-1">
                            Jese Leos
                          </span>
                          <span className="text-sm font-light">
                            546k followers
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm font-light">
                        Hey! I&apos;m Jese Leos. I&apos;m a career-changer.
                        Bootcamp grad & Dev.
                      </p>
                      <button
                        type="button"
                        className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-sm font-medium text-slate-1 focus:outline-none focus:ring-4"
                      >
                        Follow
                      </button>
                    </div>
                    <div>
                      <div className="bg-gray-100 dark:bg-gray-800 mb-3 flex h-48 w-full items-center justify-center rounded-lg">
                        <svg
                          aria-hidden="true"
                          className="text-gray-400 h-8 w-8"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm font-light">
                        Students and Teachers, save up to 60% on Flowbite
                        Creative Cloud.
                      </p>
                      <p className="text-gray-400 dark:text-gray-500 text-xs font-light uppercase">
                        Ads placeholder
                      </p>
                    </div>
                  </aside>
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
