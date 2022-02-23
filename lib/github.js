const NEOVIM_ENDPOINT = 'https://api.github.com/repos/nguyenvukhang/neovim'
const ZSH_ENDPOINT = 'https://api.github.com/repos/nguyenvukhang/zsh'
const AGS_ENDPOINT = 'https://api.github.com/repos/nguyenvukhang/ags'
const DOTS_ENDPOINT = 'https://api.github.com/repos/nguyenvukhang/dots'

export const getRepoStars = async ({ endpoint }) => {
  return fetch(endpoint)
}

export const getNeovimRepo = async () => {
  return fetch(NEOVIM_ENDPOINT)
}

export const getZshRepo = async () => {
  return fetch(ZSH_ENDPOINT)
}

export const getDotsRepo = async () => {
  return fetch(DOTS_ENDPOINT)
}

export const getAgsRepo = async () => {
  return fetch(AGS_ENDPOINT)
}
