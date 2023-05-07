const posts = [
  {
    id: 1,
    title: 'The Evolution of Anime Art Styles',
    href: '#',
    description:
      'Discover the transformation of anime art styles throughout the years. From the classic hand-drawn techniques to modern digital animation, learn how visual storytelling in anime has evolved over time.',
    imageUrl:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80',
    date: 'Apr 15, 2023',
    datetime: '2023-04-15',
    author: {
      name: 'Samantha Clark',
      imageUrl: 'https://picsum.photos/400/400/?image=1012',
    },
  },
  {
    id: 2,
    title: 'Breaking Down Your Favorite Anime Soundtracks',
    href: '#',
    description:
      'Music plays a pivotal role in the anime experience. Dive into the world of anime soundtracks and explore how composers create unforgettable scores that amplify the emotional impact of our favorite series.',
    imageUrl:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
    date: 'Apr 10, 2023',
    datetime: '2023-04-10',
    author: {
      name: 'Alex Johnson',
      imageUrl: 'https://picsum.photos/400/400/?image=1012',
    },
  },
  {
    id: 3,
    title: 'Top 10 Underrated Anime You Need to Watch',
    href: '#',
    description:
      'Looking for hidden gems in the anime world? Check out our list of top 10 underrated anime series and movies that deserve more recognition. From thrilling adventures to heartwarming stories, these picks will leave you wanting more.',
    imageUrl:
      'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    date: 'Apr 05, 2023',
    datetime: '2023-04-05',
    author: {
      name: 'Emma Thompson',
      imageUrl: 'https://picsum.photos/400/400/?image=1012',
    },
  },
]

const RelatedPosts = () => {
  return (
    <div className="bg-slate-1 py-24 text-slatedark-12 dark:bg-slatedark-1 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="dark:text-white text-2xl font-bold text-blue-11">
            Discover More 🚀
          </h2>
          <h3 className="dark:text-white mb-8 text-2xl font-bold text-slate-12 dark:text-slatedark-12">
            Related Posts
          </h3>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-slate-12 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-12 via-slate-12/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-slate-12/10" />
              <div className="text-gray-300 flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="fill-white/50 -ml-0.5 h-0.5 w-0.5 flex-none"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src={post.author.imageUrl}
                      alt={post.author.name}
                      className="bg-white/10 h-6 w-6 flex-none rounded-full"
                    />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="text-white mt-3 text-lg font-semibold leading-6">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RelatedPosts
