import type { Metadata } from "next";
import Link from "next/link";
import { teko, saira } from "../../fonts";
import { ORANGE, BLUE } from "../../brand";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "VQ — Q101 | Tornado Alley F3",
  description:
    "Leading your first F3 workout (your VQ)? Q101 covers the planning protocol, command voice, and a simple workout template (Beatdown) so you can step up and lead with confidence.",
  keywords: ["F3 VQ", "Q101", "F3 Q", "how to lead F3 workout", "Beatdown", "F3 cadence", "first time Q"],
  alternates: { canonical: "/resources/vq/" },
  openGraph: {
    title: "VQ — Q101 | Tornado Alley F3",
    description: "Everything you need to lead your first F3 workout with confidence.",
    url: "https://tornadoalley.f3nation.com/resources/vq/",
    images: ["/images/og-image.png"],
  },
};

const protocol = [
  { name: "It's Not About You", body: "The Q serves the PAX, not the ego. Lead them, don't perform for them." },
  { name: "Actually Plan It", body: "Write down your Beatdown (workout plan). Steal shamelessly from past backblasts." },
  { name: "If You Can't Do It, You Can't Q It", body: "Lead from the front. Do every rep alongside the PAX — no clipboards." },
  { name: "Better Too Much Than Not Enough", body: "Over-plan. Always keep a backup block in your pocket in case you fly through it." },
  { name: "Always Wear a Watch", body: "Start on time, end on time. Most beatdowns run 45–60 minutes." },
  { name: "Never Leave a Man Behind", body: "Unified start, unified finish. Modify so every man keeps moving." },
];

const cadence = [
  { step: "Clear Command", body: "Name the exercise loud and clear; the PAX repeat it back." },
  { step: "Starting Position", body: "Move the PAX into position — “down… and up.”" },
  { step: "Info", body: "Confirm whether it's in cadence or on your own count." },
  { step: "The Count", body: "The PAX call the reps — “ONE!… TWO!…”" },
  { step: "Inflection", body: "Change your voice to signal the final rep is coming." },
  { step: "Recovery", body: "Short rest, then flow straight into the next movement." },
];

const beatdown = [
  { n: "01", title: "Mosey & Disclaimer", body: "Gather the Ball of Man, give the disclaimer, and mosey to warm the legs up." },
  { n: "02", title: "Warm-O-Rama", body: "Dynamic stretches and light reps — SSHs, Imperial Walkers, arm circles." },
  { n: "03", title: "The Thang", body: "The main event: partner work, a mosey loop, coupons (cinder blocks), hills." },
  { n: "04", title: "Mary", body: "Core work to close it out — flutter kicks, American Hammers, Freddie Mercurys." },
  { n: "05", title: "COT", body: "The Circle of Trust: Count-o-Rama, Name-o-Rama, announcements, and intentions." },
];

