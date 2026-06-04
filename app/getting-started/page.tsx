import type { Metadata } from "next";
import Link from "next/link";
import { teko, saira } from "../fonts";
import { ORANGE, BLUE } from "../brand";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Getting Started | Tornado Alley F3",
  description:
    "Join Tornado Alley F3 workouts. Learn what to expect, how to get started, and what to bring. Free, peer-led outdoor fitness for men in the Oklahoma City metro area.",
  keywords: ["F3 getting started", "join F3", "free workout", "outdoor fitness", "Oklahoma City fitness", "mens workout group"],
  alternates: { canonical: "/getting-started/" },
  openGraph: {
    title: "Getting Started | Tornado Alley F3",
    description: "Join Tornado Alley F3 workouts. Free, peer-led outdoor fitness for men. Learn how to get started today.",
    url: "https://tornadoalley.f3nation.com/getting-started/",
    images: ["/images/og-image.png"],
  },
};

const steps = [
  { n: "01", title: "Find a Workout", body: "Browse the locations page to find an AO near you. Each spot lists meeting times and details." },
  { n: "02", title: "Just Show Up", body: "No registration. No forms. No RSVPs. Show up at the time and place, introduce yourself, and tell us you're an FNG." },
  { n: "03", title: "Post & Stick Around", body: "After the beatdown, hang for the Circle of Trust and coffee. That's where the real F3 happens." },
];

const bring = ["Athletic clothing for the weather", "Water bottle", "A positive attitude", "No equipment — we bring everything"];

export default function GettingStartedPage() {
  return (
    <main className={`${saira.className} min-h-screen bg-[#0A1424] text-white`}>
      <PageHero
        kicker="New to F3 [FNG]"
        title="Getting Started"
        subtitle="Free, peer-led, held outdoors in all weather. No experience necessary — all fitness levels welcome."
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Steps */}
        <div className="space-y-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="flex items-start gap-6 bg-[#111E33] -skew-x-3 px-6 py-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#16243D] hover:shadow-xl"
            >
              <div className="skew-x-3 flex items-start gap-6">
                <span className={`${teko.className} font-black italic text-4xl md:text-5xl shrink-0 w-16`} style={{ color: i % 2 ? BLUE : ORANGE }}>
                  {s.n}
                </span>
                <div>
                  <h2 className={`${teko.className} font-black italic uppercase text-2xl md:text-3xl mb-1`}>{s.title}</h2>
                  <p className="text-gray-400">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What to bring */}
        <div className="mt-10 bg-[#111E33] border-t-4 p-8" style={{ borderColor: ORANGE }}>
          <h2 className={`${teko.className} font-black italic uppercase text-3xl mb-5`}>What to Bring</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {bring.map((b) => (
              <li key={b} className="flex items-center gap-3 text-gray-300">
                <span className="inline-block w-2 h-2 rotate-45 shrink-0" style={{ backgroundColor: ORANGE }} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/locations"
            className="group -skew-x-6 inline-flex items-center justify-center px-12 py-5 shadow-2xl transition-all duration-200 hover:scale-[1.04] hover:brightness-110 hover:shadow-[0_12px_45px_-8px_rgba(255,90,31,0.55)]"
            style={{ backgroundColor: ORANGE }}
          >
            <span className={`${teko.className} skew-x-6 inline-flex items-center gap-2 leading-none font-black italic uppercase text-2xl tracking-wide`}>
              Find a Workout <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 relative -top-[0.12em]">→</span>
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
