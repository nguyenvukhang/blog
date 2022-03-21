import '@/styles/global.css'

import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDXComponents'
import Script from 'next/script'

//      <Script
//        strategy="lazyOnload"
//        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
//      />
//      <Script
//        strategy="lazyOnload"
//        src={`
//          window.dataLayer = window.dataLayer || [];
//          function gtag(){dataLayer.push(arguments);}
//          gtag('js', new Date());
//          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`}
//      />

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-YLMYNMR5FM`}
        />
        <Script
          strategy="lazyOnload"
          src={`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YLMYNMR5FM');`}
        />

        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
