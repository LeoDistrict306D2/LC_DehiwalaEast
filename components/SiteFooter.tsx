import Link from 'next/link';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { club } from '@/content/club';

/**
 * Footer on the deep tone, laid out on the same 12-column grid as everything
 * above it. The affiliation chain is a sentence rather than a row of logos, so
 * the district never out-shouts the club on the club's own site.
 *
 * A server component — no state, and the year resolves at build time.
 */
const columns = [
  {
    heading: 'Club',
    links: [
      { href: '/about', label: 'About' },
      { href: '/board', label: 'Board' },
      { href: '/past-presidents', label: 'History' },
      { href: '/achievements', label: 'Awards' },
    ],
  },
  {
    heading: 'Work',
    links: [
      { href: '/projects', label: 'Projects' },
      { href: '/gallery', label: 'Gallery' },
    ],
  },
  {
    heading: 'Join in',
    links: [
      { href: '/join', label: 'Become a member' },
      { href: '/contact', label: 'Contact' },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-inverse text-on-inverse">
      <div className="wrap grid12 py-16">
        <div className="col-span-6 md:col-span-5">
          <p className="font-display text-2xl font-bold tracking-tight">{club.name}</p>
          <p className="mt-2 text-sm text-on-inverse/60">{club.motto}</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-on-inverse/75">
            {club.description}
          </p>

          <ul className="mt-6 flex gap-3">
            {club.socials.facebook ? (
              <li>
                <a
                  href={club.socials.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/25 transition-colors hover:border-accent hover:bg-accent"
                >
                  <Facebook aria-hidden size={17} />
                </a>
              </li>
            ) : null}
            {club.socials.instagram ? (
              <li>
                <a
                  href={club.socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/25 transition-colors hover:border-accent hover:bg-accent"
                >
                  <Instagram aria-hidden size={17} />
                </a>
              </li>
            ) : null}
            {club.contact.email ? (
              <li>
                <a
                  href={`mailto:${club.contact.email}`}
                  aria-label="Email"
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/25 transition-colors hover:border-accent hover:bg-accent"
                >
                  <Mail aria-hidden size={17} />
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="col-span-6 mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-6 md:col-start-7 md:mt-0">
          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-xs tracking-[0.18em] text-on-inverse/50 uppercase">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-inverse/85 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="col-span-6 mt-14 border-t border-white/15 pt-6 md:col-span-12">
          <p className="text-xs leading-relaxed text-on-inverse/55">
            {club.name} is a member club of{' '}
            <a
              href={club.districtUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-2 hover:text-accent"
            >
              {club.district}
            </a>
            , part of{' '}
            <a
              href={club.multipleDistrictUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-2 hover:text-accent"
            >
              {club.multipleDistrict}
            </a>
            , within Lions Clubs International.
            {club.sponsoringLionsClub ? ` Sponsored by the ${club.sponsoringLionsClub}.` : ''}
          </p>
          <p className="mt-3 text-xs text-on-inverse/40">
            © {year} {club.name}. {club.contact.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
