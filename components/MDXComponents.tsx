import Link from '@/components/Link'
import Image from 'next/image'

const CenteredImage = (props: any) => {
  const outer = {
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <div style={outer}>
      <Image {...props} alt="Photo" />
    </div>
  )
}

const Img = (props: any) => {
  const outer = {
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <div style={outer}>
      <Image {...props} alt="Photo" priority className="next-image" />
    </div>
  )
}

const Kbd = ({ children }) => {
  const nospace = children.replace(/ /g, '')
  const parts = nospace.includes('+') ? nospace.split('+') : [nospace]
  const style = {
    background: 'rgb(220, 220, 220)',
    color: 'rgb(10, 10, 10)',
    fontWeight: 600,
    fontSize: 'smaller',
    borderRadius: '4px',
    boxShadow: '0 3px rgb(189, 189, 189)',
    padding: '1px 3px 0'
  }
  const span = {
    margin: '0 0.2ch'
  }
  return (
    <>
      <kbd style={style}>{parts.shift()}</kbd>
      {parts.map((d: string) => (
        <>
          <span style={span}>+</span>
          <kbd style={style}>{d}</kbd>
        </>
      ))}
    </>
  )
}

const inlineCode = ({ children }) => {
  const style = {
    fontWeight: 400
  }
  return <code style={style}>{children}</code>
}

const pre = ({ children }) => {
  return <pre className='leading-5 bg-gray-50 dark:bg-gray-800'>{children}</pre>
}

const MDXComponents = {
  pre,
  inlineCode,
  Kbd,
  Img,
  Image,
  CenteredImage,
  a: Link
}

export default MDXComponents
