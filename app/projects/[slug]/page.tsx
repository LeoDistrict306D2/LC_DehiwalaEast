import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { formatDate } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'article',
      title: `${project.title} — ${club.name}`,
      description: project.summary,
      publishedTime: project.date,
      images: [
        {
          url: project.heroImage.src,
          width: project.heroImage.width,
          height: project.heroImage.height,
          alt: project.heroImage.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((entry) => entry.slug !== project.slug)
    .sort((a, b) => {
      const aMatch = a.category === project.category ? 0 : 1;
      const bMatch = b.category === project.category ? 0 : 1;
      return aMatch - bMatch || b.date.localeCompare(a.date);
    })
    .slice(0, 3);

  return (
    <>
      <PageMasthead
        kicker={project.year}
        title={project.title}
        standfirst={project.summary}
        breadcrumb={{ href: '/projects', label: 'All projects' }}
      />

      <div className="wrap pt-10">
        <Photo image={project.heroImage} ratio="wide" priority sizes="100vw" />
      </div>

      <div className="wrap grid12 band">
        <div className="col-span-6 md:col-span-7">
          {project.story && project.story.length > 0 ? (
            project.story.map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed text-ink-muted last:mb-0">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-lg leading-relaxed text-ink-muted">{project.summary}</p>
          )}

          {project.objectives && project.objectives.length > 0 ? (
            <section className="mt-12" aria-labelledby="objectives">
              <h2
                id="objectives"
                className="text-xs font-semibold tracking-[0.18em] text-accent uppercase"
              >
                What we set out to do
              </h2>
              <ol className="mt-4">
                {project.objectives.map((objective, index) => (
                  <li key={objective} className="flex gap-4 border-b border-rule py-3.5 first:border-t">
                    <span aria-hidden className="font-display text-sm font-bold text-accent tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-ink-muted">{objective}</span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}
        </div>

        <aside className="col-span-6 mt-10 md:col-span-4 md:col-start-9 md:mt-0">
          <dl className="border-t-2 border-ink">
            {[
              { term: 'Date', value: formatDate(project.date) },
              { term: 'Leo year', value: project.year },
              { term: 'Location', value: project.location },
              { term: 'Category', value: project.category.replace(/-/g, ' ') },
            ]
              .filter((row) => Boolean(row.value))
              .map((row) => (
                <div key={row.term} className="flex justify-between gap-4 border-b border-rule py-3">
                  <dt className="text-xs tracking-[0.14em] text-ink-faint uppercase">{row.term}</dt>
                  <dd className="text-right text-sm font-medium capitalize">{row.value}</dd>
                </div>
              ))}
          </dl>

          {project.impact && project.impact.length > 0 ? (
            <section className="mt-10 bg-inverse p-6 text-on-inverse" aria-labelledby="impact">
              <h2 id="impact" className="text-xs tracking-[0.18em] text-on-inverse/60 uppercase">
                Measured
              </h2>
              <dl className="mt-4 space-y-5">
                {project.impact.map((stat) => (
                  <div key={stat.id}>
                    <dd className="font-display text-3xl font-bold tabular-nums">
                      {stat.prefix}
                      {typeof stat.value === 'number'
                        ? stat.value.toLocaleString('en-LK')
                        : stat.value}
                      {stat.suffix}
                    </dd>
                    <dt className="mt-1 text-xs tracking-[0.14em] text-on-inverse/60 uppercase">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {project.partners && project.partners.length > 0 ? (
            <section className="mt-8" aria-labelledby="partners">
              <h2
                id="partners"
                className="text-xs font-semibold tracking-[0.18em] text-accent uppercase"
              >
                With
              </h2>
              <ul className="mt-3 space-y-1.5">
                {project.partners.map((partner) => (
                  <li key={partner.name} className="text-sm text-ink-muted">
                    {partner.name}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </aside>
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <section className="wrap pb-16" aria-labelledby="entry-gallery">
          <h2
            id="entry-gallery"
            className="text-xs font-semibold tracking-[0.18em] text-accent uppercase"
          >
            From the day
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((image) => (
              <Photo
                key={image.src}
                image={image}
                ratio="landscape"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="bg-panel band" aria-labelledby="related">
          <div className="wrap">
            <h2
              id="related"
              className="text-xs font-semibold tracking-[0.18em] text-accent uppercase"
            >
              Related projects
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((entry) => (
                <li key={entry.id}>
                  <Link href={`/projects/${entry.slug}`} className="group block">
                    <Photo
                      image={entry.heroImage}
                      ratio="landscape"
                      sizes="(min-width: 640px) 30vw, 100vw"
                    />
                    <h3 className="mt-3 font-display text-lg font-bold tracking-tight group-hover:text-accent">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-xs text-ink-faint">
                      {formatDate(entry.date, { year: 'numeric', month: 'short' })}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
