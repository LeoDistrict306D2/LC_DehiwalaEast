import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { StatGrid } from '@/components/StatGrid';

export const metadata: Metadata = {
  title: 'About',
  description: club.about.mission,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageMasthead
        kicker="About the club"
        title="Between the sea and the city."
        standfirst={club.about.mission}
      />

      <div className="wrap grid12 band">
        <div className="col-span-6 md:col-span-7">
          {club.about.story.map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg leading-relaxed text-ink-muted last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="col-span-6 mt-10 md:col-span-4 md:col-start-9 md:mt-0">
          <Photo image={club.heroImage} ratio="landscape" offset sizes="(min-width: 768px) 33vw, 100vw" />

          <dl className="mt-10">
            {[
              { term: 'Chartered', value: club.charterDate?.slice(0, 4) ?? '—' },
              { term: 'District', value: club.district },
              { term: 'Multiple district', value: club.multipleDistrict },
              { term: 'Sponsor', value: club.sponsoringLionsClub ?? '—' },
              { term: 'Based in', value: club.contact.address ?? '—' },
            ].map((row) => (
              <div key={row.term} className="flex justify-between gap-4 border-b border-rule py-3">
                <dt className="text-xs tracking-[0.14em] text-ink-faint uppercase">{row.term}</dt>
                <dd className="text-right text-sm font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <section className="bg-panel band">
        <div className="wrap grid12">
          <div className="col-span-6 md:col-span-5">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Mission</h2>
            <p className="mt-4 font-display text-2xl leading-snug font-bold tracking-tight">
              {club.about.mission}
            </p>
          </div>
          <div className="col-span-6 mt-10 md:col-span-5 md:col-start-8 md:mt-0">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Vision</h2>
            <p className="mt-4 font-display text-2xl leading-snug font-bold tracking-tight">
              {club.about.vision}
            </p>
          </div>
        </div>
      </section>

      <StatGrid stats={club.stats} label="Club record to date" />
    </>
  );
}