export default function VQPage() {
  return (
    <main className={`${saira.className} min-h-screen bg-[#0A1424] text-white`}>
      <PageHero
        kicker="Q101 · Lead the PAX"
        title="VQ"
        subtitle="Your first time leading a workout — your Virgin Q. Here's everything you need to step up and lead with confidence."
        back={{ href: "/resources", label: "Back to Resources" }}
      />

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Intro + disclaimer */}
        <section>
          <h2 className={`${teko.className} font-black italic uppercase text-4xl md:text-5xl mb-4`}>Lead the PAX</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Every F3 workout is Q-led by a different man in a rotating fashion — no certifications, no
            professionals with clipboards. Leading your first workout is a rite of passage, and it&apos;s
            simpler than you think. The PAX want you to succeed.
          </p>
          <div className="mt-6 bg-[#111E33] border-t-4 p-6" style={{ borderColor: ORANGE }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ORANGE }}>
              Always Start With the Disclaimer
            </p>
            <p className="text-gray-300">
              &ldquo;I am not a professional. You are participating voluntarily. Know your limits and
              modify any exercise as needed.&rdquo;
            </p>
          </div>
        </section>

        {/* Planning Protocol */}
        <section>
          <h2 className={`${teko.className} font-black italic uppercase text-4xl md:text-5xl mb-8`}>
            The <span style={{ color: ORANGE }}>Planning</span> Protocol
          </h2>
          <div className="space-y-3">
            {protocol.map((p, i) => (
              <div key={p.name} className="flex items-start gap-5 bg-[#111E33] -skew-x-3 px-6 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#16243D] hover:shadow-xl">
                <div className="skew-x-3 flex items-start gap-5">
                  <span className={`${teko.className} font-black italic text-3xl md:text-4xl shrink-0 w-10`} style={{ color: i % 2 ? BLUE : ORANGE }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={`${teko.className} font-bold italic uppercase text-xl md:text-2xl`}>{p.name}</h3>
                    <p className="text-gray-400 text-sm md:text-base">{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Command Voice / Cadence */}
        <section>
          <h2 className={`${teko.className} font-black italic uppercase text-4xl md:text-5xl mb-3`}>
            Command Voice — The <span style={{ color: BLUE }}>Cadence</span> Method
          </h2>
          <p className="text-gray-400 mb-8 max-w-3xl">
            Borrowed from the military cadence call — six beats that keep the PAX in sync and the count loud.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cadence.map((c, i) => (
              <div key={c.step} className="bg-[#111E33] border-t-4 p-5" style={{ borderColor: i % 2 ? BLUE : ORANGE }}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1" style={{ color: i % 2 ? "#5BB4E8" : ORANGE }}>
                  Step {i + 1}
                </p>
                <h3 className={`${teko.className} font-bold italic uppercase text-2xl mb-1`}>{c.step}</h3>
                <p className="text-gray-400 text-sm">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Show up early callout */}
        <section className="bg-[#111E33] border-t-4 p-8" style={{ borderColor: BLUE }}>
          <h2 className={`${teko.className} font-black italic uppercase text-3xl mb-3`}>Show Up Early &amp; Energized</h2>
          <p className="text-gray-300 max-w-3xl">
            Get to the AO early, set the tone, and bring the energy — your attitude becomes the workout&apos;s
            attitude. Run a Count-o-Rama so you know how many PAX you have, keep the group together, and make
            sure the route and safety are covered.
          </p>
        </section>

        {/* Beatdown template */}
        <section>
          <h2 className={`${teko.className} font-black italic uppercase text-4xl md:text-5xl mb-3`}>
            Build Your <span style={{ color: ORANGE }}>Beatdown</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-3xl">
            Your Beatdown is the written workout plan. A simple, repeatable template:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {beatdown.map((w, i) => (
              <div key={w.n} className="bg-[#111E33] border-t-4 p-6 transition-all duration-200 hover:-translate-y-1.5 hover:bg-[#16243D] hover:shadow-2xl" style={{ borderColor: i % 2 ? BLUE : ORANGE }}>
                <span className={`${teko.className} font-black italic text-3xl`} style={{ color: i % 2 ? BLUE : ORANGE }}>{w.n}</span>
                <h3 className={`${teko.className} font-bold italic uppercase text-2xl mt-1 mb-2`}>{w.title}</h3>
                <p className="text-gray-400 text-sm">{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className={`${teko.className} font-black italic uppercase text-3xl md:text-4xl mb-6`}>
            Now Go <span style={{ color: ORANGE }}>Q</span> It.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://f3nation.com/q-source"
              target="_blank"
              rel="noopener noreferrer"
              className="group -skew-x-6 inline-flex items-center justify-center px-10 py-4 shadow-2xl transition-all duration-200 hover:scale-[1.04] hover:brightness-110"
              style={{ backgroundColor: ORANGE }}
            >
              <span className={`${teko.className} skew-x-6 inline-flex items-center gap-2 leading-none font-black italic uppercase text-2xl tracking-wide`}>
                Explore Q Source ↗
              </span>
            </a>
            <Link
              href="/locations"
              className="group -skew-x-6 inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 bg-white/5 transition-all duration-200 hover:scale-[1.04] hover:border-white/70 hover:bg-white/15"
            >
              <span className={`${teko.className} skew-x-6 inline-flex items-center gap-2 leading-none font-black italic uppercase text-2xl tracking-wide`}>
                Find a Workout <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 relative -top-[0.12em]">→</span>
              </span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
