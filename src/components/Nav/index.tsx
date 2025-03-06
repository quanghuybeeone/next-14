import Link from "next/link";
import ThemeToggleMode from "../ToggleThemeMode";

export default function Nav() {
  return (
    <div className="bg-background text-foreground sticky top-0 border-b z-50">
      <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide transition-colors duration-200"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide transition-colors duration-200"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide transition-colors duration-200"
              >
                Pricing
              </Link>
            </li>
          </ul>
          <Link
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth={2}
              strokeLinecap="round"
              strokeMiterlimit={10}
              stroke="currentColor"
              fill="none"
            >
              <rect x={3} y={1} width={7} height={12} />
              <rect x={3} y={17} width={7} height={6} />
              <rect x={14} y={1} width={7} height={6} />
              <rect x={14} y={11} width={7} height={12} />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
              Company
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/about"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide transition-colors duration-200"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/sign-in"
                aria-label="Sign in"
                title="Sign in"
                className="font-medium tracking-wide transition-colors duration-200"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Sign up"
                title="Sign up"
                className="font-medium tracking-wide transition-colors duration-200"
              >
                Sign up
              </Link>
            </li>
          </ul>
          {/* Mobile menu */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {/* Mobile menu dropdown 
<div class="absolute top-0 left-0 w-full">
  <div class="p-5 bg-white border rounded shadow-sm">
    <div class="flex items-center justify-between mb-4">
      <div>
        <Link href="/" aria-label="Company" title="Company" class="inline-flex items-center">
          <svg class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
            <rect x="3" y="1" width="7" height="12"></rect>
            <rect x="3" y="17" width="7" height="6"></rect>
            <rect x="14" y="1" width="7" height="6"></rect>
            <rect x="14" y="11" width="7" height="12"></rect>
          </svg>
          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
        </Link>
      </div>
      <div>
        <button aria-label="Close Menu" title="Close Menu" class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <nav>
      <ul class="space-y-4">
        <li><Link href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide transition-colors duration-200">Product</Link></li>
        <li><Link href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide transition-colors duration-200">Features</Link></li>
        <li><Link href="/" aria-label="Product pricing" title="Product pricing" class="font-medium tracking-wide transition-colors duration-200">Pricing</Link></li>
        <li><Link href="/" aria-label="About us" title="About us" class="font-medium tracking-wide transition-colors duration-200">About us</Link></li>
        <li><Link href="/" aria-label="Sign in" title="Sign in" class="font-medium tracking-wide transition-colors duration-200">Sign in</Link></li>
        <li>
          <Link
            href="/"
            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
            title="Sign up"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</div>
*/}
          </div>
          <ThemeToggleMode />
        </div>
      </div>
    </div>
  )
}
