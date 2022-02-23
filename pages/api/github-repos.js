const github_token = process.env.GITHUB_TOKEN

export default async function handler(_, res) {
  const dotsResponse = await fetch(
    'https://api.github.com/repos/nguyenvukhang/dots',
    {
      method: 'GET',
      headers: {
        Authorization: 'token ' + github_token
      }
    }
  )
  const agsResponse = await fetch(
    'https://api.github.com/repos/nguyenvukhang/ags',
    {
      method: 'GET',
      headers: {
        Authorization: 'token ' + github_token
      }
    }
  )

  const dots = await dotsResponse.json()
  const ags = await agsResponse.json()

  return res.status(200).json({
    dots,
    ags
  })
}
