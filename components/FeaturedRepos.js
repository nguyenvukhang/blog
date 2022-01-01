import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import { RepoTitle, RepoForks, Language } from '@/components/Github'
import { useRouter } from 'next/router'

const Repo = ({ data, gradient }) => {
  var mainClass =
    'drop-shadow-sm hover:drop-shadow-md ease-in duration-100 mb-12 basis-1/2 h-42 w-1/2 p-1 rounded-xl bg-gradient-to-r cursor-pointer ' +
    gradient[0] +
    ' ' +
    gradient[1]

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(data?.html_url)
  }

  return (
    <div className={mainClass} onClick={handleClick}>
      <div className="bg-gray-50 dark:bg-gray-800 h-full rounded-lg py-3 px-4 flex flex-col hover:bg-gray-50/80 dark:hover:bg-gray-800/80 cursor-pointer">
        <div className="h-full">
          <RepoTitle>{data?.name}</RepoTitle>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-1">
            {data?.description}
          </p>
        </div>
        <div className="">
          <div className="flex flex-row">
            <Language>{data?.language}</Language>
            <RepoForks>{data?.forks_count}</RepoForks>
          </div>
        </div>
      </div>
    </div>
  )
}

const FeaturedRepos = () => {
  const { data } = useSWR('/api/github-repos', fetcher)
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 md:mb-8 text-black dark:text-white">
        Featured Repositories
      </h3>
      <div className="flex flex-row w-full gap-x-4">
        <Repo
          data={data?.neovim}
          gradient={['from-green-400', 'to-blue-400']}
        />
        <Repo data={data?.zsh} gradient={['from-yellow-400', 'to-red-400']} />
      </div>
    </>
  )
}

export default FeaturedRepos
