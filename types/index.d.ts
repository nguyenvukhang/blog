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

export type PageMeta = {
  [key: string]: {
    title: string
    description: string
  }
}

export type AvatarProps = {
  size: number
}

type ReadingTime = {
  text: string
  minutes: number
  time: number
  words: number
}

export type BlogProps = {
  title: string
  summary: string
  slug: string
  publishedAt: string
  tags: Array<string>
}

interface FrontMatter extends BlogProps {
  wordCount: number
  readingTime: ReadingTime
}
