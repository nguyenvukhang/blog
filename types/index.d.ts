export type LinkProps = {
  href: string
  children: string
  className?: string
}

export type Timeline = Array<{
  year: number
  events: Array<{
    title: string
    content: string
  }>
}>

type BlogEntry = {
  title: string
  publishedAt: string
  summary: string
  tags: Array<string>
  slug: string
}

