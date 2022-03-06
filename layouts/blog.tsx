import Image from 'next/image'
import { parseISO, format } from 'date-fns'

import Container from '@/components/Container'
import { AvatarProps } from '@/types/index'

const Avatar = ({ size }: AvatarProps) => (
  <Image
    alt="Khang"
    height={size}
    width={size}
    src="/avatar.jpg"
    className="rounded-full"
  />
)

const ArticleDetails = ({ frontMatter }) => {
  const date = format(parseISO(frontMatter.publishedAt), 'MMM d, yyyy')
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-4 mb-8">
      <div className="flex items-center">
        <Avatar size={24} />
        <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
          {`khang / ${date}`}
        </p>
      </div>
      <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
        {frontMatter.readingTime.text}
      </p>
    </div>
  )
}

const ArticleContent = ({ children }) => (
  <div className="prose dark:prose-dark">{children}</div>
)

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={frontMatter.title.toLowerCase()}
      description={frontMatter.summary}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <h1 className="mb-4">{frontMatter.title}</h1>
      <ArticleDetails frontMatter={frontMatter} />
      <ArticleContent>{children}</ArticleContent>
    </Container>
  )
}
