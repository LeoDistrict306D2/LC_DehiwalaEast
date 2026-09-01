import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { Photo } from './Photo';

/**
 * The project rail — this site's signature.
 *
 * Projects run along a horizontal scroll-snap track rather than sitting in a
 * grid of cards. It is built on native CSS scroll-snap, not a JS carousel,
 * which means it works with a trackpad, a touch swipe, keyboard arrows and a
 * screen reader, adds no JavaScript, and cannot break.
 *
 * The whole thing is still a plain `<ul>`, so assistive technology reads it as
 * an ordinary list of links; only the visual presentation is horizontal.
 */
export function ProjectRail({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <div className="relative">
      <ul className="rail" tabIndex={0} aria-label="Projects, scroll horizontally">
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.slug}`} className="group block h-full">
              <Photo
                image={project.heroImage}
                ratio="landscape"
                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 42vw, 82vw"
              />

              <div className="mt-4 border-t-2 border-ink pt-3">
                <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                  {formatDate(project.date, { year: 'numeric', month: 'short' })}
                  {project.location ? ` · ${project.location}` : ''}
                </p>

                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.summary}</p>

                {project.impact && project.impact.length > 0 ? (
                  <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {project.impact.slice(0, 2).map((stat) => (
                      <div key={stat.id}>
                        <dd className="font-display text-lg font-bold text-ink">
                          {stat.prefix}
                          {typeof stat.value === 'number'
                            ? stat.value.toLocaleString('en-LK')
                            : stat.value}
                          {stat.suffix}
                        </dd>
                        <dt className="text-[0.65rem] tracking-[0.12em] text-ink-faint uppercase">
                          {stat.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                ) : null}

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Read more
                  <ArrowRight
                    aria-hidden
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-2 text-xs text-ink-faint lg:hidden">Swipe to see more →</p>
    </div>
  );
}
