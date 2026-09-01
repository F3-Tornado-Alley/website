import Image from "next/image";
import Link from "next/link";
import { teko, saira } from "./fonts";
import { ORANGE, BLUE, GRAD, HERO_IMG } from "./brand";
import { cities } from "./locations/data";
import SocialIcons from "./components/SocialIcons";

// Live counts derived from the central location data so the stats stay accurate.
const totalLocations = cities.reduce((sum, c) => sum + c.aos.length, 0);
const weeklyWorkouts = cities.reduce(
  (sum, c) => sum + c.aos.reduce((n, ao) => n + ao.schedule.length, 0),
  0,
);
const daysCovered = new Set(
  cities.flatMap((c) => c.aos.flatMap((ao) => ao.schedule.map((s) => s.day))),
).size;

const LOGO = "/images/logos/TornadoAlleyLogoWhiteNoWords.png";

const principles = [
  { name: "Free of Charge", tagline: "Never pay to workout, ever." },
  { name: "Open to all Men", tagline: "No matter the man, you're welcome." },
  { name: "Held Outdoors", tagline: "Rain or shine, hot or cold." },
  { name: "Peer Led", tagline: "Rotating leadership, no clipboards." },
  { name: "Ends with a COT", tagline: "Always a Circle of Trust." },
];

const threeFs = [
  { f: "Fitness", label: "The Magnet", body: "Free, peer-led bootcamps in the gloom. Scalable for every man." },
  { f: "Fellowship", label: "The Glue", body: "The brotherhood that keeps you coming back before dawn." },
  { f: "Faith", label: "The Dynamite", body: "A belief in something bigger than yourself." },
];

// Press features. KFOR is our local Tornado Alley story (featured first);
// the rest are F3 Nation's national press, linked from f3nation.com.
const press = [
  { name: "KFOR", href: "https://kfor.com/news/great-state/the-easiest-gym-to-join-f3-tornado-alley/" },
  { name: "Men's Health", href: "https://www.menshealth.com/fitness/a25799601/f3-workouts-for-men/" },
  {
    name: "Today Show",
    href: "https://www.today.com/video/how-fitness-fellowship-and-faith-are-bringing-thousands-of-men-together-906361923839",
  },
  { name: "New York Times", href: "https://www.nytimes.com/2022/09/24/us/f3-workout-men-texas.html" },
  {
    name: "Art of Manliness",
    href: "https://www.artofmanliness.com/health-fitness/fitness/podcast-324-fitness-fellowship-faith-cure-sad-clown-syndrome/",
  },
  { name: "Order of Man", href: "https://www.orderofman.com/frankschwartz/" },
  { name: "Freed to Lead", href: "https://f3gear.com/products/f3-freed-to-lead-book-2nd-edition" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tornado Alley - F3",
  description:
    "A free fitness group dedicated to building stronger men through peer-led workouts, leadership development, and community service.",
  url: "https://tornadoalley.f3nation.com",
  logo: "https://tornadoalley.f3nation.com/images/logos/f3_tornado_alley_logo_compressed.jpg",
  image: "https://tornadoalley.f3nation.com/images/logos/f3_tornado_alley_logo_compressed.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Edmond",
    addressRegion: "OK",
    addressCountry: "US",
  },
  areaServed: [{ "@type": "City", name: "Edmond" }],
  sameAs: [
    "https://www.facebook.com/f3tornadoalley",
    "https://www.instagram.com/f3tornadoalley/",
    "https://x.com/f3tornadoalley",
    "https://www.tiktok.com/@f3tornadoalley",
  ],
  foundingDate: "2016",
  slogan:
    "The Mission of F3 is to plant, grow and serve small workout groups for men for the invigoration of male community leadership.",
  knowsAbout: ["Fitness", "Community Leadership", "Outdoor Workouts", "Peer-Led Training"],
  memberOf: { "@type": "Organization", name: "F3 Nation", url: "https://f3nation.com" },
};

