const buttonClass = [
  'bg-gray-200',
  'border-2',
  'border-transparent',
  'cursor-pointer',
  'dark:bg-gray-800',
  'dark:text-gray-300',
  'mx-1',
  'px-1',
  'rounded-md',
  'text-gray-700'
]
const clearClass = [
  'bg-blue-200',
  'border-2',
  'border-transparent',
  'cursor-pointer',
  'dark:bg-blue-900',
  'dark:text-gray-300',
  'mx-1',
  'px-1',
  'rounded-md',
  'text-gray-700'
]

const TagList = ({ allTags, activeTag, setActiveTag }) => {
  const tagCount = allTags.reduce((obj, e) => {
    obj[e] = (obj[e] || 0) + 1
    return obj
  }, {})
  const tags = Object.keys(tagCount)
    .map((key) => [key, tagCount[key]])
    .sort()
  return (
    <div className="flex flex-wrap max-w-2xl">
      {tags.map((e) => (
        <div className="mb-1.5" key={e[0]}>
          <a
            className={
              buttonClass.join(' ') +
              (activeTag == e[0] ? ' border-blue-400' : '')
            }
            onClick={() => setActiveTag(e[0])}
          >
            <span>
              {e[0] + ' '}
              <span className="text-gray-500 dark:text-gray-400 text-xs">
                {e[1]}
              </span>
            </span>
          </a>
        </div>
      ))}
      <div className="mb-1.5">
        <a onClick={() => setActiveTag('')} className={clearClass.join(' ')}>
          clear
        </a>
      </div>
    </div>
  )
}

export default TagList
