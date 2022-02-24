import Link from 'next/link'

import Timeline from '@/components/Timeline'
import Container from '@/components/Container'
import FeaturedRepos from '@/components/FeaturedRepos'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I'm Khang 👋🏼
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-12 mt-4">
          I'm an efficiency junkie who also happens to write code and do sports.
          I love using vim and I believe that it's too fast to afford not to
          learn using. Welcome to my personal slice of the internet –&nbsp;
          <Link href="/about">
            <a>learn more about me.</a>
          </Link>
        </h2>
        <FeaturedRepos />
        <Timeline />
      </div>
    </Container>
  )
}
