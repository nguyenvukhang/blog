import { useState } from 'react'
import React from 'react'
import { TimelineData, FullTimelineData } from '@/data/timeline'
import { Timeline } from '@/types/index'

type DrawTimelineType = {
  dataset: Timeline
  skip?: number
}

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  )
}

const Year = ({ children }) => <h4 className="mb-4">{children}</h4>

const Checkmark = () => {
  return (
    <div className="text-emerald-500 dark:text-emerald-300">
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
    </div>
  )
}

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2">
        <Checkmark />
        <p className="font-medium">{title}</p>
      </div>
      <p className="ml-6">{children}</p>
    </li>
  )
}

const DrawTimeline = ({ dataset, skip = 0 }: DrawTimelineType) => {
  return (
    <>
      {dataset.map((y, i: number) => (
        <React.Fragment key={i}>
          {y.year && skip != y.year ? <Year>{y.year}</Year> : null}
          <ul>
            {y.events.map((e, i) => (
              <Step key={i} title={e.title}>
                {e.content}
              </Step>
            ))}
          </ul>
          {i === dataset.length - 1 ? null : <Divider />}
        </React.Fragment>
      ))}
    </>
  )
}

const ToggleTimeline = ({ f, s }) => {
  const buttonMargins = 'my-4 mx-auto px-4 py-2'
  const buttonFlex = 'flex items-center'
  return (
    <button
      type="button"
      className={`${buttonFlex} ${buttonMargins} text-sm rounded-lg navbar`}
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

export default function TimelineComponent() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false)
  return (
    <>
      <h3 className="mb-8 md:mb-10">Timeline</h3>
      <DrawTimeline dataset={TimelineData} />
      {isShowingFullTimeline ? (
        <DrawTimeline dataset={FullTimelineData} skip={2018} />
      ) : null}
      <ToggleTimeline f={showFullTimeline} s={isShowingFullTimeline} />
    </>
  )
}
