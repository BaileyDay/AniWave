import { urlForImage } from 'lib/sanity.image'
import Link from 'next/link'

const RelatedPosts = ({ posts }) => {
  console.log(posts)
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
          {posts?.map((post) => (
            <article
              key={post?._id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-slate-12 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Link href={`/posts/${post?.slug}`}>
                <img
                  src={urlForImage(post?.coverImage).url()}
                  alt={post?.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-12 via-slate-12/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-slate-12/10" />
                <div className="text-gray-300 flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6">
                  <div className="mr-2 rounded-lg bg-blue-9 px-1">
                    <time
                      className=" font-semibold text-slate-1"
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
                    <div className="flex gap-x-2.5">
                      <img
                        src={urlForImage(post?.author.picture).url()}
                        alt={post?.author.name}
                        className="bg-white/10 h-6 w-6 flex-none rounded-full"
                      />
                      {post?.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="text-white mt-3 text-lg font-semibold leading-6">
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
