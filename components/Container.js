import Head from 'next/head'
import { useState, useEffect } from 'react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'

function Meta({ meta, router }) {
  return (
    <>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`https://nguyenvukhang.com${router.asPath}`}
      />
      <link
        rel="canonical"
        href={`https://nguyenvukhang.com${router.asPath}`}
      />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Khang" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </>
  )
}

export default function Container(props) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const meta = {
    title: 'Khang.',
    description: `Developer, athlete, student`,
    type: 'website',
    ...customMeta
  }

  const bg = 'bg-gray-50 dark:bg-gray-900'

  return (
    <div className={bg}>
      <Head>
        <title>{meta.title}</title>
        <Meta meta={meta} router={router} />
      </Head>
      <Navbar mounted={mounted} />
      <main
        className={`contained flex flex-col justify-center max-w-2xl mx-auto ${bg}`}
      >
        {children}
        <Footer />
      </main>
    </div>
  )
}
