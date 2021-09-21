import Link from 'next/link'

import Container from '@/components/Container'

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
)

export default function About() {
  return (
    <Container title="About – Nguyen Vu Khang">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Books
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>Here's some books I've read.</p>
          <p>
            I find them mostly by friends' recommendations. Some by chance,
            others by googling for a genre. Not all of them are read
            cover-to-cover.
          </p>
          <ul>
            <li>The Time Machine, H.G. Wells</li>
            <li>The Subtle Art Of Not Giving A F*ck, Mark Manson</li>
            <li>The Sun Is Also A Star, Nicola Yoon</li>
            <li>Percy Jackson Series, Rick Riordan</li>
            <li>A Mathematician's Apology, G.H. Hardy</li>
            <li>All The Bright Places, Jennifer Niven</li>
            <li>Own Your Weird, Jason Zook</li>
            <li>The Obstacle Is The Way, Ryan Holiday</li>
            <li>You Can't Be Seen Until You Learn To See, Seth Godin</li>
            <li>Steve Jobs, Walter Isaacson</li>
            <li>Pathfinder, David Blakeley</li>
            <li>The Statistical Probability Of Love At First Sight, Jennifer E. Smith</li>
            <li>Born To Run, Christopher McDougall</li>
            <li>Why Generalists Triumph In A Specialized World, David Epstein</li>
            <li>The Life-Changing Magic Of Tidying Up, Marie Kondo</li>
            <li>The Beginning Of Infinity, David Deutsch</li>
            <li>The Snowball: Warren Buffett And The Business Of Life, Alice Schroeder</li>
            <li>Netflix And The Culture Of Reinvention, Reed Hastings</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
