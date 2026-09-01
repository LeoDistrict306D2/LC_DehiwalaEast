'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="font-display text-sm font-bold tracking-[0.18em] text-accent uppercase">Error</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
        Something went wrong.
      </h1>
      <p className="mt-4 max-w-lg text-lg text-ink-muted">
        This page failed to render. Trying again usually clears it.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 self-start bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-strong"
      >
        Try again
      </button>
    </div>
  );
}
