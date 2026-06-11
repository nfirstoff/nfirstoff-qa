import { ArrowUp, Mail } from "lucide-react"
import { profile } from "../../data/profile"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-gray-900">
              <span className="text-brand-600">MF</span>
              <span className="ml-0.5">.</span>
            </span>
            <p className="mt-1 text-sm break-words text-gray-500">
              Manual QA Engineer — Fintech & Payment Systems
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-all duration-200 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-all duration-200 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-all duration-200 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 md:flex-row">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}
