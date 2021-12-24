import githubColors from './github-colors-min.json'
import { GrBook, VscRepoForked } from '@/components/Icons'

export function Language({ children }) {
  const LanguageCircle = ({ language }) => {
    const githubColorStyle = (language) => {
      const l = language.replace(/(^\w{1})|(\s+\w{1})/g, (w) => w.toUpperCase())
      return {
        backgroundColor: githubColors[l]?.color
      }
    }

    return language ? (
      <div
        style={githubColorStyle(language)}
        className="h-3 w-3 drop-shadow-sm rounded-full"
      ></div>
    ) : null
  }
  return (
    <>
      <div className="flex flex-row my-2 text-gray-500 dark:text-gray-500 w-full">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <LanguageCircle language={children} />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <span className="ml-1.5 line-clamp-1">{children}</span>
        </div>
      </div>
    </>
  )
}

export function RepoTitle({ children }) {
  return (
    <>
      <div className="flex flex-row text-gray-500 dark:text-gray-500">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <GrBook className="text-gray-600" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 ml-2">
              {children}
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export function RepoForks({ children }) {
  return (
    <>
      <div className="flex text-gray-500 dark:text-gray-500">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <VscRepoForked className="text-gray-600" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex">
            <h3 className="tracking-tight text-gray-600 dark:text-gray-100 ml-1">
              {children}
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}
