import Container from '@/components/Container'

export default function SnippetLayout({ children, frontMatter }) {
  const lower = frontMatter.title.toLowerCase()
  return (
    <Container
      title={`${lower} snippets`}
      description={`A collection of ${lower} snippets`}
    >
      <div className="flex justify-between w-full mb-8">
        <div>
          <h1 className="mb-4">{frontMatter.title}</h1>
          <p className="text-gray-700 dark:text-gray-300">
            {frontMatter.description}
          </p>
        </div>
      </div>
      <div className="prose dark:prose-dark w-full">{children}</div>
    </Container>
  )
}
