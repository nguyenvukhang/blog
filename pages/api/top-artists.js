import { getTopArtists } from '@/lib/spotify';

const makeEnglish = (str) => {
  const parts = str.replace(/ /g, '-').toLowerCase().split('-')
  const res = parts
    .map(
      (word) =>
        // capitalizes first letter
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ')
  return res
}


export default async function handler(_, res) {
  const response = await getTopArtists();
  const { items } = await response.json();

  // console.log('_________________________________');
  // console.log('artist ->', artist);
  const artists = items.slice(0, 5).map((artist) => ({
    // artist: track.artists.map((_artist) => _artist.name).join(', '),
    // songUrl: track.external_urls.spotify,
    // title: track.name
    title: artist.name,
    artist: makeEnglish(artist.genres[0]),
    songUrl: artist.external_urls.spotify,
  }));

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json({ artists });
}
