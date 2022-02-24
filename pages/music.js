import Container from '@/components/Container'
import TopTracks from '@/components/TopTracks'
import TopArtists from '@/components/TopArtists'

export default function Music() {
  return (
    <Container
      title="Music – Khang"
      description="A look into my music, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Music
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-0">
            A look into my music, built with Next.js API routes deployed as
            serverless functions.
          </p>
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Top Tracks
        </h2>
        <TopTracks />
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Top Artists
        </h2>
        <TopArtists />
      </div>
    </Container>
  )
}
