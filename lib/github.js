const NEOVIM_ENDPOINT = 'https://api.github.com/repos/nguyenvukhang/neovim'
const ZSH_ENDPOINT = 'https://api.github.com/repos/nguyenvukhang/zsh'

export const getRepoStars = async ({ endpoint }) => {
  return fetch(endpoint)
}

export const getNeovimRepo = async () => {
  return fetch(NEOVIM_ENDPOINT)
}

export const getZshRepo = async () => {
  return fetch(ZSH_ENDPOINT)
}
