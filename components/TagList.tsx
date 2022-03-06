const TagList = ({ allTags, activeTag, setActiveTag }) => {
  const tagCount = allTags.reduce((obj: Object[], e:string) => {
    obj[e] = (obj[e] || 0) + 1
    return obj
  }, {})
  const tags = Object.keys(tagCount)
    .map((key) => [key, tagCount[key]])
    .sort()
  return (
    <div className="flex flex-wrap max-w-2xl">
      {tags.map((e) => (
        <div className="mb-1.5 leading-8" key={e[0]}>
          <a
            className={`tag-button ${(activeTag == e[0] ? 'tag-selected' : '')}`}
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
        <a onClick={() => setActiveTag('')} className='tag-clear'>
          clear
        </a>
      </div>
    </div>
  )
}

export default TagList
