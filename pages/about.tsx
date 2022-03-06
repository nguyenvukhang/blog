import Container from '@/components/Container'
import Image from 'next/image'
import td from '@/data/titles-and-descriptions'
import { AvatarProps } from '@/types/index'

const Avatar = () => (
  <div className="flex flex-col items-center">
    <div
      className="w-48 h-48 rounded-full mx-10 bg-green-100 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url(/hs.png)' }}
    />
    <h3>Khang</h3>
  </div>
)

export default function About() {
  return (
    <Container title={td.about.title} description={td.about.description}>
      <Avatar />
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
          <a className="email-link" href="mailto:me@nguyenvukhang.com">
            me@nguyenvukhang.com
          </a>
          .
        </p>
      </div>
    </Container>
  )
}
