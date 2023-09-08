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
    marks: {
      internalLink: ({ mark, children }) => {
        const { reference } = mark;
        const href = `/${reference.slug.current}`;
        return <a href={href}>{children}</a>;
      },
      link: ({ mark, children }) => {
        const { href, blank } = mark;
        return blank ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        );
      },
      textColor: ({ mark, children }) => {
        const { hex } = mark.color; // You can also use hsl, hsv, or rgb
        return <span style={{ color: hex }}>{children}</span>;
      },
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
