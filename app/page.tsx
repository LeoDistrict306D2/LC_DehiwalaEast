import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { board } from '@/content/board';
import { byDateDesc, getInitials, sortExecutives } from '@/lib/utils';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';
import { StatGrid } from '@/components/StatGrid';
import { ProjectRail } from '@/components/ProjectRail';

/**
 * Home.
 *
 * Built on the 12-column grid throughout: the hero splits 7/5 with the image
 * block offset off the grid line, the stat panel spans full width on the deep
 * tone, and the projects run along the horizontal rail rather than stacking.
 */
export default function HomePage() {
  const featured = byDateDesc(projects.filter((project) => project.featured));
  const leadership = sortExecutives(board).slice(0, 4);
  const charterYear = club.charterDate ? new Date(club.charterDate).getFullYear() : null;

  return (
    <>
      {/* Hero ----------------------------------------------------------- */}
      <section className="wrap grid12 items-center pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="col-span-6 md:col-span-7">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            {club.district}
            {charterYear ? ` · Chartered ${charterYear}` : ''}
          </p>

          <h1 className="mt-5 font-display text-5xl leading-[0.95] font-bold tracking-tight md:text-mega">
            {club.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            {club.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-semibold text-white transition-colors hover:bg-accent-strong"
            >
              See the work
              <ArrowRight
                aria-hidden
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center border-2 border-ink px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-ink hover:text-page"
            >
              Join us
            </Link>
          </div>
        </div>

        <div className="col-span-6 mt-12 md:col-span-4 md:col-start-9 md:mt-0">
          <Photo
            image={club.heroImage}
            ratio="portrait"
            priority
            offset
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      </section>

      {/* Ledger --------------------------------------------------------- */}
      <StatGrid stats={club.stats} label="Club record to date" />

      {/* How we work ---------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="approach">
        <div className="grid12">
          <h2
            id="approach"
            className="col-span-6 font-display text-3xl font-bold tracking-tight md:col-span-4 md:text-5xl"
          >
            How we work
          </h2>

          <ol className="col-span-6 md:col-span-7 md:col-start-6">
            {club.about.values.map((value, index) => (
              <li key={value.title} className="border-t border-rule py-6 last:border-b">
                <Reveal delay={index * 70}>
                  <div className="flex gap-5">
                    <span
                      aria-hidden
                      className="font-display text-sm font-bold text-accent tabular-nums"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight">
                        {value.title}
                      </h3>
                      <p className="mt-1.5 text-ink-muted">{value.description}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Project rail --------------------------------------------------- */}
      <section className="bg-panel band" aria-labelledby="projects-heading">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="projects-heading"
              className="font-display text-3xl font-bold tracking-tight md:text-5xl"
            >
              What we run
            </h2>
            <Link
              href="/projects"
              className="text-sm font-semibold text-accent hover:text-accent-strong"
            >
              All {projects.length} projects →
            </Link>
          </div>

          <div className="mt-10">
            <ProjectRail projects={featured} />
          </div>
        </div>
      </section>

      {/* Board ---------------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="board-heading">
        <div className="grid12">
          <div className="col-span-6 md:col-span-4">
            <h2
              id="board-heading"
              className="font-display text-3xl font-bold tracking-tight md:text-5xl"
            >
              This year&rsquo;s board
            </h2>
            <p className="mt-4 max-w-sm text-ink-muted">
              Elected for {leadership[0]?.term ?? 'this year'}. Every project has a member
              shadowing the lead — nobody runs their first one alone.
            </p>
            <Link
              href="/board"
              className="mt-6 inline-block text-sm font-semibold text-accent hover:text-accent-strong"
            >
              The full board →
            </Link>
          </div>

          <ul className="col-span-6 mt-10 grid grid-cols-2 gap-6 md:col-span-7 md:col-start-6 md:mt-0 md:grid-cols-4">
            {leadership.map((member, index) => (
              <li key={member.id}>
                <Reveal delay={index * 60}>
                  {member.photo ? (
                    <Photo
                      image={member.photo}
                      ratio="portrait"
                      sizes="(min-width: 768px) 16vw, 45vw"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="flex aspect-[3/4] items-center justify-center bg-panel font-display text-3xl font-bold text-ink-faint"
                    >
                      {getInitials(member.name)}
                    </div>
                  )}
                  <p className="mt-3 font-display text-sm leading-tight font-bold">
                    {member.name}
                  </p>
                  <p className="mt-1 text-xs text-ink-faint">{member.position}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="bg-highlight">
        <div className="wrap grid12 py-16">
          <div className="col-span-6 md:col-span-7">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
              The roster is never full.
            </h2>
            <p className="mt-4 max-w-xl text-ink-muted">
              Membership is open to anyone aged 12 to 30 living or studying in Dehiwala. Turn up to
              one Shoreline morning and see whether it suits you.
            </p>
          </div>
          <div className="col-span-6 mt-8 flex items-end md:col-span-4 md:col-start-9 md:mt-0 md:justify-end">
            <Link
              href="/join"
              className="group inline-flex items-center gap-2 bg-inverse px-6 py-3.5 font-semibold text-on-inverse transition-colors hover:bg-accent"
            >
              Join the club
              <ArrowRight
                aria-hidden
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
