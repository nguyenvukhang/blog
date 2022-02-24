import { useTheme } from 'next-themes'
import NextLink from 'next/link'

function NavbarLink({ href, title }) {
  const md = 'md:px-3 md:py-2 md:mr-2'
  const sm = 'px-1 py-2 mr-2'
  return (
    <NextLink href={href}>
      <a className={`rounded-lg ${md} ${sm}`}>{title}</a>
    </NextLink>
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

  return (
    <nav className="flex items-center justify-between w-full max-w-2xl md:pb-8 md:pt-6 py-8 md:px-0 pr-8 pl-7 mx-auto text-gray-900 md:mb-6 md:mt-8 my-0 dark:text-gray-100">
      <div class="navbar">
        <NavbarLink href="/" title="Home" />
        <NavbarLink href="/blog" title="Blog" />
        <NavbarLink href="/photos" title="Photos" />
        <NavbarLink href="/about" title="About" />
      </div>
      <ToggleDarkModeButton themeProps={themeProps} mounted={mounted} />
    </nav>
  )
}

export default Navbar
