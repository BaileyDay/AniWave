import { urlForImage } from 'lib/sanity.image'
import Link from 'next/link'

const RelatedPosts = ({ posts }) => {
  return (
    <div className="bg-white py-24 text-white dark:bg-zinc-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-sky-500 dark:text-white">
            Discover More 🚀
          </h2>
          <h3 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
            Related Posts
          </h3>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts?.map((post) => (
            <article
              key={post?._id}
              className="relative isolate flex h-10 flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Link href={`/posts/${post?.slug}`}>
                <img
                  src={urlForImage(post?.coverImage).url()}
                  alt={post?.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-900 via-slate-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-slate-900/10" />
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="mr-2 rounded-lg bg-sky-500 px-1">
                    <time
                      className=" font-semibold text-white"
                      dateTime={post?.date}
                      title={new Date(post?.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    >
                      {new Date(post?.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="font-lg flex gap-x-2.5 text-white">
                      <img
                        src={urlForImage(post?.author.picture).url()}
                        alt={post?.author.name}
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post?.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <span className="absolute inset-0" />
                  {post?.title}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RelatedPosts
