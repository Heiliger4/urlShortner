export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-gray-300 dark:text-gray-700 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Link Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            The shortened link you&apos;re looking for doesn&apos;t exist or may have expired.
          </p>
          <div className="space-y-4">
            <a
              href="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-purple-600 hover:from-primary-dark hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Create a New Link
            </a>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>Or check the URL for any typos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
