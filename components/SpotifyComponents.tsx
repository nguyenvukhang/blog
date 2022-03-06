import useSWR from 'swr'
import Track from '@/components/Track'
import { GrSpotify } from './Icons'
import Link from './Link'
import { TopList } from '@/types/index'

async function fetcher(key: any) {
  const res = await fetch(key)
  return res.json()
}

function TopTracks() {
  const tracks: TopList = useSWR('/api/spotify?type=top-tracks', fetcher).data
  return tracks ? (
    <div className='mb-8'>
      {tracks.map((track, index) => (
        <Track ranking={index + 1} key={index} {...track} />
      ))}
    </div>
  ) : null
}

function TopArtists() {
  const artists: TopList = useSWR('/api/spotify?type=top-artists', fetcher).data
  return artists ? (
    <>
      {artists.map((artist, index) => (
        <Track ranking={index + 1} key={index} {...artist} />
      ))}
    </>
  ) : null
}

function NowPlaying() {
  const nowPlaying = useSWR('/api/spotify?type=now-playing', fetcher).data
  return nowPlaying ? (
    <div className="flex flex-row-reverse items-center sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full">
      <GrSpotify color="#1ED760" />
      <div className="flex items-center sm:flex-row w-full max-w-full truncate">
        {nowPlaying.songUrl ? (
          <Link className="paragraph footer-link" href={nowPlaying.songUrl}>
            {nowPlaying.title}
          </Link>
        ) : (
          <p>Not Playing</p>
        )}
        <span className="opacity-40 mx-2">{'–'}</span>
        <p className="max-w-max truncate">{nowPlaying.artist ?? 'Spotify'}</p>
      </div>
    </div>
  ) : null
}

export { TopTracks, TopArtists, NowPlaying }
