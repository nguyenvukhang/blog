import Link from 'next/link'

export default function FunctionCard({ title, description, slug, ...rest }) {
  return (
    <Link href={`/snippets/${slug}`}>
      <a
        className="no-underline border border-gray-300/60 dark:border-gray-600/60 rounded-lg py-4 px-6 w-full"
        {...rest}
      >
        <h6 className="mb-1">{title}</h6>
        <p className="lighter">{description}</p>
      </a>
    </Link>
  )
}
