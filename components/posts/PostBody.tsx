import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import styles from './PostBody.module.css'
import { client } from '../../lib/sanity.client'
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const serializers = {
  types: {
    image: ({ node }) => {
      const { asset, alt = '', caption = '' } = node
      const imageSrc = urlFor(asset).url()

      if (!imageSrc) {
        return null
      }

      return (
        <figure>
          <Image src={imageSrc} alt={alt} width={500} height={300} />
          <figcaption>{caption}</figcaption>
        </figure>
      )
    },
  },
}

export default function PostBody({ content }) {
  return (
    <div className={`post-body mx-auto max-w-2xl ${styles.portableText}`}>
      <BlockContent blocks={content} serializers={serializers} />
    </div>
  )
}
