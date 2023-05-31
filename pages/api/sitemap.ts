import { SitemapStream, streamToPromise } from 'sitemap'
import { getAllPosts, getAllPagesSlugs } from '../../lib/sanity.client'
let sitemap: string

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/xml')

  if (sitemap) {
    res.write(sitemap)
    res.end()
    return
  }

  try {
    const smStream = new SitemapStream({
      hostname: 'https://www.aniwave.io/api/sitemap',
    })

    const posts = await getAllPosts()
    const pages = await getAllPagesSlugs()

    posts.forEach((post) => {
      smStream.write({
        url: `/${post?.category?.current}/${post.slug}`,
        changefreq: 'weekly',
        priority: 0.9,
      })
    })

    pages.forEach((page) => {
      smStream.write({
        url: `/page/${page.slug.current}`,
        changefreq: 'monthly',
        priority: 0.8,
      })
    })

    smStream.write({ url: '/subscribe', changefreq: 'monthly', priority: 0.7 })
    smStream.write({ url: '/about', changefreq: 'monthly', priority: 0.7 })

    streamToPromise(smStream).then((value) => {
      sitemap = value.toString()
    })

    streamToPromise(smStream).then((sm) => {
      sitemap = sm.toString()
    })

    smStream.end()

    smStream.pipe(res).on('error', (e) => {
      throw e
    })
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
}
