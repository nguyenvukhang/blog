import fs from 'fs'
import matter, { GrayMatterFile } from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import { BlogProps, FrontMatter, MdxSource } from '@/types/index'

const root: string = process.cwd()

export async function getFiles(type: string) {
  const files: Array<string> = fs.readdirSync(path.join(root, 'data', type))
  return files
}

function getSourcePath(type: string, slug: string) {
  return [root, 'data', slug ? type : `${type}.mdx`, slug ? `${slug}.mdx` : '']
}

export async function getFileBySlug({ type, slug }) {
  const source: string = fs.readFileSync(
    path.join(...getSourcePath(type, slug)),
    'utf8'
  )

  const { data, content }: GrayMatterFile<string> = matter(source)
  const mdxSource: MdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          { linkProperties: { className: ['anchor'] } }
        ],
        require('remark-code-titles')
      ],
      rehypePlugins: []
    }
  })

  const frontMatter: FrontMatter = {
    wordCount: content.split(/\s+/gu).length,
    readingTime: readingTime(content),
    slug: slug || null,
    title: data.title || null,
    summary: data.summary || null,
    publishedAt: data.publishedAt || null,
    tags: data.tags || null
  }

  return { mdxSource, frontMatter }
}

export async function getAllFilesFrontMatter(type: string) {
  const files: Array<string> = fs.readdirSync(path.join(root, 'data', type))
  const posts: Array<BlogProps> = files.reduce((posts, slug) => {
    const source = fs.readFileSync(path.join(root, 'data', type, slug), 'utf8')
    const { data }: GrayMatterFile<string> = matter(source)

    const packet: Array<BlogProps> = [
      { ...data, slug: slug.replace(/.mdx$/g, '') },
      ...posts
    ]

    return packet
  }, [])
  return posts
}
