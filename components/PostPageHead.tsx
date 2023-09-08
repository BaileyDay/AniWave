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
  const ogImageUrl = post?.coverImage?.asset?._ref
    ? urlForImage(post?.coverImage).url()
    : undefined

  return (
    <Head>
      <title>{post?.title ? `${post?.title} | ${title}` : title}</title>
      <meta name="description" content={post?.excerpt} />
      {/* Facebook Meta Tags */}
      {/* <meta property="og:url" content={post.url} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={post?.title} />
      <meta property="og:description" content={post?.excerpt} />
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="aniwave.io" />
      {/* <meta property="twitter:url" content={post.url} /> */}
      <meta name="twitter:title" content={post?.title} />
      <meta name="twitter:description" content={post?.excerpt} />
      {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}

      <BlogMeta />
    </Head>
  )
}
