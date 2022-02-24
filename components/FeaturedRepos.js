import { RepoTitle, RepoForks, RepoLanguage } from '@/components/Github'
import { useRouter } from 'next/router'

const Repo = ({ data, gradient }) => {
  const gradientClass = `bg-gradient-to-r ${gradient[0]} ${gradient[1]}`
  const animationClass = 'ease-in duration-100'
  const className = [
    gradientClass,
    animationClass,
    // p-1 gives the gradient border thickness
    'h-42 p-1 rounded-xl cursor-pointer'
  ].join(' ')

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(data?.html_url)
  }

  return (
    <div className={className} onClick={handleClick}>
      <div className="featured-repo flex flex-col h-full rounded-lg px-4 py-3 cursor-pointer">
        <div className="h-28">
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

const FeaturedRepos = ({ data, repos }) => {
  console.log('got here', repos)
  const gradients = [
    ['from-yellow-400', 'to-orange-400'],
    ['from-lime-400', 'to-teal-400'],
    ['from-pink-400', 'to-purple-400'],
    ['from-sky-400', 'to-indigo-400'],
  ]
  return (
    <>
      <h3 className="mb-6 md:mb-8">Featured Repositories</h3>
      <div className="grid grid-cols-2 w-full gap-4 mb-16">
        {repos.map((repo, idx) => (
          <Repo data={data ? data[repo] : null} gradient={gradients[idx]} key={idx} />
        ))}
      </div>
    </>
  )
}

export default FeaturedRepos
