function freqObj(arr: Array<string>) {
  return arr.reduce((obj: { [key: string]: number }, e: string) => {
    obj[e] = (obj[e] || 0) + 1
    return obj
  }, {})
}

const TagList = ({
  allTags,
  activeTags,
  setActiveTags
}) => {
  const handleClear = () => {
    setActiveTags([])
  }

  const ToggleTag = (key: string) => {
    if (!activeTags.includes(key)) {
      setActiveTags([...activeTags, key])
    } else {
      const newActiveTags = activeTags.filter((e: string) => e !== key)
      console.log(newActiveTags)
      setActiveTags(newActiveTags)
    }
  }

  const tagCount: { [key: string]: number } = freqObj(allTags)
  const tagKeys = Object.keys(tagCount).sort()
  return (
    <div className="flex flex-wrap max-w-2xl">
      {tagKeys.map((key, i) => (
        <div className="mb-1.5 leading-8" key={i}>
          <a
            className={`tag-button ${activeTags.includes(key) ? 'tag-selected' : ''}`}
            onClick={() => ToggleTag(key)}
          >
            <span>
              {`${key} `}
              <span className="text-gray-500 dark:text-gray-400 text-xs">
                {tagCount[key]}
              </span>
            </span>
          </a>
        </div>
      ))}
      <div className="mb-1.5 leading-8">
        <a onClick={handleClear} className="tag-clear">
          clear
        </a>
      </div>
    </div>
  )
}

export default TagList
