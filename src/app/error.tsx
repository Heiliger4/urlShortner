'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-red-300 dark:text-red-700 mb-4">500</h1>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            We encountered an error while processing your request. Please try again.
          </p>
          <div className="space-y-4">
            <button
              onClick={reset}
              className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105 mr-4"
            >
              Try Again
            </button>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-purple-600 hover:from-primary-dark hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
