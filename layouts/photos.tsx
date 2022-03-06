import Container from '@/components/Container'
import td from '@/data/titles-and-descriptions'

export default function PhotosLayout({ children }) {
  return (
    <Container title={td.photos.title} description={td.photos.description}>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Photos of me
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what I've been up to in my fleeting existence.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  )
}
