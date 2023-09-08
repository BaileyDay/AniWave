import imageUrlBuilder from '@sanity/image-url';
import { PortableText, PortableTextMarkComponentProps } from '@portabletext/react';
import Image from 'next/image';
import styles from './PostBody.module.css';
import { client } from '../../lib/sanity.client';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const components = {
  types: {
    image: ({ value }: { value: any }) => {
      const { asset, alt = '', caption = '' } = value;
      const imageSrc = urlFor(asset).url();

      if (!imageSrc) {
        return null;
      }

      return (
        <figure>
          <Image src={imageSrc} alt={alt} width={500} height={300} />
          <figcaption>{caption}</figcaption>
        </figure>
      );
    },
  },
  marks: {
    internalLink: ({ value, children }: PortableTextMarkComponentProps<any>) => {
      const { reference } = value!;
      const href = `/${reference.slug.current}`;
      return <a href={href}>{children}</a>;
    },
    link: ({ value, children }: PortableTextMarkComponentProps<any>) => {
      const { href, blank } = value!;
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
    textColor: ({ value, children }: PortableTextMarkComponentProps<any>) => {
      const hex = value?.color?.hex;
      if (!hex) {
        return <span>{children}</span>;
      }
      return <span style={{ color: hex }}>{children}</span>;
    },
  },
};

export default function PostBody({ content }: { content: any }) {
  return (
    <div className={`post-body mx-auto max-w-2xl ${styles.portableText}`}>
      <PortableText value={content} components={components} />
    </div>
  );
}
