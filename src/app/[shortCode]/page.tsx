'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';

// Utility to validate URLs
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export default function RedirectPage({
  params,
}: {
  params: { shortCode: string };
}) {
  const { shortCode } = params;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function handleRedirect() {
      try {
        // Prevent reserved paths from being processed as shortcodes
        const reservedPaths = ['error', 'favicon.ico', 'api'];
        if (!shortCode || reservedPaths.includes(shortCode)) {
          console.warn(`Invalid or reserved shortCode: ${shortCode}`);
          router.push('/not-found');
          return;
        }

        const docRef = doc(db, 'urls', shortCode);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          console.warn(`Shortcode not found: ${shortCode}`);
          router.push('/not-found');
          return;
        }

        const data = docSnap.data();
        const destination = data?.originalUrl;

        if (!destination || !isValidUrl(destination)) {
          console.error(
            `Missing or invalid originalUrl for shortCode: ${shortCode}`
          );
          setError('Invalid URL stored');
          return;
        }

        // Fire-and-forget: increment clicks with error logging
        updateDoc(docRef, { clicks: increment(1) }).catch((err) =>
          console.error('Click increment failed:', err)
        );

        // Redirect to the destination URL
        window.location.href = destination;
      } catch (err: any) {
        console.error('Redirection failed:', {
          message: err.message,
          shortCode,
        });
        setError('Failed to redirect');
      } finally {
        setIsLoading(false);
      }
    }

    handleRedirect();
  }, [shortCode, router]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">Error</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{error}</p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-purple-600 hover:from-primary-dark hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Redirecting...
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
            Mamushe is on the way — taking you where you need to go.
        </p>
      </div>
    </div>
  );
}
