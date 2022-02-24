import NextLink from 'next/link'
import { NowPlaying } from '@/components/SpotifyComponents'

const basicPages = {
  Home: '/',
  About: '/about'
}

const socials = {
  Instagram: 'https://instagram.com/nguyenvukhang_',
  Github: 'https://github.com/nguyenvukhang',
  SoundCloud: 'https://soundcloud.com/nguyenvukhang'
}

const otherPages = {
  Music: '/music',
  Uses: '/uses',
  Snippets: '/snippets',
  Books: '/books'
}

const Link = ({ href, children }) => {
  const isInternal = href[0] === '/'
  return isInternal ? (
    <NextLink href={href}>
      <a className="text-gray-500 hover:text-gray-600 transition">{children}</a>
    </NextLink>
  ) : (
    <a
      className="text-gray-500 hover:text-gray-600 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  )
}

const Column = ({ links }) => {
  return (
    <div className="flex flex-col space-y-4">
      {Object.keys(links).map((page) => (
        <Link href={links[page]} key={page}>
          {page}
        </Link>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <Column links={basicPages} />
        <Column links={socials} />
        <Column links={otherPages} />
      </div>
    </footer>
  )
}
