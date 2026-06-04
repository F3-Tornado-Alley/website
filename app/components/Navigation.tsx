'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useSyncExternalStore } from 'react';
import { oswald } from '../fonts';
import { aoSlug } from '../locations/data';

// Ticker city label -> city page slug.
const CITY_SLUG: Record<string, string> = {
  Edmond: 'edmond',
  Yukon: 'yukon',
  OKC: 'okc',
  Mustang: 'mustang',
  Norman: 'norman',
};

// OKC Thunder palette
const NAVY = '#002D62';
const SUNSET = '#EF3B24';
const YELLOW = '#FDBB30';

// One week of workouts across the Tornado Alley + Boomtown regions,
// ordered Sun -> Sat. Mirrors the per-city schedules under /locations.
const week = [
  { day: 'SUN', time: '0500', ao: 'The Ubermensch', city: 'Edmond' },
  { day: 'MON', time: '0515', ao: 'Mill Hill', city: 'Yukon' },
  { day: 'MON', time: '0530', ao: 'Ground Zero', city: 'Edmond' },
  { day: 'MON', time: '0530', ao: 'Forged', city: 'Edmond' },
  { day: 'MON', time: '0530', ao: 'The Gas Station', city: 'Edmond' },
  { day: 'MON', time: '0530', ao: 'The Bunker', city: 'OKC' },
  { day: 'TUE', time: '0530', ao: 'The Jungle', city: 'Edmond' },
  { day: 'TUE', time: '0530', ao: 'The Junkyard', city: 'Edmond' },
  { day: 'TUE', time: '0530', ao: "Ol' Glory", city: 'OKC' },
  { day: 'WED', time: '0530', ao: 'Ground Zero', city: 'Edmond' },
  { day: 'WED', time: '0530', ao: 'Forged', city: 'Edmond' },
  { day: 'WED', time: '0530', ao: 'The Gas Station', city: 'Edmond' },
  { day: 'WED', time: '0530', ao: 'The Corral', city: 'Mustang' },
  { day: 'WED', time: '0530', ao: 'The Swamp', city: 'OKC' },
  { day: 'THU', time: '0530', ao: 'The Junkyard', city: 'Edmond' },
  { day: 'THU', time: '0530', ao: "Ol' Glory", city: 'OKC' },
  { day: 'FRI', time: '0530', ao: 'Ground Zero', city: 'Edmond' },
  { day: 'FRI', time: '0530', ao: 'Forged', city: 'Edmond' },
  { day: 'FRI', time: '0530', ao: 'The Jungle', city: 'Edmond' },
  { day: 'FRI', time: '0530', ao: 'The Swamp', city: 'OKC' },
  { day: 'SAT', time: '0530', ao: 'Iron Pup Tire Co.', city: 'Edmond' },
  { day: 'SAT', time: '0600', ao: 'The Corral', city: 'Mustang' },
  { day: 'SAT', time: '0600', ao: 'Later Rather Than Sooner', city: 'Norman' },
  { day: 'SAT', time: '0600', ao: 'Corporate', city: 'OKC' },
  { day: 'SAT', time: '0700', ao: 'Ground Zero', city: 'Edmond' },
];

const DAY_ABBR = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const navItems: { name: string; path: string; external?: boolean }[] = [
  { name: 'Home', path: '/' },
  { name: 'Locations', path: '/locations' },
  { name: 'Getting Started', path: '/getting-started' },
  { name: 'Resources', path: '/resources' },
  { name: 'Gear', path: 'https://f3gear.com', external: true },
  { name: 'Contact', path: '/contact-us' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Client-only "today" (server renders null) — avoids hydration mismatch on
  // static export without a setState-in-effect.
  const today = useSyncExternalStore(
    () => () => {},
    () => DAY_ABBR[new Date().getDay()],
    () => null,
  );

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  // Two identical halves so the marquee can loop seamlessly (shift by 50%).
  const renderTickerItems = (copy: number) => (
    <div key={copy} className="flex items-stretch shrink-0" aria-hidden={copy === 1}>
      <div className="flex items-center px-4 font-bold text-xs tracking-widest shrink-0" style={{ color: YELLOW }}>
        THIS&nbsp;WEEK
      </div>
      {week.map((g, i) => {
        const isToday = g.day === today;
        return (
          <Link
            key={`${copy}-${i}`}
            href={`/locations/${CITY_SLUG[g.city]}#${aoSlug(g.ao)}`}
            tabIndex={copy === 1 ? -1 : undefined}
            className="flex items-center gap-2.5 px-4 py-2 whitespace-nowrap border-l border-white/10 transition-colors hover:bg-white/10"
          >
            <span className="flex items-center gap-1 font-bold text-xs" style={{ color: isToday ? SUNSET : 'rgba(255,255,255,0.5)' }}>
              {isToday && <span className="inline-block w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: SUNSET }} />}
              {g.day}
            </span>
            <span className="font-bold text-xs" style={{ color: '#5BB4E8' }}>{g.time}</span>
            <span className="font-semibold text-xs uppercase">{g.ao}</span>
            <span className="text-[10px] text-white/40 uppercase">{g.city}</span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <header className={oswald.className}>
      {/* ===== Ticker strip (looping marquee) ===== */}
      <div className="bg-[#001838] text-white overflow-hidden">
        <div className="flex w-max ta-marquee">
          {renderTickerItems(0)}
          {renderTickerItems(1)}
        </div>
      </div>

      {/* ===== Team nav ===== */}
      <nav className="sticky top-0 z-50" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-white">
            <Image
              src="/images/logos/TornadoAlleyLogoWhiteNoWords.png"
              alt="Tornado Alley Logo"
              width={38}
              height={38}
              className="object-contain"
            />
            <span className="font-bold text-lg uppercase tracking-wide">Tornado Alley</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navItems.map((item) => {
              const cls = `relative uppercase pb-1 transition-colors hover:text-[#FDBB30] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-[#FDBB30] after:transition-all after:duration-200 ${
                isActive(item.path)
                  ? 'text-white after:w-full'
                  : 'text-white/75 after:w-0 hover:after:w-full'
              }`;
              return item.external ? (
                <a key={item.path} href={item.path} target="_blank" rel="noopener noreferrer" className={cls}>
                  {item.name}
                </a>
              ) : (
                <Link key={item.path} href={item.path} className={cls}>
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/locations"
              className="hidden sm:inline-flex items-center justify-center leading-none font-bold text-sm uppercase tracking-wide px-5 py-2 text-white transition-all duration-200 hover:scale-105 hover:brightness-110 hover:shadow-lg"
              style={{ backgroundColor: SUNSET }}
            >
              Find a Workout
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
              aria-expanded={mobileMenuOpen}
              aria-label="Open main menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10" style={{ backgroundColor: NAVY }}>
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                const cls = "block px-3 py-2 uppercase text-base font-medium tracking-wide";
                const style = isActive(item.path)
                  ? { color: '#fff', borderLeft: `4px solid ${YELLOW}` }
                  : { color: 'rgba(255,255,255,0.75)' };
                return item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cls}
                    style={style}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cls}
                    style={style}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/locations"
                onClick={() => setMobileMenuOpen(false)}
                className="flex mt-2 items-center justify-center leading-none font-bold uppercase tracking-wide px-5 py-3 text-white transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: SUNSET }}
              >
                Find a Workout
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
