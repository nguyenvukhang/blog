import Container from '@/components/Container'
import Image from 'next/image'

export default function About() {
  return (
    <Container title="About – Khang">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="flex w-full justify-center">
          <div className="drop-shadow-md rounded-full w-48 h-48">
            <Image
              alt="profile-picture"
              className="rounded-full"
              src="/hs.png"
              width={240}
              height={240}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>Hey, I’m Khang. I'm a developer, athlete, and student of math.</p>
          <p>
            I am a believer in the power of fundamentals. I love working with
            low-level development tools, and I derive meaning from building
            learning resources.
          </p>
          <p>
            I grew up in urban Singapore and currently go to school at the
            National University of Singapore, studying towards a degree in
            Mathematics. I spend my free time slipping and sliding in vim,
            building websites, and enjoying time with friends and family.
          </p>
          <p>
            You can contact{' '}
            <a className='email-link' href="mailto:me@nguyenvukhang.com">me@nguyenvukhang.com</a>.
          </p>
        </div>
      </div>
    </Container>
  )
}
