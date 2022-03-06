import Link from 'next/link'
import { BlogProps } from '@/types/index'

const BlogPost = ({ title, summary, slug, publishedAt }: BlogProps) => {
  const opts: Intl.DateTimeFormatOptions = { year: "numeric", month: 'short', day: 'numeric' }
  const date: string = new Date(publishedAt).toLocaleDateString('en-US', opts)
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full no-underline">
        <div className="mb-8 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="font-medium mb-2">{title}</h4>
            <p className="lighter text-left md:text-right w-32 mb-4 md:mb-0">
              {date}
            </p>
          </div>
          <p className="lighter">{summary}</p>
        </div>
      </a>
    </Link>
  )
}

export default BlogPost
