import Container from '@/components/Container'
import td from '@/data/titles-and-descriptions'

export default function UsesLayout({ children }) {
  return (
    <Container title={td.uses.title} description={td.uses.description}>
      <h1 className="mb-4">My Gear</h1>
      <p>
        Here's what tech I'm currently using for my coding, sports, and music.
      </p>
      <div className="prose dark:prose-dark w-full">{children}</div>
    </Container>
  )
}
