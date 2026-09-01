import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="font-display text-sm font-bold tracking-[0.18em] text-accent uppercase">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
        Nothing at this address.
      </h1>
      <p className="mt-4 max-w-lg text-lg text-ink-muted">
        The page you asked for does not exist. It may have been renamed or moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-strong">
          Home
        </Link>
        <Link
          href="/projects"
          className="border-2 border-ink px-6 py-3 font-semibold text-ink hover:bg-ink hover:text-page"
        >
          Our projects
        </Link>
      </div>
    </div>
  );
}
