import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-black bg-slate-1 dark:bg-slatedark-1">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
