import Link from 'next/link'
import Timeline from '@/components/Timeline'
import Container from '@/components/Container'
import FeaturedRepos from '@/components/FeaturedRepos'

const pinnedRepos = ['dots', 'ags']
const github_token = process.env.GITHUB_TOKEN

export async function getServerSideProps() {
  const urls = pinnedRepos.map(
    (repo) => `https://api.github.com/repos/nguyenvukhang/${repo}`
  )
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
  return { props: { repoData } }
}
        {/* <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white"> */}
        {/*   Hey, I'm Khang 👋🏼 */}
        {/* </h1> */}

export default function Home({ repoData }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1>
          Hey, I'm Khang 👋🏼
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-12 mt-4">
          I'm an efficiency junkie who also happens to write code and do sports.
          I love using vim and I believe that it's too fast to afford not to
          learn using. Welcome to my personal slice of the internet –&nbsp;
          <Link href="/about">
            <a>learn more about me.</a>
          </Link>
        </h2>
        <FeaturedRepos data={repoData} />
        <Timeline />
      </div>
    </Container>
  )
}
