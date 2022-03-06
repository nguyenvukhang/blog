import { GrayMatterFile } from 'gray-matter'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { ReadTimeResults } from 'reading-time'

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

type TopList = Array<{
  title: string
  subtitle: string
  url: string
}>


export type PageMeta = {
  [key: string]: {
    title: string
    description: string
  }
}

export type AvatarProps = {
  size: number
}

export type BlogProps = {
  title: string
  summary: string
  slug: string
  publishedAt: string
  tags: Array<string>
}

export type FrontMatter = {
  wordCount: number
  readingTime: ReadTimeResults
} & BlogProps

export type MdxSource = MDXRemoteSerializeResult<Record<string, unknown>>

export type PostProps = {
  mdxSource: MdxSource
  frontMatter: FullFrontMatter
}
