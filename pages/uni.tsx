import { MDXRemote } from 'next-mdx-remote'

import { getFileBySlug } from '@/lib/mdx'
import UsesLayout from '@/layouts/uses'

export default function Uses({ mdxSource }) {
  return (
    <UsesLayout>
      <MDXRemote {...mdxSource} />
    </UsesLayout>
  )
}

export async function getStaticProps() {
  const uses = await getFileBySlug({type: 'uses', slug: false})

  return { props: uses }
}
