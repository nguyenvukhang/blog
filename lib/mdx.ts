import fs from 'fs'
import matter, { GrayMatterFile } from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import mdxPrism from 'mdx-prism'
import { BlogProps, FrontMatter, MdxSource } from '@/types/index'

const root = process.cwd()

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type))
}

export async function getFileBySlug({ type, slug }) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8')

  const { data, content }: GrayMatterFile<string> = matter(source)
  const mdxSource: MdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['anchor']
            }
          }
        ],
        require('remark-code-titles')
      ],
      rehypePlugins: [mdxPrism]
    }
  })

  const frontMatter: FrontMatter = {
    wordCount: content.split(/\s+/gu).length,
    readingTime: readingTime(content),
    slug: slug || null,
    title: data.title,
    summary: data.summary || null,
    publishedAt: data.publishedAt || null,
    tags: data.tags || null
  }

  return { mdxSource, frontMatter }
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, 'data', type))
  const response: Array<BlogProps> = files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    )
    const { data }: GrayMatterFile<string> = matter(source)

    const packet = [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPosts]

    return packet 
  }, [])
  console.log('getAllFilesFrontMatter', response)
  return response
}
