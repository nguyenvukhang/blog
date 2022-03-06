import Container from '@/components/Container'
import td from '@/data/titles-and-descriptions'

export default function About() {
  return (
    <Container title={td.about.title} description={td.about.description}>
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
            <li>
              The Statistical Probability Of Love At First Sight, Jennifer E.
              Smith
            </li>
            <li>Born To Run, Christopher McDougall</li>
            <li>
              Why Generalists Triumph In A Specialized World, David Epstein
            </li>
            <li>The Life-Changing Magic Of Tidying Up, Marie Kondo</li>
            <li>The Beginning Of Infinity, David Deutsch</li>
            <li>
              The Snowball: Warren Buffett And The Business Of Life, Alice
              Schroeder
            </li>
            <li>Netflix And The Culture Of Reinvention, Reed Hastings</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
