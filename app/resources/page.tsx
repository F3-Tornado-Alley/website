import type { Metadata } from "next";
import Link from "next/link";
import { teko, saira } from "../fonts";
import { ORANGE, BLUE } from "../brand";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "F3 Resources | Tornado Alley",
  description:
    "Access F3 Nation resources including the Lexicon (terminology), Exicon (exercise library), and Q Source (leadership guides) for Tornado Alley workouts.",
  keywords: ["F3 resources", "F3 lexicon", "F3 exicon", "Q Source", "F3 terminology", "workout exercises"],
  alternates: { canonical: "/resources/" },
  openGraph: {
    title: "F3 Resources | Tornado Alley",
    description: "Access F3 Nation resources, terminology, exercises, and leadership guides.",
    url: "https://tornadoalley.f3nation.com/resources/",
    images: ["/images/og-image.png"],
  },
};

const resources = [
  { name: "F3 Nation", body: "Learn more about F3 Nation and the mission to invigorate male community leadership.", cta: "Visit F3 Nation", href: "https://f3nation.com" },
  { name: "F3 Lexicon", body: "Familiarize yourself with F3 terminology and workout formats.", cta: "View Lexicon", href: "https://f3nation.com/lexicon" },
  { name: "Exicon", body: "Browse the complete exercise library with demonstrations and instructions.", cta: "View Exicon", href: "https://f3nation.com/exicon" },
  { name: "Q Source", body: "Leadership resources and guides for leading F3 workouts.", cta: "View Q Source", href: "https://f3nation.com/q-source" },
];

export default function ResourcesPage() {
  return (
    <main className={`${saira.className} min-h-screen bg-[#0A1424] text-white`}>
      <PageHero
        kicker="F3 Nation"
        title="Resources"
        subtitle="Terminology, the exercise library, and leadership guides from F3 Nation."
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((r, i) => (
            <a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-[#111E33] border-t-4 p-7 transition-all duration-200 hover:-translate-y-1.5 hover:bg-[#16243D] hover:shadow-2xl"
              style={{ borderColor: i % 2 ? BLUE : ORANGE }}
            >
              <h2 className={`${teko.className} font-black italic uppercase text-3xl mb-3`}>{r.name}</h2>
              <p className="text-gray-400 mb-5 grow">{r.body}</p>
              <span
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-colors"
                style={{ color: "#5BB4E8" }}
              >
                {r.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-1">↗</span>
              </span>
            </a>
          ))}
        </div>

        {/* Featured: VQ / Q101 (our own page) */}
        <Link
          href="/resources/vq"
          className="group block bg-[#111E33] border-t-4 p-7 mt-6 transition-all duration-200 hover:-translate-y-1 hover:bg-[#16243D] hover:shadow-2xl"
          style={{ borderColor: ORANGE }}
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1" style={{ color: ORANGE }}>Ready to Lead?</p>
              <h2 className={`${teko.className} font-black italic uppercase text-3xl mb-2`}>VQ — Q101</h2>
              <p className="text-gray-400 max-w-2xl">
                Leading your first workout? The planning protocol, command voice, and a simple Beatdown
                template to step up with confidence.
              </p>
            </div>
            <span className={`${teko.className} font-black italic text-4xl shrink-0 transition-transform duration-200 group-hover:translate-x-1.5`} style={{ color: ORANGE }}>→</span>
          </div>
        </Link>
      </div>
    </main>
  );
}
