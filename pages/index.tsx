import Link from 'next/link'
import Timeline from '@/components/Timeline'
import Container from '@/components/Container'
import FeaturedRepos from '@/components/FeaturedRepos'
import td from '@/data/titles-and-descriptions'

const pinnedRepos = [
  'modtree/modtree',
  'nguyenvukhang/nvim-toggler',
  'nguyenvukhang/ags',
  'nguyenvukhang/blog'
]
const github_token = process.env.GITHUB_TOKEN

export async function getServerSideProps() {
  const urls = pinnedRepos.map((repo) => `https://api.github.com/repos/${repo}`)
  const requests = urls.map((url) =>
    fetch(url, {
      method: 'GET',
      headers: { Authorization: `token ${github_token}` }
    }).then((res) => res.json())
  )
  const repoData = (await Promise.all(requests)).reduce(
    (acc, curr) => ((acc[curr.name] = curr), acc),
    {}
  )
  return { props: { repoData, pinnedRepos: Object.keys(repoData) } }
}

export default function Home({ repoData, pinnedRepos }) {
  return (
    <Container title={td.home.title} description={td.home.description}>
      <h1 className="mb-4">Hey, I'm Khang 👋🏼</h1>
      <p className="mb-12 mt-4">
        I'm an efficiency junkie who also happens to write code and do sports. I
        love using vim and I believe that it's too fast to afford not to learn
        using. Welcome to my personal slice of the internet –&nbsp;
        <Link href="/about">
          <a>learn more about me.</a>
        </Link>
      </p>
      <FeaturedRepos data={repoData} repos={pinnedRepos} />
      <Timeline />
    </Container>
  )
}
