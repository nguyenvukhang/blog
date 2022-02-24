import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import Track from '@/components/Track'

export default function TopArtists() {
  const { data } = useSWR('/api/top-artists', fetcher)

  if (!data) {
    return null
  }

  console.log('artist data', data)

  return data.artists.map((track, index) => (
    <Track ranking={index + 1} key={track.songUrl} {...track} />
  ))
}
