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

export type TrackProps = {
  ranking: number
  url: string
  title: string
  subtitle: string
}

type BlogProps = {
  title: string
  summary: string
  slug: string
  publishedAt: string
  tags: Array<string>
}
