import type { Metadata } from 'next';
import { club } from '@/content/club';
import { pastPresidents } from '@/content/past-presidents';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'History',
  description: `Every president of ${club.name} since charter.`,
  alternates: { canonical: '/past-presidents' },
};

export default function PastPresidentsPage() {
  const years = [...pastPresidents].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={`${years.length} terms`}
        title="Every year since charter."
        standfirst="Each president sets a theme for their term. The themes are a decent history of what the club cared about at the time."
      />

      <div className="wrap band">
        <ol className="grid12 gap-y-0">
          {years.map((president, index) => (
            <li key={president.year} className="col-span-6 border-t border-rule md:col-span-12">
              <Reveal delay={Math.min(index, 4) * 50}>
                <div className="grid12 py-7">
                  <p className="col-span-2 font-display text-lg font-bold text-accent tabular-nums">
                    {president.year}
                  </p>
                  <div className="col-span-4 md:col-span-4">
                    <p className="font-display text-xl font-bold tracking-tight">{president.name}</p>
                    {president.theme ? (
                      <p className="mt-1 text-sm text-ink-muted">&ldquo;{president.theme}&rdquo;</p>
                    ) : null}
                  </div>
                  <div className="col-span-6 md:col-span-5 md:col-start-8">
                    {president.highlights && president.highlights.length > 0 ? (
                      <ul className="space-y-1">
                        {president.highlights.map((highlight) => (
                          <li key={highlight} className="text-sm leading-relaxed text-ink-muted">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-ink-faint">—</p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
