import { getAllPosts } from '../../lib/sanity.client'

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml')

  try {
    const posts = await getAllPosts()

    let rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
    <channel>
      <title>Aniwave</title>
      <link>https://aniwave.io</link>
      <description>Discover the latest anime news, reviews, and streaming updates at AniWave! Dive into the vibrant world of anime culture with our in-depth articles, event coverage, and community discussions. Join us and stay in the loop with everything anime!</description>`

    posts.forEach((post) => {
      rss += `
      <item>
        <title>${post?.title}</title>
        <link>https://aniwave.io/${post?.category?.current}/${post?.slug}</link>
        <description>${post?.excerpt}</description>
        <pubDate>${post?.date}</pubDate>
        <guid>https://aniwave.io/${post?.category?.current}/${post.slug}</guid>
      </item>`
    })

    rss += `
    </channel>
    </rss>`

    res.write(rss)
    res.end()
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
}
