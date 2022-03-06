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

export type BlogEntry = {
  title: string
  publishedAt: string
  summary: string
  tags: Array<string>
  slug: string
}

export type TrackProps = {
  ranking: string
  url: string
  title: string
  subtitle: string
}
