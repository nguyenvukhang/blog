import { useState } from 'react'
import React from 'react'
import { TimelineData, FullTimelineData } from '@/data/timeline'

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  )
}

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  )
}

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  )
}

const DrawTimeline = ({ dataset }) => {
  return dataset.map((y, i) => (
    <React.Fragment key={i}>
      {y.year ? <Year>{y.year}</Year> : null}
      <ul>
        {y.events.map((e, i) => (
          <Step key={i} title={e.title}>{e.content}</Step>
        ))}
      </ul>
      {i === dataset.length - 1 ? null : <Divider />}
    </React.Fragment>
  ))
}

const ToggleTimeline = ({ f, s }) => {
  return (
    <button
      type="button"
      className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
      onClick={() => f(!s)}
    >
      {s ? 'See Less' : 'See More'}
      <svg
        className="h-4 w-4 ml-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {s ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            // d="M19 9l-7 7-7-7"
            d="M 19 15 l -7 -7 -7 7"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        )}
      </svg>
    </button>
  )
}

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false)
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 md:mb-10 text-black dark:text-white">
        Timeline
      </h3>
      <DrawTimeline dataset={TimelineData} />
      {isShowingFullTimeline ? (
        <DrawTimeline dataset={FullTimelineData} />
      ) : null}
      <ToggleTimeline f={showFullTimeline} s={isShowingFullTimeline} />
    </>
  )
}
