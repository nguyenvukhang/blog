import '@/styles/global.css'
import { useEffect } from 'react'
import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'

import ga from '@/lib/google-analytics'

import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDXComponents'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} key={route} />
      </MDXProvider>
    </ThemeProvider>
  )
}
