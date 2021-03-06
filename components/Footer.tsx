import Link from '@/components/Link'
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

const Column = ({ links }) => {
  return (
    <div className="flex flex-col space-y-4">
      {Object.keys(links).map((page) => (
        <span key={page}>
          <Link className="footer-link" href={links[page]}>
            {page}
          </Link>
        </span>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 mt-16">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        {[basicPages, socials, otherPages].map((e, idx) => (
          <Column links={e} key={idx} />
        ))}
      </div>
    </footer>
  )
}
