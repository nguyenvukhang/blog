import { MDXRemote } from 'next-mdx-remote'

import { getFileBySlug } from '@/lib/mdx'
import PhotosLayout from '@/layouts/photos'

export default function Photos({ mdxSource }) {
  return (
    <PhotosLayout>
      <MDXRemote {...mdxSource} />
    </PhotosLayout>
  )
}

export async function getStaticProps() {
  const photos = await getFileBySlug({type: 'photos', slug: false})

  return { props: photos }
}
