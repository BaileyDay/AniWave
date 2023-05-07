const News = () => {
  const randomImage = 'https://placewaifu.com/image/600'
  const articles = [
    {
      title: 'The Best Anime of 2022',
      author: 'Miyuki Nakamura',
      publicationDate: 'April 1, 2022',
      image: 'https://picsum.photos/600/400/?image=1005',
      description:
        'As the year comes to a close, we take a look back at the best anime series of 2022. From heartwarming dramas to action-packed adventures, these are the shows that captured our hearts and minds this year.',
      link: 'https://example.com/best-anime-2022',
    },
    {
      title: 'Interview with the Creator of Attack on Titan',
      author: 'Takeshi Suzuki',
      publicationDate: 'March 15, 2022',
      image: 'https://picsum.photos/600/400/?image=1012',
      description:
        "We sit down with Hajime Isayama, the creator of the hit anime series Attack on Titan, to discuss the show's final season, his inspirations, and what's next for him.",
      link: 'https://example.com/interview-with-hajime-isayama',
    },
    {
      title: 'The Rise of Virtual Reality in Anime',
      author: 'Kazuo Yamamoto',
      publicationDate: 'February 28, 2022',
      image: 'https://picsum.photos/600/400/?image=1009',
      description:
        'As virtual reality technology continues to advance, anime creators are finding new ways to incorporate it into their shows. We explore the rise of VR in anime and what it means for the future of the medium.',
      link: 'https://example.com/virtual-reality-in-anime',
    },
  ]
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
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="rounded-lg border border-slate-2 bg-slate-1 p-4 shadow-md dark:border-slate-8 dark:bg-slate-4"
                >
                  <a href={article.link}>
                    <img
                      className="mb-5 rounded-lg"
                      src={article.image}
                      alt={article.title}
                    />
                  </a>
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 mr-2 rounded px-2.5 py-0.5 text-xs font-semibold">
                    Article
                  </span>
                  <h2 className="text-gray-900 dark:text-white my-2 text-2xl font-bold tracking-tight">
                    <a href={article.link}>{article.title}</a>
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-4 font-light">
                    {article.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={randomImage}
                      alt={article.author.name}
                    />
                    <div className="dark:text-white font-medium">
                      <div>{article.author.name}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                        {article.publicationDate} · 16 min read
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <button class="group-hover:from-cyan-500 focus:ring-cyan-200 group relative mb-2 mr-2 inline-flex  w-full items-center  justify-center overflow-hidden rounded-lg bg-gradient-to-br from-sky-9 to-blue-9 p-0.5 text-sm font-medium text-slate-11 hover:text-slate-1 focus:outline-none focus:ring-4 group-hover:to-blue-9 dark:text-slate-1 dark:focus:ring-sky-8 lg:w-auto">
          <span class="relative w-full items-center justify-center rounded-md bg-slate-1 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-slatedark-1">
            <div class="flex items-center justify-center">
              <span>More News</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="ml-1 h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </span>
        </button>
      </div>
    </aside>
  )
}

export default News
