import '@/styles/global.css'

import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDXComponents'
import { anon, db } from '@/lib/firebase'
import { arrayUnion, updateDoc, Timestamp, doc } from 'firebase/firestore'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const myDoc = doc(db, 'analytics', 'views')
  const ts = Timestamp.now()

  useEffect(() => {
    updateDoc(myDoc, {
      timestamp: arrayUnion(ts)
    })
  }, [])

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
