import { useTheme } from 'next-themes'
import Link from '@/components/Link'
import { LinkProps } from '@/types/index'

function NavbarLink({ href, children }: LinkProps) {
  const md = 'md:px-3 md:py-2 md:mx-2'
  const sm = 'sm:px-2 sm:py-2 sm:mx-2'
  const xs = 'px-2 py-2 mx-0'
  return (
    <Link href={href} className={`navbar rounded-lg ${md} ${sm} ${xs}`}>
      {children}
    </Link>
  )
}

const ToggleDarkModeIcon = ({ resolvedTheme }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    className="w-4 h-4 text-gray-800 dark:text-gray-200"
  >
    {resolvedTheme === 'dark' ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    )}
  </svg>
)

function ToggleDarkModeButton({ themeProps, mounted }) {
  const { resolvedTheme, setTheme } = themeProps
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && <ToggleDarkModeIcon resolvedTheme={resolvedTheme} />}
    </button>
  )
}

function Navbar({ mounted }) {
  const themeProps = useTheme()
  const md = 'md:mt-8 md:pb-8 md:pt-6 md:px-0 md:mb-6'
  const sm = 'sm:px-8 sm:py-8'
  const xs = 'px-6 py-8'
  const margin = 'mx-auto my-0'
  return (
    <nav
      className={`flex items-center justify-between w-full max-w-2xl ${md} ${sm} ${xs} ${margin}`}
    >
      <div className="md:-m-5 sm:-m-4 -m-2">
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/blog">Blog</NavbarLink>
        <NavbarLink href="/photos">Photos</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
      </div>
      <ToggleDarkModeButton themeProps={themeProps} mounted={mounted} />
    </nav>
  )
}

export default Navbar
