const github_token = process.env.GITHUB_TOKEN

export default async function handler(_, res) {
  const neovimResponse = await fetch(
    'https://api.github.com/repos/nguyenvukhang/neovim',
    {
      method: 'GET',
      headers: {
        Authorization: 'token ' + github_token
      }
    }
  )
  const zshResponse = await fetch(
    'https://api.github.com/repos/nguyenvukhang/zsh',
    {
      method: 'GET',
      headers: {
        Authorization: 'token ' + github_token
      }
    }
  )

  const neovim = await neovimResponse.json()
  const zsh = await zshResponse.json()

  return res.status(200).json({
    basereturn: 'hello',
    neovim,
    zsh
  })
}
