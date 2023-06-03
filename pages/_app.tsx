import 'tailwindcss/tailwind.css'
import '../global.css'

import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import ReactGA from 'react-ga4'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) // Replace with your GA4 tracking id

    const handleRouteChange = (url: URL) => {
      ReactGA.send({ hitType: 'pageview', page: url })
    }

    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe from the event
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script id="gtag-conversion" strategy="afterInteractive">
        {`
        function gtag_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
              'send_to': '${process.env.NEXT_PUBLIC_GOOGLE_TAG}/797ACNSLx6YYEIiG090p',
              'event_callback': callback
          });
          return false;
        }
      `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
