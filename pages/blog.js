import { useState } from 'react'

import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export default function Blog({ posts }) {
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
      borderWidth: '2px',
      cursor: 'pointer'
    }
    return (
      <div className="flex flex-wrap max-w-2xl">
        {tags.map((e) => (
          <div className="mb-1.5" key={e[0]}>
            <a
              className="text-gray-700 dark:text-gray-300 mx-1 py-0.5 px-1.5 bg-gray-200 dark:bg-gray-800 rounded-md"
              onClick={() => tagClick(e[0])}
              style={
                onTags[0] == e[0] && onTags.length === 1 ? onStyle : offStyle
              }
            >
              <span>
                {e[0] + ' '}
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  {e[1]}
                </span>
              </span>
            </a>
          </div>
        ))}
        <div className="mb-1.5">
          <a
            onClick={() => tagClick(tl)}
            style={offStyle}
            className="text-gray-700 dark:text-gray-300 mb-4 mx-1 py-0.5 px-1.5 bg-blue-200 dark:bg-blue-900 rounded-md"
          >
            clear
          </a>
        </div>
      </div>
    )
  }
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter(
      (frontMatter) =>
        frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) &&
        frontMatter.tags.some((val) => onTags.includes(val))
    )

  return (
    <Container
      title="Blog – Nguyen Vu Khang"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`I've been writing online since 2021.
            In total, I've written ${posts.length} articles on this site.
            Use the search below to filter by title, or use the buttons
            below to filter by tag.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <TagList posts={posts} />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          All Posts
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
