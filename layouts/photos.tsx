import Container from '@/components/Container'
import td from '@/data/titles-and-descriptions'

export default function PhotosLayout({ children }) {
  return (
    <Container title={td.photos.title} description={td.photos.description}>
      <h1 className="mb-4">Photos of me</h1>
      <p className="mt-2 mb-8">
        Here's what I've been up to in my fleeting existence.
      </p>
      <div className="prose dark:prose-dark w-full">{children}</div>
    </Container>
  )
}
