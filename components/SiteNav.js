'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from './BrandLogo';
import { NAV_LINKS, ORDER_URL } from '@/data/site';

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => pathname === href || pathname === `${href}/`;

  return (
    <>
      <div className="barSplit" aria-hidden="true">
        <i />
        <i />
      </div>
      <nav className="nav">
        <Link href="/" className="nav__logo" aria-label="Ruta 16 — inicio">
          <BrandLogo />
        </Link>

        <div className="nav__links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? 'is-active' : undefined}>
              {l.label}
            </Link>
          ))}
        </div>

        <a className="nav__order" href={ORDER_URL} target="_blank" rel="noopener noreferrer">
          ORDER ONLINE
        </a>

        <button
          type="button"
          className="nav__burger"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i />
          <i />
          <i />
        </button>

        <div className={`nav__drawer${open ? ' is-open' : ''}`}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? 'is-active' : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            className="nav__drawerOrder"
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            ORDER ONLINE
          </a>
        </div>
      </nav>
    </>
  );
}
