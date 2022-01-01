import Link from 'next/link'
import Image from 'next/image'

import Step from '@/components/Step'
import ImageWithTheme from '@/components/ImageWithTheme'

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const CenteredImage = (props) => {
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

const Img = (props) => {
  const outer = {
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <div style={outer}>
      <Image
        {...props}
        alt="Photo"
        priority
        className="next-image"
      />
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
      {parts.map((d) => (
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
  const style = {
    lineHeight: '1.25em',
  }
  return <pre style={style}>{children}</pre>
}

const MDXComponents = {
  pre,
  inlineCode,
  Kbd,
  Img,
  Image,
  CenteredImage,
  ImageWithTheme,
  a: CustomLink,
  Step
}

export default MDXComponents
