import Link from 'next/link'
import { urlForImage } from 'lib/sanity.image'

const News = ({ newsArticles }) => {
  return (
    <aside
      aria-label="Related articles"
      className="bg-slate-1 py-6 dark:bg-slatedark-1"
    >
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <h2 className="dark:text-white text-2xl font-bold text-blue-11">
          Fresh Rolls 🍱
        </h2>
        <h3 className="dark:text-white mb-8 text-2xl font-bold text-slate-12 dark:text-slatedark-12">
          Top Anime News
        </h3>
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:px-6 lg:pb-16">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article, index) => (
                <article
                  key={index}
                  className="rounded-lg border border-slate-2 bg-slate-1 p-4 shadow-md dark:border-slate-8 dark:bg-slate-4"
                >
                  <Link href={`/posts/${article.slug}`}>
                    <img
                      className="mb-5 rounded-lg"
                      src={urlForImage(article?.coverImage).url()}
                      alt={article.title}
                    />
                  </Link>
                  <span className="dark:bg-purple-200 dark:text-purple-900 mr-2 rounded-lg bg-blue-11 px-2.5 py-0.5 text-xs font-semibold text-slate-1">
                    News
                  </span>
                  <h2 className="text-gray-900 dark:text-white my-2 text-2xl font-bold tracking-tight">
                    <Link href={`/posts/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-4 font-light">
                    {article?.excerpt && article.excerpt.length > 200
                      ? `${article.excerpt.substring(0, 200)}...`
                      : article.excerpt}
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={urlForImage(article?.author.picture).url()}
                      alt={article.author.name}
                    />
                    <div className="dark:text-white font-medium">
                      <div>{article.author.name}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                        <time
                          className="font-semibold text-slate-12 dark:text-blue-9"
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
                          {new Date(article.date).toLocaleDateString('en-US', {
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
          class="group-hover:from-cyan-500 focus:ring-cyan-200 group relative mb-2 mr-2 inline-flex  w-full items-center  justify-center overflow-hidden rounded-lg bg-gradient-to-br from-sky-9 to-blue-9 p-0.5 text-sm font-medium text-slate-11 hover:text-slate-1 focus:outline-none focus:ring-4 group-hover:to-blue-9 dark:text-slate-1 dark:focus:ring-sky-8 lg:w-auto"
          href="/category/news"
        >
          <span class="relative w-full items-center justify-center rounded-md bg-slate-1 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-slatedark-1">
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
