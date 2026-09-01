import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open to anyone aged 12 to 30 in Dehiwala.`,
  alternates: { canonical: '/join' },
};

const reasons = [
  {
    title: 'Start on the beach',
    body: 'Your first Shoreline morning is the easiest way in. Turn up at 6 a.m. on the first Sunday, see if it suits you, decide afterwards.',
  },
  {
    title: 'You will lead something',
    body: 'Every member leads a project eventually, and shadows one before that. Nobody is thrown in cold.',
  },
  {
    title: 'Skills that transfer',
    body: 'Budgets, rosters, permits, write-ups, working with residents associations. Useful long after you age out at 30.',
  },
  {
    title: 'A wider network',
    body: 'Dehiwala East is one of 19 clubs in Leo District 306 D2, part of a movement of over 200,000 Leos worldwide.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="Membership"
        title="The roster is never full."
        standfirst="Open to anyone aged 12 to 30 living or studying in Dehiwala. No experience needed."
      />

      <div className="wrap grid12 band">
        <section className="col-span-6 md:col-span-5" aria-labelledby="why">
          <h2 id="why" className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            What you are signing up for
          </h2>
          <ol className="mt-6">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="border-t border-rule py-5 last:border-b">
                <div className="flex gap-4">
                  <span
                    aria-hidden
                    className="font-display text-sm font-bold text-accent tabular-nums"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight">{reason.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{reason.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="col-span-6 mt-12 md:col-span-6 md:col-start-7 md:mt-0"
          aria-labelledby="enquiry"
        >
          <h2 id="enquiry" className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Get in touch
          </h2>
          <p className="mt-4 mb-8 max-w-lg text-ink-muted">
            Fill this in and it opens a pre-written email to the club secretary. We answer
            everything, usually within a week.
          </p>
          <JoinForm email={club.contact.email ?? ''} />
          {club.contact.email ? (
            <p className="mt-6 text-sm text-ink-faint">
              Or write directly to{' '}
              <a
                href={`mailto:${club.contact.email}`}
                className="font-medium text-ink-muted underline underline-offset-2 hover:text-accent"
              >
                {club.contact.email}
              </a>
              .
            </p>
          ) : null}
        </section>
      </div>
    </>
  );
}
