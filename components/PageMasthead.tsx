import Link from 'next/link';

/**
 * Page heading block. Sits on the 12-column grid: kicker and title in the first
 * seven modules, standfirst in the last four, so every interior page opens with
 * the same asymmetry as the home page.
 */
export function PageMasthead({
  kicker,
  title,
  standfirst,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
  breadcrumb?: { href: '/projects'; label: string };
}) {
  return (
    <div className="border-b border-rule">
      <div className="wrap grid12 pt-12 pb-10 md:pt-20 md:pb-14">
        <div className="col-span-6 md:col-span-7">
          {breadcrumb ? (
            <nav aria-label="Breadcrumb" className="mb-5">
              <Link
                href={breadcrumb.href}
                className="text-sm font-semibold text-accent hover:text-accent-strong"
              >
                ← {breadcrumb.label}
              </Link>
            </nav>
          ) : null}

          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">{kicker}</p>

          <h1 className="mt-4 font-display text-4xl leading-[1.02] font-bold tracking-tight text-ink md:text-6xl">
            {title}
          </h1>
        </div>

        {standfirst ? (
          <p className="col-span-6 mt-6 self-end text-lg leading-relaxed text-ink-muted md:col-span-4 md:col-start-9 md:mt-0">
            {standfirst}
          </p>
        ) : null}
      </div>
    </div>
  );
}
