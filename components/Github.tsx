import githubColors from './github-colors-min.json'
import { GrBook, VscRepoForked } from '@/components/Icons'

export function RepoLanguage({ children }) {
  /* capitalizes first letter of each word */
  const niceLanguage = children?.replace(/(^\w{1})|(\s+\w{1})/g, (w: string) =>
    w.toUpperCase()
  )
  const LanguageCircle = ({ language }) => {
    return language ? (
      <div
        style={{ backgroundColor: githubColors[niceLanguage]?.color }}
        className="h-2.5 w-2.5 rounded-full"
      />
    ) : null
  }
  return (
    <div className="flex flex-row items-center w-full">
      <LanguageCircle language={niceLanguage} />
      <span className="ml-2 line-clamp-1">{niceLanguage}</span>
    </div>
  )
}

export function RepoTitle({ children, className }) {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <GrBook />
      <h5 className="ml-3">{children}</h5>
    </div>
  )
}

export function RepoForks({ children }) {
  return (
    <div className="flex items-center">
      <VscRepoForked />
      <div className="ml-1">{children}</div>
    </div>
  )
}
