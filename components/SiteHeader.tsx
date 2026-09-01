'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { club } from '@/content/club';
import { cn } from '@/lib/utils';

/**
 * Header.
 *
 * Sits on the same 12-column grid as the page, with the logo occupying the
 * first module and the nav the last six — so the header lines up with the
 * content beneath it rather than floating on its own measure.
 *
 * Accessibility is structural here: a real `aria-expanded`/`aria-controls`
 * disclosure, Escape closes and returns focus to the toggle, body scroll locks
 * while open, and the current route carries `aria-current`.
 */
const nav = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/board', label: 'Board' },
  { href: '/past-presidents', label: 'History' },
  { href: '/achievements', label: 'Awards' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Reset on navigation by adjusting state during render — React's documented
  // pattern — rather than in an effect, which would cost an extra render pass
  // on every route change.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-page/95 backdrop-blur-sm">
      {/* Teal rule: the club's line on the page. */}
      <div aria-hidden className="h-1 bg-accent" />

      <div className="wrap grid12 h-20 items-center">
        <Link
          href="/"
          className="col-span-4 flex items-center gap-3 md:col-span-4"
          aria-label={`${club.name} — home`}
        >
          <Image
            src={club.logo.src}
            alt=""
            width={38}
            height={38}
            className="h-9 w-9 shrink-0 object-contain"
            priority
          />
          <span className="font-display text-base leading-tight font-bold tracking-tight">
            Leo Dehiwala
            <br />
            East
          </span>
        </Link>

        <nav aria-label="Primary" className="col-span-7 hidden justify-end lg:flex">
          <ul className="flex items-center gap-6">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'text-sm font-medium transition-colors',
                      active ? 'text-accent' : 'text-ink-muted hover:text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="col-span-2 hidden justify-end lg:flex">
          <Link
            href="/join"
            className="bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            Join us
          </Link>
        </div>

        <div className="col-span-2 flex justify-end lg:hidden">
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink"
          >
            {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
          </button>
        </div>
      </div>

      <div
        id="site-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-rule bg-page lg:hidden"
      >
        <nav aria-label="Primary" className="wrap py-3">
          <ul className="grid grid-cols-2 gap-x-4">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block border-b border-rule py-4 font-display text-base font-semibold',
                      active ? 'text-accent' : 'text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/join"
            className="mt-5 mb-4 block bg-accent px-4 py-3 text-center font-semibold text-white"
          >
            Join us
          </Link>
        </nav>
      </div>
    </header>
  );
}
