const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const endpoints = {
  nowPlaying: 'https://api.spotify.com/v1/me/player/currently-playing',
  topTracks: 'https://api.spotify.com/v1/me/top/tracks',
  topArtists: 'https://api.spotify.com/v1/me/top/artists',
  token: 'https://accounts.spotify.com/api/token'
}

const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
  const response = await fetch(endpoints.token, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    })
  })
  return response.json()
}

const spotifyGet = async (endpoint: string) => {
  const { access_token } = await getAccessToken()
  return fetch(endpoint, {
    headers: { Authorization: `Bearer ${access_token}` }
  })
}

export const getNowPlaying = () => spotifyGet(endpoints.nowPlaying)
export const getTopTracks = () => spotifyGet(endpoints.topTracks)
export const getTopArtists = () => spotifyGet(endpoints.topArtists)
