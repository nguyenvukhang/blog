import { getTopTracks, getTopArtists, getNowPlaying } from '@/lib/spotify'
import { NextApiRequest, NextApiResponse } from 'next'
import spt from '@/types/spotify-api'


interface TrackObject extends spt.TrackObjectSimplified {
  album: spt.AlbumObjectSimplified
}

interface NowPlaying {
    timestamp: number;
    device: spt.UserDevice;
    actions: spt.ActionsObject;
    progress_ms: number | null;
    is_playing: boolean;
    item: TrackObject
    context: spt.ContextObject | null;
    currently_playing_type: 'track' | 'episode' | 'ad' | 'unknown';
}

const properCase = (str: string) =>
  str.replace(/(^\w{1})|(\s+\w{1})/g, (w) => w.toUpperCase())

async function handleTopTracks() {
  const response = await getTopTracks()
  const topTracks: spt.UsersTopTracksResponse = await response.json()

  const tracks = topTracks.items.slice(0, 10).map((track) => ({
    title: track.name,
    subtitle: track.artists.map((_artist) => _artist.name).join(', '),
    url: track.external_urls.spotify
  }))
  return tracks
}

async function handleTopArtists() {
  const response = await getTopArtists()
  const topArtists: spt.UsersTopArtistsResponse = await response.json()

  const artists = topArtists.items.slice(0, 5).map((artist) => ({
    title: artist.name,
    subtitle: properCase(artist.genres[0]),
    url: artist.external_urls.spotify
  }))
  return artists
}

async function handleNowPlaying() {
  const response = await getNowPlaying()
  if (response.status === 204 || response.status > 400) {
    return { isPlaying: false }
  }

  const song: NowPlaying = await response.json()


  if (song.item === null) {
    return { isPlaying: false }
  }

  const isPlaying = song.is_playing
  const title = song.item.name

  const artist = song.item.artists.map((a) => a.name).join(', ')

  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify

  return {
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requestType = req.query.type
  switch (requestType) {
    case 'top-tracks':
      const tracks = await handleTopTracks()
      return res.status(200).json(tracks)
    case 'top-artists':
      const artists = await handleTopArtists()
      return res.status(200).json(artists)
    case 'now-playing':
      const nowPlaying = await handleNowPlaying()
      return res.status(200).json(nowPlaying)
    default:
      return res.status(204) // no content
  }
}
