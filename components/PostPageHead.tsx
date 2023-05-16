import BlogMeta from 'components/BlogMeta'
import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'

export interface PostPageHeadProps {
  settings: Settings
  post: Post
}

export default function PostPageHead({ settings, post }: PostPageHeadProps) {
  const title = settings.title ?? demo.title

  const ogImageUrl = post.coverImage?.asset?._ref
    ? urlForImage(post.coverImage).url()
    : undefined

  return (
    <Head>
      <title>{post.title ? `${post.title} | ${title}` : title}</title>
      <BlogMeta />
      {ogImageUrl && (
        <>
          <meta property="og:image" content={ogImageUrl} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
        </>
      )}
    </Head>
  )
}
