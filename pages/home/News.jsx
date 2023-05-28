import { urlForImage } from 'lib/sanity.image'
import Link from 'next/link'

const News = ({ newsArticles }) => {
  return (
    <aside
      aria-label="Related articles"
      className="bg-white py-6 dark:bg-zinc-900"
    >
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <h2 className="text-2xl font-bold text-sky-500 dark:text-white">
          Fresh Rolls 🍱
        </h2>
        <h3 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white dark:text-white">
          Top Anime News
        </h3>
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:px-6 lg:pb-16">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {newsArticles?.map((article, index) => (
                <article
                  key={index}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-md dark:border-slate-800 dark:bg-neutral-300"
                >
                  <Link href={`/posts/${article?.slug}`}>
                    <img
                      className="mb-5 rounded-lg"
                      src={urlForImage(article?.coverImage).url()}
                      alt={article?.title}
                    />
                  </Link>
                  <span className="mr-2 rounded-lg bg-sky-500 px-2.5 py-0.5 text-xs font-semibold text-white dark:bg-slate-200 ">
                    News
                  </span>
                  <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href={`/posts/${article?.slug}`}>
                      {article?.title}
                    </Link>
                  </h2>
                  <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                    {article?.excerpt && article?.excerpt.length > 200
                      ? `${article?.excerpt.substring(0, 200)}...`
                      : article?.excerpt}
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={urlForImage(article?.author.picture).url()}
                      alt={article?.author.name}
                    />
                    <div className="font-normal dark:text-white">
                      <div className="text-sky-500">{article?.author.name}</div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        <time
                          className="font-semibold text-slate-900 dark:text-blue-500"
                          dateTime={article?.date}
                          title={new Date(article?.date).toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}
                        >
                          {new Date(article?.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>{' '}
                        · {article?.readTime} min read
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Link
          class="dark:focus:ring-sky-8 group relative mb-2 mr-2 inline-flex w-full  items-center justify-center  overflow-hidden rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 p-0.5 text-sm font-medium text-slate-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white lg:w-auto"
          href="/category/news"
        >
          <span class="relative w-full items-center justify-center rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-zinc-900">
            <div class="flex items-center justify-center">
              <span>More News</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="ml-1 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </span>
        </Link>
      </div>
    </aside>
  )
}

export default News
