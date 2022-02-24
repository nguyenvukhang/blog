import { MDXRemote } from 'next-mdx-remote'

import { getFiles, getFileBySlug } from '@/lib/mdx'
import BlogLayout from '@/layouts/blog'
import MDXComponents from '@/components/MDXComponents'

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents
        }}
      />
    </BlogLayout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const req = {
    type: 'blog',
    slug: params.slug
  }
  const post = await getFileBySlug(req)
  /* contains mdxSource and frontMatter */
  return { props: { ...post } }
}
