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

type ContainerProps = {
  children: any
  title: string
  description: string
  date?: string
  type?: string
}

export default function Container(props: ContainerProps) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const meta = {
    title: 'khang',
    description: 'developer, athlete, student',
    type: 'website',
    ...customMeta
  }

  const bg = 'bg-gray-50 dark:bg-gray-900'
  const padding = 'md:p-0 sm:p-8 p-6'

  return (
    <div className={bg}>
      <Head>
        <title>{meta.title}</title>
        <Meta meta={meta} router={router} />
      </Head>
      <Navbar mounted={mounted} />
      <main
        className={`contained flex flex-col justify-center max-w-2xl mx-auto ${padding} ${bg}`}
      >
        {children}
        <Footer />
      </main>
    </div>
  )
}
