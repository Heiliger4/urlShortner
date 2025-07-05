'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check, ExternalLink } from 'lucide-react';

interface LinkPreviewProps {
  originalUrl: string;
  shortUrl: string;
  shortCode: string;
  createdAt: string;
}

export function LinkPreview({ originalUrl, shortUrl, shortCode, createdAt }: LinkPreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const truncateUrl = (url: string, maxLength: number = 50) => {
    if (url.length <= maxLength) return url;
    return url.substring(0, maxLength) + '...';
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="p-6 bg-white/90 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10 shadow-xl">
        {/* Success message */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            URL shortened successfully
          </span>
        </div>

        {/* URL details */}
        <div className="space-y-4">
          {/* Original URL */}
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Original Link
            </label>
            <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <span className="flex-1 text-sm text-gray-700 dark:text-gray-300 font-mono">
                {truncateUrl(originalUrl, 60)}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(originalUrl, '_blank')}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Shortened URL */}
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Shortened Link
            </label>
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-lg border border-primary/20">
              <span className="flex-1 text-lg font-semibold text-primary font-mono">
                {shortUrl}
              </span>
              <Button
                onClick={handleCopy}
                className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-200 hover:scale-105"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>Short Code: <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">{shortCode}</code></span>
            <span>Created: {new Date(createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shortUrl, '_blank')}
            className="text-xs"
          >
            Test Link
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check%20out%20this%20link%3A%20${encodeURIComponent(shortUrl)}`, '_blank')}
            className="text-xs"
          >
            Share on Twitter
          </Button>
        </div>
      </div>
    </div>
  );
}
