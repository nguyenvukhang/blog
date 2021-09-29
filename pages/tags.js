import { useState } from 'react'

import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export default function Tags({ posts }) {
  const tl = []
  for (const i in posts) {
    posts[i].tags.forEach((t) => {
      if (!tl.includes(t)) {
        tl.push(t)
      }
    })
  }

  const [onTags, setOnTags] = useState(tl)

  function tagClick(e) {
    if (typeof e == 'object') {
      setOnTags(e)
    } else {
      setOnTags([e])
    }
    console.log(onTags)
  }

  const TagList = ({ posts }) => {
    const _tags = {}
    const tags = []
    for (const i in posts) {
      posts[i].tags.forEach((t) => {
        if (t in _tags) {
          _tags[t] += 1
        } else {
          _tags[t] = 1
        }
      })
    }
    for (const i in _tags) {
      tags.push([i, _tags[i]])
    }
    tags.sort()
    const offStyle = {
      cursor: 'pointer'
    }
    const onStyle = {
      borderColor: '#60A5FA',
      cursor: 'pointer',
      borderWidth: '2px'
    }
    return (
      <div>
        {tags.map((e) => (
          <a
            className="text-gray-700 dark:text-gray-300 mb-4 mx-1 py-0.5 px-1.5 bg-gray-200 dark:bg-gray-800 rounded-md"
            onClick={() => tagClick(e[0])}
            style={
              onTags[0] == e[0] && onTags.length === 1 ? onStyle : offStyle
            }
          >
            <span>{e[0]}</span>
            <span> </span>
            <span className="text-gray-500 dark:text-gray-400 text-xs">
              {e[1]}
            </span>
          </a>
        ))}
        <a
          onClick={() => tagClick(tl)}
          style={offStyle}
          className="text-gray-700 dark:text-gray-300 mb-4 mx-1 py-0.5 px-1.5 bg-blue-200 dark:bg-blue-900 rounded-md"
        >
          clear
        </a>
      </div>
    )
  }
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.tags.some((val) => onTags.includes(val))
    )

  return (
    <Container
      title="Tags – Nguyen Vu Khang"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Tags
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`I've been writing online since 2021.
            In total, I've written ${posts.length} articles on this site.
            Use the buttons below to filter by tag.`}
        </p>
        <TagList posts={posts} />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Results
        </h3>
        {!filteredBlogPosts.length && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
