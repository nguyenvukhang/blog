import Container from '@/components/Container'
import { TopTracks, TopArtists } from '@/components/SpotifyComponents'
import td from '@/data/titles-and-descriptions'

export default function Music() {
  return (
    <Container title={td.music.title} description={td.music.description}>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="mb-4">
          Music
        </h1>
        <p className="mb-8">
          A look into my music, built with Next.js API routes deployed as
          serverless functions.
        </p>
        <h2 className="mb-4">Top Tracks</h2>
        <TopTracks />
        <h2 className="mb-4">Top Artists</h2>
        <TopArtists />
      </div>
    </Container>
  )
}
