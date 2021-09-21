const data = [
  ['Name', 'Gender', 'Year'],
  ['Jacob', 'M', '1996'],
  ['Roxanne', 'F', '1999'],
  ['Calista', 'F', '2000']
]

const Page = () => {
  const headers = data.shift()
  const result = data.map((person) => 
    headers.reduce(
      (obj, key, index) => ({
        ...obj,
        [key]: person[index]
      }), {}
    )
  )
  /*
  const result = []
  data.forEach((person) => {
    result.push(headers.reduce(
      (obj, key, index) => ({
        ...obj,
        [key]: person[index]
      }), {}
    ))
  })
  */
  return null
}
export default Page
