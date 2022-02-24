import { MDXRemote } from 'next-mdx-remote'

import { getFiles, getFileBySlug } from '@/lib/mdx'
import SnippetLayout from '@/layouts/snippets'

export default function Snippet({ mdxSource, frontMatter }) {
  return (
    <SnippetLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </SnippetLayout>
  )
}

export async function getStaticPaths() {
  const snippets = await getFiles('snippets')

  return {
    paths: snippets.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const req = {
    type: 'snippets',
    slug: params.slug
  }
  const snippet = await getFileBySlug(req)

  return { props: snippet }
}
