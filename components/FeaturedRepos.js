import { RepoTitle, RepoForks, RepoLanguage } from '@/components/Github'
import { useRouter } from 'next/router'

const getGradient = (gradient) => {
  const a = gradient[0]
  const b = gradient[1]
  return `bg-gradient-to-r ${a} ${b}`
}

const Repo = ({ data, gradient }) => {
  const gradientClass = getGradient(gradient)
  const animationClass = "ease-in duration-100"
  const className = [
    gradientClass,
    animationClass,
    "mb-12 basis-1/2 h-42 w-1/2 p-1 rounded-xl cursor-pointer"
  ].join(' ')

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(data?.html_url)
  }

  return (
    <div className={className} onClick={handleClick}>
      <div className="bg-gray-50 dark:bg-gray-800 h-full rounded-lg py-3 px-4 flex flex-col hover:bg-gray-50/80 dark:hover:bg-gray-800/80 cursor-pointer">
        <div className="h-full">
          <RepoTitle>{data?.name}</RepoTitle>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-1">
            {data?.description}
          </p>
        </div>
        <div className="">
          <div className="flex flex-row">
            <RepoLanguage>{data?.language}</RepoLanguage>
            <RepoForks>{data?.forks_count}</RepoForks>
          </div>
        </div>
      </div>
    </div>
  )
}

const FeaturedRepos = ({data}) => {
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 md:mb-8 text-black dark:text-white">
        Featured Repositories
      </h3>
      <div className="flex flex-row w-full gap-x-4">
        <Repo data={data?.ags} gradient={['from-green-400', 'to-blue-400']} />
        <Repo data={data?.dots} gradient={['from-yellow-400', 'to-red-400']} />
      </div>
      {/* <div className='text-black'>{JSON.stringify(data)}</div> */}
    </>
  )
}

export default FeaturedRepos
