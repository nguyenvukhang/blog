import '@/styles/global.css'

import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDXComponents'
import { anon } from '@/lib/firebase'

export default function App({ Component, pageProps }) {
  console.log('anonymous user object:', anon)
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
