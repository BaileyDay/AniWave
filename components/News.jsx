const News = () => {
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
    {
      title: 'The Top 10 Anime Openings of All Time',
      author: 'Ayumi Tanaka',
      publicationDate: 'February 1, 2022',
      image: 'https://picsum.photos/600/400/?image=1020',
      description:
        'Anime openings are often as memorable as the shows themselves. We rank the top 10 anime openings of all time, from classics like Cowboy Bebop to modern hits like Demon Slayer.',
      link: 'https://example.com/top-anime-openings',
    },
    {
      title: 'Why Anime Is Taking Over the World',
      author: 'Yoshiro Nakamura',
      publicationDate: 'January 15, 2022',
      image: 'https://picsum.photos/600/400/?image=1024',
      description:
        'Anime has never been more popular or influential than it is today. We explore why this once-niche medium is now taking over the world and what it means for the future of entertainment.',
      link: 'https://example.com/anime-taking-over-the-world',
    },
  ]
  return (
    <aside
      aria-label="Related articles"
      class=" bg-slate-1 py-8 dark:bg-slatedark-1 "
    >
      <div class="mx-auto w-full max-w-screen-xl px-4">
        <h2 class="dark:text-white  text-2xl font-bold text-blue-11">
          Fresh Rolls 🍱
        </h2>
        <h3 class="dark:text-white mb-8 text-2xl font-bold text-slate-12">
          Top Anime News
        </h3>
        <div id="animation-carousel" data-carousel="slide">
          <div class="relative flex  snap-x snap-mandatory scroll-mr-4 gap-x-4 overflow-hidden overflow-x-auto rounded-lg">
            {articles.map((article, index) => (
              <div
                key={index}
                className={`w-11/12 flex-shrink-0 snap-center lg:h-1/2 lg:w-full lg:flex-shrink`}
                data-carousel-item
              >
                <div class="border-black-50 relative block h-full space-y-5 rounded-[20px] border bg-slate-1 p-6 shadow-md transition duration-300 ease-in-out hover:text-current md:rounded-md">
                  <article class="">
                    <a href={article.link}>
                      <img
                        class="mb-5 rounded-lg"
                        src={article.image}
                        alt={article.imageAlt}
                      />
                    </a>
                    <div class="mb-3 flex items-center space-x-2">
                      <img
                        class="h-8 w-8 rounded-full"
                        src={article.author.avatar}
                        alt={article.author.name}
                      />
                      <div class="dark:text-white font-medium">
                        <div>{article.author.name}</div>
                        <div class="text-gray-500 dark:text-gray-400 text-sm font-normal">
                          {article.date} · {article.readTime}
                        </div>
                      </div>
                    </div>
                    <h3 class="text-gray-900 dark:text-white mb-2 text-xl font-bold tracking-tight lg:text-2xl">
                      <a href={article.link}>{article.title}</a>
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400 mb-3 font-light">
                      {article.description}
                    </p>
                    <a
                      href={article.link}
                      class="text-primary-600 hover:text-primary-800 dark:text-primary-500 inline-flex items-center font-medium hover:no-underline"
                    >
                      Read more{' '}
                      <svg
                        class="ml-1 mt-px h-4 w-4"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default News
