import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCity, googleMapsDir, aoSlug, type Workout } from "../data";
import { teko, saira } from "../../fonts";
import { ORANGE, BLUE } from "../../brand";
import PageHero from "../../components/PageHero";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = getCity(city);
  if (!data) return {};
  const title = `${data.name} Workouts | Tornado Alley F3`;
  const description = `Free, peer-led F3 workouts in ${data.name}, OK. View AO locations, schedules, and directions for the ${data.region} region.`;
  return {
    title,
    description,
    alternates: { canonical: `/locations/${data.slug}/` },
    openGraph: { title, description, url: `https://tornadoalley.f3nation.com/locations/${data.slug}/`, images: ["/images/og-image.png"] },
  };
}

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

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getCity(city);
  if (!data) notFound();

  const count = data.aos.length;

  return (
    <main className={`${saira.className} min-h-screen bg-[#0A1424] text-white`}>
      <PageHero
        kicker={`${data.region} Region`}
        title={data.name}
        subtitle={`${count} workout location${count !== 1 ? "s" : ""} in the ${data.name} area`}
        back={{ href: "/locations", label: "Back to Locations" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.aos.map((ao, i) => (
            <div
              key={ao.name}
              id={aoSlug(ao.name)}
              className="flex flex-col bg-[#111E33] border-t-4 p-6 scroll-mt-28 transition-all duration-200 hover:-translate-y-1.5 hover:bg-[#16243D] hover:shadow-2xl target:ring-2 target:ring-[#FF5A1F]"
              style={{ borderColor: i % 2 ? BLUE : ORANGE }}
            >
              <h2 className={`${teko.className} font-black italic uppercase text-3xl mb-4`}>{ao.name}</h2>

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
                  className={`${teko.className} w-full text-center font-bold italic uppercase tracking-wide px-4 py-2.5 text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.02]`}
                  style={{ backgroundColor: ORANGE }}
                >
                  Get Directions →
                </a>
                <a
                  href={ao.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${teko.className} w-full text-center font-bold italic uppercase tracking-wide px-4 py-2.5 text-white border-2 border-white/20 transition-all duration-200 hover:border-white/60 hover:bg-white/5`}
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
