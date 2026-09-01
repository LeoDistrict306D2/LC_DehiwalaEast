import type { Metadata } from 'next';
import { club } from '@/content/club';
import { achievements } from '@/content/achievements';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Awards',
  description: `Recognition earned by ${club.name}.`,
  alternates: { canonical: '/achievements' },
};

const levelLabel: Record<string, string> = {
  winner: 'Winner',
  'runner-up': 'Runner-up',
  merit: 'Merit',
  recognition: 'Recognition',
};

export default function AchievementsPage() {
  const awards = [...achievements].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={awards.length > 0 ? `${awards.length} awards` : 'Awards'}
        title="Recognition."
        standfirst="Not the reason we do it, but part of the record all the same."
      />

      <div className="wrap band">
        {awards.length === 0 ? (
          <p className="max-w-xl text-ink-muted">No awards recorded yet.</p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-3">
            {awards.map((award, index) => (
              <li key={award.id}>
                <Reveal delay={index * 60} className="h-full">
                  <div className="flex h-full flex-col border-t-4 border-accent bg-panel p-6">
                    <p className="font-display text-3xl font-bold text-ink tabular-nums">
                      {award.year}
                    </p>
                    <h2 className="mt-3 font-display text-xl font-bold tracking-tight">
                      {award.title}
                    </h2>
                    {award.competition ? (
                      <p className="mt-1 text-xs text-ink-faint">{award.competition}</p>
                    ) : null}
                    {award.description ? (
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                        {award.description}
                      </p>
                    ) : null}
                    {award.level ? (
                      <span className="mt-auto pt-5 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                        {levelLabel[award.level] ?? award.level}
                      </span>
                    ) : null}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
