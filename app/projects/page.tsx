import type { Metadata } from 'next';
import Link from 'next/link';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc, formatDate } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Every project run by ${club.name}.`,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const entries = byDateDesc(projects);

  return (
    <>
      <PageMasthead
        kicker={`${entries.length} projects`}
        title="What we run."
        standfirst="Recurring programmes and one-off work, newest first."
      />

      <div className="wrap band">
        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((project, index) => (
            <li key={project.id}>
              <Reveal delay={Math.min(index, 5) * 60}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <Photo
                    image={project.heroImage}
                    ratio="landscape"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                  <div className="mt-4 border-t-2 border-ink pt-3">
                    <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                      {formatDate(project.date, { year: 'numeric', month: 'short' })}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.summary}</p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
