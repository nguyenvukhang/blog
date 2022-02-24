import { RepoTitle, RepoForks, RepoLanguage } from '@/components/Github'
import { useRouter } from 'next/router'

const Repo = ({ data, gradient }) => {
  const gradientClass = `bg-gradient-to-r ${gradient[0]} ${gradient[1]}`
  const animationClass = 'ease-in duration-100'
  const className = [
    gradientClass,
    animationClass,
    'mb-12 basis-1/2 h-42 w-1/2 p-1 rounded-xl cursor-pointer'
  ].join(' ')

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(data?.html_url)
  }

  return (
    <div className={className} onClick={handleClick}>
      <div className="featured-repo flex flex-col h-full rounded-lg px-4 py-3 cursor-pointer">
        <div className="h-full">
          <RepoTitle className="mb-1">{data?.name}</RepoTitle>
          <p className="mb-4 line-clamp-2">{data?.description}</p>
        </div>
        <div className="flex flex-row mb-1">
          <RepoLanguage>{data?.language}</RepoLanguage>
          <RepoForks>{data?.forks_count}</RepoForks>
        </div>
      </div>
    </div>
  )
}

const FeaturedRepos = ({ data }) => {
  return (
    <>
      <h3 className="mb-6 md:mb-8">Featured Repositories</h3>
      <div className="flex flex-row w-full gap-x-4">
        <Repo data={data?.ags} gradient={['from-green-400', 'to-blue-400']} />
        <Repo data={data?.dots} gradient={['from-yellow-400', 'to-red-400']} />
      </div>
    </>
  )
}

export default FeaturedRepos
