import { MDXRemote } from 'next-mdx-remote'

import { getFileBySlug } from '@/lib/mdx'
import PhotosLayout from '@/layouts/photos'

export default function Photos({ mdxSource, frontMatter }) {
  return (
    <PhotosLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </PhotosLayout>
  )
}

export async function getStaticProps() {
  const photos = await getFileBySlug('photos')

  return { props: photos }
}
