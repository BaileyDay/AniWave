import 'tailwindcss/tailwind.css'
import '../global.css'
import withGA from 'next-ga'

import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
