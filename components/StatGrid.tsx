'use client';

import type { Statistic } from '@/lib/types';
import { useCountUp } from '@/lib/hooks';
import { formatStatValue } from '@/lib/utils';

/**
 * Impact figures as a modular panel on the deep tone — four cells on the same
 * grid as the rest of the page, divided by rules rather than boxed as cards.
 *
 * Module scope so the reference is stable and the count-up effect is not torn
 * down on every parent render.
 */
const formatNumber = (value: number) => value.toLocaleString('en-LK');

function Cell({ stat }: { stat: Statistic }) {
  const numeric = typeof stat.value === 'number';
  const ref = useCountUp(typeof stat.value === 'number' ? stat.value : 0, formatNumber, {
    enabled: numeric,
  });

  return (
    <div className="border-t border-white/20 p-6 md:col-span-3 md:border-t-0 md:border-l md:first:border-l-0">
      <dd className="font-display text-4xl font-bold tabular-nums md:text-5xl">
        {stat.prefix}
        {/* Final value is in the markup, so the served HTML is already correct;
            the hook only overwrites it while animating. */}
        <span ref={ref}>{formatStatValue(stat.value)}</span>
        {stat.suffix}
      </dd>
      <dt className="mt-2 text-xs tracking-[0.16em] text-on-inverse/70 uppercase">{stat.label}</dt>
      {stat.note ? <p className="mt-1 text-xs text-on-inverse/50">{stat.note}</p> : null}
    </div>
  );
}

export function StatGrid({ stats, label }: { stats: Statistic[]; label: string }) {
  if (stats.length === 0) return null;

  return (
    <section aria-label={label} className="bg-inverse text-on-inverse">
      <div className="wrap py-2">
        <dl className="grid12">
          {stats.map((stat) => (
            <Cell key={stat.id} stat={stat} />
          ))}
        </dl>
      </div>
    </section>
  );
}
