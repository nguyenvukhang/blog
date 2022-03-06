import Container from '@/components/Container'
import Image from 'next/image'
import td from '@/data/titles-and-descriptions'
import { AvatarProps } from '@/types/index'

const Avatar = () => (
  <div className="flex flex-col items-center mb-16">
    <div
      className="w-48 h-48 rounded-full bg-center bg-cover mb-4"
      style={{ backgroundImage: 'url(/hs.png)' }}
    />
    <h3>Nguyễn Vũ Khang</h3>
        <p className='lighter'>developer, athlete, student of math</p>
  </div>
)

export default function About() {
  return (
    <Container title={td.about.title} description={td.about.description}>
      <Avatar />
      <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400 text-center">
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
