import { TrackProps } from '@/types/index'

export default function Track(track: TrackProps) {
  return (
    <div className="flex flex-row items-baseline border-b border-gray-100 dark:border-gray-800 max-w-3xl w-full mt-8">
      <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
        {track.ranking}
      </p>
      <div className="flex flex-col pl-3">
        <a
          className="track-link"
          href={track.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p
          className="mb-4 truncate w-60 sm:w-96 md:w-full"
          color="gray.500"
        >
          {track.subtitle}
        </p>
      </div>
    </div>
  )
}
