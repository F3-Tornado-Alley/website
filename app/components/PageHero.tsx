import Link from "next/link";
import { teko } from "../fonts";
import { ORANGE, GRAD } from "../brand";

/**
 * Dark athletic page header used across the inner pages for a consistent
 * rebranded look: storm-orange kicker, big Teko headline, gradient base rule.
 */
export default function PageHero({
  kicker,
  title,
  subtitle,
  back,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  back?: { href: string; label: string };
}) {
  return (
    <section className="relative bg-[#0A1424] px-6 pt-10 pb-10 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ background: GRAD }} />
      <div className="max-w-6xl mx-auto">
        {back && (
          <Link
            href={back.href}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-white/60 transition-colors hover:text-white mb-4"
          >
            ← {back.label}
          </Link>
        )}
        {kicker && (
          <p className="ta-fade-up italic font-semibold uppercase tracking-[0.25em] text-sm mb-2" style={{ color: ORANGE }}>
            {`// ${kicker}`}
          </p>
        )}
        <h1
          className={`${teko.className} ta-fade-up font-black italic uppercase leading-[0.9] text-5xl md:text-7xl`}
          style={{ animationDelay: "0.08s" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="ta-fade-up mt-3 text-lg text-gray-300 uppercase tracking-wide font-semibold"
            style={{ animationDelay: "0.18s" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
