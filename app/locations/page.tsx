import type { Metadata } from "next";
import { region, aos, googleMapsDir, aoSlug, type Workout } from "./data";
import { teko, saira } from "../fonts";
import { ORANGE, BLUE } from "../brand";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Workout Locations | Tornado Alley F3",
  description:
    "Find F3 Tornado Alley workout locations in Edmond, Oklahoma. Interactive map, schedules, and directions for every AO.",
  keywords: ["F3 locations", "Edmond workouts", "Edmond fitness", "Tornado Alley F3", "Oklahoma F3"],
  alternates: { canonical: "/locations/" },
  openGraph: {
    title: "Workout Locations | Tornado Alley F3",
    description: "Find F3 Tornado Alley workout locations in Edmond, Oklahoma. Interactive map with workout times and locations.",
    url: "https://tornadoalley.f3nation.com/locations/",
    images: ["/images/og-image.png"],
  },
};

const MAP_SRC = "https://map.f3nation.com/?lat=35.653400&lng=-97.478400&zoom=12";

function ScheduleRow({ s }: { s: Workout["schedule"][number] }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="font-bold uppercase w-24 shrink-0" style={{ color: "#5BB4E8" }}>
        {s.day}
      </span>
      <span className="font-semibold tabular-nums">{s.time.replace("-", "–")}</span>
      <span className="text-white/50 uppercase text-xs tracking-wide">{s.type}</span>
    </div>
  );
}

export default function LocationsPage() {
  return (
    <main className={`${saira.className} min-h-screen bg-[#0A1424] text-white`}>
      <PageHero
        kicker="Edmond, Oklahoma"
        title="Locations"
        subtitle={`${aos.length} free, peer-led workout locations — just show up.`}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <h2 className={`${teko.className} font-black italic uppercase text-2xl`}>F3 Workout Map</h2>
              <a
                href={MAP_SRC}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wide font-semibold transition-colors hover:brightness-110"
                style={{ color: "#5BB4E8" }}
              >
                Full Screen ↗
              </a>
            </div>
            <div className="overflow-hidden border-2 border-white/10 h-150">
              <iframe src={MAP_SRC} className="w-full h-full" title="F3 Nation Workout Map" loading="lazy" />
            </div>
          </div>

          {/* Region card — jump links replace what used to be the city link */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <h2 className={`${teko.className} font-black italic uppercase text-2xl`}>Our Region</h2>

            <div className="bg-[#111E33] border-t-4 p-5" style={{ borderColor: ORANGE }}>
              <h3 className={`${teko.className} font-black italic uppercase text-2xl mb-1`}>{region.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{region.description}</p>

              <div className="flex gap-2 mb-4">
                <a
                  href={region.statsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${teko.className} flex-1 flex items-center justify-center leading-none font-bold italic uppercase tracking-wide px-3 py-2 text-sm text-white transition-all duration-200 hover:brightness-110`}
                  style={{ backgroundColor: ORANGE }}
                >
                  Stats ↗
                </a>
                {region.regionInfoUrl ? (
                  <a
                    href={region.regionInfoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${teko.className} flex-1 flex items-center justify-center leading-none font-bold italic uppercase tracking-wide px-3 py-2 text-sm text-white border-2 border-white/20 transition-all duration-200 hover:border-white/60 hover:bg-white/5`}
                  >
                    Info ↗
                  </a>
                ) : (
                  <span className={`${teko.className} flex-1 flex items-center justify-center leading-none font-bold italic uppercase tracking-wide px-3 py-2 text-sm text-white/30 border-2 border-white/10`}>
                    Info Soon
                  </span>
                )}
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Workout Locations</p>
              <div className="flex flex-col gap-1.5">
                {aos.map((ao) => (
                  <a
                    key={ao.name}
                    href={`#${aoSlug(ao.name)}`}
                    className="group flex items-center justify-between bg-white/5 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-white/10"
                  >
                    <span>{ao.name}</span>
                    <span className="transition-transform duration-200 group-hover:translate-y-0.5" style={{ color: ORANGE }}>↓</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AO detail cards */}
        <h2 className={`${teko.className} font-black italic uppercase text-2xl mt-12 mb-4`}>The AOs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aos.map((ao, i) => (
            <div
              key={ao.name}
              id={aoSlug(ao.name)}
              className="flex flex-col bg-[#111E33] border-t-4 p-6 scroll-mt-28 transition-all duration-200 hover:-translate-y-1.5 hover:bg-[#16243D] hover:shadow-2xl target:ring-2 target:ring-[#FF5A1F]"
              style={{ borderColor: i % 2 ? BLUE : ORANGE }}
            >
              <h3 className={`${teko.className} font-black italic uppercase text-3xl mb-4`}>{ao.name}</h3>

              <div className="space-y-4 grow">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Location</p>
                  <p className="text-sm text-gray-300">{ao.address}</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-1.5">Schedule</p>
                  <div className="space-y-1">
                    {ao.schedule.map((s, idx) => (
                      <ScheduleRow key={idx} s={s} />
                    ))}
                  </div>
                </div>

                {ao.notes && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Notes</p>
                    <p className="text-sm text-gray-400">{ao.notes}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <a
                  href={googleMapsDir(ao)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${teko.className} w-full flex items-center justify-center leading-none font-bold italic uppercase tracking-wide px-4 py-2.5 text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.02]`}
                  style={{ backgroundColor: ORANGE }}
                >
                  Get Directions →
                </a>
                <a
                  href={ao.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${teko.className} w-full flex items-center justify-center leading-none font-bold italic uppercase tracking-wide px-4 py-2.5 text-white border-2 border-white/20 transition-all duration-200 hover:border-white/60 hover:bg-white/5`}
                >
                  View on F3 Map
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
