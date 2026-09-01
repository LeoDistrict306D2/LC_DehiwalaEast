'use client';

import type { ReactNode } from 'react';
import { useReveal } from '@/lib/hooks';
import { cn } from '@/lib/utils';

/**
 * Reveal wrapper. Content drifts in from the right rather than up — the site's
 * motion runs along the same horizontal axis as its project rail.
 *
 * Renders visible; the hook hides it after mount only when animating is safe.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn('reveal', className)}
      style={delay ? ({ ['--reveal-delay' as string]: `${delay}ms` }) : undefined}
    >
      {children}
    </div>
  );
}
