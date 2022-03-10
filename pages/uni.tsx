import { MDXRemote } from 'next-mdx-remote'

import { getFileBySlug } from '@/lib/mdx'
import UsesLayout from '@/layouts/uses'

export default function Uni({ mdxSource }) {
  return (
    <UsesLayout>
      <MDXRemote {...mdxSource} />
    </UsesLayout>
  )
}

export async function getStaticProps() {
  const uni = await getFileBySlug({type: 'uni', slug: false})

  return { props: uni }
}
