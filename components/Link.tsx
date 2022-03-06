import NextLink from 'next/link'
import { LinkProps } from '@/types/index'

const Link = ({ href, children, className }: LinkProps) => {
  const isInternal = href && (href.startsWith('/') || href.startsWith('#'))
  return isInternal ? (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  ) : (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  )
}

export default Link