export default function Home() {
  const h = teko.className;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={`${saira.className} bg-[#0A1424] text-white overflow-x-hidden`}>
        {/* ============ HERO ============ */}
        <section className="relative min-h-[88vh] flex items-center overflow-hidden">
          <Image src={HERO_IMG} alt="Tornado Alley workout" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-[#0A1424] via-[#0A1424]/85 to-[#0A1424]/30" />
          <div className="absolute bottom-0 left-0 right-0 h-3" style={{ background: GRAD }} />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="ta-fade-up italic font-semibold uppercase tracking-[0.25em] text-base mb-4" style={{ color: ORANGE, animationDelay: "0.05s" }}>
              {"// Edmond, Oklahoma"}
            </p>
            <h1 className={`${h} ta-fade-up font-black italic uppercase leading-[0.85] text-6xl md:text-8xl lg:text-9xl`} style={{ animationDelay: "0.18s" }}>
              <span className="block">Fitness.</span>
              <span className="block bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>
                Fellowship.
              </span>
              <span className="block">Faith.</span>
            </h1>
            <p className="ta-fade-up mt-8 text-xl text-gray-300 max-w-xl uppercase tracking-wide font-semibold" style={{ animationDelay: "0.32s" }}>
              Free, peer-led outdoor workouts for men. Built before sunrise.
            </p>
            <div className="ta-fade-up mt-10 flex flex-wrap gap-5" style={{ animationDelay: "0.46s" }}>
              <Link
                href="/locations"
                className="group -skew-x-6 inline-flex items-center justify-center px-10 py-4 shadow-2xl transition-all duration-200 hover:scale-[1.04] hover:brightness-110 hover:shadow-[0_12px_45px_-8px_rgba(255,90,31,0.55)]"
                style={{ backgroundColor: ORANGE }}
              >
                <span className={`${h} skew-x-6 inline-flex items-center gap-2 leading-none font-bold italic uppercase text-2xl tracking-wide`}>
                  Find a Workout <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 relative -top-[0.12em]">→</span>
                </span>
              </Link>
              <Link
                href="/getting-started"
                className="group -skew-x-6 inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:scale-[1.04] hover:border-white/70 hover:bg-white/15"
              >
                <span className={`${h} skew-x-6 inline-flex items-center gap-2 leading-none font-bold italic uppercase text-2xl tracking-wide`}>New to F3</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ MISSION (diagonal band) ============ */}
        <section className="relative py-24 -mt-1">
          <div className="absolute inset-0 -skew-y-3 origin-top-left" style={{ background: GRAD }} />
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <p className={`${h} -mb-4 font-black italic uppercase text-3xl md:text-5xl leading-tight text-white drop-shadow`}>
              Plant. Grow. Serve. Small workout groups for the invigoration of male community leadership.
            </p>
          </div>
        </section>

        {/* ============ THREE Fs ============ */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`${h} font-black italic uppercase text-5xl md:text-7xl mb-14 text-center`}>
              The <span style={{ color: ORANGE }}>Three</span> Fs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {threeFs.map((item, i) => (
                <div key={item.f} className="relative bg-[#111E33] p-8 border-t-4 -skew-x-3 transition-all duration-200 hover:-translate-y-1.5 hover:bg-[#16243D] hover:shadow-2xl" style={{ borderColor: i === 1 ? ORANGE : BLUE }}>
                  <div className="skew-x-3">
                    <p className="italic font-semibold uppercase tracking-[0.2em] text-sm mb-2" style={{ color: ORANGE }}>
                      {item.label}
                    </p>
                    <h3 className={`${h} font-black italic uppercase text-4xl mb-3`}>{item.f}</h3>
                    <p className="text-gray-400 uppercase text-sm tracking-wide leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="py-16 px-6 bg-[#070E1A]">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { v: String(weeklyWorkouts), l: "Weekly Workouts" },
              { v: String(totalLocations), l: "Locations" },
              { v: `${daysCovered}`, l: "Days a Week" },
              { v: "100%", l: "Free" },
            ].map((s, i) => (
              <div key={s.l} className={`px-2 ${i < 3 ? "md:border-r-2 md:border-white/10" : ""}`}>
                <p className={`${h} font-black italic text-6xl md:text-7xl bg-clip-text text-transparent`} style={{ backgroundImage: GRAD }}>
                  {s.v}
                </p>
                <p className="uppercase tracking-[0.2em] text-sm text-gray-400 font-semibold mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 5 PRINCIPLES ============ */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className={`${h} font-black italic uppercase text-5xl md:text-7xl mb-12 text-center`}>5 Core Principles</h2>
            <div className="space-y-3">
              {principles.map((p, i) => (
                <div key={p.name} className="flex items-center gap-6 bg-[#111E33] -skew-x-6 px-6 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#16243D] hover:shadow-xl">
                  <span className={`${h} skew-x-6 font-black italic text-3xl md:text-4xl w-12`} style={{ color: i % 2 ? BLUE : ORANGE }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`${h} skew-x-6 font-bold italic uppercase text-2xl md:text-3xl flex-1`}>{p.name}</h3>
                  <p className="skew-x-6 hidden md:block uppercase text-sm tracking-wide text-gray-400 text-right">{p.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PRESS ============ */}
        <section className="py-14 px-6 bg-[#070E1A]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="italic uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">{"// As Featured In"}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-bold italic uppercase text-xl md:text-2xl">
              {press.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-500 transition-all duration-200 hover:scale-105 hover:text-white hover:underline underline-offset-8 decoration-2"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============ LOCATIONS CTA (diagonal) ============ */}
        <section className="relative py-28 px-6 overflow-hidden bg-[#0A1424]">
          {/* "Left bleed" mascot — anchored left, oversized, bleeding off the edge */}
          <div className="absolute -top-20 -bottom-20 -left-28 w-[80%]">
            <Image src={LOGO} alt="" fill className="object-contain object-left opacity-70" />
          </div>
          <div className="absolute inset-0 bg-linear-to-l from-[#0A1424] via-[#0A1424]/80 to-transparent" />
          <div className="absolute -bottom-2 left-0 right-0 h-6 -skew-y-2" style={{ background: GRAD }} />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="max-w-xl ml-auto text-center md:text-right">
            <h2 className={`${h} font-black italic uppercase text-5xl md:text-7xl leading-none mb-6`}>
              Join Us In<br /><span style={{ color: ORANGE }}>The Gloom</span>
            </h2>
            <p className="uppercase tracking-wide text-gray-300 mb-8 font-semibold">
              All workouts free &amp; open to all men. No forms. Just show up.
            </p>
            <Link
              href="/locations"
              className="group -skew-x-6 inline-flex items-center justify-center px-12 py-5 shadow-2xl transition-all duration-200 hover:scale-[1.04] hover:brightness-110 hover:shadow-[0_12px_45px_-8px_rgba(0,122,206,0.55)]"
              style={{ background: GRAD }}
            >
              <span className={`${h} skew-x-6 inline-flex items-center gap-2 leading-none font-black italic uppercase text-2xl tracking-wide`}>
                Find a Workout <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 relative -top-[0.12em]">→</span>
              </span>
            </Link>
            </div>
          </div>
        </section>

        {/* ============ MOTTO + FOOTER ============ */}
        <section className="py-20 px-6 text-center">
          <p className={`${h} font-black italic uppercase text-3xl md:text-5xl max-w-3xl mx-auto leading-tight`}>
            Leave no man behind, but leave no man{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRAD }}>where you find him.</span>
          </p>
        </section>

        <footer className="border-t border-white/10 py-8 px-6 bg-[#070E1A]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 uppercase tracking-[0.2em] text-xs text-gray-500 font-semibold italic">
            <span>F3 Tornado Alley · Edmond, OK</span>
            <SocialIcons />
          </div>
        </footer>
      </main>
    </>
  );
}
