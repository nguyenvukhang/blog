import Container from '@/components/Container'
import SnippetCard from '@/components/SnippetCard'
import td from '@/data/titles-and-descriptions'
import { getAllFilesFrontMatter } from '@/lib/mdx'

type SnippetProps = {
  title: string
  description: string
  slug: string
}

export default function Snippets({ snippets }: { snippets: Array<SnippetProps> }) {
  function snippetTitle(a: SnippetProps, b: SnippetProps) {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  }
  snippets.sort(snippetTitle)
  return (
    <Container title={td.snippets.title} description={td.snippets.description}>
      <h1 className="mb-4">Code Snippets</h1>
      <p className="mb-4">
        These are a collection of code snippets I've used in the past and saved.
      </p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {snippets.map((snippet) => (
          <SnippetCard
            key={snippet.slug}
            title={snippet.title}
            slug={snippet.slug}
            description={snippet.description}
          />
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter('snippets')

  return { props: { snippets } }
}
